import { e as createAstro, f as createComponent, h as addAttribute, k as renderHead, l as renderSlot, r as renderTemplate, n as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bg0Qo1bg.mjs';
import 'clsx';
/* empty css                                 */
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight, FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Swal from 'sweetalert2';
export { renderers } from '../renderers.mjs';

const defaultSEO = {
  title: "Biotraining Academy | Cursos de Biotecnología y Ciencias de la Salud",
  description: "Potencia tus conocimientos con cursos especializados en biotecnología y ciencias de la salud. Docentes expertos, certificación reconocida y metodología práctica.",
  canonical: "https://www.biotraining.pe",
  og: {
    title: "Biotraining Academy - Formación Profesional en Biotecnología",
    description: "Impulsa tu carrera en biotecnología con formación de nivel profesional. Cursos virtuales en vivo con expertos del sector.",
    image: "/og-image.jpg",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "@biotraining",
    creator: "@biotraining"
  }
};
const pageSEO = {
  home: {
    title: "Biotraining Academy | Impulsa tu carrera en biotecnología",
    description: "Contamos con cursos especializados, docentes expertos y certificación reconocida. Aprende biotecnología molecular, qPCR, bases de datos biológicas y más."
  }};

const $$Astro = createAstro("https://www.biotraining.pe");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { seo } = Astro2.props;
  const mergedSEO = {
    ...defaultSEO,
    ...seo,
    og: { ...defaultSEO.og, ...seo?.og },
    twitter: { ...defaultSEO.twitter, ...seo?.twitter }
  };
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- SEO Meta Tags --><title>${mergedSEO.title}</title><meta name="description"${addAttribute(mergedSEO.description, "content")}><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Open Graph --><meta property="og:type"${addAttribute(mergedSEO.og?.type || "website", "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:title"${addAttribute(mergedSEO.og?.title || mergedSEO.title, "content")}><meta property="og:description"${addAttribute(mergedSEO.og?.description || mergedSEO.description, "content")}>${mergedSEO.og?.image && renderTemplate`<meta property="og:image"${addAttribute(mergedSEO.og.image, "content")}>`}<!-- Twitter --><meta name="twitter:card"${addAttribute(mergedSEO.twitter?.card || "summary_large_image", "content")}>${mergedSEO.twitter?.site && renderTemplate`<meta name="twitter:site"${addAttribute(mergedSEO.twitter.site, "content")}>`}${mergedSEO.twitter?.creator && renderTemplate`<meta name="twitter:creator"${addAttribute(mergedSEO.twitter.creator, "content")}>`}<!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Fonts Preload --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/layouts/Layout.astro", void 0);

const siteConfig = {
  name: "Biotraining Academy",
  links: {
    facebook: "https://facebook.com/biotraining",
    instagram: "https://instagram.com/biotraining",
    linkedin: "https://linkedin.com/company/biotraining",
    youtube: "https://youtube.com/biotraining"
  },
  contact: {
    phone: "969 977 934",
    email: "ktalweb.peru@gmail.com"},
  navigation: [
    { name: "¿Por qué elegirnos?", href: "#beneficios" },
    { name: "Cursos", href: "#cursos" },
    { name: "Conócenos", href: "#conocenos" },
    { name: "Para empresas", href: "#empresas" }
    // contacto
    // { name: 'Contacto', href: '#contacto' }
  ]
};

const logoImage = new Proxy({"src":"/_astro/logo.DZyTiX-c.webp","width":265,"height":61,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/logo.webp";
							}
							
							return target[name];
						}
					});

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);
  return /* @__PURE__ */ jsxs(
    motion.header,
    {
      initial: { y: -100 },
      animate: { y: 0 },
      className: "fixed top-0 left-0 right-0 z-[888] bg-white shadow-sm transition-all duration-300 py-4",
      children: [
        /* @__PURE__ */ jsx("div", { className: "ccontainer", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-24", children: [
          /* @__PURE__ */ jsx("a", { href: "/", className: "flex items-center", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: logoImage.src,
              alt: siteConfig.name,
              className: "h-12 w-auto"
            }
          ) }),
          /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-8", children: siteConfig.navigation.map((item) => /* @__PURE__ */ jsx(
            "a",
            {
              href: item.href,
              className: "font-sans font-normal text-base text-text-primary hover:text-primary-500 transition-colors",
              children: item.name
            },
            item.name
          )) }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#contacto",
              className: "hidden lg:block px-8 py-2.5 border-2 border-primary-500 text-primary-500 rounded-full font-sans font-medium hover:bg-primary-500 hover:text-white transition-all",
              children: "Contáctanos"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "lg:hidden p-2 relative z-[1001]",
              onClick: () => setIsMenuOpen(!isMenuOpen),
              "aria-label": "Toggle menu",
              children: /* @__PURE__ */ jsxs("div", { className: "w-6 h-5 flex flex-col justify-between", children: [
                /* @__PURE__ */ jsx(
                  motion.span,
                  {
                    animate: isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 },
                    className: "w-full h-0.5 bg-current origin-center transition-all"
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.span,
                  {
                    animate: isMenuOpen ? { opacity: 0 } : { opacity: 1 },
                    className: "w-full h-0.5 bg-current"
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.span,
                  {
                    animate: isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 },
                    className: "w-full h-0.5 bg-current origin-center transition-all"
                  }
                )
              ] })
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: isMenuOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: 0.3 },
              className: "fixed inset-0 bg-black/50 z-[998] lg:hidden",
              onClick: () => setIsMenuOpen(false)
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { clipPath: "circle(0% at 100% 0%)" },
              animate: { clipPath: "circle(150% at 100% 0%)" },
              exit: { clipPath: "circle(0% at 100% 0%)" },
              transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
                // Custom easing for smooth animation
              },
              className: "fixed top-0 right-0 bottom-0 w-full sm:w-[400px] bg-white z-[999] lg:hidden overflow-y-auto",
              children: /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
                /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: logoImage.src,
                    alt: siteConfig.name,
                    className: "h-10 w-auto"
                  }
                ) }),
                /* @__PURE__ */ jsx("nav", { className: "flex flex-col gap-6 justify-center items-center mb-8 mt-16", children: siteConfig.navigation.map((item, index) => /* @__PURE__ */ jsx(
                  motion.a,
                  {
                    href: item.href,
                    initial: { opacity: 0, x: 20 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: 0.1 + index * 0.05 },
                    className: "block font-sans font-medium text-xl text-text-primary hover:text-primary-500 transition-colors py-2",
                    onClick: () => setIsMenuOpen(false),
                    children: item.name
                  },
                  item.name
                )) }),
                /* @__PURE__ */ jsx(
                  motion.a,
                  {
                    href: "#contacto",
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.3 },
                    className: "block w-full px-8 py-3 text-center border-2 border-primary-500 text-primary-500 rounded-full font-sans font-medium hover:bg-primary-500 hover:text-white transition-all",
                    onClick: () => setIsMenuOpen(false),
                    children: "Contáctanos"
                  }
                )
              ] })
            }
          )
        ] }) })
      ]
    }
  );
};

new Proxy({"src":"/_astro/hero-banner_base.Bp0lFgjo.webp","width":386,"height":386,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/hero-banner_base.webp";
							}
							
							return target[name];
						}
					});

const heroBanner1 = new Proxy({"src":"/_astro/hero-banner_1.fynd0H0E.webp","width":3650,"height":2668,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/hero-banner_1.webp";
							}
							
							return target[name];
						}
					});

const heroBanner2 = new Proxy({"src":"/_astro/hero-banner_2.DVY43aEl.webp","width":3599,"height":2668,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/hero-banner_2.webp";
							}
							
							return target[name];
						}
					});

const heroBanner3 = new Proxy({"src":"/_astro/hero-banner_3.CZV2ELjm.webp","width":3653,"height":2666,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/hero-banner_3.webp";
							}
							
							return target[name];
						}
					});

const heroBanner4 = new Proxy({"src":"/_astro/hero-banner_4.ysMG1S5h.webp","width":3650,"height":2668,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/hero-banner_4.webp";
							}
							
							return target[name];
						}
					});

const heroBanner5 = new Proxy({"src":"/_astro/hero-banner_5.Dxz3jAN_.webp","width":3650,"height":2668,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/hero-banner_5.webp";
							}
							
							return target[name];
						}
					});

const iconGraduated = new Proxy({"src":"/_astro/icon-graduate.B1YqC36M.webp","width":270,"height":328,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/icon-graduate.webp";
							}
							
							return target[name];
						}
					});

const iconInstructor = new Proxy({"src":"/_astro/icon-isntructor.BnH2KL_6.webp","width":241,"height":232,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/icon-isntructor.webp";
							}
							
							return target[name];
						}
					});

