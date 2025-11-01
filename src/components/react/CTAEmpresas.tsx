import React from 'react';
import { motion } from 'framer-motion';
import ctaImg from '../../assets/img/section-capacita-equipo_cta.webp';
import ctaImgMobile from '../../assets/img/section-capacita-equipo_cta-mobile.webp';
import Button from './Button';

const CTAEmpresas: React.FC = () => {
  return (
    <>
      {/* Background Image with Overlay */}
      {/* <div className=" absolute inset-0">
        <img
          src={ctaImg.src}
          alt="Capacitación empresarial"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/95 via-[#0A192F]/85 to-[#0A192F]/60" />
      </div> */}

      {/* Content */}
      <section id="empresas" className="ccontainer mx-auto overflow-hidden py-20">
        <div className='relative z-10 min-h-[42rem] md:min-h-max py-16 md:py-20 lg:py-24 pl-10 '>
          <div className='absolute inset-0 z-0'>
            <img
              src={ctaImg.src}
              alt="Capacitación empresarial"
              className="hidden sm:flex w-full h-full object-cover object-center rounded-xl"
            />
            <img
              src={ctaImgMobile.src}
              alt="Capacitación empresarial"
              className="flex sm:hidden w-full h-full object-cover object-center rounded-xl"
            />
          </div>
          <div className="relative max-w-2xl lg:max-w-3xl z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-[36rem] text-white space-y-6 lg:space-y-8"
            >
              <div className='space-y-4 pr-5'>
                <h2 className="text-[1.5rem] sm:text-[2.5rem] xl:text-[3rem] leading-[1.2] font-heading font-semibold ">
                  Capacita a tu equipo y mejora la eficiencia de tu empresa
                </h2>

                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-white/90 max-w-xl lg:max-w-2xl">
                  Formación integral para que tu equipo domine herramientas, equipos y procedimientos clave en salud y biotecnología, garantizando calidad y eficiencia operativa.
                </p>
              </div>

              <div className="pt-2 lg:pt-4">
                <Button href="#empresas" variant="primary">
                  Más Información
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTAEmpresas;
