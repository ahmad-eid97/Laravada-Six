export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Laravada',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/assets/images/favicon.png' },
      { rel: 'stylesheet', href: "animate.css/animate.min.css"},
      { rel: 'stylesheet', href: 'bootstrap/dist/css/bootstrap.css' },
      { rel: 'stylesheet', href: 'bootstrap/dist/css/bootstrap-vue.css' },
      { rel: 'stylesheet', href: '/css/vars/vars.css' },
      { rel: 'stylesheet', href: '/css/vars/globals.css' },
      { rel: 'stylesheet', href: '/css/vars/mixins.scss' },
      { rel: 'stylesheet', href: 'swiper/css/swiper.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/bootstrap-vue.js',
    '~plugins/coolLightbox.js',
    '~plugins/fortawesome.js',
    '~plugins/vueCountDown.js',
    '~plugins/swiperVue.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  styleResources: {
    scss: [
      './static/css/vars/mixins.scss'
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-i18n',
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.json'
      },
      {
        code: 'ar',
        file: 'ar.json'
      }
    ],
    // locales: ['en', 'ar'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome'
        },
        ar: {
          welcome: 'مرحباً'
        }
      }
    }
  },
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://accbcs.xyz/api/v1/'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {
        implementation: require('sass'),
      },
    },
  }
}