const CountUp = ({ target, durationMs = 1200, className = "", prefix = "" }) => {
  const wrapperRef = useRef(null);
  const isInView = useInView(wrapperRef, { amount: 0.6, once: true });
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let rafId = 1;
    let start = null;
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    const step = (ts) => {
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
  return /* @__PURE__ */ jsxs("div", { ref: wrapperRef, className, children: [
    prefix,
    value
  ] });
};
const stats = [
  {
    id: "1",
    icon: /* @__PURE__ */ jsx("img", { src: iconInstructor.src, alt: "Instructor", className: "w-16 sm:w-14 h-16 sm:h-14 object-contain" }),
    title: "",
    description: "Instructores con entrevistas publicadas de alto impacto en su área, que respaldan el dominio de su materia."
  },
  {
    id: "2",
    icon: /* @__PURE__ */ jsx("img", { src: iconGraduated.src, alt: "Instructor", className: "w-16 sm:w-14 h-16 sm:h-14 object-contain" }),
    title: "",
    description: "Staff de profesionales con formación internacional y una sólida trayectoria en sus especialidades."
  },
  {
    id: "3",
    icon: /* @__PURE__ */ jsx("div", { className: "text-[2.75rem] sm:text-[2.5rem] font-bold", children: "+100" }),
    title: "",
    description: "Contamos con más de 100 alumnos ya capacitados con nuestra metodología."
  }
];
const ContamosCon = () => {
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "mx-auto lg:max-w-5xl xl:max-w-6xl mt-16 md:mt-20",
      children: /* @__PURE__ */ jsxs("div", { className: "ccontainer", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "text-center md:text-start mb-4",
            children: /* @__PURE__ */ jsx("h2", { className: "text-2xl lg:text-[1.5rem] font-heading font-semibold text-black md:text-white  uppercase", children: "CONTAMOS CON" })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "relative md:-mb-52 lg:-mb-56", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8", children: stats.map((stat, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.15 },
            className: "bg-[#F2F2F2] rounded-3xl p-6 md:p-4 lg:p-[1.2rem] space-y-3  transition-shadow duration-300 relative z-10",
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex justify-start text-primary-900 ", children: stat.id === "3" ? /* @__PURE__ */ jsx(
                CountUp,
                {
                  target: 100,
                  prefix: "+",
                  className: "text-[2.75rem] sm:text-[2.5rem] font-bold"
                }
              ) : stat.icon }),
              /* @__PURE__ */ jsx("p", { className: "text-text-secondar font-medium text-[1.25rem] md:text-sm xl:text-base leading-relaxed", children: stat.description })
            ]
          },
          stat.id
        )) }) })
      ] })
    }
  );
};

const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false
}) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    px-8 py-2.5 rounded-3xl
    font-medium text-[1.2rem] leading-[1.5em]
    transition-all duration-300
    hover:scale-[1.02] active:scale-[0.98]
    shadow-lg hover:shadow-xl
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
  `;
  const variantStyles = {
    primary: `
      bg-gradient-to-r from-[#AB323D] to-[#E1525F]
      text-white
      hover:from-[#8f2833] hover:to-[#c7394a]
    `,
    secondary: `
      bg-white text-[#E1525F]
      hover:bg-gray-50
    `
  };
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`.trim().replace(/\s+/g, " ");
  if (href) {
    return /* @__PURE__ */ jsx(
      motion.a,
      {
        href,
        className: combinedClassName,
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
        children
      }
    );
  }
  return /* @__PURE__ */ jsx(
    motion.button,
    {
      type,
      onClick,
      disabled,
      className: combinedClassName,
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.98 },
      children
    }
  );
};

const Hero = () => {
  const heroImages = [
    heroBanner1,
    heroBanner2,
    heroBanner3,
    heroBanner4,
    heroBanner5
  ];
  return /* @__PURE__ */ jsxs("div", { className: "relative ", children: [
    /* @__PURE__ */ jsx(
      "section",
      {
        className: "relative  lg:min-h-[45rem]  pt-40 pb-24 md:pb-44 lg:pb-40",
        style: {
          background: "linear-gradient(180deg, #AB323D 0%, #1a1a1a 100%)"
        },
        children: /* @__PURE__ */ jsx("div", { className: "ccontainer mx-auto ", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -50 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.8 },
              className: "w-full lg:w-[55%] text-white space-y-4 lg:space-y-6 xl:space-y-8",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsx(
                    motion.h1,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.2 },
                      className: "text-[2.5rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[3.5rem] font-heading font-semibold leading-[1.1]",
                      style: {
                        textShadow: "0 2px 10px rgba(0,0,0,0.1)"
                      },
                      children: "Impulsa tu carrera en biotecnología con formación de nivel profesional"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    motion.p,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: { delay: 0.4 },
                      className: "max-w-[24rem] md:max-w-xl 2xl:max-w-[32rem] text-[1rem] lg:text-lg xl:text-xl leading-relaxed text-white/95 font-sans",
                      children: "Potencia tus conocimientos con cursos especializados, docentes expertos y certificación reconocida."
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 0.5 },
                    className: "pt-2",
                    children: /* @__PURE__ */ jsx(Button, { href: "#cursos", variant: "primary", children: "Ver cursos" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.8, delay: 0.3 },
              className: "w-full lg:w-[45%]",
              children: /* @__PURE__ */ jsx(
                Swiper,
                {
                  modules: [Autoplay, EffectFade],
                  effect: "fade",
                  autoplay: {
                    delay: 3e3,
                    disableOnInteraction: false
                  },
                  loop: true,
                  speed: 1500,
                  className: "max-w-[25rem] lg:max-w-[24rem] xl:max-w-[30rem]  max-h-[24rem] xl:max-h-[30rem] rounded-3xl shadow-2xl overflow-hidden",
                  children: heroImages.map((image, index) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: image.src,
                      alt: `Profesionales en biotecnología ${index + 1}`,
                      className: "w-full h-full object-cover"
                    }
                  ) }, index))
                }
              )
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "md:absolute md:bottom-28 left-0 right-0", children: /* @__PURE__ */ jsx(ContamosCon, {}) })
  ] });
};

const estudianteImage = new Proxy({"src":"/_astro/section-estudiante-o-profesional.DBUjJYou.webp","width":449,"height":290,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/section-estudiante-o-profesional.webp";
							}
							
							return target[name];
						}
					});

const EstudianteProfesional = () => {
  return /* @__PURE__ */ jsx("section", { className: "pt-24 md:pt-64 lg:pt-72 lg:pb-20 bg-white", children: /* @__PURE__ */ jsx("div", { className: "ccontainer", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        className: "relative order-2 lg:order-1",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: estudianteImage.src,
            alt: "Estudiante o profesional en biotecnología",
            className: "w-full max-w-[28rem] xl:max-w-[34rem] 2xl:max-w-[40rem] h-auto rounded-2xl mx-auto"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        className: "space-y-6 order-1 lg:order-2",
        children: [
          /* @__PURE__ */ jsxs("h2", { className: "max-w-[18rem] md:max-w-none text-[2rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] font-heading font-semibold text-text-primary leading-[1.2]", children: [
            "¿Eres estudiante o profesional",
            /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: " en biotecnología y buscas potenciar tu conocimiento?" }),
            /* @__PURE__ */ jsx("span", { className: "inline md:hidden", children: "?" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[1.2rem] lg:text-[1rem] xl:text-[1.2rem] 2xl:text-[1.5rem] text-text-secondary leading-[1.6]", children: "En Biotraining conectamos la teoría con la práctica, ofreciendo capacitaciones que fortalecen el perfil académico de los estudiantes y el crecimiento profesional de quienes ya se desempeñan en el sector salud y biotecnología." })
        ]
      }
    )
  ] }) }) });
};

const docentesImg = new Proxy({"src":"/_astro/section-capacitacion_docentes.BLKHFL-J.webp","width":166,"height":148,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/section-capacitacion_docentes.webp";
							}
							
							return target[name];
						}
					});

const certificateImg = new Proxy({"src":"/_astro/section-capacitacion_certificate.CXlaStXt.webp","width":206,"height":153,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/section-capacitacion_certificate.webp";
							}
							
							return target[name];
						}
					});

const casosRealesImg = new Proxy({"src":"/_astro/section-capacitacion_casos-reales.DLhhwLG9.webp","width":207,"height":141,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/section-capacitacion_casos-reales.webp";
							}
							
							return target[name];
						}
					});

const horariosImg = new Proxy({"src":"/_astro/section-capacitacion_horarios-flexibles.Ben9VHWy.webp","width":157,"height":141,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/section-capacitacion_horarios-flexibles.webp";
							}
							
							return target[name];
						}
					});

