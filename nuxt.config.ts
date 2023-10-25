// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head: {
      title: '哗啦分享',
      htmlAttrs: {
        lang: 'zh-CN',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
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
      subsets: [0],
    },
  },
  headlessui: {
    prefix: "Headless",
  },
});
