import React from 'react';
import { motion } from 'framer-motion';
import incentivoImg from '../../assets/img/section-incentivando-aprendizaje.webp';

const IncentivandoAprendizaje: React.FC = () => {
  return (
    <section id="conocenos" className="py-20 bg-white">
      <div className="ccontainer">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-[52rem] mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-[2.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[2.5rem] leading-[1.2] font-heading font-semibold text-text-primary ">
              Incentivando el aprendizaje y la exigencia
            </h2>

            <p className="text-lg text-text-secondary leading-relaxed">
              En Biotraining, nuestro objetivo es impulsar tu desarrollo profesional preparando herramientas formativas de alta calidad.
            </p>
          </motion.div>

          {/* Right Image/Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={incentivoImg.src}
                alt="Incentivando el aprendizaje"
                className="w-full h-auto rounded-2xl"
              />
              {/* Play button overlay - simulated video placeholder */}
              <div className="absolute inset-0 flex items-center justify-center  transition-colors cursor-pointer group">
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-primary-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IncentivandoAprendizaje;
