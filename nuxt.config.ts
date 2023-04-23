export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  content: {
    documentDriven: true
  },
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css"
  ]
})
