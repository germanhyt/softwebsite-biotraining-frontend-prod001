// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.biotraining.pe",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      // filter: (page) => !page.includes("/admin/"), // Excluir
      // customPages: [
      //   "https://innovabcp2025.com/",
      //   "https://innovabcp2025.com/preguntas-frecuentes",
      // ],
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date("2025-11-12"),
    }),
  ],
  output: "static",
});
