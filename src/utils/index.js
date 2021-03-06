import dayjs from 'dayjs'

import Device from '@xg4/device'

export const device = new Device()

export { default as Avatar } from './avatar'

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

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const triggerDownload = (rawData, name = 'notes.json') => {
  const url = URL.createObjectURL(rawData)
  const a = document.createElement('a')
  a.download = name
  a.href = url
  a.style.display = 'none'
  document.body.append(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

export function download(data) {
  return new Promise((resolve, reject) => {
    try {
      const rawData = new Blob([JSON.stringify(data)], {
        type: 'application/json'
      })
      triggerDownload(rawData)
      resolve()
    } catch (err) {
      reject({ message: '请使用最新的Chrome浏览器进行下载' })
    }
  })
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

export function isObj(value) {
  const type = typeof value
  return value != null && (type == 'object' || type == 'function')
}

/**
 * @description 严格模式：判断两个对象下的所有 key-value 是否相等
 *              松散模式：以 a 对象的keys 和 b 进行比对（b中可以多一些key）
 * @param {Object} a
 * @param {Object} b
 */
export function equalObject(a, b, strict) {
  const keys = Object.keys(a)
  if (strict && keys.length !== Object.keys(b).length) {
    return false
  }
  return keys.every(key => a[key] === b[key])
}

/**
 * @description 将数组转换成指定 key 的对象，没有指定 key 时，用 index 代替
 * @param {Object[]} arr
 * @param {String} arrKey
 */
export function array2Object(arr, arrKey = 'id') {
  return arr.reduce((acc, cur, index) => {
    const key = cur[arrKey] || index
    // TODO: deep clone
    acc[key] = { ...cur }
    return acc
  }, Object.create(null))
}

/**
 * @description 合并两个数组，并去重
 * @param {Array} target
 * @param {Array} source
 * @param {Function} func
 */
export function merge(
  target,
  source,
  func = (a, b) => a.update_at > b.update_at
) {
  return Object.values(
    target.reduce((store, item) => {
      const current = store[item.id]
      if (current) {
        if (func(item, current)) {
          store[item.id] = item
        }
      } else {
        store[item.id] = item
      }
      return store
    }, array2Object(source))
  )
}
