import nanoid from 'nanoid'
import { STORE_TAGS_KEY } from '../config'

export default {
  normalize() {
    return [
      {
        id: nanoid(),
        color: '#409eff',
        name: '蓝色',
        create_at: Date.now(),
        update_at: Date.now()
      },
      {
        id: nanoid(),
        color: '#67c23a',
        name: '绿色',
        create_at: Date.now(),
        update_at: Date.now()
      },
      {
        id: nanoid(),
        color: '#909399',
        name: '灰色',
        create_at: Date.now(),
        update_at: Date.now()
      },
      {
        id: nanoid(),
        color: '#e6a23c',
        name: '黄色',
        create_at: Date.now(),
        update_at: Date.now()
      },
      {
        id: nanoid(),
        color: '#f56c6c',
        name: '红色',
        create_at: Date.now(),
        update_at: Date.now()
      }
    ]
  },
  init() {
    return this.transform(this.get())
  },
  get() {
    let tags = JSON.parse(localStorage.getItem(STORE_TAGS_KEY) || null)
    if (!tags) {
      tags = this.normalize()
      this.save(tags)
    }
    return tags
  },
  save(tags) {
    return localStorage.setItem(STORE_TAGS_KEY, JSON.stringify(tags))
  },
  transform(tags) {
    return tags.reduce((store, tag) => {
      store[tag.id] = tag
      return store
    }, {})
  }
}