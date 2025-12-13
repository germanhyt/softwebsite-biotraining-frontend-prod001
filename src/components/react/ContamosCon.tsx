import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

import iconReconocidos from '../../assets/img/icon-reconocidos.webp';
import iconCerificacion from '../../assets/img/icon-certificacion.webp';
import iconCientifico from '../../assets/img/icon-cientifico.webp';


interface StatItem {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
}


const CountUp: React.FC<{
    target: number;
    durationMs?: number;
    className?: string;
    prefix?: string;
}> = ({ target, durationMs = 1200, className = '', prefix = '' }) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(wrapperRef, { amount: 0.6, once: true });
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        let rafId = 1;
        let start: number | null = null;

        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

        const step = (ts: number) => {
            if (start === null) start = ts;
            const elapsed = ts - start;
            const progress = Math.min(1, elapsed / durationMs);
            const current = Math.round(easeOutCubic(progress) * target);
            setValue(current);
            if (progress < 1) {
                rafId = requestAnimationFrame(step);
            }
        };

        rafId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(rafId);
    }, [isInView, durationMs, target]);

    return (
        <div ref={wrapperRef} className={className}>
            {prefix}{value}
        </div>
    );
};

const stats: StatItem[] = [
    {
        id: '1',
        icon: (
            <img src={iconCientifico.src} alt="Produccion Científica" className="w-16 sm:w-14 h-16 sm:h-14 object-contain" />
        ),
        title: 'Docentes con producción científica',
        description: 'Publicaciones en revistas de alto impacto que respaldan su experiencia.',
    },
    {
        id: '2',
        icon: (
            <img src={iconReconocidos.src} alt="Instituciones Reconocidas" className="w-16 sm:w-14 h-16 sm:h-14 object-contain" />
        ),
        title: 'Trayectoria en instituciones reconocidas',
        description: 'Experiencia en centros de referencia a nivel nacional e internacional.',
    },
    {
        id: '3',
        icon: (
            <div className="text-[2.75rem] sm:text-[2.5rem] font-bold">+100</div>
        ),
        title: 'Profesionales capacitados',
        description: 'Aprendizaje aplicado para decisiones reales.',
    },
    {
        id: '4',
        icon: (
            <img src={iconCerificacion.src} alt="Cerfiicaciones" className="w-16 sm:w-14 h-16 sm:h-14 object-contain" />
        ),
        title: 'Certificación acreditada',
        description: 'Aval de instituciones académicas y profesionales del sector.',
    },
];

const ContamosCon: React.FC = () => {
    return (
        <section
            className="mx-auto lg:max-w-5xl xl:max-w-[90rem] mt-16 md:mt-20"
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
                <div className="relative md:-mb-72">
                    <div className="grid grid-cols-2  md:grid-cols-4 gap-4 sm:gap-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="hover:shadow-xl cursor-pointer bg-[#F2F2F2] rounded-3xl p-4 sm:p-6 md:p-4 lg:p-[1.2rem] space-y-3  transition-shadow duration-300 relative z-10"
                            >
                                {/* Icon / Counter */}
                                <div className="flex justify-start text-primary-900 ">
                                    {stat.id === '3' ? (
                                        <CountUp
                                            target={100}
                                            prefix="+"
                                            className="text-[2.75rem] sm:text-[2.5rem] font-bold"
                                        />
                                    ) : (
                                        stat.icon
                                    )}
                                </div>

                                <div className='flex flex-col gap-2'>
                                    {/* Title */}
                                    <h3
                                        className="min-h-[2.5rem] text-[1rem] md:text-[1rem] lg:text-[1.125rem] leading-[1.35rem] sm:leading-[1.45rem] font-semibold text-text-primary-900"
                                    >
                                        {stat.title}
                                    </h3>

                                    {/* Content */}
                                    <p className="text-text-secondary font-medium text-[0.875rem] md:text-sm xl:text-base leading-[1.25rem] sm:leading-relaxed">
                                        {stat.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContamosCon;
