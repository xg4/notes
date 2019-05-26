import { Store, transformOriginData } from '../util'
import * as types from './types'

export default {
  /**
   * @description 初始化 app 数据
   */
  [types.APP_INIT]({ commit }) {
    commit(types.APP_INIT, transformOriginData(Store.get()))
  },
  /**
   * @description update note data by id
   * @param {*} note
   */
  [types.PUT_NOTE]({ commit }, note) {
    commit(types.PUT_NOTE, Store.put(note))
  },
  /**
   * @description create note
   * @param {*} note
   */
  [types.POST_NOTE]({ commit }, note) {
    commit(types.POST_NOTE, Store.post(note))
  },
  /**
   * @description update notes sort type
   */
  [types.PUT_NOTES_SORT]({ commit, state }) {
    // TODO: 储存 user sort 信息，下次进入直接读取
    commit(types.PUT_NOTES_SORT, +!state.user.sort)
  },
  /**
   * @description delete all notes
   */
  [types.DELETE_NOTES]({ commit }) {
    commit(types.DELETE_NOTES, transformOriginData(Store.delete()))
  },
  /**
   * @description delete completed notes
   */
  [types.DELETE_COMPLETED_NOTES]({ commit }) {
    commit(
      types.DELETE_COMPLETED_NOTES,
      transformOriginData(Store.deleteCompleted())
    )
  }
}
