import ReactivityTransform from '@vue-macros/reactivity-transform/vite'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxt/image"],
  typescript: {
    strict: true,
  },
  vite: {
    plugins: [
      ReactivityTransform()
    ]
  },
  image: {
    presets: {
      default: {
        modifiers: {
          format: "webp",
        }
      }
    }
  }
})
