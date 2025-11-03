import React from 'react';
import { useForm } from '@formspree/react';
import Swal from 'sweetalert2';
import Button from './Button';

const Conversemos: React.FC = () => {
  const [state, handleSubmit] = useForm(import.meta.env.PUBLIC_FORMSPREE_CONVERSEMOS || '');

  React.useEffect(() => {
    if (state.succeeded) {
      Swal.fire({
        title: '¡Mensaje enviado!',
        text: 'Nos pondremos en contacto contigo pronto.',
        icon: 'success',
        confirmButtonColor: '#E1525F',
      });
    }
  }, [state.succeeded]);

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
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombres y apellidos"
                  required
                  minLength={3}
                  className="w-full px-6 py-3.5 bg-white rounded-lg text-text-primary placeholder-text-secondary/90 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                />
              </div>

              {/* Specialty */}
              <div>
                <input
                  type="text"
                  name="specialty"
                  placeholder="Especialidad"
                  required
                  minLength={2}
                  className="w-full px-6 py-3.5 bg-white rounded-lg text-text-primary placeholder-text-secondary/90 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                />
              </div>

              {/* Occupation */}
              <div>
                <input
                  type="text"
                  name="occupation"
                  placeholder="¿Cuál es tu ocupación actual?"
                  required
                  minLength={3}
                  className="w-full px-6 py-3.5 bg-white rounded-lg text-text-primary placeholder-text-secondary/90 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                />
              </div>

              {/* Preference */}
              <div>
                <textarea
                  name="preference"
                  placeholder="¿Cuál es tu preferencia respecto al formato de un curso/capacitación?"
                  required
                  minLength={10}
                  rows={2}
                  className="w-full px-6 py-3.5 bg-white rounded-lg text-text-primary placeholder-text-secondary/90 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                />
              </div>

              {/* Modality */}
              <div>
                <textarea
                  name="modality"
                  placeholder="¿Cuál es tu preferencia respecto a la modalidad?"
                  required
                  minLength={10}
                  rows={2}
                  className="w-full px-6 py-3.5 bg-white rounded-lg text-text-primary placeholder-text-secondary/90 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                />
              </div>

              {/* Experience */}
              <div>
                <textarea
                  name="experience"
                  placeholder="¿Qué experiencia práctica te gustaría desarrollar en una próxima capacitación?"
                  required
                  minLength={15}
                  rows={4}
                  className="w-full px-6 py-3.5 bg-white rounded-lg text-text-primary placeholder-text-secondary/90 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none transition-all"
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
