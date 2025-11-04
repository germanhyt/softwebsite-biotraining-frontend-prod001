import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

interface FormData {
  nombre: string;
  especialidad: string;
  ocupacion: string;
  formato: string;
  modalidad: string;
  experiencia: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    especialidad: '',
    ocupacion: '',
    formato: '',
    modalidad: '',
    experiencia: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        await Swal.fire({
          icon: 'success',
          title: '¡Gracias por tu interés!',
          text: 'Hemos recibido tu información. Pronto nos pondremos en contacto contigo.',
          confirmButtonColor: '#E1525F',
        });

        // Resetear formulario
        setFormData({
          nombre: '',
          especialidad: '',
          ocupacion: '',
          formato: '',
          modalidad: '',
          experiencia: '',
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al enviar el formulario. Por favor, intenta nuevamente.',
        confirmButtonColor: '#E1525F',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="ccontainer">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-5xl font-heading font-semibold">Conversemos</h2>
            <p className="text-lg leading-relaxed">
              Completa este breve formulario y ayúdanos a conocer tus intereses para dirigir los contenidos de nuestros cursos y capacitaciones a los objetivos que se ajusten mejor a tu perfil profesional.
            </p>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombres y apellidos"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2"
              />

              <input
                type="text"
                name="especialidad"
                value={formData.especialidad}
                onChange={handleChange}
                placeholder="Especialidad"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2"
              />

              <input
                type="text"
                name="ocupacion"
                value={formData.ocupacion}
                onChange={handleChange}
                placeholder="¿Cuál es tu ocupación actual?"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2"
              />

              <select
                name="formato"
                value={formData.formato}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2"
              >
                <option value="" className="text-gray-900">¿Cuál es tu preferencia respecto al formato de un curso/capacitación?</option>
                <option value="virtual" className="text-gray-900">Virtual</option>
                <option value="presencial" className="text-gray-900">Presencial</option>
                <option value="hibrido" className="text-gray-900">Híbrido</option>
              </select>

              <select
                name="modalidad"
                value={formData.modalidad}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2"
              >
                <option value="" className="text-gray-900">¿Cuál es tu preferencia respecto a la modalidad?</option>
                <option value="en-vivo" className="text-gray-900">En vivo</option>
                <option value="grabado" className="text-gray-900">Grabado</option>
                <option value="mixto" className="text-gray-900">Mixto</option>
              </select>

              <textarea
                name="experiencia"
                value={formData.experiencia}
                onChange={handleChange}
                placeholder="¿Qué experiencia práctica te gustaría desarrollar en una próxima capacitación?"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 resize-none"
              />

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3 bg-gradient-primary text-white font-heading font-medium rounded-full hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
