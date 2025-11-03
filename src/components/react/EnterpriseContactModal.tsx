import React from 'react';
import { useForm } from '@formspree/react';
import { motion, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';

interface EnterpriseContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnterpriseContactModal: React.FC<EnterpriseContactModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [state, handleSubmit] = useForm(import.meta.env.PUBLIC_FORMSPREE_ENTERPRISE || '');

  React.useEffect(() => {
    if (state.succeeded) {
      Swal.fire({
        title: '¡Excelente!',
        text: 'Hemos recibido tu información. Nos comunicaremos contigo pronto para presentar nuestras soluciones de capacitación.',
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
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Company Name */}
                <div>
                  <input
                    name="companyName"
                    placeholder="Nombre de la empresa"
                    required
                    minLength={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                {/* Contact */}
                <div>
                  <input
                    name="contact"
                    placeholder="Contacto"
                    type="tel"
                    required
                    minLength={7}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    name="email"
                    placeholder="Correo electrónico"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                {/* Number of Collaborators */}
                <div>
                  <select
                    name="collaborators"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Indique el número de colaboradores a capacitar</option>
                    <option value="1-10">1-10 colaboradores</option>
                    <option value="11-50">11-50 colaboradores</option>
                    <option value="51-100">51-100 colaboradores</option>
                    <option value="101-500">101-500 colaboradores</option>
                    <option value="500+">500+ colaboradores</option>
                  </select>
                </div>

                {/* Training Area */}
                <div>
                  <select
                    name="trainingArea"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Seleccione el área o tipo de capacitación de interés</option>
                    <option value="biologia_molecular">Biología Molecular</option>
                    <option value="diagnostico_molecular">Diagnóstico Molecular</option>
                    <option value="biotecnologia">Biotecnología</option>
                    <option value="ciencias_salud">Ciencias de la Salud</option>
                    <option value="otro">Otro</option>
                  </select>
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

export default EnterpriseContactModal;

