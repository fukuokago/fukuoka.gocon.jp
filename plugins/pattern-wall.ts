import Vue, { VueConstructor } from 'vue'

class VuePatternWall {
  public static install(vueConstructor: VueConstructor<Vue>): never | void {
    vueConstructor.mixin({
      mounted() {
        vueConstructor.prototype.$nextTick(() => {
          if ('constructor' in this) {
            const n = this.constructor.name
            if (n.match(/^Page/) !== null) {
              if ('$store' in this) {
                const v = this as Vue
                v.$store.commit('pages/updatePage', n.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase())
              }
            }
          }
        })
      }
    })
  }
}

Vue.use(VuePatternWall)
