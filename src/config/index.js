export const title = '备忘录'

export const STORE_KEY = 'NOTE_STORE'

export const ACTION_SHEET_MAP = {
  notes: [
    { name: '新建笔记', action: 'new' },
    { name: '按时间排序', action: 'sort' },
    { name: '删除已完成', action: 'deleteCompleted' },
    { name: '删除全部', action: 'deleteAll' }
  ]
}

// 默认的tags
export const TAGS = [
  {
    color: '#fff',
    text: '蓝色'
  },
  {
    color: '#fff',
    text: '绿色'
  },
  {
    color: '#fff',
    text: '灰色'
  },
  {
    color: '#fff',
    text: '黄色'
  },
  {
    color: '#fff',
    text: '红色'
  }
]
