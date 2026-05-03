// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import tailwind from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwind()],
  },
  site: "https://mtendekuyokwa.github.io",
  base: "/",
  integrations: [mdx(), sitemap()],
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
