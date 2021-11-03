const description = '立刻加入樂台計畫 Line App，輕鬆快速報名各個大專院校音樂比賽，亦可關注即時賽況、查看第一手賽事資訊與參加抽獎活動，精彩訊息不漏接！'

export default {
  mode: 'universal',
  components: true,
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'zh-Hant-TW',
    },
    titleTemplate: titleChunk => (titleChunk)
      ? `${titleChunk} - 樂台計畫`
      : '樂台計畫: 大專院校音樂賽事平台',
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { name: 'author', content: 'Huang Xingqiao' },
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'og:image', property: 'og:image', content: '/og-image.png' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: '樂台計畫: 大專院校音樂賽事平台' },
      { hid: 'og:locale', property: 'og:locale', content: 'zh_tw' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+TC:400,500,700,900|Overpass:400,400i,600,700,900&display=swap&subset=chinese-traditional', body: true },
    ],
    script: [
      { src: '//static.zotabox.com/9/f/9fccee64ff3ae80ada19da0e463cce9c/widgets.js', async: true },
      { src: 'https://www.googletagmanager.com/gtag/js?id=UA-134521649-1', async: true },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#00B9E6' },
  /*
  ** Global CSS
  */
  css: [
    './assets/sass/style.sass',
  ],
  styleResources: {
    sass: [
      './assets/sass/style-resources/_variables.sass',
      './assets/sass/style-resources/_functions.sass',
      './assets/sass/style-resources/_custom.sass',
      './assets/sass/style-resources/_bootstrap.sass',
    ],
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-scroll-reveal', ssr: false },
    '~/plugins/font-awesome',
    { src: '~plugins/ga.js', mode: 'client' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/composition-api/module',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
    'vue-scrollto/nuxt',
    'nuxt-fontawesome',
  ],
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab'],
      },
    ],
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS: true,
    extend (config, ctx) {
    },
  },
  sitemap: {
    gzip: true,
    exclude: [
      '/news.html',
      '/l',
    ],
  },
}
