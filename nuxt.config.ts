const name = 'Go Conference \'19 Summer in Fukuoka'
const url = 'https://fukuoka.gocon.jp'
const desc = 'The conference of Golang in Fukuoka, Japan'

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
      { property: 'og:image', content: `${url}/ogimage.png` },
      { property: 'og:description', content: desc },
      { property: 'og:site_name', content: name },
      { property: 'og:locale', content: 'ja_JP' },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:site', content: '#fukuokago' },
      { property: 'twitter:title', content: name },
      { property: 'twitter:description', content: desc },
      { property: 'twitter:url', content: url },
      { property: 'twitter:image', content: `${url}/ogimage.png` },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Arvo:400,700' }
    ]
  },
  loading: { color: '#666' },
  css: [],
  plugins: [],
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
