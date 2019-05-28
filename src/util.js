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
