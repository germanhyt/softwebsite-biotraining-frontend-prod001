import React, { useCallback, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import draMaria from '../../assets/img/section-aprende-expertos_dra-maria-machado.png';
import Button from './Button';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Instructor {
  id: string;
  name: string;
  specialty: string;
  description: string;
  image: any;
}

const instructors: Instructor[] = [
  {
    id: '1',
    name: 'Dra. María Machado',
    specialty: 'Farmacología clínica',
    description: 'Encargada de toma de muestras y monitoreo en el área de salud clínica.',
    image: draMaria,
  },
  {
    id: '2',
    name: 'Dra. María Machado',
    specialty: 'Farmacología clínica',
    description: 'Encargada de toma de muestras y monitoreo en el área de salud clínica.',
    image: draMaria,
  },
  {
    id: '3',
    name: 'Dra. María Machado',
    specialty: 'Biotecnología molecular',
    description: 'Encargada de toma de muestras y monitoreo en el área de salud clínica.',
    image: draMaria,
  },
  {
    id: '4',
    name: 'Dra. María Machado',
    specialty: 'Biotecnología molecular',
    description: 'Encargada de toma de muestras y monitoreo en el área de salud clínica.',
    image: draMaria,
  },
];

const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 768,
} as const;

const Instructors: React.FC = () => {
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
    <section className="py-20 ">
      <div className="ccontainer">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-[2.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[2.5rem] leading-[1.2] font-heading font-semibold mb-6">
            Aprende de expertos con experiencia comprobada
          </h2>
          <p className="text-text-secondary text-lg">
            Recibe clases de profesionales con sólida experiencia y reconocimiento en su área.
          </p>
        </motion.div>

        {/* Swiper (like Courses) */}
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
            onSwiper={(swiper) => (swiperRefs.current["instructores"] = swiper)}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="swiper pb-12"
          >
            {instructors.map((instructor, index) => (
              <SwiperSlide key={instructor.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative rounded-xl bg-background-secondary overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 h-full"
                >
                  {/* Image */}
                  <div className="relative h-[18rem] overflow-hidden">
                    <img
                      src={instructor.image.src}
                      alt={instructor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-heading text-[1.25rem] lg:text-[1.15rem] xl:text-[1.25rem] 2xl:text-[1.25rem] font-semibold leading-[1.2]">
                      {instructor.name}
                    </h3>
                    <p className="text-text-secondary font-medium">
                      {instructor.specialty}
                    </p>
                    <p className="text-text-secondary text-sm leading-relaxed min-h-[4.5rem]">
                      {instructor.description}
                    </p>
                    {/* <div className="w-full flex justify-center pt-2">
                      <Button href="#" variant="primary">Conocer instructor</Button>
                    </div> */}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {showButtons && (
            <motion.div

              className="absolute top-1/2 left-0 right-0 z-[99] flex justify-between items-center"
            >
              <button
                className="button-custom-prev"
                aria-label="button-custom-prev"
                onClick={() => swiperRefs?.current["instructores"].slidePrev()}
              >
                <FaChevronLeft size={30} />
              </button>
              <button
                className="button-custom-next"
                aria-label="button-custom-next"
                onClick={() => swiperRefs?.current["instructores"].slideNext()}
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

export default Instructors;