const benefits = [
  {
    id: "1",
    title: "Docentes Expertos",
    description: "Profesionales reconocidos con sólida experiencia y reconocimiento en el sector salud y biotecnología.",
    image: docentesImg
  },
  {
    id: "2",
    title: "Certificación Reconocida",
    description: "Certificados avalados por instituciones con validez internacional.",
    image: certificateImg
  },
  {
    id: "3",
    title: "Casos Reales",
    description: "Metodología basada en casos clínicos y situaciones reales del entorno profesional.",
    image: casosRealesImg
  },
  {
    id: "4",
    title: "Horarios Flexibles",
    description: "Modalidad virtual con acceso 24/7 y sesiones en vivo adaptadas a tu agenda.",
    image: horariosImg
  }
];
const Benefits = () => {
  return /* @__PURE__ */ jsx("section", { id: "beneficios", className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "ccontainer", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-center mb-16",
        children: /* @__PURE__ */ jsx("h2", { className: "text-4xl lg:text-5xl font-heading font-semibold mb-4", children: "Tu capacitación en las mejores manos" })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: benefits.map((benefit, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: index * 0.1 },
        className: " text-center space-y-4",
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: benefit.image.src,
              alt: benefit.title,
              className: "w-72 h-72 object-contain"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4 px-10", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-[1.5rem] sm:text-[1.25rem] font-heading font-semibold", children: benefit.title }),
            /* @__PURE__ */ jsx("p", { className: "text-[1rem] sm:text-[1.125rem] leading-[1.2]", children: benefit.description })
          ] })
        ]
      },
      benefit.id
    )) })
  ] }) });
};

const metodologiaImg = new Proxy({"src":"/_astro/section-metodologia-garantiza-exito.9JalK6ZX.webp","width":531,"height":271,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/section-metodologia-garantiza-exito.webp";
							}
							
							return target[name];
						}
					});

const MetodologiaExito = () => {
  const items = [
    "Certificación internacional.",
    "Certificación avalada por el colegio de biólogos del Perú.",
    "Certificación a nombre de Biotraining.",
    "Metodología basada en casos reales"
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsx("div", { className: "ccontainer", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        className: "relative order-2 lg:order-1",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: metodologiaImg.src,
            alt: "Metodología que garantiza tu éxito",
            className: "w-full h-auto rounded-2xl"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        className: "space-y-6 order-1 lg:order-2",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "max-w-[18rem] md:max-w-none text-[2rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[2.5rem] font-heading font-semibold text-text-primary leading-tight", children: "Metodología que garantiza tu éxito" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-text-secondary leading-relaxed", children: "Nuestro enfoque pedagógico combina la teoría más actualizada con la práctica profesional, garantizando un aprendizaje efectivo y aplicable." }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: items.map((item, index) => /* @__PURE__ */ jsxs(
            motion.li,
            {
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { delay: index * 0.1 },
              className: "flex items-start gap-3",
              children: [
                /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-6 h-6 rounded-full border-2 border-primary-500 flex items-center justify-center mt-0.5", children: /* @__PURE__ */ jsx("svg", { className: "w-3 h-3 text-primary-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }) }),
                /* @__PURE__ */ jsx("span", { className: "text-text-primary font-medium", children: item })
              ]
            },
            index
          )) })
        ]
      }
    )
  ] }) }) });
};

const equiposImg = new Proxy({"src":"/_astro/section-equipos-ultima-generacion.SMT0jM9V.webp","width":630,"height":302,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/section-equipos-ultima-generacion.webp";
							}
							
							return target[name];
						}
					});

const EquiposUltimaGeneracion = () => {
  const items = [
    "Material didáctico actualizado.",
    "Soporte técnico.",
    "Evaluación continua.",
    "Sesiones atractivas en vivo."
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-20 ", children: /* @__PURE__ */ jsx("div", { className: "ccontainer", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        className: "space-y-6",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "max-w-[18rem] md:max-w-none text-[2rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[2.5rem] font-heading font-semibold text-text-primary leading-tight", children: "Equipos de última generación" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-text-secondary leading-relaxed", children: "Practica y aprende usando equipos modernos; aplica lo aprendido en los laboratorios con la guía de nuestros expertos para que así obtengas un mayor aprendizaje." }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: items.map((item, index) => /* @__PURE__ */ jsxs(
            motion.li,
            {
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { delay: index * 0.1 },
              className: "flex items-start gap-3",
              children: [
                /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-6 h-6 rounded-full border-2 border-primary-500 flex items-center justify-center mt-0.5", children: /* @__PURE__ */ jsx("svg", { className: "w-3 h-3 text-primary-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }) }),
                /* @__PURE__ */ jsx("span", { className: "text-text-primary font-medium", children: item })
              ]
            },
            index
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, x: 30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        className: "relative",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: equiposImg.src,
            alt: "Equipos de última generación",
            className: "w-full h-auto rounded-2xl"
          }
        )
      }
    )
  ] }) }) });
};

const qpcrImg = new Proxy({"src":"/_astro/section-curso_qpcr.BAEbrzKV.webp","width":315,"height":163,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/section-curso_qpcr.webp";
							}
							
							return target[name];
						}
					});

const disenoImg = new Proxy({"src":"/_astro/section-curso_diseno-optimizacion.ZDM9xBI8.webp","width":315,"height":163,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/section-curso_diseno-optimizacion.webp";
							}
							
							return target[name];
						}
					});

const exploracionImg = new Proxy({"src":"/_astro/section-curso_exploracion-analisis.DggiNvvv.webp","width":315,"height":162,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/section-curso_exploracion-analisis.webp";
							}
							
							return target[name];
						}
					});

const diagnosticoImg = new Proxy({"src":"/_astro/section-curso_diagnostico-molecular.BDkRWyxw.webp","width":315,"height":163,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/section-curso_diagnostico-molecular.webp";
							}
							
							return target[name];
						}
					});

const studentSchema = yup.object({
  fullName: yup.string().required("Por favor ingresa tu nombre y apellido").min(5, "Debe tener al menos 5 caracteres"),
  studentType: yup.string().oneOf(["estudiante", "profesional"], "Selecciona una opción válida").required("Por favor selecciona tu condición"),
  speciality: yup.string().required("Por favor especifica tu especialidad o área de estudio").min(3, "Debe tener al menos 3 caracteres"),
  workArea: yup.string().oneOf(["diagnostico", "investigacion"], "Selecciona una opción válida").required("Por favor selecciona tu área de trabajo"),
  courseInterest: yup.string().required("Por favor especifica tu curso de interés")
});
const StudentContactModal = ({
  isOpen,
  onClose,
  courseInterested
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(studentSchema)
  });
  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/send-student", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.message || "Error sending");
      Swal.fire({
        title: "¡Excelente!",
        text: "Hemos recibido tu información. Nos comunicaremos contigo pronto.",
        icon: "success",
        confirmButtonColor: "#E1525F"
      });
      reset();
      onClose();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al enviar tu información. Por favor intenta nuevamente.",
        icon: "error",
        confirmButtonColor: "#E1525F"
      });
    }
  };
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: onClose,
        className: "fixed inset-0 bg-black/50 z-[998]"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.9 },
        className: "fixed inset-0 flex items-center justify-center z-[9999] p-4",
        children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl w-full max-w-xl p-8 relative max-h-[90vh] overflow-y-auto", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: onClose,
              className: "absolute top-6 right-6 text-2xl font-bold text-black hover:text-gray-600 transition",
              children: "×"
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-heading font-semibold text-center text-black mb-6 mt-4", children: "Bríndanos tus datos y nos comunicaremos contigo" }),
          /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  placeholder: "Nombres y apellidos",
                  ...register("fullName"),
                  className: "w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                }
              ),
              errors.fullName && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.fullName.message })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs(
                "select",
                {
                  ...register("studentType"),
                  className: "w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Seleccione si es estudiante o profesional" }),
                    /* @__PURE__ */ jsx("option", { value: "estudiante", children: "Estudiante" }),
                    /* @__PURE__ */ jsx("option", { value: "profesional", children: "Profesional" })
                  ]
                }
              ),
              errors.studentType && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.studentType.message })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  placeholder: "Indique su especialidad",
                  ...register("speciality"),
                  className: "w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                }
              ),
              errors.speciality && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.speciality.message })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs(
                "select",
                {
                  ...register("workArea"),
                  className: "w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Seleccione si trabaja en diagnóstico o investigación" }),
                    /* @__PURE__ */ jsx("option", { value: "diagnostico", children: "Diagnóstico" }),
                    /* @__PURE__ */ jsx("option", { value: "investigacion", children: "Investigación" })
                  ]
                }
              ),
              errors.workArea && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.workArea.message })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  placeholder: "Curso de interés (Se selecciona automáticamente)",
                  ...register("courseInterest"),
                  value: courseInterested,
                  disabled: true,
                  className: "w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none bg-gray-50 text-gray-600"
                }
              ),
              errors.courseInterest && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.courseInterest.message })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex justify-center pt-4", children: /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                disabled: isSubmitting,
                className: "px-12 py-3 bg-gradient-to-r from-[#AB323D] to-[#E1525F] text-white font-semibold rounded-full hover:opacity-90 transition-opacity disabled:opacity-50",
                children: isSubmitting ? "Enviando..." : "Enviar"
              }
            ) })
          ] })
        ] })
      }
    )
  ] }) });
};

