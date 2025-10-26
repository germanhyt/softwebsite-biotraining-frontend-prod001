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
    name: 'Nancy Castillo',
    role: 'Egresada de Biología en la facultad de UNMSM.',
    content: 'Me encantaron las clases, el contenido que te comparten y el acompañamiento en cada duda que tenía fue demasiado bueno. ¡100% recomendado!',
  },
  {
    id: '2',
    name: 'Carlos Mendoza',
    role: 'Biotecnólogo en Instituto Nacional de Salud.',
    content: 'Los cursos de Biotraining me ayudaron a conseguir mi trabajo actual. La metodología práctica y los docentes expertos hacen la diferencia.',
  },
  {
    id: '3',
    name: 'María Gonzales',
    role: 'Estudiante de Biotecnología - UNALM.',
    content: 'Excelente inversión para mi formación. Ahora manejo equipos y técnicas que antes solo veía en papers. Súper recomendado.',
  },
  {
    id: '4',
    name: 'Jorge Ramírez',
    role: 'Investigador en UPCH.',
    content: 'La calidad de los contenidos y el seguimiento personalizado superaron mis expectativas. Definitivamente volveré a tomar otro curso.',
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
    <section className="pt-20 bg-background-primary">
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
                  className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 relative border border-gray-100 h-full"
                >
                  {/* Quote Icon - Large at top left */}
                  <div className="mb-4">
                    <span className="text-5xl font-serif text-text-primary leading-none">"</span>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <p className="text-text-secondary text-sm leading-relaxed min-h-[7rem]">
                      {testimonial.content}
                    </p>

                    <div className="pt-3">
                      <p className="font-heading font-semibold text-base text-text-primary">
                        {testimonial.name}
                      </p>
                      <p className="text-text-secondary text-xs mt-1">
                        {testimonial.role}
                      </p>
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
