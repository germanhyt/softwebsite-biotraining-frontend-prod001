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
import StudentContactModal from './StudentContactModal';
import CourseDetailModal from './CourseDetailModal';
import type { CourseDetail } from './CourseDetailModal';

interface Course {
  id: string;
  title: string;
  description: string;
  image: any;
  isVirtual: boolean;
  isLive: boolean;
  detail: CourseDetail;
}

const courses: Course[] = [
  {
    id: '1',
    title: 'QPCR - EN EL DIAGNÓSTICO Y EN LA INVESTIGACIÓN',
    description: 'Este curso conocerás el uso de la Reacción en Cadena de la Polimerasa en Tiempo Real (qPCR), una herramienta clave en la biología molecular moederna.',
    image: qpcrImg,
    isVirtual: true,
    isLive: true,
    detail: {
      intro: 'Descubre cómo aprovechar el potencial de las bases de datos biológicas para la investigación científica y la innovación biomédica.',
      learningTitle: '¿Qué aprenderás?',
      sections: [
        {
          title: 'Fundamentos de la reacción de PCR',
          items: [
            'Etapas y componentes de la reacción de PCR end point. Visualización e interpretación del producto.',
            'Problemas frecuentes y troubleshooting.',
          ],
        },
        {
          title: 'Adaptación a PCR Cuantitativa',
          items: [
            'PCR en d-point vs. qPCR: Cq como unidad informativa.',
            'Fluorescencia como magnitud analítica.',
            'Plots de fusión y análisis por curvas de melting.',
          ],
        },
        {
          title: 'Aplicaciones',
          items: [
            'Identificación de dominios conservados y motivos funcionales.',
            'Exploración de la estructura tridimensional de proteínas.',
            'Estrategias para la interpretación analítica de resultados.',
          ],
        },
      ],
      certificateNote: 'Se otorgará un certificado a nombre del Consejo Regional VIII Lima del Colegio de Biólogos del Perú por 16 hrs. Lectivas (1 crédito académico), y un certificado de finalización emitido por Biotraining.',
    },
  },
  {
    id: '2',
    title: 'DISEÑO Y OPTIMIZACIÓN DE PRIMERS PARA LA PCR',
    description: 'Aprende a diseñar y evaluar oligonucleótidos (primers) para experimentos de PCR y qPCR con precisión profesional.',
    image: disenoImg,
    isVirtual: true,
    isLive: true,
    detail: {
      intro: 'Aprende a diseñar y evaluar oligonucleótidos (primers) para experimentos de PCR y qPCR con precisión profesional.',
      learningTitle: '¿Qué aprenderás?',
      sections: [
        {
          title: 'Estrategias de optimización avanzadas',
          items: [
            'Control de contaminación por gDNA: Diseño en unión exón - exón (Span en exón - exón junction) y diseño entre intrones (Span en intron).',
            'Diseño diferencial entre isoformas.',
          ],
        },
        {
          title: 'Diseño asistido con herramientas on-line',
          items: [
            'Validación y optimización de primers con Primer - BLAST, Primer3 y Oligo Analyzer, para el análisis de especificidad y predicción de estructuras secundarias.',
          ],
        },
        {
          title: 'Casos de estudio y troubleshooting',
          items: [
            'Optimización y adaptación para variantes de la PCR (RT - PCR y qPCR). Diseño de tetraprimers para detección de SNPs. Ajuste de especificidad por PCR touchdown.',
          ],
        },
      ],
      certificateNote:
        ' Se ortogará un certificado de finalización por 16 hrs. lectivas (1 crédito académico), emitido por Biotraining.'
    },
  },
  {
    id: '3',
    title: 'EXPLORACIÓN Y ANÁLISIS CON BASES DE DATOS BIOLÓGICAS',
    description: 'Descubre cómo aprovechar el potencial de las base de datos biológicas para la investigación científica y la innovación tecnológica.',
    image: exploracionImg,
    isVirtual: true,
    isLive: true,
    detail: {
      intro: 'Descubre cómo aprovechar el potencial de las bases de datos biológicas para la investigación científica y la innovación biomédica.',
      learningTitle: '¿Qué aprenderás?',
      sections: [
        {
          title: 'Introducción a las ciencias Ómicas',
          items: [
            'Tecnologías High - Throughput para la generación de información.',
            'Introducción a las bases de datos biológicas: Navegación en plataformas clave como NCBI y Protein Data Bank.',
          ],
        },
        {
          title: 'Herramientas y análisis esenciales',
          items: [
            'Estrategias para identificar y descargar secuencias relevantes.',
            'Alineamiento simple y múltiple de secuencia de ADN y proteínas.',
            'Introducción al modelamiento y predicción de estructuras 3D.',
          ],
        },
        {
          title: 'Aplicaciones clásicas y casos de estudios',
          items: [
            'Identificación de dominios conservados y motivos funcionales.',
            'Exploración de la estructura tridimensional de proteínas.',
            'Estrategias para la interpretación analítica de resultados.',
          ],
        },
      ],
      certificateNote: 'Se otorgará un certificado a nombre del Consejo Regional VIII Lima del Colegio de Biólogos del Perú por 16 hrs. Lectivas (1 crédito académico), y un certificado de finalización emitido por Biotraining.',
    },
  },
  {
    id: '4',
    title: 'DIAGNÓSTICO MOLECULAR POC: AMPLIFICACIÓN ISOTÉRMICA E INTERPRETACIÓN RÁPIDA',
    description: 'En este curso conocerás las tecnologías de amplificación isotérmica (LAMP, RPA, NASBA) aplicadas al diagnóstico molecular en el punto de atención (POC).',
    image: diagnosticoImg,
    isVirtual: true,
    isLive: true,
    detail: {
      intro: 'En este curso conocerás las tecnologías de amplificación isotérmica (LAMP, RPA, NASBA) aplicadas al diagnóstico molecular en el punto de atención (POC).',
      learningTitle: '¿Qué aprenderás?',
      sections: [
        {
          title: 'Enfoque Point - of - care (POC) en salud',
          items: [
            'Importancia del diagnóstico POC en salud pública y medicina rural.',
            'Ventajas y limitaciones del diagnóstico molecular convencional (basado en PCR) en entornos rurales.',
          ],
        },
        {
          title: 'Amplificación LAMP/RPA y lectura rápida',
          items: [
            'Fundamentos de los sistemas de amplificación LAMP, RPA y otros.',
            'Interpretación rápida por técnicas colorimétricas.',
            'Inmunocromatografía y sistemas basados en CRISPR/Cas.',
          ],
        },
        {
          title: 'Casos de estudio y aplicaciones prácticas',
          items: [
            'Aplicaciones prácticas: Brotes, zonas remotas, vigilancia comunitaria (COVID-19, Malaria, VIH, Dengue).',
            'Integración de los sistemas POC con tecnologías de la información.',
          ],
        },
      ],
      certificateNote: 'Se otorgará un certificado a nombre del Consejo Regional VII Lima del Colegio de Biólogos del Perú por 16 hrs. lectivas (1 crédito académico), y un certificado de finalización emitido por Biotraining.',
    },
  },
];

