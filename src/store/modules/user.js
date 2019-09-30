import { User } from '../../models'

export default {
  namespaced: true,
  state: {
    // 0(default): sort by note.update_at
    sort: 0
  },
  mutations: {
    update(state, user) {
      Object.assign(state, user)
    }
  },
  actions: {
    async init({ commit }) {
      commit('update', await User.init())
    },
    async put({ commit, state }, user) {
      commit('update', await User.update({ ...state, ...user }))
    },
    async merge({ commit }, user) {
      commit('update', User.merge(user))
    }
  }
}
