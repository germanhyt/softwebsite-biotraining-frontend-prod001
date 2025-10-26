import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    image: string;
    content: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'María González',
        role: 'Gerente de Proyectos',
        company: 'Tech Solutions',
        image: 'https://i.pravatar.cc/150?img=1',
        content: 'BioTraining transformó mi carrera. Los cursos son prácticos, actualizados y los instructores son excepcionales. Logré un ascenso en mi empresa gracias a las habilidades adquiridas.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Carlos Rodríguez',
        role: 'Analista de Datos',
        company: 'DataCorp',
        image: 'https://i.pravatar.cc/150?img=12',
        content: 'La metodología de enseñanza es excelente. Pude aplicar inmediatamente lo aprendido en mi trabajo diario. El soporte del equipo es increíble.',
        rating: 5,
    },
    {
        id: 3,
        name: 'Ana Martínez',
        role: 'Directora de Marketing',
        company: 'Creative Agency',
        image: 'https://i.pravatar.cc/150?img=5',
        content: 'Los cursos de BioTraining me dieron las herramientas necesarias para liderar mi equipo de manera más efectiva. El contenido es de primera calidad.',
        rating: 5,
    },
    {
        id: 4,
        name: 'Jorge Fernández',
        role: 'Consultor Financiero',
        company: 'Finance Pro',
        image: 'https://i.pravatar.cc/150?img=15',
        content: 'Increíble experiencia de aprendizaje. La plataforma es intuitiva y el contenido es relevante para el mercado actual. Totalmente recomendado.',
        rating: 5,
    },
    {
        id: 5,
        name: 'Laura Sánchez',
        role: 'Líder de Equipo',
        company: 'Innovation Labs',
        image: 'https://i.pravatar.cc/150?img=9',
        content: 'Los instructores son expertos en sus campos. Aprendí técnicas que aplico todos los días en mi trabajo. La inversión valió totalmente la pena.',
        rating: 5,
    },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>

            {/* Content */}
            <p className="text-gray-700 leading-relaxed mb-6 flex-1 italic">
                "{testimonial.content}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">
                        {testimonial.role} - {testimonial.company}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function Testimonials() {
    const titleRef = useRef(null);
    const isTitleInView = useInView(titleRef, { once: true });

    return (
        <section id="testimonios" className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div
                    ref={titleRef}
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
                        Lo que dicen{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                            Nuestros Estudiantes
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Historias reales de profesionales que transformaron sus carreras con
                        nuestros cursos de capacitación.
                    </p>
                </motion.div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    className="!pb-12"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <TestimonialCard testimonial={testimonial} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Trust Indicators */}
                <motion.div
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">4.9/5</h3>
                        <p className="text-gray-600">Calificación Promedio</p>
                    </div>
                    <div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">500+</h3>
                        <p className="text-gray-600">Estudiantes Activos</p>
                    </div>
                    <div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">95%</h3>
                        <p className="text-gray-600">Satisfacción</p>
                    </div>
                    <div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">50+</h3>
                        <p className="text-gray-600">Cursos Disponibles</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
