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
  [types.UPLOAD_DATA]({ commit }, { notes, user, tags }) {
    commit(types.PUT_NOTES, Note.merge(notes))
    commit(types.PUT_USER, User.merge(user))
    commit(types.PUT_TAGS, Tag.merge(tags))
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
    return new Promise(resolve => {
      const note = Note.post(partialNote)
      commit(types.POST_NOTE, note)
      resolve(note)
    })
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
