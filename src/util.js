import { Note, User, Tag } from './models'
import dayjs from 'dayjs'

export function formatDate(date, formatStr = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(date).format(formatStr)
}

formatDate.friendly = date => {
  const diff = type => dayjs().diff(date, type)

  const [year, month, day, hour, minute] = [
    diff('year'),
    diff('month'),
    diff('day'),
    diff('hour'),
    diff('minute')
  ].map(v => (v < 0 ? 0 : v))

  const second = diff('second')

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
    : second < 0
    ? '未来'
    : '刚刚'
}

const triggerDownload = rawData => {
  const url = URL.createObjectURL(rawData)
  const a = document.createElement('a')
  a.href = url
  a.download = 'notes.json'
  a.style.display = 'none'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export function download() {
  return new Promise((resolve, reject) => {
    const backup = {
      notes: Note.get(),
      user: User.get(),
      tags: Tag.get()
    }

    try {
      const data = new Blob([JSON.stringify(backup)], {
        type: 'application/json'
      })
      triggerDownload(data)
      resolve()
    } catch (err) {
      reject({ message: '请使用最新的Chrome浏览器进行下载' })
    }
  })
}

export function merge(target, source) {
  source = source.reduce((store, item) => {
    store[item.id] = item
    return store
  }, Object.create(null))

  return target.reduce((store, item) => {
    const current = store[item.id]
    if (current) {
      if (item.update_at > current.update_at) {
        store[item.id] = item
      }
    } else {
      store[item.id] = item
    }
    return store
  }, source)
}

export function upload(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.readAsText(file, 'UTF-8')

    reader.onload = function(evt) {
      try {
        resolve(JSON.parse(evt.target.result))
      } catch {
        reject('读取文件错误，请重试')
      }
    }

    reader.onerror = function() {
      reject('读取文件错误，请重试')
    }
  })
}
