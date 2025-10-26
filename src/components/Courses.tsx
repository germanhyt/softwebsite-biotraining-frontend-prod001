import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
  price: string;
  category: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: 'Gestión de Proyectos Profesional',
    description: 'Domina las metodologías ágiles y tradicionales para liderar proyectos exitosos.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    duration: '8 semanas',
    level: 'Intermedio',
    price: '$299',
    category: 'Gestión',
  },
  {
    id: 2,
    title: 'Liderazgo y Desarrollo de Equipos',
    description: 'Desarrolla habilidades de liderazgo efectivo y gestión de equipos de alto rendimiento.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    duration: '6 semanas',
    level: 'Todos los niveles',
    price: '$249',
    category: 'Liderazgo',
  },
  {
    id: 3,
    title: 'Análisis de Datos y Business Intelligence',
    description: 'Aprende a transformar datos en insights accionables para la toma de decisiones.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    duration: '10 semanas',
    level: 'Avanzado',
    price: '$349',
    category: 'Tecnología',
  },
  {
    id: 4,
    title: 'Marketing Digital Estratégico',
    description: 'Estrategias modernas de marketing digital para impulsar tu marca en línea.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    duration: '7 semanas',
    level: 'Intermedio',
    price: '$279',
    category: 'Marketing',
  },
  {
    id: 5,
    title: 'Comunicación Efectiva y Oratoria',
    description: 'Perfecciona tus habilidades de comunicación y presentación en público.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80',
    duration: '5 semanas',
    level: 'Todos los niveles',
    price: '$199',
    category: 'Soft Skills',
  },
  {
    id: 6,
    title: 'Gestión Financiera para No Financieros',
    description: 'Comprende los fundamentos financieros esenciales para tu carrera profesional.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
    duration: '6 semanas',
    level: 'Principiante',
    price: '$229',
    category: 'Finanzas',
  },
];

function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col group">
      <div className="relative overflow-hidden h-48">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary-600 text-white text-sm font-semibold rounded-full">
            {course.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-600 mb-4 flex-1">{course.description}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            <span>{course.level}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <span className="text-2xl font-bold text-primary-600">{course.price}</span>
          <button className="px-6 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
            Ver Más
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Courses() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <section id="cursos" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
            Nuestros{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Cursos Destacados
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora nuestra selección de cursos especializados diseñados para
            impulsar tu crecimiento profesional.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Swiper */}
        <div className="lg:hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            className="!pb-12"
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <CourseCard course={course} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <button className="px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold text-lg hover:bg-primary-700 hover:shadow-xl transition-all duration-300">
            Ver Todos los Cursos
          </button>
        </motion.div>
      </div>
    </section>
  );
}
