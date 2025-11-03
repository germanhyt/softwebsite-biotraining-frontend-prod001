import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs.config';

interface StudentContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseInterested: string | undefined;
}

interface StudentFormData {
  fullName: string;
  studentType: 'estudiante' | 'profesional';
  email: string;
  speciality: string;
  workArea: 'diagnostico' | 'investigacion';
  courseInterest: string;
}

// Validation schema
const studentSchema = yup.object({
  fullName: yup
    .string()
    .required('Por favor ingresa tu nombre y apellido')
    .min(5, 'Debe tener al menos 5 caracteres'),
  studentType: yup
    .string()
    .oneOf(['estudiante', 'profesional'], 'Selecciona una opción válida')
    .required('Por favor selecciona tu condición'),
  email: yup
    .string()
    .required('Por favor ingresa tu correo electrónico')
    .email('Ingresa un correo válido'),
  
  speciality: yup
    .string()
    .required('Por favor especifica tu especialidad o área de estudio')
    .min(3, 'Debe tener al menos 3 caracteres'),
  workArea: yup
    .string()
    .oneOf(['diagnostico', 'investigacion'], 'Selecciona una opción válida')
    .required('Por favor selecciona tu área de trabajo'),
  courseInterest: yup
    .string()
    .required('Por favor especifica tu curso de interés'),
});

const StudentContactModal: React.FC<StudentContactModalProps> = ({
  isOpen,
  onClose,
  courseInterested
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<StudentFormData>({
    resolver: yupResolver(studentSchema),
  });

  const onSubmit = async (data: StudentFormData) => {
    try {
      // Preparar parámetros del template
      const templateParams = {
        from_name: 'Biotraining - Inscripción',
        full_name: data.fullName,
        student_type: data.studentType,
        email: data.email,
        speciality: data.speciality,
        work_area: data.workArea,
        course_interest: data.courseInterest,
      };

      // Enviar email usando EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      Swal.fire({
        title: '¡Excelente!',
        text: 'Hemos recibido tu información. Nos comunicaremos contigo pronto.',
        icon: 'success',
        confirmButtonColor: '#E1525F',
      });

      reset();
      onClose();
    } catch (error) {
      console.error('Error al enviar email:', error);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al enviar tu información. Por favor intenta nuevamente.',
        icon: 'error',
        confirmButtonColor: '#E1525F',
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[998]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center z-[9999] p-4"
          >
            <div className="bg-white rounded-3xl w-full max-w-xl p-8 relative max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-2xl font-bold text-black hover:text-gray-600 transition"
              >
                ×
              </button>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-center text-black mb-6 mt-4">
                Bríndanos tus datos y nos comunicaremos contigo
              </h2>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Full Name */}
                <div>
                  <input
                    placeholder="Nombres y apellidos"
                    {...register('fullName')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    placeholder="Correo electrónico"
                    type="email"
                    {...register('email')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Student Type */}
                <div>
                  <select
                    {...register('studentType')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Seleccione si es estudiante o profesional</option>
                    <option value="estudiante">Estudiante</option>
                    <option value="profesional">Profesional</option>
                  </select>
                  {errors.studentType && (
                    <p className="text-red-500 text-sm mt-1">{errors.studentType.message}</p>
                  )}
                </div>

                {/* Speciality */}
                <div>
                  <input
                    placeholder="Indique su especialidad"
                    {...register('speciality')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  {errors.speciality && (
                    <p className="text-red-500 text-sm mt-1">{errors.speciality.message}</p>
                  )}
                </div>

                {/* Work Area */}
                <div>
                  <select
                    {...register('workArea')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Seleccione si trabaja en diagnóstico o investigación</option>
                    <option value="diagnostico">Diagnóstico</option>
                    <option value="investigacion">Investigación</option>
                  </select>
                  {errors.workArea && (
                    <p className="text-red-500 text-sm mt-1">{errors.workArea.message}</p>
                  )}
                </div>

                {/* Course Interest */}
                <div>
                  <input
                    placeholder="Curso de interés (Se selecciona automáticamente)"
                    {...register('courseInterest')}
                    value={courseInterested}
                    disabled
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none bg-gray-50 text-gray-600"
                  />
                  {errors.courseInterest && (
                    <p className="text-red-500 text-sm mt-1">{errors.courseInterest.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-12 py-3 bg-gradient-to-r from-[#AB323D] to-[#E1525F] text-white font-semibold rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default StudentContactModal;
