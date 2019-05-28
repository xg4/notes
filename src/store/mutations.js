import * as types from './types'

export default {
  [types.PUT_NOTE](state, note) {
    state.notes[note.id] = note
  },
  [types.POST_NOTE](state, note) {
    state.notes = { ...state.notes, [note.id]: note }
  },
  [types.PUT_NOTES_SORT](state, type) {
    state.user.sort = type
  },
  [types.PUT_NOTES](state, notes) {
    state.notes = notes
  },
  [types.PUT_TAGS](state, tags) {
    state.tags = tags
  },
  [types.PUT_USER](state, user) {
    state.user = user
  }
}
