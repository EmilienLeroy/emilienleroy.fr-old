export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'emilienleroy.fr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/styles/index.scss',
    'node_modules/@mdi/font/css/materialdesignicons.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/modal.client.ts',
    '@/plugins/scroll.client.ts',
    '@/plugins/particle.client.ts'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-i18n',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  styleResources: {
    scss: ['./assets/styles/*.scss']
  },

  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          title: 'French Web Developer',
          scroll: 'Scroll Down',
          home: {
            title: 'About me',
            it: {
              title: 'IT since 2014',
              content: 'Passionate since childhood by new technologies and computing, I decided to dedicate my studies to this area. In the past few years, I have acquired skills as a developer and network administrator. Thanks to the sandwich course I currently take part in, I have the opportunity to get familiar with the world of companies while continuing my studies.',
            },
            passion: {
              title: 'A passion before',
              content: 'As for me, IT is above all a passion before being my job. I am interested in any type of tech whether it\'s web or mobile or even the news in the world of networking. But I still have a preference for web design. My favorite programming languages are Javascript (NodeJS in particular) and PHP.',
            },
            other: {
              title: 'My other passions',
              content: 'One of my other passions is video editing, and particularly special effects. I spent many hours on After Effect (and its tutorials). After over 5 years of use, I think I am able to make very good quality videos with this software application. I also work out to stay fit (your keyboard is good for muscling the fingers but do not forget the rest).'
            }
          },
          experience: {
            title: 'Experience',
          },
        },
      }
    }
  }
}
