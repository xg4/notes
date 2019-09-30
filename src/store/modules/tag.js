import { Tag } from '../../models'

export default {
  namespaced: true,
  state: { list: [] },
  mutations: {
    update(state, tags) {
      state.list = tags
    }
  },
  actions: {
    async init({ commit }) {
      commit('update', await Tag.init())
    },
    async merge({ commit }, tags) {
      commit('update', Tag.merge(tags))
    }
  }
}
