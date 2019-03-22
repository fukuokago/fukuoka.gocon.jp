import {Context} from 'nuxt'

export default (ctx: Context) => {
  ctx.store.commit('gopher/visible', ctx.route.path === '/' || ctx.route.path === '/ja/')
}
