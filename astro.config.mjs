// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://biotraining.com", // Actualizar con el dominio real
  integrations: [
    react(), 
    tailwind(), 
    sitemap()
  ],
});
