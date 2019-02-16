// @ts-ignore: for editor
export default ({ app }) => {
  if (process.client && !app.context.isDev && location.protocol === 'http:') {
    location.href = `https:${location.href.substring(location.protocol.length)}`
  }
}
