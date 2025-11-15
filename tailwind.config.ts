import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "1.2rem",
          md: "1.5rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        heading: ['Work Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#FFF0F1',
          100: '#FFE0E3',
          200: '#FFC7CD',
          300: '#FFA0AA',
          400: '#FF6B7C',
          500: '#E1525F',
          600: '#AB323D',
          700: '#8B1F2A',
          800: '#682329',
          900: '#141111',
        },
        text: {
          primary: '#051121',
          secondary: '#545454',
          tertiary: '#3D3D3D',
        },
        background: {
          primary: '#FFFFFF',
          secondary: '#F2F2F2',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #AB323D 0%, #E1525F 45%)',
        'gradient-hero': 'linear-gradient(180deg, #AB323D 4%, #682329 35%, rgba(20, 17, 17, 0.89) 83%)',
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
