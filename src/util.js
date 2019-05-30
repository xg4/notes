import { Note, User, Tag } from './models'
import dayjs from 'dayjs'
import { Dialog } from 'vant'

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

export function download() {
  const backup = {
    notes: Note.get(),
    user: User.get(),
    tags: Tag.get()
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

  try {
    triggerDownload(
      new Blob([JSON.stringify(backup)], {
        type: 'application/json'
      })
    )
  } catch (err) {
    Dialog({ title: '下载失败', message: '请使用最新版浏览器进行下载' })
  }
}
