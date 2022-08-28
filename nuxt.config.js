export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ferman',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/auth.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-compress'
  ],
  router: {
    middleware: ["auth"],
    extendRoutes(routes, resolve) {

    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    'nuxt-lazy-load',
    "@nuxtjs/auth-next",
    '@nuxtjs/axios',
    [
      'nuxt-compress',
      {
        gzip: {
          threshold: 8192,
        },
        brotli: {
          threshold: 8192,
        },
      },
    ],
  ],
  auth: {
    resetOnError: true,
    strategies: {
      local: {
        tokenRequired: true,
        token: {
          property: "data.token",
          global: true,
          type: false,
          maxAge: process.env.TOKEN_MAX_AGE || 15780000, // 6 months in second
        },
        user: {
          property: "",
        },
        endpoints: {
          login: {
            url: "/Account/SignIn",
            method: "POST",
          },
          logout: false,
          user: {
            url: "Common/GetIndexData",
            method: "POST",
          },
        },
      },
    },
    redirect: {
      login: "/",
      home: "/social",
      logout: "/",
      admins: false,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    plugins: ["~/plugins/auth.js"],
    credentials: true,
    baseURL: "https://banooclubapi.simagar.com/api/",
    // baseURL: 'https://localhost:44330/',
  },
  env: {
    pic: "https://banooclubapi.simagar.com/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
