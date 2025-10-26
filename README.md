# BioTraining - Plataforma de Capacitación Profesional# Astro Starter Kit: Basics



Sitio web desarrollado con Astro, React, TypeScript y Tailwind CSS 4.```sh

yarn create astro@latest -- --template basics

## 🚀 Stack Tecnológico```



- **Framework**: [Astro](https://astro.build) v5> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

- **UI Components**: React 19 con TypeScript

- **Estilos**: Tailwind CSS 4## 🚀 Project Structure

- **Animaciones**: Framer Motion

- **Carousel**: SwiperInside of your Astro project, you'll see the following folders and files:

- **Alertas**: SweetAlert2

- **Email**: Resend```text

- **Fuentes**: Work Sans (títulos) y Manrope (texto)/

- **Gestor de paquetes**: Yarn├── public/

│   └── favicon.svg

## 📁 Estructura del Proyecto├── src

│   ├── assets

```│   │   └── astro.svg

/│   ├── components

├── public/│   │   └── Welcome.astro

│   └── robots.txt│   ├── layouts

├── src/│   │   └── Layout.astro

│   ├── assets/│   └── pages

│   ├── components/│       └── index.astro

│   │   ├── Contact.tsx      # Formulario de contacto└── package.json

│   │   ├── Courses.tsx      # Sección de cursos con Swiper```

│   │   ├── Features.tsx     # Características con animaciones

│   │   ├── Footer.tsx       # Footer del sitioTo learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

│   │   ├── Header.tsx       # Navegación principal

│   │   ├── Hero.tsx         # Hero section## 🧞 Commands

│   │   └── Testimonials.tsx # Testimonios con Swiper

│   ├── config/All commands are run from the root of the project, from a terminal:

│   │   └── seoConfig.ts     # Configuración SEO

│   ├── layouts/| Command                   | Action                                           |

│   │   └── Layout.astro     # Layout principal con SEO| :------------------------ | :----------------------------------------------- |

│   ├── pages/| `yarn install`             | Installs dependencies                            |

│   │   ├── index.astro      # Página principal| `yarn dev`             | Starts local dev server at `localhost:4321`      |

│   │   └── api/| `yarn build`           | Build your production site to `./dist/`          |

│   │       └── contact.ts   # API endpoint para contacto| `yarn preview`         | Preview your build locally, before deploying     |

│   └── env.d.ts             # Tipos de variables de entorno| `yarn astro ...`       | Run CLI commands like `astro add`, `astro check` |

├── astro.config.mjs| `yarn astro -- --help` | Get help using the Astro CLI                     |

├── tailwind.config.ts

└── package.json## 👀 Want to learn more?

```

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 🛠️ Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd softwebsite-biotraining-frontend-prod001
   ```

2. **Instalar dependencias**
   ```bash
   yarn install
   ```

3. **Configurar variables de entorno**
   
   Copia el archivo `.env.example` a `.env` y configura las variables:
   
   ```bash
   cp .env.example .env
   ```
   
   Edita el archivo `.env`:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
   PUBLIC_SITE_URL=https://biotraining.com
   EMAIL_FROM=onboarding@resend.dev
   EMAIL_TO=contact@biotraining.com
   ```

## 🚦 Comandos

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `yarn install`            | Instala dependencias                             |
| `yarn dev`                | Inicia servidor de desarrollo en `localhost:4321`|
| `yarn build`              | Construye el sitio para producción en `./dist/`  |
| `yarn preview`            | Previsualiza el build localmente                 |
| `yarn astro ...`          | Ejecuta comandos CLI de Astro                    |
| `yarn add <package>`      | Agrega una nueva dependencia                     |

## 📧 Configuración de Email con Resend

1. Crea una cuenta en [Resend](https://resend.com)
2. Obtén tu API Key desde el dashboard
3. Configura las variables de entorno en `.env`
4. El endpoint `/api/contact` manejará los envíos

## 🎨 Personalización

### Colores

Edita `tailwind.config.mjs` para personalizar la paleta de colores:

```javascript
colors: {
  primary: {
    // Tu paleta de colores primarios
  },
  secondary: {
    // Tu paleta de colores secundarios
  },
}
```

### SEO

Edita `src/config/seoConfig.ts` para personalizar:
- Título del sitio
- Descripción
- Keywords
- Meta tags de redes sociales
- URL del sitio

### Fuentes

El proyecto usa:
- **Work Sans** para títulos (font-heading)
- **Manrope** para texto (font-sans)

Para cambiar las fuentes, edita:
1. `tailwind.config.mjs` - Define las familias
2. `src/layouts/Layout.astro` - Importa las fuentes

## 🧩 Componentes React

Todos los componentes React están en `src/components/` y usan:
- **TypeScript** para type safety
- **Framer Motion** para animaciones
- **Hooks** siguiendo las mejores prácticas
- **Tailwind CSS** para estilos

### Ejemplos de uso:

```astro
<Header client:load />
<Hero client:load />
<Courses client:load />
```

## 📱 Responsive Design

El sitio está completamente optimizado para:
- 📱 Mobile (< 640px)
- 📱 Tablet (640px - 1024px)
- 💻 Desktop (> 1024px)

## 🔒 Variables de Entorno

| Variable           | Descripción                          | Requerida |
| ------------------ | ------------------------------------ | --------- |
| `RESEND_API_KEY`   | API Key de Resend                    | ✅        |
| `PUBLIC_SITE_URL`  | URL del sitio                        | ✅        |
| `EMAIL_FROM`       | Email remitente                      | ✅        |
| `EMAIL_TO`         | Email destinatario                   | ✅        |

## 🚀 Deploy

### Vercel
```bash
yarn build
vercel --prod
```

### Netlify
```bash
yarn build
netlify deploy --prod --dir=dist
```

### Otros
El proyecto genera archivos estáticos en `./dist/` que pueden ser desplegados en cualquier hosting.

## 📦 Dependencias Principales

```json
{
  "astro": "^5.15.1",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "tailwindcss": "^3.4.0",
  "framer-motion": "^12.23.24",
  "swiper": "^12.0.3",
  "sweetalert2": "^11.26.3",
  "resend": "^6.2.2"
}
```

## 📄 Licencia

© 2025 BioTraining. Todos los derechos reservados.

## 🤝 Soporte

Para soporte, contacta a: contact@biotraining.com