const courses = [
  {
    id: "1",
    title: "QPCR - EN EL DIAGNÓSTICO Y EN LA INVESTIGACIÓN",
    description: "Este curso conocerás el uso de la Reacción en Cadena de la Polimerasa en Tiempo Real (qPCR).",
    image: qpcrImg,
    isVirtual: true,
    isLive: true
  },
  {
    id: "2",
    title: "DISEÑO Y OPTIMIZACIÓN DE PRIMERS PARA LA PCR",
    description: "Aprende a diseñar y evaluar oligonucleótidos (primers) para experimentos de PCR y qPCR con precisión profesional.",
    image: disenoImg,
    isVirtual: true,
    isLive: true
  },
  {
    id: "3",
    title: "EXPLORACIÓN Y ANÁLISIS CON BASES DE DATOS BIOLÓGICAS",
    description: "Descubre cómo aprovechar el potencial de los datos biológicos (Primers) para experimentos de PCR y qPCR con precisión profesional.",
    image: exploracionImg,
    isVirtual: true,
    isLive: true
  },
  {
    id: "4",
    title: "DIAGNÓSTICO MOLECULAR POC: AMPLIFICACIÓN ISOTÉRMICA E INTERPRETACIÓN RÁPIDA",
    description: "En este curso conocerás las tecnologías de amplificación isotérmica (LAMP, RPA, NASBA) aplicadas al diagnóstico molecular en el punto de atención (POC).",
    image: diagnosticoImg,
    isVirtual: true,
    isLive: true
  }
];
const BREAKPOINTS$2 = {
  TABLET: 768
};
const Courses = () => {
  const [courseInterested, setCourseInterested] = useState(void 0);
  const swiperRefs = useRef({});
  const [showButtons, setShowButtons] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < BREAKPOINTS$2.TABLET;
    }
    return false;
  });
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const handleMouseEnter = useCallback(() => {
    if (typeof window !== "undefined" && window.innerWidth >= BREAKPOINTS$2.TABLET) {
      setShowButtons(true);
    }
  }, []);
  const handleMouseLeave = useCallback(() => {
    if (typeof window !== "undefined" && window.innerWidth >= BREAKPOINTS$2.TABLET) {
      setShowButtons(false);
    }
  }, []);
  return /* @__PURE__ */ jsxs("section", { id: "cursos", className: "py-20 bg-white", children: [
    /* @__PURE__ */ jsxs("div", { className: "ccontainer", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-16  mx-auto max-w-[28rem]",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "leading-[1.1] text-[2.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[2.5rem] font-heading font-semibold mb-4", children: "Nuestros cursos especializados" }),
            /* @__PURE__ */ jsx("p", { className: "text-text-secondary text-lg max-w-2xl mx-auto", children: "Te ofrecemos 4 propuestas formativas para elevar tus habilidades." })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "swiper-parent-cursos relative",
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
          children: [
            /* @__PURE__ */ jsx(
              Swiper,
              {
                modules: [Navigation, Pagination, Autoplay],
                spaceBetween: 24,
                slidesPerView: 1,
                navigation: true,
                onSwiper: (swiper) => swiperRefs.current["cursos"] = swiper,
                autoplay: { delay: 5e3, disableOnInteraction: false },
                breakpoints: {
                  640: {
                    slidesPerView: 2
                  },
                  1024: {
                    slidesPerView: 3
                  },
                  1280: {
                    slidesPerView: 4
                  }
                },
                className: "swiper pb-12",
                children: courses.map((course) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    className: "group relative rounded-xl bg-white overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 h-full",
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "relative h-[15rem] overflow-hidden", children: /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: course.image.src,
                          alt: course.title,
                          className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500  rounded-2xl"
                        }
                      ) }),
                      /* @__PURE__ */ jsxs("div", { className: "p-8 space-y-4", children: [
                        /* @__PURE__ */ jsx("h3", { className: "min-h-[7.2rem] lg:min-h-[10.2rem] 2xl:min-h-[7.2rem] pr-10 lg:pr-5 font-heading text-[1.5rem] lg:text-[1.2rem] xl:text-[1.25rem] 2xl:text-[1.35rem] font-semibold leading-[1.2] ", children: course.title }),
                        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                          course.isVirtual && /* @__PURE__ */ jsx("span", { className: "px-3 py-1 bg-primary-50 text-primary-500 rounded-full text-sm font-semibold", children: "Virtual" }),
                          course.isLive && /* @__PURE__ */ jsx("span", { className: "px-3 py-1 bg-primary-50 text-primary-500 rounded-full text-sm font-semibold", children: "En vivo" })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-text-secondary text-sm leading-relaxed min-h-[6rem]", children: course.description }),
                        /* @__PURE__ */ jsx("div", { className: "w-full flex justify-center pt-4", children: /* @__PURE__ */ jsx(
                          Button,
                          {
                            onClick: () => {
                              setCourseInterested(course.title);
                              setIsStudentModalOpen(true);
                            },
                            variant: "primary",
                            children: "Inscríbete"
                          }
                        ) })
                      ] })
                    ]
                  }
                ) }, course.id))
              }
            ),
            showButtons && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.2 },
                exit: { opacity: 0 },
                className: "\r\n                absolute top-1/2 left-0 right-0 z-[5]\r\n                flex md:hidden justify-between items-center\r\n                ",
                children: [
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      className: "button-custom-prev",
                      "aria-label": "button-custom-prev",
                      onClick: () => swiperRefs?.current["cursos"].slidePrev(),
                      children: /* @__PURE__ */ jsx(FaChevronLeft, { size: 30 })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      className: "button-custom-next",
                      "aria-label": "button-custom-next",
                      onClick: () => swiperRefs?.current["cursos"].slideNext(),
                      children: /* @__PURE__ */ jsx(FaChevronRight, { size: 30 })
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      StudentContactModal,
      {
        isOpen: isStudentModalOpen,
        onClose: () => setIsStudentModalOpen(false),
        courseInterested
      }
    )
  ] });
};

const incentivoImg = new Proxy({"src":"/_astro/section-incentivando-aprendizaje.QkpRmOxd.webp","width":596,"height":952,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/section-incentivando-aprendizaje.webp";
							}
							
							return target[name];
						}
					});

const IncentivandoAprendizaje = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const hasAutoPlayed = useRef(false);
  const lastTopRef = useRef(null);
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
  useEffect(() => {
    const node = sectionRef.current;
    if (!node || hasAutoPlayed.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const currentTop = entry.boundingClientRect.top;
        const wasScrollingDown = lastTopRef.current !== null && currentTop < lastTopRef.current;
        lastTopRef.current = currentTop;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5 && wasScrollingDown && !hasAutoPlayed.current) {
          if (videoRef.current) {
            setIsMuted(true);
            videoRef.current.muted = true;
            videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {
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
  return /* @__PURE__ */ jsx("section", { ref: sectionRef, id: "conocenos", className: "py-20 bg-white", children: /* @__PURE__ */ jsx("div", { className: "ccontainer", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center max-w-[56rem] mx-auto", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        className: "px-4 md:px-0 text-center md:text-start space-y-6",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-[2.5rem] lg:text-[2.2rem] xl:text-[2.5rem] 2xl:text-[2.5rem] leading-[1.2] font-heading font-semibold text-text-primary ", children: "Incentivando el aprendizaje y la exigencia" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-text-secondary leading-relaxed", children: "En Biotraining, nuestro objetivo es impulsar tu desarrollo profesional preparando herramientas formativas de alta calidad." })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, x: 30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        className: "relative",
        children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-full overflow-hidden", children: [
          /* @__PURE__ */ jsxs(
            "video",
            {
              ref: videoRef,
              loop: true,
              playsInline: true,
              className: "w-full min-h-[20rem] object-cover",
              poster: incentivoImg.src,
              children: [
                /* @__PURE__ */ jsx("source", { src: "/biotecnologia.mp4", type: "video/mp4" }),
                "Tu navegador no soporta el elemento de video."
              ]
            }
          ),
          !isPlaying && /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute inset-0 flex items-center justify-center cursor-pointer group",
              onClick: handlePlayClick,
              children: /* @__PURE__ */ jsx("div", { className: "w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white transition-all group-hover:scale-110", children: /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "w-10 h-10 text-text-primary ml-1",
                  fill: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsx("path", { d: "M8 5v14l11-7z" })
                }
              ) })
            }
          ),
          isPlaying && /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handlePlayClick,
                className: "w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all hover:scale-110",
                "aria-label": "Pausar video",
                children: /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "w-5 h-5 text-text-primary",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */ jsx("path", { d: "M6 4h4v16H6V4zm8 0h4v16h-4V4z" })
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleMuteToggle,
                className: "w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all hover:scale-110",
                "aria-label": isMuted ? "Activar sonido" : "Silenciar",
                children: isMuted ? /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "w-5 h-5 text-text-primary",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */ jsx("path", { d: "M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" })
                  }
                ) : /* @__PURE__ */ jsx(
                  "svg",
                  {
                    className: "w-5 h-5 text-text-primary",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /* @__PURE__ */ jsx("path", { d: "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" })
                  }
                )
              }
            )
          ] })
        ] })
      }
    )
  ] }) }) });
};

