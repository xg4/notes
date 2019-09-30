import { Note } from '../../models'
import { array2Object } from '../../utils'

export default {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    update(state, list) {
      state.list = list
    },
    create(state, note) {
      state.list = [...state.list, note]
    },
    updateOne(state, note) {
      const clonedObj = array2Object(state.list)
      clonedObj[note.id] = note
      state.list = Object.values(clonedObj)
    }
  },
  actions: {
    async init({ commit }) {
      commit('update', await Note.find())
    },
    async put({ commit }, { id, ...rest }) {
      commit('updateOne', await Note.findByIdAndUpdate(id, rest))
    },
    async create({ commit }, note) {
      console.log(note, 'x')
      return new Promise((resolve, reject) => {
        Note.create(note)
          .then(note => {
            console.log(note)
            commit('create', note)
            resolve(note)
          })
          .catch(reject)
      })
    },
    async delete({ commit }, id) {
      if (!id) {
        commit('update', Note.delete())
        return
      }
      commit('update', await Note.deleteById(id))
    },
    async deleteByQuery({ commit }, query) {
      commit('update', Note.delete(query))
    },
    async merge({ commit }, notes) {
      commit('update', Note.merge(notes))
    }
  }
}
