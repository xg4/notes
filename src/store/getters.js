export default {
  notes(state) {
    return Object.values(state.notes)
  },
  notesByCollection(state, getters) {
    return getters.notes.filter(note => note.is_collect)
  }
}
