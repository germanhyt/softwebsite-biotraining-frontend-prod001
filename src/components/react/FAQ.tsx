import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: '1',
    question: '¿Qué requisitos necesito para inscribirme en un curso?',
    // answer: 'Los requisitos varían según el curso, pero generalmente necesitas tener conocimientos básicos en biología o ciencias de la salud. Algunos cursos avanzados pueden requerir experiencia previa en laboratorio. Te recomendamos revisar la descripción de cada curso para conocer los requisitos específicos.',
    answer: ''
  },
  {
    id: '2',
    question: '¿Los docentes tienen experiencia activa en el campo de la biotecnología y salud?',
    // answer: 'Sí, todos nuestros docentes son profesionales activos en el sector de biotecnología y salud. Cuentan con experiencia comprobada en laboratorios, instituciones de investigación y empresas del sector. Además, muchos tienen publicaciones científicas y participación en proyectos de investigación actuales.',
    answer: ''
  },
  {
    id: '3',
    question: '¿Cuál es la duración promedio de cada curso?',
    // answer: 'La duración varía según el curso. Nuestros programas van desde cursos intensivos de 2-3 semanas hasta programas más extensos de 2-3 meses. Cada curso incluye sesiones en vivo, material grabado y ejercicios prácticos. La información específica de duración está disponible en la descripción de cada curso.',
    answer: ''
  },
  {
    id: '4',
    question: '¿Se utilizan laboratorios o equipos de última generación durante las clases?',
    // answer: 'Sí, en nuestras sesiones prácticas utilizamos equipos modernos de última generación. Para los cursos virtuales, proporcionamos demostraciones detalladas y acceso a simuladores. Además, contamos con alianzas con laboratorios especializados donde se pueden realizar prácticas presenciales según el curso.',
    answer: ''
  },
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-background-primary">
      <div className="ccontainer max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-medium">
            Preguntas frecuentes
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-sans font-medium text-text-primary pr-8">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openId === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-text-secondary leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
