import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  answer1?: string;
  boldPhrases?: string[]; // phrases to render in bold within answer/answer1
}

const faqItems: FAQItem[] = [
  {
    id: '1',
    question: '¿Necesito tener experiencia previa para participar?',
    // answer: 'Los requisitos varían según el curso, pero generalmente necesitas tener conocimientos básicos en biología o ciencias de la salud. Algunos cursos avanzados pueden requerir experiencia previa en laboratorio. Te recomendamos revisar la descripción de cada curso para conocer los requisitos específicos.',
    answer: 'No. Nuestros cursos están diseñados para adaptarse tanto a estudiantes que dan sus primeros pasos en biología molecular como a profesionales que buscan actualizar sus conocimientos. Cada módulo incluye explicaciones claras, ejemplos prácticos y acompañamiento docente.',
  },
  {
    id: '2',
    question: '¿Ofrecen cursos tanto teóricos como prácticos?',
    // answer: 'Sí, todos nuestros docentes son profesionales activos en el sector de biotecnología y salud. Cuentan con experiencia comprobada en laboratorios, instituciones de investigación y empresas del sector. Además, muchos tienen publicaciones científicas y participación en proyectos de investigación actuales.',
    answer: 'Sí. En Biotraining combinamos la base conceptual con la práctica aplicada. Dependiendo del curso, podrás participar en sesiones teóricas en vivo, análisis de casos reales y prácticas en laboratorio o simuladas, según el formato de la capacitación.'
  },
  {
    id: '3',
    question: '¿Las clases son en vivo o grabadas?',
    // answer: 'La duración varía según el curso. Nuestros programas van desde cursos intensivos de 2-3 semanas hasta programas más extensos de 2-3 meses. Cada curso incluye sesiones en vivo, material grabado y ejercicios prácticos. La información específica de duración está disponible en la descripción de cada curso.',
    answer: 'Las sesiones se desarrollan en vivo, permitiendo la interacción directa con los docentes y la resolución de dudas en tiempo real.',
    answer1: 'En algunos cursos, se ofrece acceso temporal a las grabaciones o materiales complementarios para reforzar el aprendizaje.'
  },
  {
    id: '4',
    question: '¿Qué plataforma se utiliza para las clases virtuales?',
    // answer: 'Sí, en nuestras sesiones prácticas utilizamos equipos modernos de última generación. Para los cursos virtuales, proporcionamos demostraciones detalladas y acceso a simuladores. Además, contamos con alianzas con laboratorios especializados donde se pueden realizar prácticas presenciales según el curso.',
    answer: 'Utilizamos principalmente Google Meet para las sesiones en vivo y Google Classroom o Drive para compartir materiales y tareas, garantizando un acceso sencillo y seguro desde cualquier dispositivo.',
    boldPhrases: ['Google Meet', 'Google Classroom', 'Drive']
  },
  {
    id: '5',
    question: '¿Recibiré el material en formato descargable?',
    answer: 'Sí. Todo participante recibe materiales digitales (presentaciones, guías, protocolos o lecturas recomendadas) en formato descargable, de uso personal y exclusivo para reforzar los contenidos aprendidos.'
  },
  {
    id: '6',
    question: '¿Dónde se realizan las prácticas presenciales?',
    answer: 'Las prácticas se llevan a cabo en laboratorios analíticos especializados en diagnóstico molecular, equipados con infraestructura profesional y bajo supervisión docente.',
    answer1: 'Cada grupo trabaja con un número limitado de participantes para asegurar una experiencia personalizada y segura.'
  },
  {
    id: '7',
    question: '¿Qué datos aparecen en el certificado y cuándo se entrega?',
    answer: 'El certificado incluye tu nombre completo, el título del curso, la duración total (en horas lectivas o créditos académicos), la modalidad y la firma del equipo académico de Biotraining.',
    answer1: 'Los certificados se envían de manera digital al correo registrado, dentro de los 7 días posteriores a la finalización del curso.',
    boldPhrases: ['7 días posteriores']
  },
  {
    id: '8',
    question: '¿Puedo solicitar una versión privada o personalizada para mi institución?',
    answer: 'Sí. Ofrecemos versiones personalizadas de nuestros cursos para universidades, laboratorios y empresas del sector salud o biotecnología.',
    answer1: 'Adaptamos los contenidos, la duración y las prácticas según las necesidades del grupo. Puedes escribirnos directamente a contacto@biotraining.pe o al WhatsApp 969 977 934 para coordinar una propuesta a medida.',
    boldPhrases: ['contacto@biotraining.pe', 'WhatsApp 969 977 934']
  }
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // Helper to bold specific phrases within a text without using dangerouslySetInnerHTML
  const renderWithHighlights = (
    text: string,
    phrases?: string[]
  ): React.ReactNode => {
    if (!phrases || phrases.length === 0) return text;
    // Prepare case-insensitive matching
    const lowerSet = new Set(phrases.map((p) => p.toLowerCase()));
    const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp(`(${phrases.map(escapeRegExp).join('|')})`, 'gi');
    return text.split(pattern).map((part, i) => {
      const match = lowerSet.has(part.toLowerCase());
      return match ? (
        <strong key={i} className="font-semibold">
          {part}
        </strong>
      ) : (
        <React.Fragment key={i}>{part}</React.Fragment>
      );
    });
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
                      <p>{renderWithHighlights(item.answer, item.boldPhrases)}</p>
                      {item.answer1 && (
                        <p className='mt-2'>{renderWithHighlights(item.answer1, item.boldPhrases)}</p>
                      )}
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
