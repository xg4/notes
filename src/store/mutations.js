import * as types from './types'

export default {
  [types.INIT_NOTES](state, notes) {
    state.notes = notes
  },
  [types.PUT_NOTE](state, note) {
    const id = note.id
    const oldNote = state.notes[id]
    state.notes[id] = { ...oldNote, ...note }
  }
}
