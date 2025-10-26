import React, { useCallback, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import qpcrImg from '../../assets/img/section-curso_qpcr.webp';
import disenoImg from '../../assets/img/section-curso_diseno-optimizacion.webp';
import exploracionImg from '../../assets/img/section-curso_exploracion-analisis.webp';
import diagnosticoImg from '../../assets/img/section-curso_diagnostico-molecular.webp';
import Button from './Button';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Course {
  id: string;
  title: string;
  description: string;
  image: any;
  isVirtual: boolean;
  isLive: boolean;
}

const courses: Course[] = [
  {
    id: '1',
    title: 'QPCR - EN EL DIAGNÓSTICO Y EN LA INVESTIGACIÓN',
    description: 'Este curso conocerás el uso de la Reacción en Cadena de la Polimerasa en Tiempo Real (qPCR).',
    image: qpcrImg,
    isVirtual: true,
    isLive: true,
  },
  {
    id: '2',
    title: 'DISEÑO Y OPTIMIZACIÓN DE PRIMERS PARA LA PCR',
    description: 'Aprende a diseñar y evaluar oligonucleótidos (primers) para experimentos de PCR y qPCR con precisión profesional.',
    image: disenoImg,
    isVirtual: true,
    isLive: true,
  },
  {
    id: '3',
    title: 'EXPLORACIÓN Y ANÁLISIS CON BASES DE DATOS BIOLÓGICAS',
    description: 'Descubre cómo aprovechar el potencial de los datos biológicos (Primers) para experimentos de PCR y qPCR con precisión profesional.',
    image: exploracionImg,
    isVirtual: true,
    isLive: true,
  },
  {
    id: '4',
    title: 'DIAGNÓSTICO MOLECULAR POC: AMPLIFICACIÓN ISOTÉRMICA E INTERPRETACIÓN RÁPIDA',
    description: 'En este curso conocerás las tecnologías de amplificación isotérmica (LAMP, RPA, NASBA) aplicadas al diagnóstico molecular en el punto de atención (POC).',
    image: diagnosticoImg,
    isVirtual: true,
    isLive: true,
  },
];

const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 768,
} as const;



const Courses: React.FC = () => {

  const swiperRefs = useRef<{ [key: string]: any }>({});
  const [showButtons, setShowButtons] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < BREAKPOINTS.TABLET;
    }
    return false;
  });

  const handleMouseEnter = useCallback(() => {
    if (typeof window !== 'undefined' && window.innerWidth >= BREAKPOINTS.TABLET) {
      setShowButtons(true);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (typeof window !== 'undefined' && window.innerWidth >= BREAKPOINTS.TABLET) {
      setShowButtons(false);
    }
  }, []);



  return (
    <section id="cursos" className="py-20 bg-white">
      <div className="ccontainer">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16  mx-auto max-w-[28rem]"
        >
          <h2 className="text-[2.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[2.5rem] font-heading font-semibold mb-4">
            Nuestros cursos especializados
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Te ofrecemos 4 propuestas formativas para elevar tus habilidades.
          </p>
        </motion.div>

        {/* Swiper */}
        <div
          className="swiper-parent-cursos relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            // pagination={{ clickable: true }}
            onSwiper={(swiper) => (swiperRefs.current["cursos"] = swiper)}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              }
            }}
            className="swiper pb-12"
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group relative rounded-xl bg-white overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 h-full"
                >
                  {/* Image */}
                  <div className="relative h-[15rem] overflow-hidden">
                    <img
                      src={course.image.src}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500  rounded-2xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-4">
                    <h3 className="min-h-[7.5rem] max-w-[18rem] md:max-w-none font-heading text-[1.5rem] lg:text-[1.25rem] xl:text-[1.5rem] 2xl:text-[1.5rem] font-semibold leading-[1.2] ">
                      {course.title}
                    </h3>
                    {/* Tags */}
                    <div className="flex gap-2">
                      {course.isVirtual && (
                        <span className="px-3 py-1 bg-primary-50 text-primary-500 rounded-full text-sm font-semibold">
                          Virtual
                        </span>
                      )}
                      {course.isLive && (
                        <span className="px-3 py-1 bg-primary-50 text-primary-500 rounded-full text-sm font-semibold">
                          En vivo
                        </span>
                      )}
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed min-h-[5.5rem]">
                      {course.description}
                    </p>
                    <div className="w-full flex justify-center pt-4">
                      <Button
                        href="#"
                        variant="primary"
                      >
                        Inscríbete
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          {showButtons && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              exit={{ opacity: 0 }}
              className="
                absolute top-1/2 left-0 right-0 z-[5]
                flex justify-between items-center
                "
            >
              <button
                className="button-custom-prev"
                aria-label="button-custom-prev"
                onClick={() => swiperRefs?.current["cursos"].slidePrev()}
              >
                <FaChevronLeft size={30} />
              </button>
              <button
                className="button-custom-next"
                aria-label="button-custom-next"
                onClick={() => swiperRefs?.current["cursos"].slideNext()}
              >
                <FaChevronRight size={30} />
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section >
  );
};

export default Courses;
