const pkg = require('./package')

const dynamicPages = [
  '/blog/call-for-sponsors-is-open',
  '/blog/call-for-papers-is-open',
  '/blog/brand-kit-releases',
  '/blog/hello-gophers',
  '/assets/gopher-noodle-for-phone',
  '/assets/gopher-noodle-for-laptop',
  '/assets/gopher-pattern-for-phone',
  '/assets/gopher-pattern-for-laptop',
  '/assets/gopher-sunglass-for-phone',
  '/assets/gopher-sunglass-for-laptop'
]
const dynamicPagesWithLocale = dynamicPages.concat(dynamicPages.map((m) => { return `/ja${m}` }))

const config = {
  mode: 'spa',
  head: {
    title: pkg.fullname,
    titleTemplate: `%s - ${pkg.fullname}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'keywords', content: 'Go, Golang, Conference, GopherCon, Gopher, Fukuoka, 2019' },
      { property: 'og:title', content: pkg.fullname },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: pkg.homepage },
      { property: 'og:image', content: `${pkg.homepage}/icons/ogimage.png` },
      { property: 'og:description', content: pkg.description },
      { property: 'og:site_name', content: pkg.fullname },
      { property: 'og:locale', content: 'ja_JP' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@golangjp' },
      { property: 'twitter:title', content: pkg.fullname },
      { property: 'twitter:description', content: pkg.description },
      { property: 'twitter:url', content: pkg.homepage },
      { property: 'twitter:image', content: `${pkg.homepage}/icons/ogimage.png` },
      // Icons generated: https://www.favicon-generator.org/
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/icons/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    script: [
      { defer: 'defer', src: '//use.fontawesome.com/releases/v5.7.2/js/solid.js', integrity: 'sha384-6FXzJ8R8IC4v/SKPI8oOcRrUkJU8uvFK6YJ4eDY11bJQz4lRw5/wGthflEOX8hjL', crossorigin: 'anonymous' },
      { defer: 'defer', src: '//use.fontawesome.com/releases/v5.7.2/js/brands.js', integrity: 'sha384-zJ8/qgGmKwL+kr/xmGA6s1oXK63ah5/1rHuILmZ44sO2Bbq1V3p3eRTkuGcivyhD', crossorigin: 'anonymous' },
      { defer: 'defer', src: '//use.fontawesome.com/releases/v5.7.2/js/fontawesome.js', integrity: 'sha384-xl26xwG2NVtJDw2/96Lmg09++ZjrXPc89j0j7JHjLOdSwHDHPHiucUjfllW0Ywrq', crossorigin: 'anonymous' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Arvo:400,700' },
      // Icons generated: https://www.favicon-generator.org/
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icons/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/icons/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/icons/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/icons/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/icons/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/icons/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/icons/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/icons/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/icons/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/icons/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-icon-180x180.png' },
      // Splash images: https://qiita.com/NaokiIshimura/items/2b18ce82c936399b695c
      // https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/launch-screen/
      { rel: 'apple-touch-startup-image', href: '/splash/640x1136.png', media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)' },
      { rel: 'apple-touch-startup-image', href: '/splash/750x1334.png', media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)' },
      { rel: 'apple-touch-startup-image', href: '/splash/1242x2208.png', media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)' },
      { rel: 'apple-touch-startup-image', href: '/splash/1125x2436.png', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)' },
      { rel: 'apple-touch-startup-image', href: '/splash/1536x2048.png', media: '(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)' },
      { rel: 'apple-touch-startup-image', href: '/splash/1668x2224.png', media: '(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)' },
      { rel: 'apple-touch-startup-image', href: '/splash/2048x2732.png', media: '(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)' }
    ]
  },
  loading: { color: '#666' },
  css: [],
  plugins: [
    { src: '~plugins/redirect-ssl', ssr: false },
    { src: '~plugins/pattern-wall', ssr: false },
    { src: '~plugins/scroll', ssr: false },
    { src: '~plugins/parallax', ssr: false },
    { src: '~plugins/lazyload', ssr: false }
  ],
  modules: [
    ['nuxt-imagemin'],
    ['@nuxtjs/google-analytics', { id: 'UA-328462-17' }],
    ['nuxt-i18n', {
      seo: false,
      parsePages: false,
      locales: [
        { name: 'English', code: 'en', iso: 'en-US', file: 'en.ts' },
        { name: '日本語', code: 'ja', iso: 'ja_JP', file: 'ja.ts' }
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'en',
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        // keep their selected a locale
        alwaysRedirect: true,
        fallbackLocale: 'en'
      },
      vueI18n: {
        fallbackLocale: 'en'
      },
      vueI18nLoader: true,
      silentTranslationWarn: true
    }],
    '@nuxtjs/axios',
    '@nuxtjs/bulma',
    '@nuxtjs/pwa'
  ],
  router: {
    middleware: [
      'gopher',
      'trailing-slash'
    ]
  },
  axios: {
  },
  generate: {
    dir: 'dist',
    fallback: true,
    subFolders: true,
    routes: dynamicPagesWithLocale
  },
  build: {
    extend(c: any) {
      c.module.rules.push({
        resourceQuery: /blockType=i18n/,
        type: 'javascript/auto',
        loader: ['@kazupon/vue-i18n-loader', 'yaml-loader'],
      })
      // 5MB
      c.performance.maxAssetSize = 5000000
    },
    postcss: {
      plugins: {
        'postcss-preset-env': {
          features: {
            customProperties: false
          }
        }
      },
      preset: {
        features: {
          customProperties: false
        }
      }
    }
  }
}

// @ts-ignore: for editor
export = config
