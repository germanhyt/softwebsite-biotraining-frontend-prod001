import { useForm } from '@formspree/react';
import Swal from 'sweetalert2';
import Button from './Button';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';
import CustomTextarea from './CustomTextarea';
import { useEffect, useRef, useState } from 'react';

const Conversemos: React.FC = () => {

  // ATTRIBUTES
  const [state, handleSubmit, reset] = useForm(import.meta.env.PUBLIC_FORMSPREE_CONVERSEMOS || '');
  const hasShownSuccess = useRef(false);
  const [perfil, setPerfil] = useState('');
  const [habilidadFortalecer, setHabilidadFortalecer] = useState('');


  // CUSTOM HOOKS
  useEffect(() => {
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
                Diseñemos juntos tu próximo entrenamiento
              </h2>
              <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                Cuéntanos qué habilidad quieres fortalecer. Te ayudaremos a encontrar la capacitación ideal para tus
                objetivos en biología molecular, laboratorio o bioinformática.
              </p>
            </div>

            {/* Right Content - Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Campos ocultos de Formspree */}
              <input type="hidden" name="_subject" value="💬 Nuevo Mensaje del Formulario Conversemos - BioTraining" />

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

              {/* // perfil con select Estudiante, Profesional */}
              <div>
                <CustomSelect
                  name="Perfil"
                  options={[
                    { value: 'estudiante', label: 'Estudiante' },
                    { value: 'profesional', label: 'Profesional' },
                  ]}
                  value={perfil}
                  placeholder="¿Cuál es tu perfil?"
                  onChange={(e) => setPerfil(e.target.value)}
                  required
                />
              </div>

              <div>
                <CustomSelect
                  name="Habilidad a Fortalecer"
                  options={[
                    { value: 'diagnostico_molecular', label: 'Diagnóstico molecular' },
                    { value: 'pcr_qpcr', label: 'PCR / qPCR' },
                    { value: 'diseno_primers', label: 'Diseño de primers' },
                    { value: 'bioinformatica_analisis_datos', label: 'Bioinformática y análisis de datos biológicos' },
                    { value: 'tecnicas_isotermicas_poc', label: 'Técnicas isotérmicas (POC)' },
                    { value: 'necesito_orientacion', label: 'No estoy seguro/a - necesito orientación' }
                  ]}
                  placeholder="¿Qué habilidad te gustaría fortalecer?"
                  value={habilidadFortalecer}
                  onChange={(e) => setHabilidadFortalecer(e.target.value)}
                  required
                />
              </div>


              {/* Experience */}
              <div>
                <CustomTextarea
                  name="Objetivo"
                  placeholder="Cuéntanos tu objetivo (texto breve)"
                  required
                  minLength={15}
                  rows={4}
                  resize={false}
                />
              </div>

              <hr className="border-gray-300 my-4" />

              <div className="flex justify-end pt-2">
                <Button type="submit" variant="primary" disabled={state.submitting}>
                  {state.submitting ? 'Enviando...' : 'Enviar y continuar'}
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
