import nanoid from 'nanoid'
import * as config from './config'

export const generateNote = ({ title, content, is_collect, is_complete }) => ({
  id: nanoid(),
  title,
  content,
  is_collect,
  is_complete,
  create_at: Date.now(),
  update_at: Date.now()
})

export const Store = {
  get() {
    const notes = JSON.parse(localStorage.getItem(config.STORE_KEY) || null)
    return notes || []
  },
  save(notes) {
    return localStorage.setItem(config.STORE_KEY, JSON.stringify(notes))
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
  put(note) {
    const notes = this.get()
    const oldNote = notes.find(n => n.id === note.id)
    const index = notes.findIndex(n => n.id === note.id)
    note = { ...oldNote, ...note }
    notes.splice(index, 1, note)
    this.save(notes)
    return note
  }
}
