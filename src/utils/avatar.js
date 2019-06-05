import { THEME_MAP } from '../config'

export default class Avatar {
  static THEME_MAP = THEME_MAP

  get query() {
    return Object.fromEntries(this.url.searchParams.entries())
  }

  constructor(url) {
    this.url = new URL(url)
    this.searchParams = this.url.searchParams
  }

  formatByQuery() {
    return Object.fromEntries(
      Object.entries(this.query).map(([key, value]) => [
        key,
        (THEME_MAP[key] &&
          THEME_MAP[key].data.find(item => item.value === value)) ||
          value
      ])
    )
  }

  create(data) {
    Object.entries(data).forEach(([key, data]) => {
      this.searchParams.set(key, data.value)
    })
    return this.url.toString()
  }
}
