import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import Button from './Button';

interface FormData {
  name: string;
  specialty: string;
  occupation: string;
  preference: string;
  modality: string;
  experience: string;
}

// Validation schema
const conversemosSchema = yup.object({
  name: yup
    .string()
    .required('Por favor ingresa tu nombre y apellido')
    .min(3, 'Debe tener al menos 3 caracteres'),
  specialty: yup
    .string()
    .required('Por favor especifica tu especialidad')
    .min(2, 'Debe tener al menos 2 caracteres'),
  occupation: yup
    .string()
    .required('Por favor indica tu ocupación actual')
    .min(3, 'Debe tener al menos 3 caracteres'),
  preference: yup
    .string()
    .required('Por favor comparte tu preferencia de formato')
    .min(10, 'Debe tener al menos 10 caracteres'),
  modality: yup
    .string()
    .required('Por favor indica tu preferencia de modalidad')
    .min(10, 'Debe tener al menos 10 caracteres'),
  experience: yup
    .string()
    .required('Por favor describe la experiencia que deseas desarrollar')
    .min(15, 'Debe tener al menos 15 caracteres'),
});

const Conversemos: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(conversemosSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Send to API
      const res = await fetch('/api/send-conversemos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json?.message || 'Error sending');

      Swal.fire({
        title: '¡Mensaje enviado!',
        text: 'Nos pondremos en contacto contigo pronto.',
        icon: 'success',
        confirmButtonColor: '#E1525F',
      });

      reset();
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'No se pudo enviar el mensaje. Intenta nuevamente.',
        icon: 'error',
        confirmButtonColor: '#E1525F',
      });
    }
  };

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
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white space-y-6 lg:sticky lg:top-8"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold">
                Conversemos
              </h2>
              <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                Completa este breve formulario y ayudanos a conocer tus intereses. Tu respuesta nos ayudará a enfocar los contenidos de nuestros cursos y capacitaciones para que se alineen mejor con tus objetivos y perfil profesional. </p>
            </motion.div>

            {/* Right Content - Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <input
                  type="text"
                  placeholder="Nombres y apellidos"
                  {...register('name')}
                  className="w-full px-6 py-3.5 bg-white rounded-lg text-text-primary placeholder-text-secondary/90 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Specialty */}
              <div>
                <input
                  type="text"
                  placeholder="Especialidad"
                  {...register('specialty')}
                  className="w-full px-6 py-3.5 bg-white rounded-lg text-text-primary placeholder-text-secondary/90 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                />
                {errors.specialty && (
                  <p className="text-red-500 text-sm mt-1">{errors.specialty.message}</p>
                )}
              </div>

              {/* Occupation */}
              <div>
                <input
                  type="text"
                  placeholder="¿Cuál es tu ocupación actual?"
                  {...register('occupation')}
                  className="w-full px-6 py-3.5 bg-white rounded-lg text-text-primary placeholder-text-secondary/90 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                />
                {errors.occupation && (
                  <p className="text-red-500 text-sm mt-1">{errors.occupation.message}</p>
                )}
              </div>

              {/* Preference */}
              <div>
                <textarea
                  placeholder="¿Cuál es tu preferencia respecto al formato de un curso/capacitación?"
                  {...register('preference')}
                  rows={2}
                  className="w-full px-6 py-3.5 bg-white rounded-lg text-text-primary placeholder-text-secondary/90 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                />
                {errors.preference && (
                  <p className="text-red-500 text-sm mt-1">{errors.preference.message}</p>
                )}
              </div>

              {/* Modality */}
              <div>
                <textarea
                  placeholder="¿Cuál es tu preferencia respecto a la modalidad?"
                  {...register('modality')}
                  rows={2}
                  className="w-full px-6 py-3.5 bg-white rounded-lg text-text-primary placeholder-text-secondary/90 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                />
                {errors.modality && (
                  <p className="text-red-500 text-sm mt-1">{errors.modality.message}</p>
                )}
              </div>

              {/* Experience */}
              <div>
                <textarea
                  placeholder="¿Qué experiencia práctica te gustaría desarrollar en una próxima capacitación?"
                  {...register('experience')}
                  rows={4}
                  className="w-full px-6 py-3.5 bg-white rounded-lg text-text-primary placeholder-text-secondary/90 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none transition-all"
                />
                {errors.experience && (
                  <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>
                )}
              </div>

              <hr className="border-gray-300 my-4" />

              <div className="flex justify-end pt-2">
                <Button type="submit" variant="primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                </Button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conversemos;
