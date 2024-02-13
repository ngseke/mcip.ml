import { config as fontawesomeConfig } from '@fortawesome/fontawesome-svg-core'

fontawesomeConfig.autoAddCss = false

const description = '立刻加入樂台計畫 Line App，輕鬆快速報名各個大專院校音樂比賽，亦可關注即時賽況、查看第一手賽事資訊與參加抽獎活動，精彩訊息不漏接！'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    shim: false,
    tsConfig: {
      compilerOptions: {
        strictNullChecks: true,
      },
      include: ['**/*.vue'],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `
            @import './assets/sass/style-resources/_variables.sass'
            @import './assets/sass/style-resources/_functions.sass'
            @import './assets/sass/style-resources/_custom.sass'
            @import './assets/sass/style-resources/_bootstrap.sass'
          `,
        },
      },
    },
  },

  modules: [
    '@nuxt/image',
    '@nuxtjs/sitemap',
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-Hant-TW',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
        { name: 'author', content: 'ngseke' },
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:image', property: 'og:image', content: '/og-image.png' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:title', property: 'og:title', content: '樂台計畫: 大專院校音樂賽事平台' },
        { hid: 'og:locale', property: 'og:locale', content: 'zh_tw' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Overpass:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap' },
      ],
      script: [
        { src: 'https://www.googletagmanager.com/gtag/js?id=UA-134521649-1', async: true },
      ],
    },

  },

  css: [
    './assets/sass/style.sass',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
})
