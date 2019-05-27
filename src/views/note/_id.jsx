import styles from './_id.module.less'
import { Time } from '../../util'
import Collect from '../../components/collect'
import Complete from '../../components/complete'
import Tag from '../../components/tag'

export default {
  computed: {
    note() {
      const note = this.$store.state.notes[this.$route.params.id]
      if (!note) {
        this.$router.replace('/404')
        return {}
      }
      return note
    }
  },
  methods: {
    handleComplete(ev) {
      // ev.preventDefault()
      ev.stopPropagation()
      this.$store.dispatch('PUT_NOTE', {
        id: this.note.id,
        is_complete: !this.note.is_complete
      })
    },
    handleCollect(ev) {
      // ev.preventDefault()
      ev.stopPropagation()
      this.$store.dispatch('PUT_NOTE', {
        id: this.note.id,
        is_collect: !this.note.is_collect
      })
    }
  },
  render() {
    const {
      title,
      content,
      create_at,
      update_at,
      is_collect,
      is_complete
    } = this.note
    return (
      <div class={styles.wrap}>
        <h1 class={styles.title}>{title}</h1>
        <ul class={styles.action}>
          <li>
            <Complete active={is_complete} onClick={this.handleComplete}>
              {is_complete ? '已完成' : '未完成'}
            </Complete>
          </li>
          <li>
            <Tag />
          </li>
          <li>
            <Collect active={is_collect} onClick={this.handleCollect}>
              {is_collect ? '已收藏' : '未收藏'}
            </Collect>
          </li>
        </ul>

        <section class={styles.content}>{content}</section>

        <footer class={styles.footer}>
          <time>
            {create_at === update_at
              ? `创建于：${Time.format(create_at)}`
              : `更新于：${Time.format(update_at)}`}
          </time>
        </footer>
      </div>
    )
  }
}
