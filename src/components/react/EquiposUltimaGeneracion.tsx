import React from 'react';
import { motion } from 'framer-motion';
import equiposImg from '../../assets/img/section-equipos-ultima-generacion.webp';

const EquiposUltimaGeneracion: React.FC = () => {
  const items = [
    'Material didáctico actualizado.',
    'Soporte técnico.',
    'Evaluación continua.',
    'Sesiones atractivas en vivo.',
  ];

  return (
    <section className="py-20 ">
      <div className="ccontainer">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-center sm:text-start text-[2rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[2.5rem] font-heading font-semibold text-text-primary leading-tight">
              Equipos de última generación
            </h2>

            <p className="text-lg text-text-secondary leading-relaxed">
              Practica y aprende usando equipos modernos, aplica lo aprendido en los laboratorios con la guía de nuestros expertos para que así obtengas un mayor aprendizaje.
            </p>

            <ul className="space-y-4">
              {items.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-primary-500 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-text-primary font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={equiposImg.src}
              alt="Equipos de última generación"
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EquiposUltimaGeneracion;
