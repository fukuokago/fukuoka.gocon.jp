export interface IGopherState {
  visible: boolean
}

export const state = (): IGopherState => ({
  visible: false
})

export const mutations = {
  visible(storeState: IGopherState, flag: boolean) {
    storeState.visible = flag
  }
}

export const getters = {
  visible: (storeState: IGopherState): boolean => storeState.visible
}
