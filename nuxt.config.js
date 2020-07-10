
module.exports = {
  env: {
    baseUrlImg: process.env.BASE_URL || "http://localhost:5005/img/"
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      // {
      //   rel: "stylesheet",
      //   href: "https://cdn.rtlcss.com/bootstrap/v4.2.1/css/bootstrap.min.css"
      // },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "/css/animate.css" },
      { rel: "stylesheet", href: "/css/woocommerce.css" },
      { rel: "stylesheet", href: "/css/prettyPhoto.css" },
      { rel: "stylesheet", href: "/css/superfish.css" },
      { rel: "stylesheet", href: "/css/font-awesome.css" },
      { rel: "stylesheet", href: "/css/themify-icons.css" },
      { rel: "stylesheet", href: "/css/slider-pro.min.css" },
      { rel: "stylesheet", href: "/css/megafish.css" },
      { rel: "stylesheet", href: "/css/themify-icons.css" },
      { rel: "stylesheet", href: "/css/style.css" },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "~plugins/vuelidate" },
    { src: "~plugins/global-commponents" },
    // { src: "~plugins/filter" },

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    "@nuxtjs/auth",
    "@nuxtjs/pwa",
    "@nuxtjs/toast",
  ],
  toast: {
    position: "top-left",
    register: [
      // Register custom toasts
      {
        name: "my-error",
        message: "Oops...Something went wrong",
        options: {
          type: "error"
        }
      }
    ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: "http://localhost:5005/api"
  },
  auth: {
    // Options
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/users/signin",
            method: "post",
            propertyName: "token"
          },
          logout: { url: "/users/logout", method: "get" },
          user: { url: "/users/me", method: "get", propertyName: "user" }
        },
        tokenType: "JWT"
      }
    },
    redirect: {
      login: "/auth/login",
      logout: "/auth/login",
      home: false
    },
    plugins: ["./plugins/auth"]

  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  css: [
    // SCSS file in the project
    '@/assets/scss/style.scss'
  ]
}
