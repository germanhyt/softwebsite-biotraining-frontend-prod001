import React from 'react';
import { useForm } from '@formspree/react';
import Swal from 'sweetalert2';
import Button from './Button';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';
import CustomTextarea from './CustomTextarea';

const Conversemos: React.FC = () => {
  const [state, handleSubmit, reset] = useForm(import.meta.env.PUBLIC_FORMSPREE_CONVERSEMOS || '');
  const hasShownSuccess = React.useRef(false);

  const [formatoPreferencia, setFormatoPreferencia] = React.useState('');

  React.useEffect(() => {
    if (state.succeeded && !hasShownSuccess.current) {
      hasShownSuccess.current = true;
      Swal.fire({
        title: '¡Mensaje enviado!',
        text: 'Nos pondremos en contacto contigo pronto.',
        icon: 'success',
        confirmButtonColor: '#E1525F',
        customClass: {
          container: 'swal-high-zindex'
        }
      }).then(() => {
        reset();
        setFormatoPreferencia('');
        hasShownSuccess.current = false;
      });
    }
  }, [state.succeeded, reset]);

  return (
    <section className="pt-32">
      <div className='relative py-20 lg:py-28 overflow-hidden'>
        {/* Background with radial gradient */}
        <div className="absolute inset-0 bg-black">
          {/* Red radial gradient on the left */}
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: 'radial-gradient(circle at 15% 30%, rgba(225, 82, 95, 0.3) 0%, rgba(171, 50, 61, 0.15) 25%, transparent 50%)'
            }}
          />
        </div>

        <div id='contacto' className="ccontainer relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Content - Text */}
            <div className="text-white space-y-6 lg:sticky lg:top-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold">
                Conversemos
              </h2>
              <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                Completa este breve formulario y ayudanos a conocer tus intereses. Tu respuesta nos ayudará a enfocar los contenidos de nuestros cursos y capacitaciones para que se alineen mejor con tus objetivos y perfil profesional. </p>
            </div>

            {/* Right Content - Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Campos ocultos de Formspree */}
              <input type="hidden" name="_subject" value="💬 Nuevo Mensaje del Formulario Conversemos - BioTraining" />
              {/* <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_format" value="html" />
              <input type="hidden" name="_email.title" value="Nueva Solicitud de Conversación" />
              <input type="hidden" name="_email.subtitle" value="Un profesional está interesado en conocer más sobre nuestros cursos" /> */}

              {/* Name */}
              <div>
                <CustomInput
                  name="Nombres y Apellidos"
                  placeholder="Nombres y apellidos"
                  required
                  minLength={3}
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

              {/* Specialty */}
              <div>
                <CustomInput
                  name="Especialidad"
                  placeholder="Especialidad"
                  required
                  minLength={2}
                />
              </div>

              {/* Occupation */}
              <div>
                <CustomInput
                  name="Ocupación Actual"
                  placeholder="¿Cuál es tu ocupación actual?"
                  required
                  minLength={3}
                />
              </div>

              {/* Preference */}
              <div>
                <CustomSelect
                  name="Preferencia de Formato"
                  options={[
                    { value: 'presencial', label: 'Presencial' },
                    { value: 'virtual_vivo', label: 'Virtual en vivo' },
                    { value: 'virtual_grabado', label: 'Virtual sesiones grabadas' }
                  ]}
                  placeholder="¿Cuál es tu preferencia respecto al formato de un curso/capacitación?"
                  value={formatoPreferencia}
                  onChange={(e) => setFormatoPreferencia(e.target.value)}
                  required
                />
              </div>

              {/* Modality */}
              <div>
                <CustomTextarea
                  name="Preferencia de Modalidad"
                  placeholder="¿Cuál es tu preferencia respecto a la modalidad?"
                  required
                  minLength={10}
                  rows={2}
                />
              </div>

              {/* Experience */}
              <div>
                <CustomTextarea
                  name="Experiencia Práctica Deseada"
                  placeholder="¿Qué habilidad te gustaría fortalecer en una próxima capacitación?"
                  required
                  minLength={15}
                  rows={4}
                  resize={false}
                />
              </div>

              <hr className="border-gray-300 my-4" />

              <div className="flex justify-end pt-2">
                <Button type="submit" variant="primary" disabled={state.submitting}>
                  {state.submitting ? 'Enviando...' : 'Enviar'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conversemos;
