import nanoid from 'nanoid'
import { STORE_NOTES_KEY } from '../config'
import { merge } from '../util'

export default {
  merge(notes) {
    notes = Object.values(merge(notes, this.get()))
    this.save(notes)
    return notes
  },
  normalize() {
    return [
      this.new({
        title: '欢迎使用备忘录',
        content: '在这里记录一些事情吧'
      })
    ]
  },
  /**
   * @description generate a note data
   */
  new({ title, content, tag, is_collect = false, is_complete = false }) {
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
    let notes = this.get()
    if (!notes || !notes.length) {
      notes = this.normalize()
      this.save(notes)
    }
    return this.transform(notes)
  },
  get() {
    return JSON.parse(localStorage.getItem(STORE_NOTES_KEY) || null) || []
  },
  getById(id) {
    return this.get().find(note => note.id === id) || {}
  },
  post(partialNote) {
    const note = this.new(partialNote)
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
    return this.transform([])
  },
  deleteById(id) {
    const notes = this.get().filter(note => note.id !== id)
    this.save(notes)
    return this.transform(notes)
  },
  deleteCompleted() {
    const notes = this.get().filter(note => !note.is_complete)
    this.save(notes)
    return this.transform(notes)
  },
  save(notes) {
    return localStorage.setItem(STORE_NOTES_KEY, JSON.stringify(notes))
  }
}
