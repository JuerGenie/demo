import { defineConfig } from "vite";
import sass from "@csstools/postcss-sass";
import tailwindcss from "@tailwindcss/postcss";

export default defineConfig({
  css: {
    postcss: {
      // @ts-expect-error
      plugins: [sass(), tailwindcss()],
    },
  },
});
