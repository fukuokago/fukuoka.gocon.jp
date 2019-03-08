import Vue, { VueConstructor } from 'vue'

interface IVuePatternWallOptions {
}

const VuePatternWall = {
  defaultOption: {
  },
  install(vueConstructor: VueConstructor<Vue>, options?: IVuePatternWallOptions): void {
    console.log(options)
    const emit: Vue['$emit'] = vueConstructor.prototype.$emit
    console.log(emit)
  }
}

Vue.use(VuePatternWall)

/*
declare module 'vue/types/vue' {
  interface Vue {
    $patternwall(event: string, ...args: any[]): Vue;
  }
}
*/
