const name = 'Go Conference \'19 Summer in Fukuoka'
const url = 'https://fukuoka.gocon.jp'
const desc = 'The conference of golang in fukuoka, Japan'

const config = {
  mode: 'spa',
  head: {
    title: name,
    titleTemplate: `%s - ${name}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: desc },
      { name: 'keywords', content: '' },
      { property: 'og:title', content: name },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: url },
      { property: 'og:image', content: `${url}/img/ogimage.png` },
      { property: 'og:description', content: desc },
      { property: 'og:site_name', content: name },
      { property: 'og:locale', content: 'ja_JP' },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:site', content: 'fukuoka.gocon.jp' },
      { property: 'twitter:title', content: name },
      { property: 'twitter:description', content: desc },
      { property: 'twitter:url', content: url },
      { property: 'twitter:image', content: `${url}/img/ogimage.png` },
      // Icons generated: https://www.favicon-generator.org/
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/icons/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Arvo:400,700' },
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
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-icon-180x180.png' }
    ]
  },
  loading: { color: '#666' },
  css: [],
  plugins: [
    { src: '~plugins/redirect-ssl', ssr: false },
    { src: '~plugins/scroll', ssr: false },
    { src: '~/plugins/lazyload', ssr: false }
  ],
  modules: [
    ['@nuxtjs/google-analytics', { id: 'UA-328462-17' }],
    '@nuxtjs/axios',
    '@nuxtjs/bulma',
    '@nuxtjs/pwa'
  ],
  axios: {
  },
  build: {
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
