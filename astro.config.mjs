// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://www.biotraining.pe",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  vite: {
    ssr: {
      external: ["resend"],
    },
  },
});
