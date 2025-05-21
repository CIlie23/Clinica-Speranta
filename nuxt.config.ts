// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/main.css', '@animxyz/core'],
  plugins: [
    '~/plugins/vue-toastification.client',
    '~/plugins/posthog.client'
  ],
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/supabase',
    'nuxt-security',
    'shadcn-nuxt',
  ],
    content: {
    database: {
      type: 'postgres',
      url: process.env.POSTGRES_URL,
    }
  },
    ui:{
        defaultFont: false
    },
    
  supabase: {
      url: process.env.SUPABASE_URL,
      key: process.env.SUPABASE_KEY,
      redirect: false,
    },
    shadcn: {
      /**
       * Prefix for all the imported component
       */
      prefix: '',
      /**
       * Directory that the component lives in.
       * @default "./components/ui"
       */
      componentDir: './components/ui'
    },
    vite: {
      plugins: [
        tailwindcss(),
      ],
    },
    runtimeConfig: {
        public: {
            posthogPublicKey: 'phc_EhUJvmpIS8Mw9vqtovxJLnIQsFmGcd6ioUuzLGJCyAe',
            posthogHost: 'https://eu.i.posthog.com'
        }
        
    },   
})
