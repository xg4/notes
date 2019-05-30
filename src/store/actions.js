import { Tag, User } from '../models'
import * as types from './types'
import { Note } from '../service'

export default {
  /**
   * @description Initialize app data
   */
  [types.APP_INIT]({ commit }) {
    commit(types.PUT_NOTES, Note.find())
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
  async [types.PUT_NOTE]({ commit }, { id, ...partialNote }) {
    commit(types.PUT_NOTE, await Note.findByIdAndUpdate(id, partialNote))
  },
  /**
   * @description create note
   */
  [types.POST_NOTE]({ commit }, partialNote) {
    return new Promise((resolve, reject) => {
      Note.create(partialNote)
        .then(note => {
          commit(types.POST_NOTE, note)
          resolve(note)
        })
        .catch(reject)
    })
  },
  /**
   * @description update notes sort type
   */
  [types.PUT_NOTES_SORT]({ commit }, type) {
    commit(types.PUT_NOTES_SORT, User.putSort(type).sort)
  },
  async [types.DELETE_NOTE]({ commit }, id) {
    commit(types.PUT_NOTES, await Note.deleteById(id))
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
    commit(types.PUT_NOTES, Note.delete({ is_complete: true }))
  }
}