const draMaria = new Proxy({"src":"/_astro/section-aprende-expertos_dra-maria-machado.YwsnGfQT.png","width":314,"height":214,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/section-aprende-expertos_dra-maria-machado.png";
							}
							
							return target[name];
						}
					});

const instructors = [
  {
    id: "1",
    name: "Dra. María Machado",
    specialty: "Farmacología clínica",
    description: "Encargada de toma de muestras y monitoreo en el área de salud clínica.",
    image: draMaria
  },
  {
    id: "2",
    name: "Dra. María Machado",
    specialty: "Farmacología clínica",
    description: "Encargada de toma de muestras y monitoreo en el área de salud clínica.",
    image: draMaria
  },
  {
    id: "3",
    name: "Dra. María Machado",
    specialty: "Biotecnología molecular",
    description: "Encargada de toma de muestras y monitoreo en el área de salud clínica.",
    image: draMaria
  },
  {
    id: "4",
    name: "Dra. María Machado",
    specialty: "Biotecnología molecular",
    description: "Encargada de toma de muestras y monitoreo en el área de salud clínica.",
    image: draMaria
  }
];
const BREAKPOINTS$1 = {
  TABLET: 768
};
const Instructors = () => {
  const swiperRefs = useRef({});
  const [showButtons, setShowButtons] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < BREAKPOINTS$1.TABLET;
    }
    return false;
  });
  const handleMouseEnter = useCallback(() => {
    if (typeof window !== "undefined" && window.innerWidth >= BREAKPOINTS$1.TABLET) {
      setShowButtons(true);
    }
  }, []);
  const handleMouseLeave = useCallback(() => {
    if (typeof window !== "undefined" && window.innerWidth >= BREAKPOINTS$1.TABLET) {
      setShowButtons(false);
    }
  }, []);
  return /* @__PURE__ */ jsx("section", { className: "py-20 ", children: /* @__PURE__ */ jsxs("div", { className: "ccontainer", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-center mb-16 max-w-3xl mx-auto",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-[2.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[2.5rem] leading-[1.2] font-heading font-semibold mb-6", children: "Aprende de expertos con experiencia comprobada" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-secondary text-lg", children: "Recibe clases de profesionales con sólida experiencia y reconocimiento en su área." })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "swiper-parent-cursos relative",
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: [
          /* @__PURE__ */ jsx(
            Swiper,
            {
              modules: [Navigation, Pagination, Autoplay],
              spaceBetween: 24,
              slidesPerView: 1,
              navigation: true,
              onSwiper: (swiper) => swiperRefs.current["instructores"] = swiper,
              autoplay: { delay: 6e3, disableOnInteraction: false },
              breakpoints: {
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 }
              },
              className: "swiper pb-12",
              children: instructors.map((instructor, index) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { delay: index * 0.1 },
                  className: "group relative rounded-xl bg-background-secondary overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 h-full",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "relative h-[18rem] overflow-hidden", children: /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: instructor.image.src,
                        alt: instructor.name,
                        className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      }
                    ) }),
                    /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-3", children: [
                      /* @__PURE__ */ jsx("h3", { className: "font-heading text-[1.25rem] lg:text-[1.15rem] xl:text-[1.25rem] 2xl:text-[1.25rem] font-semibold leading-[1.2]", children: instructor.name }),
                      /* @__PURE__ */ jsx("p", { className: "text-text-secondary font-medium", children: instructor.specialty }),
                      /* @__PURE__ */ jsx("p", { className: "text-text-secondary text-sm leading-relaxed min-h-[4.5rem]", children: instructor.description })
                    ] })
                  ]
                }
              ) }, instructor.id))
            }
          ),
          showButtons && /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "absolute top-1/2 left-0 right-0 z-[99] flex justify-between items-center",
              children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: "button-custom-prev",
                    "aria-label": "button-custom-prev",
                    onClick: () => swiperRefs?.current["instructores"].slidePrev(),
                    children: /* @__PURE__ */ jsx(FaChevronLeft, { size: 30 })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: "button-custom-next",
                    "aria-label": "button-custom-next",
                    onClick: () => swiperRefs?.current["instructores"].slideNext(),
                    children: /* @__PURE__ */ jsx(FaChevronRight, { size: 30 })
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] }) });
};

const biotecnomicoGris = new Proxy({"src":"/_astro/section-nuestros-aliados_biotecnomico-gris.B9zpdmkP.webp","width":1524,"height":394,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/section-nuestros-aliados_biotecnomico-gris.webp";
							}
							
							return target[name];
						}
					});

const biotecnomicoColor = new Proxy({"src":"/_astro/section-nuestros-aliados_biotecnomico-color.BDYbsSTD.webp","width":1104,"height":285,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/section-nuestros-aliados_biotecnomico-color.webp";
							}
							
							return target[name];
						}
					});

const cipvidaGris = new Proxy({"src":"/_astro/section-nuestros-aliados_cipvida-gris.Dr8JGEnf.webp","width":948,"height":948,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/section-nuestros-aliados_cipvida-gris.webp";
							}
							
							return target[name];
						}
					});

const cipvidaColor = new Proxy({"src":"/_astro/section-nuestros-aliados_cipvida-color.D9ginikD.webp","width":225,"height":225,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/section-nuestros-aliados_cipvida-color.webp";
							}
							
							return target[name];
						}
					});

const consejoGris = new Proxy({"src":"/_astro/section-nuestros-aliados_consejo-regional-gris.mU9ragh0.webp","width":829,"height":853,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/section-nuestros-aliados_consejo-regional-gris.webp";
							}
							
							return target[name];
						}
					});

const consejoColor = new Proxy({"src":"/_astro/section-nuestros-aliados_consejo-regional-color.kCi-Nn17.webp","width":2000,"height":2057,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/section-nuestros-aliados_consejo-regional-color.webp";
							}
							
							return target[name];
						}
					});

const partners = [
  {
    id: "1",
    name: "Biotecnómica",
    logoGris: biotecnomicoGris,
    logoColor: biotecnomicoColor
  },
  {
    id: "2",
    name: "CIPVIDA",
    logoGris: cipvidaGris,
    logoColor: cipvidaColor
  },
  {
    id: "3",
    name: "Consejo Regional VII Lima",
    logoGris: consejoGris,
    logoColor: consejoColor
  }
];
const Partners = () => {
  return /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "ccontainer", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "max-w-[52rem] mx-auto text-center mb-12",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-[2.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[2.5rem] leading-[1.2] font-heading font-semibold mb-2", children: "Nuestros aliados estratégicos" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-secondary", children: "Colaboramos con instituciones comprometidas con la excelencia científica y la formación de profesionales altamente capacitados en biotecnología y ciencias de la salud." })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 items-center max-w-4xl mx-auto", children: partners.map((partner, index) => /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.8 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { delay: index * 0.1 },
        className: "flex items-center justify-center p-6 cursor-pointer",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: partner.logoColor.src,
            alt: partner.name,
            className: "max-h-48  w-auto object-contain transition-all duration-300"
          }
        )
      },
      partner.id
    )) })
  ] }) });
};

