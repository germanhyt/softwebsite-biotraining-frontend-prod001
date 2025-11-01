import React from 'react';
import { motion } from 'framer-motion';
import estudianteImage from '../../assets/img/section-estudiante-o-profesional.webp';

const EstudianteProfesional: React.FC = () => {
  return (
    <section className="pt-24 md:pt-64 lg:pt-72 lg:pb-20 bg-white">
      <div className="ccontainer">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <img
              src={estudianteImage.src}
              alt="Estudiante o profesional en biotecnología"
              className="w-full max-w-[28rem] xl:max-w-[34rem] 2xl:max-w-[40rem] h-auto rounded-2xl mx-auto"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 lg:order-2"
          >
            <h2 className="max-w-[18rem] md:max-w-none text-[2rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] font-heading font-semibold text-text-primary leading-[1.2]">
              ¿Eres estudiante o profesional
              <span className='hidden md:inline'> en biotecnología y buscas potenciar tu conocimiento?</span>
              <span className='inline md:hidden'>?</span>
            </h2>

            <p className="text-[1.2rem] lg:text-[1rem] xl:text-[1.2rem] 2xl:text-[1.5rem] text-text-secondary leading-[1.6]">
              En Biotraining conectamos la teoría con la práctica, ofreciendo capacitaciones que fortalecen el perfil académico de los estudiantes y el crecimiento profesional de quienes ya se desempeñan en el sector salud y biotecnología.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EstudianteProfesional;
