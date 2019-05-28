import nanoid from 'nanoid'
import { STORE_USER_KEY } from '../config'

export default {
  normalize() {
    return {
      id: nanoid(),
      // 0: 默认排序 (default)
      sort: 0
    }
  },
  init() {
    let user = this.get()
    if (!user || !user.id) {
      user = this.normalize()
      this.save(user)
    }
    return user
  },
  get() {
    return JSON.parse(localStorage.getItem(STORE_USER_KEY) || null) || {}
  },
  save(user) {
    return localStorage.setItem(STORE_USER_KEY, JSON.stringify(user))
  }
}
