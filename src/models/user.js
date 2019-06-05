import nanoid from 'nanoid'
import { isEmpty } from 'lodash'
import { STORE_USER_KEY } from '../config'

let store

try {
  store = JSON.parse(localStorage.getItem(STORE_USER_KEY)) || {}
} catch {
  store = {}
}

export default class User {
  static _store = store

  static get store() {
    return this._store
  }

  static set store(data) {
    localStorage.setItem(STORE_USER_KEY, JSON.stringify(data))
    this._store = data
  }

  static create(data) {
    return new this(data).save()
  }

  static init() {
    const user = this.get()
    if (isEmpty(user)) {
      return this.create()
    }
    return Promise.resolve(user)
  }

  static get() {
    return this.store
  }

  static update(data) {
    return this.create({ ...this.store, ...data, update_at: Date.now() })
  }

  static merge(data) {
    const savedUser = this.store
    if (data.update_at > savedUser.update_at) {
      this.store = data
      return Promise.resolve(this.store)
    }
    return Promise.resolve(savedUser)
  }

  static get defaultOptions() {
    return {
      id: nanoid(),
      avatar: '',
      sort: 0,
      create_at: Date.now(),
      update_at: Date.now()
    }
  }

  constructor(options) {
    const { id, sort, create_at, update_at, avatar } = {
      ...User.defaultOptions,
      ...options
    }

    this.id = id
    this.sort = sort
    this.avatar = avatar
    this.create_at = create_at
    this.update_at = update_at
  }

  save() {
    return new Promise(resolve => {
      User.store = this
      resolve(this)
    })
  }
}
