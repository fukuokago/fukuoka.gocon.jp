import {Context} from '@nuxt/vue-app'

export default (ctx: Context) => {
  ctx.store.commit('gopher/visible', ctx.route.path === '/' || ctx.route.path === '/ja')
}
