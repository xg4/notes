import * as types from './types'

export default {
  [types.APP_INIT](state, { notes, tags }) {
    state.notes = notes
    state.tags = tags
  },
  [types.PUT_NOTE](state, note) {
    const id = note.id
    state.notes[id] = note
  },
  [types.POST_NOTE](state, note) {
    state.notes = { ...state.notes, [note.id]: note }
  },
  [types.PUT_NOTES_SORT](state, type) {
    state.user.sort = type
  },
  [types.DELETE_NOTE](state, notes) {
    state.notes = notes
  },
  [types.DELETE_NOTES](state, notes) {
    state.notes = notes
  },
  [types.DELETE_COMPLETED_NOTES](state, notes) {
    state.notes = notes
  }
}
