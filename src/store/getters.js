export default {
  notes(state) {
    return Object.values(state.notes).sort((a, b) => {
      return state.user.sort
        ? b.create_at - a.create_at
        : a.create_at - b.create_at
    })
  },
  collectedNotes(state, getters) {
    return getters.notes.filter(note => note.is_collect)
  },
  completedNotes(state, getters) {
    return getters.notes.filter(note => note.is_complete)
  }
}
