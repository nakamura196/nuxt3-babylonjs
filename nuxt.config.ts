// https://v3.nuxtjs.org/api/configuration/nuxt.config

import en from "./locales/en.json";
import ja from "./locales/ja.json";

export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n", "@nuxt/content"],
  app: {
    baseURL: "/nuxt3-babylonjs", // /<reponame>
  },
  i18n: {
    locales: ["ja", "en"], // used in URL path prefix
    defaultLocale: "ja",
    // add `vueI18n` option to `@nuxtjs/i18n` module options
    vueI18n: {
      legacy: false,
      locale: "ja",
      messages: {
        ja,
        en,
      },
    },
  },
  css: ["vuetify/lib/styles/main.sass", "@/assets/styles/main.css"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
