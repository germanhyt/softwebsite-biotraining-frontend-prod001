# 🧩 Guía de Componentes React

Esta guía documenta todos los componentes React disponibles en el proyecto Biotraining.

## Índice de Componentes

1. [Header](#header)
2. [Hero](#hero)
3. [Benefits](#benefits)
4. [Courses](#courses)
5. [Instructors](#instructors)
6. [Testimonials](#testimonials)
7. [FAQ](#faq)
8. [CTAEmpresas](#ctaempresas)
9. [Partners](#partners)
10. [ContactForm](#contactform)
11. [Footer](#footer)

---

## Header

**Ubicación:** `src/components/react/Header.tsx`

Navegación principal sticky con scroll detection.

### Características
- ✅ Sticky header con cambio de estilo al hacer scroll
- ✅ Menú responsive con hamburger menu en mobile
- ✅ Animaciones suaves con Framer Motion
- ✅ Links de navegación desde `site.config.ts`

### Uso
```astro
import Header from '../components/react/Header';

<Header client:load />
```

### Dependencias
- `framer-motion`
- `src/config/site.config.ts`

---

## Hero

**Ubicación:** `src/components/react/Hero.tsx`

Sección hero principal de la landing page.

### Características
- ✅ Gradiente de fondo personalizado
- ✅ Animaciones escalonadas (título, descripción, botón)
- ✅ CTA principal con botón de inscripción
- ✅ Imagen de científica a la derecha

### Uso
```astro
import Hero from '../components/react/Hero';

<Hero client:load />
```

### Dependencias
- `framer-motion`

---

## Benefits

**Ubicación:** `src/components/react/Benefits.tsx`

Grid de beneficios principales de Biotraining.

### Características
- ✅ 4 beneficios en grid responsive
- ✅ Iconos SVG personalizados
- ✅ Animación de entrada con `whileInView`
- ✅ Diseño centrado con círculo de fondo para iconos

### Beneficios Incluidos
1. **Docentes Expertos** - Profesionales con experiencia comprobada
2. **Certificación Reconocida** - Certificados con validez internacional
3. **Casos Reales** - Metodología basada en casos clínicos
4. **Horarios Flexibles** - Modalidad virtual 24/7

### Uso
```astro
import Benefits from '../components/react/Benefits';

<Benefits client:load />
```

### Dependencias
- `framer-motion`

---

## Courses

**Ubicación:** `src/components/react/Courses.tsx`

Sección de cursos especializados con carousel.

### Características
- ✅ Grid de 2 columnas en desktop
- ✅ Swiper carousel en mobile
- ✅ Tags de modalidad (Virtual, En vivo)
- ✅ Hover effects en cards
- ✅ Botones de "Ver más" e "Inscríbete"

### Cursos Incluidos
1. qPCR - En el diagnóstico y en la investigación
2. Diseño y optimización de primers para la PCR
3. Exploración y análisis con bases de datos biológicas
4. Diagnóstico molecular POC

### Uso
```astro
import Courses from '../components/react/Courses';

<Courses client:load />
```

### Dependencias
- `framer-motion`
- `swiper` + módulos Navigation, Pagination, Autoplay
- Imágenes: `curso-qpcr.jpg`, `curso-primers.jpg`, `curso-databases.jpg`, `curso-diagnostico.jpg`

---

## Instructors

**Ubicación:** `src/components/react/Instructors.tsx`

Grid de instructores expertos.

### Características
- ✅ Grid de 4 columnas en desktop
- ✅ Cards con imagen y descripción
- ✅ Hover effect con scale en imágenes
- ✅ Overlay degradado en imágenes

### Instructores Incluidos
1. Dra. María Machado - Farmacología clínica
2. Dr. Carlos Rodríguez - Biotecnología molecular
3. Dra. Ana Torres - Diagnóstico molecular
4. Dr. Mario Machado - Biotecnología molecular

### Uso
```astro
import Instructors from '../components/react/Instructors';

<Instructors client:load />
```

### Dependencias
- `framer-motion`
- Imágenes: `instructor-1.jpg` a `instructor-4.jpg`

---

## Testimonials

**Ubicación:** `src/components/react/Testimonials.tsx`

Testimonios de alumnos con carousel.

### Características
- ✅ Grid de 4 columnas en desktop
- ✅ Swiper carousel en mobile/tablet
- ✅ Quote icon decorativo
- ✅ Autoplay configurado (5 segundos)
- ✅ Paginación clickeable

### Testimonios Incluidos
1. Nancy Castillo - Egresada de Biología UNMSM
2. Carlos Mendoza - Biotecnólogo INS
3. María Gonzales - Estudiante UNALM
4. Jorge Ramírez - Investigador UPCH

### Uso
```astro
import Testimonials from '../components/react/Testimonials';

<Testimonials client:load />
```

### Dependencias
- `framer-motion`
- `swiper` + módulos Autoplay, Pagination

---

## FAQ

**Ubicación:** `src/components/react/FAQ.tsx`

Accordion de preguntas frecuentes.

### Características
- ✅ Accordion interactivo con 4 preguntas
- ✅ Animaciones de apertura/cierre con AnimatePresence
- ✅ Diseño con bordes completamente redondeados
- ✅ Icono de flecha con rotación animada

### Preguntas Incluidas
1. ¿Qué requisitos necesito para inscribirme?
2. ¿Los docentes tienen experiencia activa?
3. ¿Cuál es la duración promedio de cada curso?
4. ¿Se utilizan equipos de última generación?

### Uso
```astro
import FAQ from '../components/react/FAQ';

<FAQ client:load />
```

### Dependencias
- `framer-motion` + `AnimatePresence`
- `useState` hook

---

## CTAEmpresas

**Ubicación:** `src/components/react/CTAEmpresas.tsx`

Call to Action para servicios empresariales.

### Características
- ✅ Imagen de fondo con overlay degradado
- ✅ Texto destacado en blanco
- ✅ Botón CTA blanco con hover effect
- ✅ Elementos decorativos (blur circle)

### Uso
```astro
import CTAEmpresas from '../components/react/CTAEmpresas';

<CTAEmpresas client:load />
```

### Dependencias
- `framer-motion`
- Imagen: `team-training.jpg`

---

## Partners

**Ubicación:** `src/components/react/Partners.tsx`

Grid de logos de aliados.

### Características
- ✅ Grid responsive (2 cols mobile → 6 cols desktop)
- ✅ Efecto grayscale con hover colorido
- ✅ Animación de entrada escalonada
- ✅ Logos centrados y con tamaño máximo

### Uso
```astro
import Partners from '../components/react/Partners';

<Partners client:load />
```

### Dependencias
- `framer-motion`
- Logos: `partner-1.png` a `partner-6.png` (carpeta `/images/partners/`)

---

## ContactForm

**Ubicación:** `src/components/react/ContactForm.tsx`

Formulario de contacto con integración Resend.

### Características
- ✅ Formulario controlado con React state
- ✅ Validación de campos
- ✅ Integración con API Resend
- ✅ SweetAlert2 para feedback
- ✅ Animaciones con Framer Motion

### Campos
- Nombre completo
- Email
- Teléfono
- Mensaje

### Uso
```astro
import ContactForm from '../components/react/ContactForm';

<ContactForm client:load />
```

### Dependencias
- `framer-motion`
- `sweetalert2`
- API endpoint: `/api/send-email`
- Variables de entorno: `RESEND_API_KEY`

---

## Footer

**Ubicación:** `src/components/react/Footer.tsx`

Footer del sitio con información completa.

### Características
- ✅ Grid de 4 columnas
- ✅ Logo y descripción
- ✅ Enlaces de navegación
- ✅ Información de contacto
- ✅ Redes sociales (Facebook, Instagram, LinkedIn)
- ✅ Copyright dinámico

### Uso
```astro
import Footer from '../components/react/Footer';

<Footer client:load />
```

### Dependencias
- `src/config/site.config.ts`

---

## 🎨 Personalización

Para modificar el contenido de cualquier componente:

1. **Datos estáticos:** Edita directamente el array de datos dentro del componente
2. **Estilos:** Usa las clases de Tailwind CSS personalizadas definidas en `src/styles/global.css`
3. **Animaciones:** Ajusta las propiedades de Framer Motion (`initial`, `animate`, `whileInView`)
4. **Imágenes:** Coloca las imágenes en `public/images/` y actualiza las rutas

## 🔄 Client Directives en Astro

Todos los componentes React usan `client:load` para hidratación inmediata. Si necesitas optimizar la carga:

- `client:idle` - Carga cuando el navegador está inactivo
- `client:visible` - Carga cuando el componente es visible
- `client:media` - Carga según media query

**Ejemplo:**
```astro
<Courses client:visible />
```

## 📦 Dependencias Necesarias

Asegúrate de tener instaladas:
```bash
npm install framer-motion swiper sweetalert2 resend
```
