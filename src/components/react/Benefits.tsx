import React from 'react';
import { motion } from 'framer-motion';
import docentesImg from '../../assets/img/section-capacitacion_docentes.webp';
import certificateImg from '../../assets/img/section-capacitacion_certificate.webp';
import casosRealesImg from '../../assets/img/section-capacitacion_casos-reales.webp';
import horariosImg from '../../assets/img/section-capacitacion_horarios-flexibles.webp';

interface Benefit {
  id: string;
  title: string;
  description: string;
  image: any;
}

const benefits: Benefit[] = [
  {
    id: '1',
    title: 'Docentes Expertos',
    description: 'Profesionales reconocidos con sólida experiencia y reconocimiento en el sector salud y biotecnología.',
    image: docentesImg,
  },
  {
    id: '2',
    title: 'Certificación Reconocida',
    description: 'Certificados avalados por instituciones con validez internacional.',
    image: certificateImg,
  },
  {
    id: '3',
    title: 'Casos Reales',
    description: 'Metodología basada en casos clínicos y situaciones reales del entorno profesional.',
    image: casosRealesImg,
  },
  {
    id: '4',
    title: 'Horarios Flexibles',
    description: 'Modalidad virtual con acceso 24/7 y sesiones en vivo adaptadas a tu agenda.',
    image: horariosImg,
  },
];

const Benefits: React.FC = () => {
  return (
    <section className="py-20">
      <div className="ccontainer">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-semibold mb-4">
            Tu capacitación en las mejores manos
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className=" text-center space-y-4"
            >
              {/* Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={benefit.image.src}
                  alt={benefit.title}
                  className="w-52 h-52 object-contain"
                />
              </div>

              {/* Content */}
              <div className='space-y-4 px-10'>
                <h3 className="text-[1.25rem] font-heading font-semibold">
                  {benefit.title}
                </h3>
                <p className="text-[1rem] sm:text-[1.125rem] leading-[1.2]">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
