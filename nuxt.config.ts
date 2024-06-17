// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    ["@nuxtjs/google-fonts",
    {
      families: {
        "Open Sans": [400, 700],
        Montserrat: [400, 500],
      },
    }],
  ],
  runtimeConfig: {
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
  }
});