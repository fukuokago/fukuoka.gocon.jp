import {Context} from 'nuxt'

// Google Cloud Strorage requires add trailing slash.
export default (ctx: Context) => {
  if (ctx.route.path.slice(-1) !== '/') {
    ctx.redirect(`${ctx.route.path}/`)
  } else if (ctx.route.path.slice(-10) === 'index.html') {
    ctx.redirect(`${ctx.route.path.replace(/index\.html/, '')}`)
  }
}
