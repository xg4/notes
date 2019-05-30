import nanoid from 'nanoid'
import { STORE_USER_KEY } from '../config'

export default {
  normalize() {
    return {
      id: nanoid(),
      // 0: update_at 升序， 1: update_at 降序
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
  putSort(type) {
    const user = this.get()
    user.sort = type
    this.save(user)
    return user
  },
  save(user) {
    return localStorage.setItem(STORE_USER_KEY, JSON.stringify(user))
  }
}
