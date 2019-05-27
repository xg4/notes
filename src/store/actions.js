import { Tag, Note } from '../models'
import * as types from './types'

export default {
  /**
   * @description 初始化 app 数据
   */
  [types.APP_INIT]({ commit }) {
    commit(types.PUT_NOTES, Note.init())
    commit(types.PUT_TAGS, Tag.init())
  },
  /**
   * @description update note data by id
   * @param {*} note
   */
  [types.PUT_NOTE]({ commit }, partialNote) {
    commit(types.PUT_NOTE, Note.put(partialNote))
  },
  /**
   * @description create note
   * @param {*} note
   */
  [types.POST_NOTE]({ commit }, note) {
    commit(types.POST_NOTE, Note.post(note))
  },
  /**
   * @description update notes sort type
   */
  [types.PUT_NOTES_SORT]({ commit, state }) {
    // TODO: 储存 user sort 信息，下次进入直接读取
    commit(types.PUT_NOTES_SORT, +!state.user.sort)
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
