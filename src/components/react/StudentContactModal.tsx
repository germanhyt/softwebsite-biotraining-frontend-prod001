import React from 'react';
import { useForm } from '@formspree/react';
import { motion, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';
import CustomSelect from './CustomSelect';
import CustomInput from './CustomInput';

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
  const [state, handleSubmit, reset] = useForm(import.meta.env.PUBLIC_FORMSPREE_STUDENT || '');
  const hasShownSuccess = React.useRef(false);

  const [tipoPerfil, setTipoPerfil] = React.useState('');
  const [areaTrabajo, setAreaTrabajo] = React.useState('');

  React.useEffect(() => {
    if (state.succeeded && !hasShownSuccess.current) {
      hasShownSuccess.current = true;
      Swal.fire({
        title: '¡Excelente!',
        text: 'Hemos recibido tu información. Nos comunicaremos contigo pronto.',
        icon: 'success',
        confirmButtonColor: '#E1525F',
        customClass: {
          container: 'swal-high-zindex'
        }
      }).then(() => {
        reset();
        setTipoPerfil('');
        setAreaTrabajo('');
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
            className="fixed inset-0 flex items-center justify-center z-[9999] p-4"
          >
            <div className="bg-white rounded-3xl w-full max-w-xl relative max-h-[90vh] flex flex-col">
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
                  Bríndanos tus datos y nos comunicaremos contigo
                </h2>
              </div>

              {/* Scrollable Form Content */}
              <div className="px-8 pb-8 overflow-y-auto modal-scroll">
                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Campos ocultos de Formspree */}
                  <input type="hidden" name="_subject" value="🎓 Nueva Solicitud de Estudiante/Profesional - BioTraining" />
                  {/* <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_format" value="html" />
                  <input type="hidden" name="_email.title" value="Inscripción de Estudiante/Profesional" />
                  <input type="hidden" name="_email.subtitle" value="Un estudiante o profesional está interesado en un curso" /> */}

                  {/* Full Name */}
                  <div>
                    <CustomInput
                      name="Nombres y Apellidos"
                      placeholder="Nombres y apellidos"
                      required
                      minLength={5}
                    />
                  </div>

                  <div>
                    <CustomInput
                      name="Correo Electrónico"
                      placeholder="Correo electrónico"
                      type="email"
                      required
                    />
                  </div>

                  {/* Student Type */}
                  <div className='overflow-hidden'>
                    <CustomSelect
                      name="Tipo de Perfil"
                      options={[
                        { value: 'estudiante', label: 'Estudiante' },
                        { value: 'profesional', label: 'Profesional' }
                      ]}
                      placeholder="Seleccione si es estudiante o profesional"
                      value={tipoPerfil}
                      onChange={(e) => setTipoPerfil(e.target.value)}
                      required
                    />
                  </div>

                  {/* Speciality */}
                  <div>
                    <CustomInput
                      name="Especialidad"
                      placeholder="Indique su especialidad"
                      required
                      minLength={3}
                    />
                  </div>

                  {/* Work Area */}
                  <div>
                    <CustomSelect
                      name="Área de Trabajo"
                      options={[
                        { value: 'diagnostico', label: 'Diagnóstico' },
                        { value: 'investigacion', label: 'Investigación' }
                      ]}
                      placeholder="Seleccione si trabaja en diagnóstico o investigación"
                      value={areaTrabajo}
                      onChange={(e) => setAreaTrabajo(e.target.value)}
                      required
                    />
                  </div>

                  {/* Course Interest */}
                  <div>
                    <CustomInput
                      name="Curso de Interés"
                      placeholder="Curso de interés (Se selecciona automáticamente)"
                      value={courseInterested}
                      readOnly
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

export default StudentContactModal;
