import React, { useState } from 'react';
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

const Conversemos: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    specialty: '',
    occupation: '',
    preference: '',
    modality: '',
    experience: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          title: '¡Mensaje enviado!',
          text: 'Nos pondremos en contacto contigo pronto.',
          icon: 'success',
          confirmButtonColor: '#E1525F',
        });
        setFormData({
          name: '',
          specialty: '',
          occupation: '',
          preference: '',
          modality: '',
          experience: '',
        });
      } else {
        throw new Error('Error al enviar');
      }
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
    <section className="relative py-20 lg:py-28 overflow-hidden">
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

      <div className="ccontainer relative z-10">
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
              Completa este breve formulario y ayúdanos a conocer tus intereses para ayudarnos a dirigir los contenidos de nuestros cursos y capacitaciones a los objetivos que se ajusten mejor a tu perfil profesional.
            </p>
          </motion.div>

          {/* Right Content - Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nombres y apellidos"
              required
              className="w-full px-6 py-3.5 bg-white rounded-lg text-text-primary placeholder-text-secondary/90 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
            />

            <input
              type="text"
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              placeholder="Especialidad"
              required
              className="w-full px-6 py-3.5 bg-white rounded-lg text-text-primary placeholder-text-secondary/90 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
            />

            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              placeholder="¿Cuál es tu ocupación actual?"
              required
              className="w-full px-6 py-3.5 bg-white rounded-lg text-text-primary placeholder-text-secondary/90 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
            />

            <input
              type="text"
              name="preference"
              value={formData.preference}
              onChange={handleChange}
              placeholder="¿Cuál es tu preferencia respecto al formato de un curso/capacitación?"
              required
              className="w-full px-6 py-3.5 bg-white rounded-lg text-text-primary placeholder-text-secondary/90 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
            />

            <input
              type="text"
              name="modality"
              value={formData.modality}
              onChange={handleChange}
              placeholder="¿Cuál es tu preferencia respecto a la modalidad?"
              required
              className="w-full px-6 py-3.5 bg-white rounded-lg text-text-primary placeholder-text-secondary/90 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
            />

            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="¿Qué experiencia práctica te gustaría desarrollar en una próxima capacitación?"
              required
              rows={4}
              className="w-full px-6 py-3.5 bg-white rounded-lg text-text-primary placeholder-text-secondary/90 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none transition-all"
            />

            <hr className="border-gray-300 my-4" />

            <div className="flex justify-end pt-2">
              <Button type="submit" variant="primary">
                Enviar
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Conversemos;
