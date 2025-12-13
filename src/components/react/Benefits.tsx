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
    description: 'Profesionales con experiencia en investigación y diagnóstico molecular.',
    image: docentesImg,
  },
  {
    id: '2',
    title: 'Contenido actualizado',
    description: 'Herramientas y enfoques modernos utilizados en salud e investigación.',
    image: certificateImg,
  },
  {
    id: '3',
    title: 'Aprendizaje aplicado',
    description: 'Casos reales que te preparan para tomar decisiones en el entorno profesional.',
    image: casosRealesImg,
  },
  {
    id: '4',
    title: 'Modalidad flexible',
    description: 'Clases en vivo y acompañamiento 24/7 para avanzar a tu ritmo.',
    image: horariosImg,
  },
];

const Benefits: React.FC = () => {
  return (
    <section id='beneficios' className="py-20">
      <div className="ccontainer">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-semibold mb-4">
            Forma parte de la nueva generación de especialistas
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
                  className="w-72 h-72 object-contain"
                />
              </div>

              {/* Content */}
              <div className='space-y-4 px-10'>
                <h3 className="text-[1.5rem] sm:text-[1.25rem] font-heading font-semibold">
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
