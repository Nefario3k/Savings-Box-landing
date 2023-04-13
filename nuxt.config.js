import colors from 'vuetify/es5/util/colors'

export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - savingsbox-landing-page',
        title: 'savingsbox-landing-page',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
            rel: "stylesheet",
            crossorigin: "anonymous",
            integrity: "sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD",
            type: "text/css",
            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        },
        {
            rel: "stylesheet",
            type: "text/css",
            href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/static/css/main.css',
        // '~/static/css/auth-pages.css',
        // '~/static/css/savings.css',
        // '~/static/css/menu.css',
        // '~/static/css/file-input.css',
        '~/static/css/button.scss',
        // '~/static/css/landing-generics.scss',
        '~/static/css/overide.scss',
        // '~/static/css/responsive.scss',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
        //gsap animation plugin
        'nuxt-gsap-module'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        ['@nuxtjs/axios']
    ],

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: false,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3,
                },
            },
        },
    },

    gsap: {
        extraPlugins: {
            scrollTo: true,
            scrollTrigger: true
        },
        extraEases: {
            expoScaleEase: true
        }
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}