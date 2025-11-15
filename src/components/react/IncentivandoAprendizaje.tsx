import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import incentivoImg from '../../assets/img/section-incentivando-aprendizaje.webp';

const IncentivandoAprendizaje: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasAutoPlayed = useRef(false);
  const lastTopRef = useRef<number | null>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (!isPlaying) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Autoplay once when 50% of the section is visible while scrolling down
  useEffect(() => {
    const node = sectionRef.current;
    if (!node || hasAutoPlayed.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const currentTop = entry.boundingClientRect.top;

        const wasScrollingDown =
          lastTopRef.current !== null && currentTop < lastTopRef.current!;

        // Update last top for next callback
        lastTopRef.current = currentTop;

        if (
          entry.isIntersecting &&
          entry.intersectionRatio >= 0.5 &&
          wasScrollingDown &&
          !hasAutoPlayed.current
        ) {
          // Ensure muted for reliable autoplay across browsers
          if (videoRef.current) {
            // Force muted to satisfy autoplay policies
            setIsMuted(true);
            videoRef.current.muted = true;
            videoRef.current
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => {
                // Ignore autoplay rejections to avoid layout thrash
              });
          }

          hasAutoPlayed.current = true;
          observer.unobserve(node);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="conocenos" className="py-20 bg-white">
      <div className="ccontainer">
        <div className="grid md:grid-cols-11 gap-16 items-center max-w-[56rem] mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 px-4 md:px-0 text-center md:text-start space-y-6 "
          >
            <h2 className="text-[2.5rem] lg:text-[4rem] xl:text-[4.25rem] leading-[1.1] font-heading font-semibold text-text-primary ">
              Incentivando el aprendizaje y la exigencia
            </h2>

            <p className="text-lg text-text-secondary leading-relaxed md:max-w-sm">
              En Biotraining, nuestro objetivo es impulsar tu desarrollo profesional preparando herramientas formativas de alta calidad.
            </p>
          </motion.div>

          {/* Right Image/Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative md:col-span-4"
          >
            <div className="relative rounded-full overflow-hidden">
              {/* Video */}
              <video
                ref={videoRef}
                loop
                playsInline
                className="w-full min-h-[20rem] object-cover"
                poster={incentivoImg.src}
              >
                <source src="/biotecnologia.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>

              {/* Play/Pause Button Overlay */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                  onClick={handlePlayClick}
                >
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white transition-all group-hover:scale-110">
                    <svg
                      className="w-10 h-10 text-text-primary ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Video Controls */}
              {isPlaying && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {/* Pause Button */}
                  <button
                    onClick={handlePlayClick}
                    className="w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all hover:scale-110"
                    aria-label="Pausar video"
                  >
                    <svg
                      className="w-5 h-5 text-text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  </button>

                  {/* Mute/Unmute Button */}
                  <button
                    onClick={handleMuteToggle}
                    className="w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all hover:scale-110"
                    aria-label={isMuted ? "Activar sonido" : "Silenciar"}
                  >
                    {isMuted ? (
                      <svg
                        className="w-5 h-5 text-text-primary"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 text-text-primary"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                      </svg>
                    )}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IncentivandoAprendizaje;
