import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: '🎯',
    title: 'Capacitación Especializada',
    description: 'Cursos diseñados por expertos de la industria con contenido actualizado y relevante.',
  },
  {
    icon: '👥',
    title: 'Instructores Certificados',
    description: 'Aprende de profesionales con amplia experiencia en sus áreas de especialización.',
  },
  {
    icon: '📊',
    title: 'Seguimiento Personalizado',
    description: 'Monitorea tu progreso y recibe retroalimentación individualizada.',
  },
  {
    icon: '🏆',
    title: 'Certificación Reconocida',
    description: 'Obtén certificados avalados que potencien tu perfil profesional.',
  },
  {
    icon: '💼',
    title: 'Casos Prácticos',
    description: 'Aplica conocimientos en proyectos reales y desarrolla habilidades prácticas.',
  },
  {
    icon: '🌐',
    title: 'Acceso 24/7',
    description: 'Estudia a tu ritmo con acceso ilimitado al contenido desde cualquier lugar.',
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="text-5xl mb-4">{feature.icon}</div>
      <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
        {feature.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
    </motion.div>
  );
}

export default function Features() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <section id="nosotros" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
            ¿Por qué elegir{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              BioTraining?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una experiencia de aprendizaje integral con las mejores herramientas
            y metodologías para tu desarrollo profesional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