const testimonials = [
  {
    id: "1",
    name: "Nancy Castillo",
    role: "Egresada de Biología en la facultad de UNMSM.",
    content: "Me encantaron las clases, el contenido que te comparten y el acompañamiento en cada duda que tenía fue demasiado bueno. ¡100% recomendado!"
  },
  {
    id: "2",
    name: "Nancy Castillo",
    role: "Egresada de Biología en la facultad de UNMSM.",
    content: "Me encantaron las clases, el contenido que te comparten y el acompañamiento en cada duda que tenía fue demasiado bueno. ¡100% recomendado!"
  },
  {
    id: "3",
    name: "Nancy Castillo",
    role: "Egresada de Biología en la facultad de UNMSM.",
    content: "Me encantaron las clases, el contenido que te comparten y el acompañamiento en cada duda que tenía fue demasiado bueno. ¡100% recomendado!"
  },
  {
    id: "4",
    name: "Nancy Castillo",
    role: "Egresada de Biología en la facultad de UNMSM.",
    content: "Me encantaron las clases, el contenido que te comparten y el acompañamiento en cada duda que tenía fue demasiado bueno. ¡100% recomendado!"
  }
];
const BREAKPOINTS = {
  TABLET: 768
};
const Testimonials = () => {
  const swiperRefs = useRef({});
  const [showButtons, setShowButtons] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < BREAKPOINTS.TABLET;
    }
    return false;
  });
  const handleMouseEnter = useCallback(() => {
    if (typeof window !== "undefined" && window.innerWidth >= BREAKPOINTS.TABLET) {
      setShowButtons(true);
    }
  }, []);
  const handleMouseLeave = useCallback(() => {
    if (typeof window !== "undefined" && window.innerWidth >= BREAKPOINTS.TABLET) {
      setShowButtons(false);
    }
  }, []);
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-background-primary", children: /* @__PURE__ */ jsxs("div", { className: "ccontainer", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "max-w-[32rem] mx-auto text-center mb-16",
        children: /* @__PURE__ */ jsx("h2", { className: "text-[2.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[2.5rem] leading-[1.2] font-heading font-semibold mb-4", children: "Conoce la experiencia de nuestros alumnos" })
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "relative",
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: [
          /* @__PURE__ */ jsx(
            Swiper,
            {
              modules: [Navigation, Pagination, Autoplay],
              spaceBetween: 24,
              slidesPerView: 1,
              navigation: true,
              onSwiper: (swiper) => swiperRefs.current["testimonios"] = swiper,
              autoplay: { delay: 5e3, disableOnInteraction: false },
              breakpoints: {
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 }
              },
              className: "swiper pb-12",
              children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { delay: index * 0.1 },
                  className: "min-h-[24rem] bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 py-6 xl:py-8 mx-4 md:mx-0 px-8 xl:px-6 relative border border-gray-300 h-full",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx("span", { className: "text-5xl font-serif text-text-primary leading-none", children: "❛❛" }) }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-12 sm:space-y-4", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-text-primary text-xl leading-relaxed sm:min-h-[7rem] sm:max-w-[18rem]", children: testimonial.content }),
                      /* @__PURE__ */ jsxs("div", { className: "pt-3", children: [
                        /* @__PURE__ */ jsx("p", { className: "font-heading font-semibold text-[1.5rem] sm:text-[1rem] 2xl:text-[1.2rem] text-text-primary", children: testimonial.name }),
                        /* @__PURE__ */ jsx("p", { className: "text-text-secondary text-[1.2rem] max-w-[14rem]  mt-1", children: testimonial.role })
                      ] })
                    ] })
                  ]
                }
              ) }, testimonial.id))
            }
          ),
          showButtons && /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 0.2 },
              exit: { opacity: 0 },
              className: "absolute top-1/2 left-0 right-0 z-[99] flex justify-between items-center",
              children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: "button-custom-prev",
                    "aria-label": "button-custom-prev",
                    onClick: () => swiperRefs?.current["testimonios"].slidePrev(),
                    children: /* @__PURE__ */ jsx(FaChevronLeft, { size: 30 })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: "button-custom-next",
                    "aria-label": "button-custom-next",
                    onClick: () => swiperRefs?.current["testimonios"].slideNext(),
                    children: /* @__PURE__ */ jsx(FaChevronRight, { size: 30 })
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] }) });
};

const ctaImg = new Proxy({"src":"/_astro/section-capacita-equipo_cta.9DzC8Ung.webp","width":1320,"height":514,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/section-capacita-equipo_cta.webp";
							}
							
							return target[name];
						}
					});

const ctaImgMobile = new Proxy({"src":"/_astro/section-capacita-equipo_cta-mobile.B06_wq8x.webp","width":1673,"height":2630,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/assets/img/section-capacita-equipo_cta-mobile.webp";
							}
							
							return target[name];
						}
					});

const enterpriseSchema = yup.object({
  companyName: yup.string().required("Por favor ingresa el nombre de la empresa").min(3, "Debe tener al menos 3 caracteres"),
  contact: yup.string().required("Por favor ingresa un número de contacto").min(7, "Ingresa un número válido"),
  email: yup.string().required("Por favor ingresa tu correo electrónico").email("Ingresa un correo válido"),
  collaborators: yup.string().required("Por favor selecciona el número de colaboradores").oneOf(["1-10", "11-50", "51-100", "101-500", "500+"], "Selecciona una opción válida"),
  trainingArea: yup.string().required("Por favor selecciona un área de capacitación")
});
const EnterpriseContactModal = ({
  isOpen,
  onClose
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(enterpriseSchema)
  });
  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/send-enterprise", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.message || "Error sending");
      Swal.fire({
        title: "¡Excelente!",
        text: "Hemos recibido tu información. Nos comunicaremos contigo pronto para presentar nuestras soluciones de capacitación.",
        icon: "success",
        confirmButtonColor: "#E1525F"
      });
      reset();
      onClose();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al enviar tu información. Por favor intenta nuevamente.",
        icon: "error",
        confirmButtonColor: "#E1525F"
      });
    }
  };
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: onClose,
        className: "fixed inset-0 bg-black/50 z-[998]"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.9 },
        className: "fixed inset-0 flex items-center justify-center z-[999] p-4",
        children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl w-full max-w-lg p-8 relative max-h-[90vh] overflow-y-auto", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: onClose,
              className: "absolute top-6 right-6 text-2xl font-bold text-black hover:text-gray-600 transition",
              children: "×"
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-heading font-semibold text-center text-black mb-6 mt-4", children: "Potencia el conocimiento de tu equipo" }),
          /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  placeholder: "Nombre de la empresa",
                  ...register("companyName"),
                  className: "w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                }
              ),
              errors.companyName && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.companyName.message })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  placeholder: "Contacto",
                  ...register("contact"),
                  type: "tel",
                  className: "w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                }
              ),
              errors.contact && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.contact.message })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  placeholder: "Correo electrónico",
                  ...register("email"),
                  type: "email",
                  className: "w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                }
              ),
              errors.email && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.email.message })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs(
                "select",
                {
                  ...register("collaborators"),
                  className: "w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Indique el número de colaboradores a capacitar" }),
                    /* @__PURE__ */ jsx("option", { value: "1-10", children: "1-10 colaboradores" }),
                    /* @__PURE__ */ jsx("option", { value: "11-50", children: "11-50 colaboradores" }),
                    /* @__PURE__ */ jsx("option", { value: "51-100", children: "51-100 colaboradores" }),
                    /* @__PURE__ */ jsx("option", { value: "101-500", children: "101-500 colaboradores" }),
                    /* @__PURE__ */ jsx("option", { value: "500+", children: "500+ colaboradores" })
                  ]
                }
              ),
              errors.collaborators && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.collaborators.message })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs(
                "select",
                {
                  ...register("trainingArea"),
                  className: "w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Seleccione el área o tipo de capacitación de interés" }),
                    /* @__PURE__ */ jsx("option", { value: "biologia_molecular", children: "Biología Molecular" }),
                    /* @__PURE__ */ jsx("option", { value: "diagnostico_molecular", children: "Diagnóstico Molecular" }),
                    /* @__PURE__ */ jsx("option", { value: "biotecnologia", children: "Biotecnología" }),
                    /* @__PURE__ */ jsx("option", { value: "ciencias_salud", children: "Ciencias de la Salud" }),
                    /* @__PURE__ */ jsx("option", { value: "otro", children: "Otro" })
                  ]
                }
              ),
              errors.trainingArea && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.trainingArea.message })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex justify-center pt-4", children: /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                disabled: isSubmitting,
                className: "px-12 py-3 bg-gradient-to-r from-[#AB323D] to-[#E1525F] text-white font-semibold rounded-full hover:opacity-90 transition-opacity disabled:opacity-50",
                children: isSubmitting ? "Enviando..." : "Enviar"
              }
            ) })
          ] })
        ] })
      }
    )
  ] }) });
};

