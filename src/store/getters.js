export default {
  notes(state) {
    const notes = Object.values(state.notes)
    switch (state.user.sort) {
      case 0:
        return notes.sort((a, b) => a.create_at - b.create_at)
      case 1:
        return notes.sort((a, b) => b.create_at - a.create_at)
      default:
        return notes.sort((a, b) => a.update_at - b.update_at)
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