const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 768,
} as const;



const Courses: React.FC = () => {

  const [courseInterested, setCourseInterested] = useState<string | undefined>(undefined);
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const selectedCourse = selectedCourseId
    ? courses.find((course) => course.id === selectedCourseId)
    : undefined;

  const swiperRefs = useRef<{ [key: string]: any }>({});
  const [showButtons, setShowButtons] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < BREAKPOINTS.TABLET;
    }
    return false;
  });
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);

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
          <h2 className="leading-[1.1] text-[2.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[2.5rem] font-heading font-semibold mb-4">
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
                      // className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500  rounded-t-2xl"
                      className="w-full h-full object-cover rounded-t-2xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-4">
                    <h3 className="min-h-[7.2rem] lg:min-h-[10.2rem] 2xl:min-h-[7.2rem] pr-10 lg:pr-5 font-heading text-[1.5rem] lg:text-[1.2rem] xl:text-[1.25rem] 2xl:text-[1.2rem] 3xl:text-[1.35rem] font-semibold leading-[1.2] ">
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
                    <p className="text-text-secondary text-sm leading-relaxed min-h-[6rem] lg:min-h-[8.5rem] 2xl:min-h-[6rem]">
                      {course.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSelectedCourseId(course.id)}
                      className="text-primary-500 font-semibold text-sm hover:text-primary-600 transition-colors"
                    >
                      Ver más
                    </button>
                  </div>

                </motion.div>
                <div className="w-full flex justify-center pt-4">
                  <Button
                    onClick={() => {
                      setCourseInterested(course.title);
                      setIsStudentModalOpen(true);
                    }}
                    variant="primary"
                  >
                    Inscríbete
                  </Button>
                </div>
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
                flex md:hidden justify-between items-center
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

      {/* Student Contact Modal */}
      <StudentContactModal
        isOpen={isStudentModalOpen}
        onClose={() => setIsStudentModalOpen(false)}
        courseInterested={courseInterested}
      />

      <CourseDetailModal
        isOpen={Boolean(selectedCourse)}
        onClose={() => setSelectedCourseId(null)}
        courseTitle={selectedCourse?.title || ''}
        detail={selectedCourse?.detail || null}
        onEnroll={(title) => {
          setSelectedCourseId(null);
          setCourseInterested(title);
          setIsStudentModalOpen(true);
        }}
      />
    </section >
  );
};

export default Courses;
