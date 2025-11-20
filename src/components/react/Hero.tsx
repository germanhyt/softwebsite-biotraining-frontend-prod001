import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import heroBanner from '../../assets/img/hero-banner_base.webp';
import heroBanner1 from '../../assets/img/hero-banner_1.webp';
import heroBanner2 from '../../assets/img/hero-banner_2.webp';
import heroBanner3 from '../../assets/img/hero-banner_3.webp';
import heroBanner4 from '../../assets/img/hero-banner_4.webp';
import heroBanner5 from '../../assets/img/hero-banner_5.webp';
import ContamosCon from './ContamosCon';
import Button from './Button';

const Hero: React.FC = () => {

    const heroImages = [
        heroBanner1,
        heroBanner2,
        heroBanner3,
        heroBanner4,
        heroBanner5
    ];

    return (
        <div className='relative '>
            <section
                className="relative  lg:min-h-[45rem]  pt-40 pb-24 md:pb-44 lg:pb-40"
                style={{
                    background: 'linear-gradient(180deg, #AB323D 0%, #1a1a1a 100%)'
                }}
            >
                <div className="ccontainer mx-auto ">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-[55%] text-white space-y-4 lg:space-y-6 xl:space-y-8"
                        >
                            <div className='space-y-3'>
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-[2.5rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[3.5rem] font-heading font-semibold leading-[1.1]"
                                    style={{
                                        textShadow: '0 2px 10px rgba(0,0,0,0.1)'
                                    }}
                                >
                                    Impulsa tu carrera en biotecnología con formación de nivel profesional
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="max-w-[24rem] md:max-w-xl 2xl:max-w-[32rem] text-[1rem] lg:text-lg xl:text-xl leading-relaxed text-white/95 font-sans"
                                >
                                    Potencia tus conocimientos con cursos especializados, docentes expertos y certificación reconocida.
                                </motion.p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="pt-2"
                            >
                                <Button href="#cursos" variant="primary">
                                    Ver cursos
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Right Image Swiper */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="w-full lg:w-[45%]"
                        >
                            <div className='flex lg:justify-self-end'>
                                <Swiper
                                    modules={[Autoplay, EffectFade]}
                                    effect="fade"
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                    speed={1500}
                                    className="max-w-[25rem] lg:max-w-[24rem] xl:max-w-[34rem]  max-h-[24rem] xl:max-h-[30rem] rounded-3xl shadow-2xl overflow-hidden"
                                >
                                    {
                                        heroImages.map((image, index) => (
                                            <SwiperSlide key={index}>
                                                <img
                                                    src={image.src}
                                                    alt={`Profesionales en biotecnología ${index + 1}`}
                                                    className="w-[100%] h-[28rem] object-cover"
                                                />
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className='md:absolute md:bottom-28 left-0 right-0'>
                <ContamosCon />
            </div>
        </div>
    );
};

export default Hero;
