import React from 'react';
import { useForm } from '@formspree/react';
import { motion, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';

interface StudentContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseInterested: string | undefined;
}

const StudentContactModal: React.FC<StudentContactModalProps> = ({
  isOpen,
  onClose,
  courseInterested
}) => {
  const [state, handleSubmit] = useForm(import.meta.env.PUBLIC_FORMSPREE_STUDENT || '');

  React.useEffect(() => {
    if (state.succeeded) {
      Swal.fire({
        title: '¡Excelente!',
        text: 'Hemos recibido tu información. Nos comunicaremos contigo pronto.',
        icon: 'success',
        confirmButtonColor: '#E1525F',
      });
      onClose();
    }
  }, [state.succeeded, onClose]);

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
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <input
                    name="fullName"
                    placeholder="Nombres y apellidos"
                    required
                    minLength={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                {/* Student Type */}
                <div>
                  <select
                    name="studentType"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Seleccione si es estudiante o profesional</option>
                    <option value="estudiante">Estudiante</option>
                    <option value="profesional">Profesional</option>
                  </select>
                </div>

                {/* Speciality */}
                <div>
                  <input
                    name="speciality"
                    placeholder="Indique su especialidad"
                    required
                    minLength={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                {/* Work Area */}
                <div>
                  <select
                    name="workArea"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Seleccione si trabaja en diagnóstico o investigación</option>
                    <option value="diagnostico">Diagnóstico</option>
                    <option value="investigacion">Investigación</option>
                  </select>
                </div>

                {/* Course Interest */}
                <div>
                  <input
                    name="courseInterest"
                    placeholder="Curso de interés (Se selecciona automáticamente)"
                    value={courseInterested}
                    readOnly
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none bg-gray-50 text-gray-600"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="px-12 py-3 bg-gradient-to-r from-[#AB323D] to-[#E1525F] text-white font-semibold rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {state.submitting ? 'Enviando...' : 'Enviar'}
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
