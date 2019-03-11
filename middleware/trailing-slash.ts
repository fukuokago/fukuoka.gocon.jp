import {Context} from '@nuxt/vue-app'

// Google Cloud Strorage requires add trailing slash.
export default (ctx: Context) => {
  if (ctx.route.path.slice(-1) !== '/') {
    const p = `${ctx.route.path}/`
    ctx.redirect(p)
  }
}
