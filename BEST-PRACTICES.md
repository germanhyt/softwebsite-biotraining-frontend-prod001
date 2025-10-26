# 🎯 Mejores Prácticas - Biotraining Academy

## 📋 Checklist de Calidad

### ✅ Antes de Crear un Componente

- [ ] ¿Este componente necesita ser interactivo? → React
- [ ] ¿Es solo presentacional y estático? → Astro
- [ ] ¿Necesita estado o efectos? → React con hooks
- [ ] ¿Se va a reutilizar? → Componente separado
- [ ] ¿Tiene lógica compleja? → Extraer a custom hook

### ✅ TypeScript

```typescript
// ✅ BIEN: Interfaces descriptivas
interface CourseCard {
  id: string;
  title: string;
  description: string;
  duration: number;
  price: number;
  isLive: boolean;
}

// ❌ MAL: Any types
const data: any = { ... }

// ✅ BIEN: Tipado explícito
const handleSubmit = async (e: React.FormEvent): Promise<void> => { }
```

### ✅ React Hooks

```typescript
// ✅ BIEN: useEffect con dependencias correctas
useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// ❌ MAL: useEffect sin cleanup
useEffect(() => {
  window.addEventListener('scroll', handleScroll);
}, []);
```

### ✅ Framer Motion Performance

```tsx
// ✅ BIEN: Animar transform y opacity (GPU accelerated)
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
/>

// ❌ MAL: Animar width, height (reflow)
<motion.div
  initial={{ width: 0, height: 0 }}
  animate={{ width: 200, height: 200 }}
/>

// ✅ BIEN: Usar viewport para lazy animations
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
/>
```

---

## 🎨 Tailwind CSS Best Practices

### Orden Jerárquico de Clases

```html
<!-- ✅ BIEN: Orden lógico -->
<div class="
  relative           /* Position */
  flex flex-col      /* Display & Flexbox */
  gap-4              /* Spacing */
  w-full max-w-md    /* Sizing */
  p-6                /* Padding */
  bg-white           /* Background */
  rounded-lg         /* Border */
  shadow-lg          /* Effects */
  hover:shadow-xl    /* Hover */
  transition-all     /* Transitions */
">
```

### Componentes Reutilizables

```css
/* src/styles/global.css */
@layer components {
  .card-hover {
    @apply transition-all duration-300 hover:shadow-2xl hover:-translate-y-1;
  }
  
  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-primary;
  }
}
```

### Responsive Design

```html
<!-- ✅ BIEN: Mobile first -->
<div class="
  flex-col        /* Mobile */
  md:flex-row     /* Tablet */
  lg:gap-8        /* Desktop */
">

<!-- ❌ MAL: Desktop first -->
<div class="
  flex-row        
  md:flex-col     
">
```

---

## 🚀 Performance

### Lazy Loading de Componentes

```astro
---
// ✅ BIEN: Solo cargar cuando sea necesario
import HeavyComponent from '../components/HeavyComponent';
---

<!-- Solo si está visible -->
<HeavyComponent client:visible />

<!-- Solo en interacción -->
<Modal client:idle />

<!-- Solo en media query -->
<Sidebar client:media="(min-width: 768px)" />
```

### Optimización de Imágenes

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---

<!-- ✅ BIEN: Usar el componente Image de Astro -->
<Image 
  src={heroImage} 
  alt="Hero" 
  width={1200}
  height={600}
  loading="lazy"
/>

<!-- ❌ MAL: img tag sin optimización -->
<img src="/hero.jpg" alt="Hero" />
```

---

## 📧 Formularios y Validación

### Validación Frontend

```typescript
// ✅ BIEN: Validación robusta
const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Validar
  if (!formData.nombre.trim()) {
    await Swal.fire({
      icon: 'warning',
      title: 'Campo requerido',
      text: 'Por favor ingresa tu nombre',
    });
    return;
  }
  
  // Enviar
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) throw new Error('Error en el servidor');
    
    const result = await response.json();
    // Manejar éxito
  } catch (error) {
    // Manejar error
  }
};
```

---

## 🔒 Seguridad

### Variables de Entorno

```typescript
// ✅ BIEN: Usar import.meta.env
const apiKey = import.meta.env.RESEND_API_KEY;

// ❌ MAL: Hardcodear secrets
const apiKey = 're_123456789';

// ✅ BIEN: Validar en runtime
if (!import.meta.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY no está configurada');
}
```

### Sanitización de Inputs

```typescript
// ✅ BIEN: Sanitizar antes de usar
const sanitize = (text: string): string => {
  return text
    .trim()
    .replace(/<script[^>]*>.*?<\/script>/gi, '')
    .replace(/[<>]/g, '');
};

