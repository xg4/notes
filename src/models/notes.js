import nanoid from 'nanoid'
import { STORE_NOTES_KEY } from '../config'

export default {
  /**
   * @description generate a note data
   */
  new({ title, content, is_collect, is_complete, tag }) {
    return {
      id: nanoid(),
      title,
      content,
      tag,
      is_collect,
      is_complete,
      create_at: Date.now(),
      update_at: Date.now()
    }
  },
  /**
   * @description transform raw data to use
   * @param {*} notes
   */
  transform(notes) {
    return notes.reduce((store, note) => {
      store[note.id] = note
      return store
    }, {})
  },
  init() {
    return this.transform(this.get())
  },
  get() {
    const notes = JSON.parse(localStorage.getItem(STORE_NOTES_KEY) || null)
    return notes || []
  },
  getById(id) {
    return this.get().find(note => note.id === id) || {}
  },
  post(note) {
    const notes = this.get() || []
    notes.push(note)
    this.save(notes)
    return note
  },
  put(partialNote) {
    if (!partialNote.id) {
      return
    }
    const notes = this.get()
    let note
    notes.some((n, index, notes) => {
      if (n.id === partialNote.id) {
        note = { ...n, ...partialNote }
        notes.splice(index, 1, note)
        return true
      }
    })
    this.save(notes)
    return note
  },
  delete() {
    this.save([])
    return []
  },
  deleteById(id) {
    const notes = this.get().filter(note => note.id !== id)
    this.save(notes)
    return notes
  },
  deleteCompleted() {
    const notes = this.get().filter(note => !note.is_complete)
    this.save(notes)
    return notes
  },
  save(notes) {
    return localStorage.setItem(STORE_NOTES_KEY, JSON.stringify(notes))
  }
}
