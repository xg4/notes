import nanoid from 'nanoid'
import dayjs from 'dayjs'
import * as config from './config'

export const Time = {
  /**
   * @description format date
   * @param {*} date
   * @param {*} formatStr
   */
  format(date, formatStr = 'YYYY-MM-DD HH:mm:ss') {
    return dayjs(date).format(formatStr)
  },
  friendly(date) {
    const diff = type => dayjs().diff(date, type)
    const minute = diff('minute')
    const hour = diff('hour')
    const day = diff('day')
    const month = diff('month')
    const year = diff('year')
    return year
      ? `${year}年前`
      : month
      ? `${month}月前`
      : day
      ? `${day}天前`
      : hour
      ? `${hour}小时前`
      : minute
      ? `${minute}分钟前`
      : '刚刚'
  }
}

export const Origin = {
  /**
   * @description generate a note data
   */
  generate({ title, content, is_collect, is_complete }) {
    return {
      id: nanoid(),
      title,
      content,
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
  }
}

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
  },
  delete() {
    this.save([])
    return []
  },
  deleteCompleted() {
    const notes = this.get().filter(note => !note.is_complete)
    this.save(notes)
    return notes
  }
}
