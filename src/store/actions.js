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
  [types.INIT_NOTES]({ commit }) {
    commit(types.INIT_NOTES, notes)
  }
}
