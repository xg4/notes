import * as types from './types'
import { array2Object } from '../util'

export default {
  [types.PUT_NOTE](state, note) {
    const clonedObj = array2Object(state.notes)
    clonedObj[note.id] = note
    state.notes = Object.values(clonedObj)
  },
  [types.POST_NOTE](state, note) {
    state.notes = [note, ...state.notes]
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
