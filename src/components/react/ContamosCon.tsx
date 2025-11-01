import React from 'react';
import { motion } from 'framer-motion';
import iconGraduated from '../../assets/img/icon-graduate.webp';
import iconInstructor from '../../assets/img/icon-isntructor.webp';

interface StatItem {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
}

const stats: StatItem[] = [
    {
        id: '1',
        icon: (
            <img src={iconInstructor.src} alt="Instructor" className="w-16 sm:w-14 h-16 sm:h-14 object-contain" />
        ),
        title: '',
        description: 'Cada instructor cuenta con entrevistas publicadas de alto impacto en su área, que respaldan el dominio de su materia.',
    },
    {
        id: '2',
        icon: (
            <img src={iconGraduated.src} alt="Instructor" className="w-16 sm:w-14 h-16 sm:h-14 object-contain" />
        ),
        title: '',
        description: 'Nuestro equipo cuenta con formación internacional y una sólida trayectoria en sus especialidades.',
    },
    {
        id: '3',
        icon: (
            <div className="text-[2.75rem] sm:text-[2.5rem] font-bold">+100</div>
        ),
        title: '',
        description: 'Contamos con más de 100 alumnos ya capacitados con nuestra metodología.',
    },
];

const ContamosCon: React.FC = () => {
    return (
        <section
            className="mx-auto lg:max-w-5xl xl:max-w-6xl mt-16 md:mt-20"
        >
            <div className="ccontainer">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center md:text-start mb-4"
                >
                    <h2 className="text-2xl lg:text-[1.5rem] font-heading font-semibold text-black md:text-white  uppercase">
                        CONTAMOS CON
                    </h2>
                </motion.div>

                {/* Stats Grid - Positioned Absolutely at Bottom */}
                <div className="relative md:-mb-52 lg:-mb-56">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="bg-[#F2F2F2] rounded-3xl p-6 md:p-4 lg:p-[1.2rem] space-y-3  transition-shadow duration-300 relative z-10"
                            >
                                {/* Icon */}
                                <div className="flex justify-start text-primary-900 ">
                                    {stat.icon}
                                </div>

                                {/* Content */}
                                <p className="text-text-secondar font-medium text-[1.25rem] md:text-sm xl:text-base leading-relaxed">
                                    {stat.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContamosCon;
