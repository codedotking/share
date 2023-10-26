// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: "0.0.0.0",
    port: 3000,
  },
  app: {
    head: {
      title: "哗啦分享",
      htmlAttrs: {
        lang: "zh-CN",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  modules: [
    "nuxt-headlessui",
    "nuxt-icon",
    "@nuxt/image",
    "@nuxt/ui",
  ],

  tailwindcss: {
    viewer: false,
  }
});
