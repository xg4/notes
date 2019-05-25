import * as types from './types'

const notes = [
  {
    id: '1',
    title: '123',
    content: '233233',
    tag: '',
    is_complete: false,
    is_collect: false,
    create_at: '',
    update_at: ''
  }
]

export default {
  /**
   * @description 初始化备忘录数据
   * @param {*} param0
   */
  [types.INIT_NOTES]({ commit }) {
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
    commit(types.PUT_NOTE, note)
  }
}
