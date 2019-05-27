import { Store, Origin } from '../util'
import { Tag } from '../models'
import * as types from './types'

export default {
  /**
   * @description 初始化 app 数据
   */
  [types.APP_INIT]({ commit }) {
    commit(types.APP_INIT, {
      notes: Origin.transform(Store.get()),
      tags: Tag.get()
    })
  },
  /**
   * @description update note data by id
   * @param {*} note
   */
  [types.PUT_NOTE]({ commit }, partialNote) {
    commit(types.PUT_NOTE, Store.put(partialNote))
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
  [types.DELETE_NOTE]({ commit }, id) {
    commit(types.DELETE_NOTE, Origin.transform(Store.deleteById(id)))
  },
  /**
   * @description delete all notes
   */
  [types.DELETE_NOTES]({ commit }) {
    commit(types.DELETE_NOTES, Origin.transform(Store.delete()))
  },
  /**
   * @description delete completed notes
   */
  [types.DELETE_COMPLETED_NOTES]({ commit }) {
    commit(
      types.DELETE_COMPLETED_NOTES,
      Origin.transform(Store.deleteCompleted())
    )
  }
}
