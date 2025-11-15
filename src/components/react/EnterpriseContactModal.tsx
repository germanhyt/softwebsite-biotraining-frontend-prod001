import React from 'react';
import { useForm } from '@formspree/react';
import { motion, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';
import CustomTextarea from './CustomTextarea';

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

  const [numeroColaboradores, setNumeroColaboradores] = React.useState('');
  const [areaCapacitacion, setAreaCapacitacion] = React.useState('');

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
        setNumeroColaboradores('');
        setAreaCapacitacion('');
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
                    <CustomInput
                      name="Nombre de la Empresa"
                      placeholder="Nombre de la empresa"
                      required
                      minLength={3}
                    />
                  </div>

                  {/* Contact */}
                  <div>
                    <CustomInput
                      name="Teléfono de Contacto"
                      placeholder="Teléfono de contacto"
                      type="tel"
                      required
                      minLength={7}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <CustomInput
                      name="Correo Electrónico"
                      placeholder="Correo electrónico"
                      type="email"
                      required
                    />
                  </div>

                  {/* Number of Collaborators */}
                  <div>
                    <CustomSelect
                      name="Número de Colaboradores"
                      options={[
                        { value: '1-10', label: '1-10 colaboradores' },
                        { value: '11-50', label: '11-50 colaboradores' },
                        { value: '51-100', label: '51-100 colaboradores' },
                        { value: '101-500', label: '101-500 colaboradores' },
                        { value: '500+', label: '500+ colaboradores' }
                      ]}
                      placeholder="Indique el número de colaboradores a capacitar"
                      value={numeroColaboradores}
                      onChange={(e) => setNumeroColaboradores(e.target.value)}
                      required
                    />
                  </div>

                  {/* Training Area */}
                  <div>
                    <CustomSelect
                      name="Área de Capacitación"
                      options={[
                        { value: 'qpcr_diagnostico', label: 'QPCR' },
                        { value: 'diseno_optimizacion', label: 'DISEÑO Y OPTIMIZACIÓN DE PRIMERS PARA LA PCR' },
                        { value: 'exploracion_bases_datos', label: 'EXPLORACION Y ANALISIS DE BASES DE DATOS BIOLOGICAS' },
                        { value: 'diagnostico_molecular_poc', label: 'DIAGNÓSTICO MOLECULAR POC' }
                      ]}
                      placeholder="Seleccione el área o tipo de capacitación de interés"
                      value={areaCapacitacion}
                      onChange={(e) => setAreaCapacitacion(e.target.value)}
                      required
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
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EnterpriseContactModal;

