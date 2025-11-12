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
  const [state, handleSubmit, reset] = useForm(import.meta.env.PUBLIC_FORMSPREE_ENTERPRISE || '');
  const hasShownSuccess = React.useRef(false);

  React.useEffect(() => {
    if (state.succeeded && !hasShownSuccess.current) {
      hasShownSuccess.current = true;
      Swal.fire({
        title: '¡Excelente!',
        text: 'Hemos recibido tu información. Nos comunicaremos contigo pronto para presentar nuestras soluciones de capacitación.',
        icon: 'success',
        confirmButtonColor: '#E1525F',
        customClass: {
          container: 'swal-high-zindex'
        }
      }).then(() => {
        reset();
        hasShownSuccess.current = false;
        onClose();
      });
    }
  }, [state.succeeded, reset, onClose]);

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
            <div className="bg-white rounded-3xl w-full max-w-lg relative max-h-[90vh] flex flex-col">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-2xl font-bold text-black hover:text-gray-600 transition z-10"
              >
                ×
              </button>

              {/* Title */}
              <div className="px-8 pt-8 pb-4">
                <h2 className="text-2xl md:text-3xl font-heading font-semibold text-center text-black mt-4">
                  Potencia el conocimiento de tu equipo
                </h2>
              </div>

              {/* Scrollable Form Content */}
              <div className="px-8 pb-8 overflow-y-auto modal-scroll">
                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Campos ocultos de Formspree */}
                  <input type="hidden" name="_subject" value="🏢 Nueva Solicitud Empresarial - BioTraining" />
                  {/* <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_format" value="html" />
                <input type="hidden" name="_email.title" value="Solicitud de Capacitación Empresarial" />
                <input type="hidden" name="_email.subtitle" value="Una empresa está interesada en capacitar a su equipo" /> */}

                  {/* Company Name */}
                  <div>
                    <input
                      name="Nombre de la Empresa"
                      placeholder="Nombre de la empresa"
                      required
                      minLength={3}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 "
                    />
                  </div>

                  {/* Contact */}
                  <div>
                    <input
                      name="Teléfono de Contacto"
                      placeholder="Contacto"
                      type="tel"
                      required
                      minLength={7}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 "
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      name="Correo Electrónico"
                      placeholder="Correo electrónico"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 "
                    />
                  </div>

                  {/* Number of Collaborators */}
                  <div>
                    <select
                      name="Número de Colaboradores"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-500 focus:outline-none focus:ring-2 "
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
                      name="Área de Capacitación"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-500 focus:outline-none focus:ring-2 "
                    >
                      <option value="">Seleccione el área o tipo de capacitación de interés</option>
                      {/* <option value="biologia_molecular">Biología Molecular</option>
                      <option value="diagnostico_molecular">Diagnóstico Molecular</option>
                      <option value="biotecnologia">Biotecnología</option>
                      <option value="ciencias_salud">Ciencias de la Salud</option>
                      <option value="otro">Otro</option> */}
                      <option value="qpcr_diagnostico">QPCR </option>
                      <option value="diseno_optimizacion">DISEÑO Y OPTIMIZACIÓN DE PRIMERS PARA LA PCR</option>
                      <option value="exploracion_bases_datos">EXPLORACION Y ANALISIS DE BASES DE DATOS BIOLOGICAS</option>
                      <option value="diagnostico_molecular_poc">DIAGNÓSTICO MOLECULAR POC</option>
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
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EnterpriseContactModal;

