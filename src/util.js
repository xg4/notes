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
  getById(id) {
    return this.get().find(note => note.id === id) || null
  },
  post(note) {
    const notes = this.get() || []
    notes.push(note)
    return localStorage.setItem(config.STORE_KEY, JSON.stringify(notes))
  }
}
