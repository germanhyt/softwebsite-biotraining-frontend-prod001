import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';

interface EnterpriseContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface EnterpriseFormData {
  companyName: string;
  contact: string;
  email: string;
  collaborators: string;
  trainingArea: string;
}

// Validation schema
const enterpriseSchema = yup.object({
  companyName: yup
    .string()
    .required('Por favor ingresa el nombre de la empresa')
    .min(3, 'Debe tener al menos 3 caracteres'),
  contact: yup
    .string()
    .required('Por favor ingresa un número de contacto')
    .min(7, 'Ingresa un número válido'),
  email: yup
    .string()
    .required('Por favor ingresa tu correo electrónico')
    .email('Ingresa un correo válido'),
  collaborators: yup
    .string()
    .required('Por favor selecciona el número de colaboradores')
    .oneOf(['1-10', '11-50', '51-100', '101-500', '500+'], 'Selecciona una opción válida'),
  trainingArea: yup
    .string()
    .required('Por favor selecciona un área de capacitación'),
});

const EnterpriseContactModal: React.FC<EnterpriseContactModalProps> = ({
  isOpen,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnterpriseFormData>({
    resolver: yupResolver(enterpriseSchema),
  });

  const onSubmit = async (data: EnterpriseFormData) => {
    try {
      // Send to API
      const res = await fetch('/api/send-enterprise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json?.message || 'Error sending');

      Swal.fire({
        title: '¡Excelente!',
        text: 'Hemos recibido tu información. Nos comunicaremos contigo pronto para presentar nuestras soluciones de capacitación.',
        icon: 'success',
        confirmButtonColor: '#E1525F',
      });

      reset();
      onClose();
    } catch (error) {
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
            className="fixed inset-0 flex items-center justify-center z-[999] p-4"
          >
            <div className="bg-white rounded-3xl w-full max-w-lg p-8 relative max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-2xl font-bold text-black hover:text-gray-600 transition"
              >
                ×
              </button>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-heading font-semibold text-center text-black mb-6 mt-4">
                Potencia el conocimiento de tu equipo
              </h2>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Company Name */}
                <div>
                  <input
                    placeholder="Nombre de la empresa"
                    {...register('companyName')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  {errors.companyName && (
                    <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>
                  )}
                </div>

                {/* Contact */}
                <div>
                  <input
                    placeholder="Contacto"
                    {...register('contact')}
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  {errors.contact && (
                    <p className="text-red-500 text-sm mt-1">{errors.contact.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    placeholder="Correo electrónico"
                    {...register('email')}
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Number of Collaborators */}
                <div>
                  <select
                    {...register('collaborators')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Indique el número de colaboradores a capacitar</option>
                    <option value="1-10">1-10 colaboradores</option>
                    <option value="11-50">11-50 colaboradores</option>
                    <option value="51-100">51-100 colaboradores</option>
                    <option value="101-500">101-500 colaboradores</option>
                    <option value="500+">500+ colaboradores</option>
                  </select>
                  {errors.collaborators && (
                    <p className="text-red-500 text-sm mt-1">{errors.collaborators.message}</p>
                  )}
                </div>

                {/* Training Area */}
                <div>
                  <select
                    {...register('trainingArea')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Seleccione el área o tipo de capacitación de interés</option>
                    <option value="biologia_molecular">Biología Molecular</option>
                    <option value="diagnostico_molecular">Diagnóstico Molecular</option>
                    <option value="biotecnologia">Biotecnología</option>
                    <option value="ciencias_salud">Ciencias de la Salud</option>
                    <option value="otro">Otro</option>
                  </select>
                  {errors.trainingArea && (
                    <p className="text-red-500 text-sm mt-1">{errors.trainingArea.message}</p>
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

export default EnterpriseContactModal;
