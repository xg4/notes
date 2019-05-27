import dayjs from 'dayjs'

export function formatDate(date, formatStr = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(date).format(formatStr)
}

formatDate.friendly = date => {
  const diff = type => dayjs().diff(date, type)
  const minute = diff('minute')
  const hour = diff('hour')
  const day = diff('day')
  const month = diff('month')
  const year = diff('year')
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
    : '刚刚'
}
