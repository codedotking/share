// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
    "nuxt-icon",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      Poppins: true,
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
      subsets:['latin']
    },
  },
  headlessui: {
    prefix: "Headless",
  },
});
