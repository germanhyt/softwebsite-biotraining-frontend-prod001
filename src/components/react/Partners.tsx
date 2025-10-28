import React, { useState } from 'react';
import { motion } from 'framer-motion';
import biotecnomicoGris from '../../assets/img/section-nuestros-aliados_biotecnomico-gris.webp';
import biotecnomicoColor from '../../assets/img/section-nuestros-aliados_biotecnomico-color.webp';
import cipvidaGris from '../../assets/img/section-nuestros-aliados_cipvida-gris.webp';
import cipvidaColor from '../../assets/img/section-nuestros-aliados_cipvida-color.webp';
import consejoGris from '../../assets/img/section-nuestros-aliados_consejo-regional-gris.webp';
import consejoColor from '../../assets/img/section-nuestros-aliados_consejo-regional-color.webp';

const partners = [
  {
    id: '1',
    name: 'Biotecnómica',
    logoGris: biotecnomicoGris,
    logoColor: biotecnomicoColor,
  },
  {
    id: '2',
    name: 'CIPVIDA',
    logoGris: cipvidaGris,
    logoColor: cipvidaColor,
  },
  {
    id: '3',
    name: 'Consejo Regional VII Lima',
    logoGris: consejoGris,
    logoColor: consejoColor,
  },
];

const Partners: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="ccontainer">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[52rem] mx-auto text-center mb-12"
        >
          <h2 className="text-[2.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[2.5rem] font-heading font-semibold mb-2">
            Nuestros aliados estratégicos
          </h2>
          <p className="text-text-secondary">
            Colaboramos con instituciones comprometidas con la excelencia científica y la formación de profesionales altamente capacitados en biotecnología y ciencias de la salud.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-center max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center p-6 cursor-pointer"
              onMouseEnter={() => setHoveredId(partner.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={hoveredId === partner.id ? partner.logoColor.src : partner.logoGris.src}
                alt={partner.name}
                className="max-h-36  md:max-h-40 w-auto object-contain transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
