import { Note, Tag, User } from '../models'
import { download } from '../utils'

export default {
  init({ dispatch }) {
    dispatch('user/init')
    dispatch('note/init')
    dispatch('tag/init')
  },
  upload({ dispatch }, { notes, user, tags }) {
    dispatch('user/merge', user)
    dispatch('note/merge', notes)
    dispatch('tag/merge', tags)
  },
  download() {
    return download({
      notes: Note.find(),
      user: User.get(),
      tags: Tag.find()
    })
  }
}
