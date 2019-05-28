import { Tag, Note, User } from '../models'
import * as types from './types'

export default {
  /**
   * @description Initialize app data
   */
  [types.APP_INIT]({ commit }) {
    commit(types.PUT_NOTES, Note.init())
    commit(types.PUT_TAGS, Tag.init())
    commit(types.PUT_USER, User.init())
  },
  /**
   * @description update note data by id
   */
  [types.PUT_NOTE]({ commit }, partialNote) {
    commit(types.PUT_NOTE, Note.put(partialNote))
  },
  /**
   * @description create note
   */
  [types.POST_NOTE]({ commit }, partialNote) {
    const note = Note.post(partialNote)
    commit(types.POST_NOTE, note)
    return note
  },
  /**
   * @description update notes sort type
   */
  [types.PUT_NOTES_SORT]({ commit }, type) {
    commit(types.PUT_NOTES_SORT, User.putSort(type).sort)
  },
  [types.DELETE_NOTE]({ commit }, id) {
    commit(types.PUT_NOTES, Note.deleteById(id))
  },
  /**
   * @description delete all notes
   */
  [types.DELETE_NOTES]({ commit }) {
    commit(types.PUT_NOTES, Note.delete())
  },
  /**
   * @description delete completed notes
   */
  [types.DELETE_COMPLETED_NOTES]({ commit }) {
    commit(types.PUT_NOTES, Note.deleteCompleted())
  }
}
