export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'gac-help-desk',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet' , href: 'https://fonts.googleapis.com/css2?family=PT+Sans&display=swap'}
      
      //, { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
   "~/plugins/vee-validate.js"
 //   {src: '~plugins/vee-validate.js', ssr: true}
    
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // Doc: https://http.nuxtjs.org
    //"@nuxt/http",

    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  proxy: {
    '/api': {
      target: 'http://online.globalairportconcierge.com/api/v1',
      pathRewrite: {
        '^/api' : '/'
        }
      }
    },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    
  },
  
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    dir: 'dist',
   transpile: ["vee-validate/dist/rules"],
  }
}
