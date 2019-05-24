import * as types from './types'

export default {
  [types.INIT_NOTES](state, notes) {
    state.notes = notes
  }
}
