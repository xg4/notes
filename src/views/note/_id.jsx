import styles from './_id.module.less'
import { formatDate } from '../../util'

export default {
  computed: {
    note() {
      return this.$store.state.notes[this.$route.params.id] || {}
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
            <a href="javascript:;" onClick={this.handleComplete}>
              <transition
                mode="out-in"
                enter-active-class="animated bounceInLeft"
              >
                <div key={is_complete}>
                  <van-icon name={is_complete ? 'certificate' : 'circle'} />
                </div>
              </transition>
            </a>
          </li>
          <li>
            <i class="x-icon x-icon-tag" />
          </li>
          <li>
            <a href="javascript:;" onClick={this.handleCollect}>
              <transition mode="out-in" enter-active-class="animated zoomIn">
                <div key={is_collect}>
                  <van-icon name={is_collect ? 'star' : 'star-o'} />
                </div>
              </transition>
            </a>
          </li>
        </ul>

        <section class={styles.content}>{content}</section>

        <footer class={styles.footer}>
          <time>
            {create_at === update_at
              ? `创建于：${formatDate(create_at)}`
              : `更新于：${formatDate(update_at)}`}
          </time>
        </footer>
      </div>
    )
  }
}