const CTAEmpresas = () => {
  const [isEnterpriseModalOpen, setIsEnterpriseModalOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { id: "empresas", className: "ccontainer mx-auto overflow-hidden pt-20", children: /* @__PURE__ */ jsxs("div", { className: "relative z-10 min-h-[42rem] md:min-h-max py-16 md:py-20 lg:py-24 pl-10 ", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: ctaImg.src,
            alt: "Capacitación empresarial",
            className: "hidden sm:flex w-full h-full object-cover object-center rounded-xl"
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: ctaImgMobile.src,
            alt: "Capacitación empresarial",
            className: "flex sm:hidden w-full h-full object-cover object-center rounded-xl"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative max-w-2xl lg:max-w-3xl z-20", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "max-w-[36rem] text-white space-y-6 lg:space-y-8",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-4 pr-5", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-[1.5rem] sm:text-[2.5rem] xl:text-[3rem] leading-[1.2] font-heading font-semibold ", children: "Capacita a tu equipo y mejora la eficiencia de tu empresa" }),
              /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg lg:text-xl leading-relaxed text-white/90 max-w-xl lg:max-w-2xl", children: "Formación integral para que tu equipo domine herramientas, equipos y procedimientos clave en salud y biotecnología, garantizando calidad y eficiencia operativa." })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "pt-2 lg:pt-4", children: /* @__PURE__ */ jsx(Button, { onClick: () => setIsEnterpriseModalOpen(true), variant: "primary", children: "Más Información" }) })
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx(
      EnterpriseContactModal,
      {
        isOpen: isEnterpriseModalOpen,
        onClose: () => setIsEnterpriseModalOpen(false)
      }
    )
  ] });
};

const conversemosSchema = yup.object({
  name: yup.string().required("Por favor ingresa tu nombre y apellido").min(3, "Debe tener al menos 3 caracteres"),
  specialty: yup.string().required("Por favor especifica tu especialidad").min(2, "Debe tener al menos 2 caracteres"),
  occupation: yup.string().required("Por favor indica tu ocupación actual").min(3, "Debe tener al menos 3 caracteres"),
  preference: yup.string().required("Por favor comparte tu preferencia de formato").min(10, "Debe tener al menos 10 caracteres"),
  modality: yup.string().required("Por favor indica tu preferencia de modalidad").min(10, "Debe tener al menos 10 caracteres"),
  experience: yup.string().required("Por favor describe la experiencia que deseas desarrollar").min(15, "Debe tener al menos 15 caracteres")
});
const Conversemos = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(conversemosSchema)
  });
  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/send-conversemos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.message || "Error sending");
      Swal.fire({
        title: "¡Mensaje enviado!",
        text: "Nos pondremos en contacto contigo pronto.",
        icon: "success",
        confirmButtonColor: "#E1525F"
      });
      reset();
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "No se pudo enviar el mensaje. Intenta nuevamente.",
        icon: "error",
        confirmButtonColor: "#E1525F"
      });
    }
  };
  return /* @__PURE__ */ jsx("section", { className: "pt-32", children: /* @__PURE__ */ jsxs("div", { className: "relative py-20 lg:py-28 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute top-0 left-0 w-full h-full",
        style: {
          background: "radial-gradient(circle at 15% 30%, rgba(225, 82, 95, 0.3) 0%, rgba(171, 50, 61, 0.15) 25%, transparent 50%)"
        }
      }
    ) }),
    /* @__PURE__ */ jsx("div", { id: "contacto", className: "ccontainer relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-start", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          className: "text-white space-y-6 lg:sticky lg:top-8",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold", children: "Conversemos" }),
            /* @__PURE__ */ jsx("p", { className: "text-white/80 text-base lg:text-lg leading-relaxed", children: "Completa este breve formulario y ayudanos a conocer tus intereses. Tu respuesta nos ayudará a enfocar los contenidos de nuestros cursos y capacitaciones para que se alineen mejor con tus objetivos y perfil profesional. " })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.form,
        {
          initial: { opacity: 0, x: 30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          onSubmit: handleSubmit(onSubmit),
          className: "space-y-5",
          children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Nombres y apellidos",
                  ...register("name"),
                  className: "w-full px-6 py-3.5 bg-white rounded-lg text-text-primary placeholder-text-secondary/90 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                }
              ),
              errors.name && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.name.message })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Especialidad",
                  ...register("specialty"),
                  className: "w-full px-6 py-3.5 bg-white rounded-lg text-text-primary placeholder-text-secondary/90 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                }
              ),
              errors.specialty && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.specialty.message })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  placeholder: "¿Cuál es tu ocupación actual?",
                  ...register("occupation"),
                  className: "w-full px-6 py-3.5 bg-white rounded-lg text-text-primary placeholder-text-secondary/90 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                }
              ),
              errors.occupation && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.occupation.message })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  placeholder: "¿Cuál es tu preferencia respecto al formato de un curso/capacitación?",
                  ...register("preference"),
                  rows: 2,
                  className: "w-full px-6 py-3.5 bg-white rounded-lg text-text-primary placeholder-text-secondary/90 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                }
              ),
              errors.preference && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.preference.message })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  placeholder: "¿Cuál es tu preferencia respecto a la modalidad?",
                  ...register("modality"),
                  rows: 2,
                  className: "w-full px-6 py-3.5 bg-white rounded-lg text-text-primary placeholder-text-secondary/90 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                }
              ),
              errors.modality && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.modality.message })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  placeholder: "¿Qué experiencia práctica te gustaría desarrollar en una próxima capacitación?",
                  ...register("experience"),
                  rows: 4,
                  className: "w-full px-6 py-3.5 bg-white rounded-lg text-text-primary placeholder-text-secondary/90 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none transition-all"
                }
              ),
              errors.experience && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.experience.message })
            ] }),
            /* @__PURE__ */ jsx("hr", { className: "border-gray-300 my-4" }),
            /* @__PURE__ */ jsx("div", { className: "flex justify-end pt-2", children: /* @__PURE__ */ jsx(Button, { type: "submit", variant: "primary", disabled: isSubmitting, children: isSubmitting ? "Enviando..." : "Enviar" }) })
          ]
        }
      )
    ] }) })
  ] }) });
};

