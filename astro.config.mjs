// @ts-check

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import tailwind from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwind()],
    optimizeDeps: {
      include: ["react", "react-dom", "react-dom/client"],
    },
  },
  site: "https://mtendekuyokwa.github.io",
  base: "/",
  integrations: [mdx(), sitemap(), react()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Afacad Flux",
      cssVariable: "--font-atkinson",
      fallbacks: ["sans-serif"],
      options: {},
    },
  ],
});
