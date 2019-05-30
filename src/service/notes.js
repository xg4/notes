import nanoid from 'nanoid'
import { STORE_NOTES_KEY } from '../config'
import { merge, equalObject, array2Object } from '../util'

let store

try {
  store = JSON.parse(localStorage.getItem(STORE_NOTES_KEY)) || []
} catch {
  store = []
}

export default class Note {
  static _store = store

  static get store() {
    return this._store
  }

  static set store(data) {
    localStorage.setItem(STORE_NOTES_KEY, JSON.stringify(data))
    this._store = data
  }

  static create(data) {
    return new this(data).save()
  }

  static count() {
    return this.store.length
  }

  static merge(notes) {
    Note.store = merge(notes, Note.store)
    return Note.store
  }

  static find(query) {
    if (!query) {
      return this.store
    }
    return this.store
      .map(item => {
        if (equalObject(query, item)) {
          return item
        }
      })
      .filter(Boolean)
  }

  static findById(id) {
    const target = this.store.find(item => item.id === id)
    return target ? new this(target) : null
  }

  static findByIdAndUpdate(id, update) {
    const target = this.store.find(item => item.id === id)
    return target
      ? this.create({ ...target, ...update, update_at: Date.now() })
      : Promise.reject()
  }

  static deleteById(id) {
    return new Promise((resolve, reject) => {
      const target = this.store.find(item => item.id === id)
      if (!target) {
        reject({ message: '没有找到该条备忘录' })
      } else {
        resolve(new this(target).delete())
      }
    })
  }

  static delete(query) {
    if (!query) {
      this.store = []
    } else {
      this.store.forEach(item => {
        if (equalObject(query, item)) {
          new this(item).delete()
        }
      })
    }
    return this.store
  }

  constructor({
    id = nanoid(),
    title = '',
    content = '',
    is_collect = false,
    is_complete = false,
    create_at = Date.now(),
    update_at = Date.now()
  }) {
    this.id = id
    this.title = title
    this.content = content
    this.is_collect = is_collect
    this.is_complete = is_complete
    this.create_at = create_at
    this.update_at = update_at
  }

  delete() {
    const clonedObj = array2Object(Note.store)
    delete clonedObj[this.id]
    Note.store = Object.values(clonedObj)
    return Note.store
  }

  save() {
    return new Promise(resolve => {
      const clonedObj = array2Object(Note.store)
      clonedObj[this.id] = this
      Note.store = Object.values(clonedObj)
      resolve(this)
    })
  }
}
