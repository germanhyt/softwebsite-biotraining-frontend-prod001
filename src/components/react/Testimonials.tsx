import React, { useCallback, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Maríafe Álvarez',
    role: 'Universidad Nacional de San Agustín',
    content:
      'La experiencia fue realmente enriquecedora. La información recibida contribuyó significativamente a mi crecimiento profesional y me permitió aplicar, de forma más sólida, los conocimientos adquiridos en los laboratorios de mi universidad. Me siento muy agradecida por haber sido parte de los cursos y charlas impartidas. Muchas gracias por la oportunidad y por todo lo aprendido.',
  },
  {
    id: '2',
    name: 'Wendy Herrera',
    role: 'Universidad Nacional de Trujillo',
    content:
      'El curso fue muy dinámico y con una explicación clara y fácil de comprender.',
  },
  {
    id: '3',
    name: 'Camila Bravo',
    role: 'Universidad Peruana Cayetano Heredia',
    content:
      'Excelente experiencia. La teoría fue explicada de manera secuencial y coherente, mostrando de forma clara la lógica detrás del PCR. Además, se compartieron tips muy útiles y puntos críticos a considerar para obtener buenos resultados en los ensayos.',
  },
  {
    id: '4',
    name: 'Kory Guamán',
    role: 'Universidad Peruana Cayetano Heredia',
    content:
      'Me encantó. Son cursos muy completos y con profesores excelentes. Siento que reforcé conocimientos y aprendí muchas cosas nuevas.',
  },
  {
    id: '5',
    name: 'Joel Torres',
    role: 'Universidad Peruana Cayetano Heredia',
    content:
      'El curso de biología molecular me ayudó enormemente a comprender en profundidad las problemáticas asociadas a técnicas como PCR y qPCR, y a mejorar los experimentos que realizaba en el laboratorio.',
  },
];

const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 768,
} as const;

const Testimonials: React.FC = () => {
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
    <section className="py-20 bg-background-primary">
      <div className="ccontainer">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[32rem] mx-auto text-center mb-16"
        >
          <h2 className="text-[2.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[2.5rem] leading-[1.2] font-heading font-semibold mb-4">
            Conoce la experiencia de nuestros alumnos
          </h2>
        </motion.div>

        {/* Swiper with custom navigation */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => (swiperRefs.current["testimonios"] = swiper)}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="swiper pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col min-h-[32.5rem] bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 py-6 xl:py-8 mx-4 md:mx-0 px-8 xl:px-6 relative border border-gray-300 h-full"
                >
                  {/* Quote Icon - Large at top left */}
                  <div className="mb-4 space-y-4">
                    <span className="text-5xl font-serif text-text-primary leading-none">❛❛</span>

                    {/* Content */}
                    <p className="text-text-primary text-[0.95rem] leading-relaxed sm:min-h-[18rem] sm:max-w-[18rem]">
                      {testimonial.content}
                    </p>
                  </div>

                  <div className="pt-3">
                    <p className="font-heading font-semibold text-[1rem] 2xl:text-[1rem] text-text-primary">
                      {testimonial.name}
                    </p>
                    <p className="text-text-secondary text-[0.95rem] max-w-[14rem]  mt-1">
                      {testimonial.role}
                    </p>
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
              className="absolute top-1/2 left-0 right-0 z-[99] flex justify-between items-center"
            >
              <button
                className="button-custom-prev"
                aria-label="button-custom-prev"
                onClick={() => swiperRefs?.current["testimonios"].slidePrev()}
              >
                <FaChevronLeft size={30} />
              </button>
              <button
                className="button-custom-next"
                aria-label="button-custom-next"
                onClick={() => swiperRefs?.current["testimonios"].slideNext()}
              >
                <FaChevronRight size={30} />
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
