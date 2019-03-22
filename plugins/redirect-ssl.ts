import {Context, NodeJS} from 'nuxt'

export default ({ app }: Context) => {
  if ((process as NodeJS.process).client && !app.context.isDev && location.protocol === 'http:') {
    location.href = `https:${location.href.substring(location.protocol.length)}`
  }
}