const cleanData = {
  nombre: sanitize(formData.nombre),
  email: sanitize(formData.email),
};
```

---

## 🎯 SEO

### Meta Tags por Página

```astro
---
import Layout from '../layouts/Layout.astro';
import { pageSEO } from '../config/seoConfig';
---

<!-- ✅ BIEN: SEO específico por página -->
<Layout seo={pageSEO.cursos}>
  <h1>Nuestros Cursos</h1>
</Layout>
```

### Semantic HTML

```html
<!-- ✅ BIEN: HTML semántico -->
<article>
  <header>
    <h1>Título del Curso</h1>
    <time datetime="2025-01-15">15 de Enero, 2025</time>
  </header>
  <section>
    <h2>Descripción</h2>
    <p>Contenido...</p>
  </section>
</article>

<!-- ❌ MAL: Divs genéricos -->
<div>
  <div>
    <div>Título del Curso</div>
    <div>15 de Enero, 2025</div>
  </div>
</div>
```

---

## 🎨 Accesibilidad

### ARIA Labels

```html
<!-- ✅ BIEN: Accesible -->
<button 
  aria-label="Cerrar menú"
  onClick={handleClose}
>
  <XIcon />
</button>

<!-- ✅ BIEN: Skip links -->
<a 
  href="#main-content" 
  class="sr-only focus:not-sr-only"
>
  Saltar al contenido
</a>
```

### Focus States

```css
/* ✅ BIEN: Focus visible */
.btn-primary {
  @apply focus:outline-none focus:ring-4 focus:ring-primary-500/50;
}

/* ❌ MAL: Quitar outline sin alternativa */
.btn {
  outline: none;
}
```

---

## 📱 Responsive Design

### Breakpoints de Tailwind

```typescript
// Breakpoints predeterminados
sm: '640px'   // Tablet pequeño
md: '768px'   // Tablet
lg: '1024px'  // Laptop
xl: '1280px'  // Desktop
2xl: '1536px' // Desktop grande
```

### Mobile First

```html
<!-- ✅ BIEN: Mobile first approach -->
<div class="
  text-sm          /* 14px en mobile */
  md:text-base     /* 16px en tablet */
  lg:text-lg       /* 18px en desktop */
">

<!-- Grid responsivo -->
<div class="
  grid 
  grid-cols-1      /* 1 columna en mobile */
  md:grid-cols-2   /* 2 columnas en tablet */
  lg:grid-cols-3   /* 3 columnas en desktop */
  gap-4
">
```

---

## 🧪 Testing (Recomendado)

### Estructura de Tests

```typescript
// curso.test.ts
import { expect, test } from 'vitest';
import { validateEmail } from './utils/helpers';

test('valida email correctamente', () => {
  expect(validateEmail('test@example.com')).toBe(true);
  expect(validateEmail('invalid')).toBe(false);
});
```

---

## 📦 Estructura de Componentes

```tsx
// ✅ BIEN: Estructura organizada
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 1. Interfaces/Types
interface CourseCardProps {
  title: string;
  description: string;
}

// 2. Componente
const CourseCard: React.FC<CourseCardProps> = ({ title, description }) => {
  // 3. State
  const [isHovered, setIsHovered] = useState(false);
  
  // 4. Effects
  useEffect(() => {
    // ...
  }, []);
  
  // 5. Handlers
  const handleClick = () => {
    // ...
  };
  
  // 6. Render
  return (
    <motion.div>
      {/* JSX */}
    </motion.div>
  );
};

// 7. Export
export default CourseCard;
```

---

## 🔄 Git Best Practices

### Commits Semánticos

```bash
# ✅ BIEN
feat: agregar componente de testimonios
fix: corregir validación de email
docs: actualizar README con instrucciones
style: mejorar espaciado en header
refactor: optimizar componente de contacto
perf: lazy load de imágenes en galería

# ❌ MAL
cambios varios
fix
update
```

---

## 🎓 Recursos Adicionales

- [Astro Best Practices](https://docs.astro.build/en/guides/best-practices/)
- [React Patterns](https://reactpatterns.com/)
- [Tailwind Best Practices](https://tailwindcss.com/docs/reusing-styles)
- [Web Accessibility](https://www.w3.org/WAI/WCAG21/quickref/)

---

**¡Mantén el código limpio, documentado y accesible!** 🚀
