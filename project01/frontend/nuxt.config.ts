// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxt/ui"],
  ui: {
    colorMode: true,
  },
  runtimeConfig: {
    public: {
      BACKEND_API: process.env.BACKEND_API,
      BASE_MEDIA: process.env.BASE_MEDIA,
    },
  },
  ignore: ["**/_components/**"],
});
