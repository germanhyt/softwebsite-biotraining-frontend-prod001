# 🚀 Ecosistema de Desarrollo - Biotraining Academy

## ✅ Configuración Completada

### Dependencias Instaladas

#### **Core Framework**
- ✅ Astro 5.15.1
- ✅ React 18 + React DOM
- ✅ TypeScript

#### **Estilos**
- ✅ Tailwind CSS 3 (versión estable)
- ✅ @tailwindcss/typography
- ✅ PostCSS
- ✅ Autoprefixer

#### **Fuentes**
- ✅ @fontsource/work-sans (Títulos)
- ✅ @fontsource/manrope (Texto)

#### **Librerías de UI**
- ✅ Framer Motion (Animaciones)
- ✅ Swiper (Carousels)
- ✅ SweetAlert2 (Alertas)

#### **Backend/API**
- ✅ Resend (Envío de emails)

#### **Integraciones Astro**
- ✅ @astrojs/react
- ✅ @astrojs/tailwind
- ✅ @astrojs/sitemap

---

## 📁 Estructura Creada

```
biotraining-frontend/
├── public/
│   └── robots.txt ✅
├── src/
│   ├── components/
│   │   └── react/
│   │       ├── Header.tsx ✅
│   │       ├── Hero.tsx ✅
│   │       ├── Footer.tsx ✅
│   │       └── ContactForm.tsx ✅
│   ├── config/
│   │   ├── seoConfig.ts ✅
│   │   └── site.config.ts ✅
│   ├── layouts/
│   │   └── Layout.astro ✅
│   ├── pages/
│   │   ├── index.astro ✅
│   │   └── api/
│   │       └── send-email.ts ✅
│   ├── styles/
│   │   └── global.css ✅
│   └── utils/
│       └── helpers.ts ✅
├── .env.example ✅
├── .gitignore ✅
├── astro.config.mjs ✅
├── tailwind.config.ts ✅
└── tsconfig.json ✅
```

---

## 🎨 Sistema de Diseño

### Fuentes
- **Work Sans**: Headings (h1-h6)
- **Manrope**: Texto body

### Colores (Basados en Figma)
```typescript
primary: {
  500: '#E1525F' // Color principal
  600: '#AB323D' // Color secundario
}

text: {
  primary: '#051121'   // Texto principal
  secondary: '#545454' // Texto secundario
}
```

### Gradientes
- `bg-gradient-primary`: Linear gradient principal
- `bg-gradient-hero`: Gradient del hero

---

## 🔧 Configuración Pendiente

### 1. Variables de Entorno

Crea un archivo `.env` en la raíz:

```bash
# .env
RESEND_API_KEY=re_tu_key_aqui
PUBLIC_SITE_URL=https://www.biotraining.pe
```

Para obtener tu API Key de Resend:
1. Ve a https://resend.com
2. Crea una cuenta
3. Ve a "API Keys"
4. Crea una nueva key

### 2. SEO Config

Edita `src/config/seoConfig.ts` para personalizar:
- Títulos de página
- Descripciones
- Imágenes Open Graph
- Social media handles

### 3. Información del Sitio

Edita `src/config/site.config.ts`:
- Datos de contacto
- Enlaces a redes sociales
- Items de navegación

---

## 📝 Uso de Componentes React

### Header
```astro
---
import Header from '../components/react/Header';
---
<Header client:load />
```

### Hero con Animaciones
```astro
---
import Hero from '../components/react/Hero';
---
<Hero client:load />
```

### Formulario de Contacto
```astro
---
import ContactForm from '../components/react/ContactForm';
---
<ContactForm client:load />
```

> **Nota**: Usa `client:load` para componentes interactivos que necesitan JavaScript.

---

## 🎭 Framer Motion - Ejemplos

### Fade In
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  Contenido
</motion.div>
```

### Slide In
```tsx
<motion.div
  initial={{ x: -50, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: true }}
>
  Contenido
</motion.div>
```

---

## 🎨 Tailwind CSS - Clases Personalizadas

### Botones
```html
<!-- Botón Principal -->
<button class="btn-primary">
  Texto del Botón
</button>

<!-- Botón Secundario -->
<button class="btn-secondary">
  Texto del Botón
</button>
```

### Contenedor
```html
<div class="ccontainer">
  <!-- Contenido con max-width y padding -->
</div>
```

### Tarjetas
```html
<div class="card">
  <!-- Card con bg, border y hover -->
</div>
```

---

## 📧 Envío de Emails con Resend

El endpoint está en `src/pages/api/send-email.ts`

### Ejemplo de uso desde el frontend:

```typescript
const response = await fetch('/api/send-email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    nombre: 'Juan Pérez',
    especialidad: 'Biotecnología',
    ocupacion: 'Estudiante',
  }),
});

const result = await response.json();
```

### Personalizar el template del email:

Edita el HTML en `src/pages/api/send-email.ts` en la sección `html`.

---

## 🎪 Swiper - Carousel (Ejemplo)

```tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

<Swiper
  spaceBetween={50}
  slidesPerView={3}
  onSlideChange={() => console.log('slide change')}
>
  <SwiperSlide>Slide 1</SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
  <SwiperSlide>Slide 3</SwiperSlide>
</Swiper>
```

---

## 🍬 SweetAlert2 - Alertas

```typescript
import Swal from 'sweetalert2';

// Alerta de éxito
await Swal.fire({
  icon: 'success',
  title: '¡Éxito!',
  text: 'Operación completada',
  confirmButtonColor: '#E1525F',
});

// Alerta de error
await Swal.fire({
  icon: 'error',
  title: 'Error',
  text: 'Algo salió mal',
  confirmButtonColor: '#E1525F',
});
```

---

## 🚀 Comandos de Desarrollo

```bash
# Desarrollo
npm run dev

# Build
npm run build

# Preview
npm run preview

# Astro CLI
npm run astro --help
```

---

## 📦 Próximos Pasos

### Componentes a Crear
1. **Services** - Sección de servicios/beneficios
2. **Courses** - Cards de cursos con Swiper
3. **Testimonials** - Carousel de testimonios
4. **FAQ** - Acordeón de preguntas frecuentes
5. **CTA Empresas** - Call to action para empresas

### Páginas a Crear
1. `/cursos` - Página de cursos
2. `/nosotros` - Sobre nosotros
3. `/contacto` - Página de contacto dedicada
4. `/empresas` - Cursos para empresas

### Funcionalidades
1. Implementar Swiper en sección de cursos
2. Agregar más animaciones con Framer Motion
3. Implementar modo oscuro (opcional)
4. Agregar loading states
5. Mejorar responsive design

---

## 📚 Recursos

- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Swiper](https://swiperjs.com/react)
- [SweetAlert2](https://sweetalert2.github.io/)
- [Resend](https://resend.com/docs)

---

## 💡 Tips

1. **Client Directives**: Usa `client:load` solo cuando sea necesario
2. **Optimización**: Las imágenes deben ir en `/public/images/`
3. **TypeScript**: Aprovecha el tipado para evitar errores
4. **SEO**: Actualiza meta tags en cada página
5. **Performance**: Lazy load de componentes pesados

---

**Desarrollado con ❤️ para Biotraining Academy**
