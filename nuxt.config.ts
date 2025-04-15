// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/supabase',
    'nuxt-security',
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
        
})