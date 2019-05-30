const SORT_MAP = {
  0: (a, b) => a.update_at - b.update_at,
  1: (a, b) => b.update_at - a.update_at
}

export default {
  notes(state) {
    const notes = Object.values(state.notes)
    const sortFunc = SORT_MAP[state.user.sort]
    return sortFunc ? notes.sort(sortFunc) : notes
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
