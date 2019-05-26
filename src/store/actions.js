import { Store } from '../util'
import * as types from './types'

export default {
  /**
   * @description 初始化备忘录数据
   * @param {*} param0
   */
  [types.INIT_NOTES]({ commit }) {
    const notes = Store.get()
    commit(
      types.INIT_NOTES,
      notes.reduce((store, nextItem) => {
        store[nextItem.id] = nextItem
        return store
      }, {})
    )
  },
  /**
   * @description 根据id修改单个 note 数据
   * @param {*} param0
   * @param {*} note
   */
  [types.PUT_NOTE]({ commit }, note) {
    // TODO: 修改 note
    commit(types.PUT_NOTE, note)
  },
  /**
   * @description 新建 note
   * @param {*} param0
   * @param {*} note
   */
  [types.POST_NOTE]({ commit }, note) {
    // TODO: 存 note
    Store.post(note)
    commit(types.POST_NOTE, note)
  }
}
