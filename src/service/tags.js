import nanoid from 'nanoid'
import { STORE_TAGS_KEY } from '../config'
import { merge, equalObject, array2Object } from '../util'

let store

try {
  store = JSON.parse(localStorage.getItem(STORE_TAGS_KEY)) || []
} catch {
  store = []
}

const INIT_TAGS = [
  {
    id: 1,
    color: '#409eff',
    name: '蓝色',
    create_at: Date.now(),
    update_at: Date.now()
  },
  {
    id: 2,
    color: '#67c23a',
    name: '绿色',
    create_at: Date.now(),
    update_at: Date.now()
  },
  {
    id: 3,
    color: '#909399',
    name: '灰色',
    create_at: Date.now(),
    update_at: Date.now()
  },
  {
    id: 4,
    color: '#e6a23c',
    name: '黄色',
    create_at: Date.now(),
    update_at: Date.now()
  },
  {
    id: 5,
    color: '#f56c6c',
    name: '红色',
    create_at: Date.now(),
    update_at: Date.now()
  }
]

export default class Tag {
  static _store = store

  static get store() {
    return this._store
  }

  static set store(data) {
    localStorage.setItem(STORE_TAGS_KEY, JSON.stringify(data))
    this._store = data
  }

  static init() {
    if (!this.find().length) {
      return Promise.all(INIT_TAGS.map(tag => this.create(tag)))
    }

    return Promise.resolve(this.store)
  }

  static create(data) {
    return new this(data).save()
  }

  static merge(data) {
    this.store = merge(data, this.store)
    return this.store
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

  constructor({
    id = nanoid(),
    color = '#409eff',
    name = '蓝色',
    create_at = Date.now(),
    update_at = Date.now()
  }) {
    this.id = id
    this.color = color
    this.name = name
    this.create_at = create_at
    this.update_at = update_at
  }

  save() {
    return new Promise(resolve => {
      const clonedObj = array2Object(Tag.store)
      clonedObj[this.id] = this
      Tag.store = Object.values(clonedObj)
      resolve(this)
    })
  }
}
