export interface IPagesState {
  name: string
}

export const state = (): IPagesState => ({
  name: 'index'
})

export const mutations = {
  updatePage(storeState: IPagesState, pageName: string) {
    storeState.name = pageName
  }
}

export const getters = {
  name: (storeState: IPagesState): string => storeState.name
}