const faqItems = [
  {
    id: "1",
    question: "¿Necesito tener experiencia previa para participar?",
    // answer: 'Los requisitos varían según el curso, pero generalmente necesitas tener conocimientos básicos en biología o ciencias de la salud. Algunos cursos avanzados pueden requerir experiencia previa en laboratorio. Te recomendamos revisar la descripción de cada curso para conocer los requisitos específicos.',
    answer: "No. Nuestros cursos están diseñados para adaptarse tanto a estudiantes que dan sus primeros pasos en biología molecular como a profesionales que buscan actualizar sus conocimientos. Cada módulo incluye explicaciones claras, ejemplos prácticos y acompañamiento docente."
  },
  {
    id: "2",
    question: "¿Ofrecen cursos tanto teóricos como prácticos?",
    // answer: 'Sí, todos nuestros docentes son profesionales activos en el sector de biotecnología y salud. Cuentan con experiencia comprobada en laboratorios, instituciones de investigación y empresas del sector. Además, muchos tienen publicaciones científicas y participación en proyectos de investigación actuales.',
    answer: "Sí. En Biotraining combinamos la base conceptual con la práctica aplicada. Dependiendo del curso, podrás participar en sesiones teóricas en vivo, análisis de casos reales y prácticas en laboratorio o simuladas, según el formato de la capacitación."
  },
  {
    id: "3",
    question: "¿Las clases son en vivo o grabadas?",
    // answer: 'La duración varía según el curso. Nuestros programas van desde cursos intensivos de 2-3 semanas hasta programas más extensos de 2-3 meses. Cada curso incluye sesiones en vivo, material grabado y ejercicios prácticos. La información específica de duración está disponible en la descripción de cada curso.',
    answer: "Las sesiones se desarrollan en vivo, permitiendo la interacción directa con los docentes y la resolución de dudas en tiempo real.",
    answer1: "En algunos cursos, se ofrece acceso temporal a las grabaciones o materiales complementarios para reforzar el aprendizaje."
  },
  {
    id: "4",
    question: "¿Se utilizan laboratorios o equipos de última generación durante las clases?",
    // answer: 'Sí, en nuestras sesiones prácticas utilizamos equipos modernos de última generación. Para los cursos virtuales, proporcionamos demostraciones detalladas y acceso a simuladores. Además, contamos con alianzas con laboratorios especializados donde se pueden realizar prácticas presenciales según el curso.',
    answer: "Utilizamos principalmente Google Meet para las sesiones en vivo y Google Classroom o Drive para compartir materiales y tareas, garantizando un acceso sencillo y seguro desde cualquier dispositivo.",
    boldPhrases: ["Google Meet", "Google Classroom", "Drive"]
  },
  {
    id: "5",
    question: "¿Recibiré el material en formato descargable?",
    answer: "Sí. Todo participante recibe materiales digitales (presentaciones, guías, protocolos o lecturas recomendadas) en formato descargable, de uso personal y exclusivo para reforzar los contenidos aprendidos."
  },
  {
    id: "6",
    question: "¿Dónde se realizan las prácticas presenciales?",
    answer: "Las prácticas se llevan a cabo en laboratorios analíticos especializados en diagnóstico molecular, equipados con infraestructura profesional y bajo supervisión docente.",
    answer1: "Cada grupo trabaja con un número limitado de participantes para asegurar una experiencia personalizada y segura."
  },
  {
    id: "7",
    question: "¿Qué datos aparecen en el certificado y cuándo se entrega?",
    answer: "El certificado incluye tu nombre completo, el título del curso, la duración total (en horas lectivas o créditos académicos), la modalidad y la firma del equipo académico de Biotraining.",
    answer1: "Los certificados se envían de manera digital al correo registrado, dentro de los 7 días posteriores a la finalización del curso.",
    boldPhrases: ["7 días posteriores"]
  },
  {
    id: "8",
    question: "¿Puedo solicitar una versión privada o personalizada para mi institución?",
    answer: "Sí. Ofrecemos versiones personalizadas de nuestros cursos para universidades, laboratorios y empresas del sector salud o biotecnología.",
    answer1: "Adaptamos los contenidos, la duración y las prácticas según las necesidades del grupo. Puedes escribirnos directamente a contacto@biotraining.pe o al WhatsApp 969 977 934 para coordinar una propuesta a medida.",
    boldPhrases: ["contacto@biotraining.pe", "WhatsApp 969 977 934"]
  }
];
const FAQ = () => {
  const [openId, setOpenId] = useState(null);
  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };
  const renderWithHighlights = (text, phrases) => {
    if (!phrases || phrases.length === 0) return text;
    const lowerSet = new Set(phrases.map((p) => p.toLowerCase()));
    const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(`(${phrases.map(escapeRegExp).join("|")})`, "gi");
    return text.split(pattern).map((part, i) => {
      const match = lowerSet.has(part.toLowerCase());
      return match ? /* @__PURE__ */ jsx("strong", { className: "font-semibold", children: part }, i) : /* @__PURE__ */ jsx(React.Fragment, { children: part }, i);
    });
  };
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-background-primary", children: /* @__PURE__ */ jsxs("div", { className: "ccontainer max-w-4xl", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-center mb-16",
        children: /* @__PURE__ */ jsx("h2", { className: "text-4xl lg:text-5xl font-heading font-medium", children: "Preguntas frecuentes" })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqItems.map((item, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: index * 0.1 },
        className: "bg-white rounded-2xl overflow-hidden border border-gray-200",
        children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => toggleFAQ(item.id),
              className: "w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors",
              children: [
                /* @__PURE__ */ jsx("span", { className: "font-sans font-medium text-text-primary pr-8", children: item.question }),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    animate: { rotate: openId === item.id ? 180 : 0 },
                    transition: { duration: 0.3 },
                    className: "flex-shrink-0",
                    children: /* @__PURE__ */ jsx(
                      "svg",
                      {
                        className: "w-6 h-6 text-black",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /* @__PURE__ */ jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M19 9l-7 7-7-7"
                          }
                        )
                      }
                    )
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx(AnimatePresence, { children: openId === item.id && /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              transition: { duration: 0.3 },
              className: "overflow-hidden",
              children: /* @__PURE__ */ jsxs("div", { className: "px-8 pb-6 text-text-secondary leading-relaxed", children: [
                /* @__PURE__ */ jsx("p", { children: renderWithHighlights(item.answer, item.boldPhrases) }),
                item.answer1 && /* @__PURE__ */ jsx("p", { className: "mt-2", children: renderWithHighlights(item.answer1, item.boldPhrases) })
              ] })
            }
          ) })
        ]
      },
      item.id
    )) })
  ] }) });
};

const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { className: "bg-gradient-to-b from-primary-700 to-primary-900 text-white", children: /* @__PURE__ */ jsxs("div", { className: "ccontainer py-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: logoImage.src,
            alt: siteConfig.name,
            className: "h-12 w-auto brightness-0 invert"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed", children: "En Biotraining, nuestro objetivo es impulsar tu desarrollo profesional preparando herramientas formativas de alta calidad." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex md:justify-center", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-heading font-semibold text-sm mb-4", children: "Explora" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#beneficios", className: "text-sm hover:text-primary-300 transition-colors", children: "¿Por qué elegirnos?" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#cursos", className: "text-sm hover:text-primary-300 transition-colors", children: "Cursos" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#conocenos", className: "text-sm hover:text-primary-300 transition-colors", children: "Conócenos" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#empresas", className: "text-sm hover:text-primary-300 transition-colors", children: "Para empresas" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "flex md:justify-center", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-heading font-semibold text-sm mb-4", children: "Contáctanos" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("li", { className: "text-sm", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://api.whatsapp.com/send?phone=+51969977934&text=Hola👋,%20me%20puede%20brindar%20más%20información sobre los cursos...",
              children: siteConfig.contact.phone
            }
          ) }),
          /* @__PURE__ */ jsx("li", { className: "text-sm", children: /* @__PURE__ */ jsx("a", { href: `mailto:${siteConfig.contact.email}`, children: siteConfig.contact.email }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-heading font-semibold text-sm mb-4", children: "Síguenos" }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: siteConfig.links.linkedin,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors",
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "LinkedIn" }),
                /* @__PURE__ */ jsx(FaLinkedinIn, { className: "w-5 h-5" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: siteConfig.links.facebook,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors",
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Facebook" }),
                /* @__PURE__ */ jsx(FaFacebookF, { className: "w-5 h-5" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: siteConfig.links.instagram,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors",
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Instagram" }),
                /* @__PURE__ */ jsx(FaInstagram, { className: "w-5 h-5" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: siteConfig.links.youtube,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors",
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "YouTube" }),
                /* @__PURE__ */ jsx(FaYoutube, { className: "w-5 h-5" })
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 pt-8 border-t border-white/10 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-sm", children: "© 2025 Biotraining. Todos los derechos reservados." }) })
  ] }) });
};

const SocialNetworks = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5 },
      className: "\r\n        md:animate-pulse z-[60] w-20 h-20 fixed hover:animate-none hover:scale-[1.1] transition duration-500  bottom-5  right-5 md:right-20\r\n        flex items-center justify-center rounded-full bg-[#24d367]  hover:bg-[#24d367] group\r\n        ",
      children: /* @__PURE__ */ jsx(
        "a",
        {
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "Contáctanos",
          href: "https://api.whatsapp.com/send?phone=+51969977934&text=Hola👋,%20me%20puede%20brindar%20más%20información sobre los cursos...",
          children: /* @__PURE__ */ jsx(FaWhatsapp, { className: "text-5xl text-white" })
        }
      )
    }
  ) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": pageSEO.home }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/Header", "client:component-export": "default" })} ${renderComponent($$result2, "SocialNetworks", SocialNetworks, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/SocialNetworks", "client:component-export": "default" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/Hero", "client:component-export": "default" })} ${renderComponent($$result2, "EstudianteProfesional", EstudianteProfesional, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/EstudianteProfesional", "client:component-export": "default" })} ${renderComponent($$result2, "Benefits", Benefits, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/Benefits", "client:component-export": "default" })} ${renderComponent($$result2, "MetodologiaExito", MetodologiaExito, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/MetodologiaExito", "client:component-export": "default" })} ${renderComponent($$result2, "EquiposUltimaGeneracion", EquiposUltimaGeneracion, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/EquiposUltimaGeneracion", "client:component-export": "default" })} ${renderComponent($$result2, "Courses", Courses, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/Courses", "client:component-export": "default" })} ${renderComponent($$result2, "IncentivandoAprendizaje", IncentivandoAprendizaje, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/IncentivandoAprendizaje", "client:component-export": "default" })} ${renderComponent($$result2, "Instructors", Instructors, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/Instructors", "client:component-export": "default" })} ${renderComponent($$result2, "Partners", Partners, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/Partners", "client:component-export": "default" })} ${renderComponent($$result2, "Testimonials", Testimonials, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/Testimonials", "client:component-export": "default" })} ${renderComponent($$result2, "CTAEmpresas", CTAEmpresas, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/CTAEmpresas", "client:component-export": "default" })} ${renderComponent($$result2, "Conversemos", Conversemos, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/Conversemos", "client:component-export": "default" })} ${renderComponent($$result2, "FAQ", FAQ, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/FAQ", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/components/react/Footer", "client:component-export": "default" })} ` })}`;
}, "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/pages/index.astro", void 0);

const $$file = "C:/Users/ivanh/Downloads/biotraining/softwebsite-biotraining-frontend-prod001/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
