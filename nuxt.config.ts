// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/apollo', '@nuxt/icon'],
  future: {
    compatibilityVersion: 4
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://rickandmortyapi.com/graphql'
      }
    }
  }
})