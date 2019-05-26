import * as types from './types'

export default {
  [types.INIT_NOTES](state, notes) {
    state.notes = notes
  },
  [types.PUT_NOTE](state, note) {
    const id = note.id
    state.notes[id] = note
  },
  [types.POST_NOTE](state, note) {
    state.notes = { ...state.notes, [note.id]: note }
  }
}
