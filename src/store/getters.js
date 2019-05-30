const SORT_MAP = {
  0: (a, b) => a.update_at - b.update_at,
  1: (a, b) => b.update_at - a.update_at
}

export default {
  notes(state) {
    const sortFunc = SORT_MAP[state.user.sort]
    return sortFunc ? state.notes.sort(sortFunc) : state.notes
  },
  getNoteById(state) {
    return id => {
      return state.notes.find(note => note.id === id)
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
