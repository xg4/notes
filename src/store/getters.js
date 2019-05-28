export default {
  notes(state) {
    const notes = Object.values(state.notes)
    switch (state.user.sort) {
      case 0:
        return notes.sort((a, b) => a.update_at - b.update_at)
      case 1:
        return notes.sort((a, b) => b.update_at - a.update_at)
      default:
        return notes
    }
  },
  collectedNotes(state, getters) {
    return getters.notes.filter(note => note.is_collect)
  },
  completedNotes(state, getters) {
    return getters.notes.filter(note => note.is_complete)
  },
  tags(state) {
    return Object.values(state.tags)
  }
}
