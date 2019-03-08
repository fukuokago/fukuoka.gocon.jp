import {Context} from '@nuxt/vue-app'

export default (ctx: Context) => {
  ctx.store.commit('pages/updatePage', ctx.route.name)
}
