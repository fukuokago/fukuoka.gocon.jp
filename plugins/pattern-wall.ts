import Vue, { VueConstructor } from 'vue'

class VuePatternWall {
  public static install(vueConstructor: VueConstructor<Vue>): never | void {
    const pattern = new VuePatternWall()

    window.addEventListener('resize', () => {
      console.log('resized')
    }, { passive: true })

    Vue.directive('patternwall', {
      inserted (el, binding) {
        pattern.add(el, binding)
      },
      unbind(el, binding){
        pattern.remove(el, binding)
      }
    })

    vueConstructor.mixin({
      mounted() {
        vueConstructor.prototype.$nextTick(() => {
          if ('constructor' in this) {
            const n = this.constructor.name
            if (n.match(/^Page/) !== null) {
              console.log(n, document.body.clientHeight)
            }
          }
        })
      }
    })
  }

  public remove(el: any, binding: any) {
    console.log(el, binding)
  }

  public add(el: any, binding: any) {
    console.log(el, binding)
  }
}

Vue.use(VuePatternWall)
