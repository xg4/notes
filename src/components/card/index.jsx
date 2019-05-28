import classNames from 'classnames'
import styles from './index.module.less'
import { formatDate } from '../../util'
import Collect from '../collect'
import Complete from '../complete'
import Tag from '../tag'

export default {
  props: {
    id: String,
    title: String,
    content: String,
    tag: String,
    is_complete: Boolean,
    is_collect: Boolean,
    create_at: Number,
    update_at: Number
  },
  methods: {
    handleComplete(ev) {
      // ev.preventDefault()
      ev.stopPropagation()
      this.$store.dispatch('PUT_NOTE', {
        id: this.id,
        is_complete: !this.is_complete
      })
    },
    handleCollect(ev) {
      // ev.preventDefault()
      ev.stopPropagation()
      this.$store.dispatch('PUT_NOTE', {
        id: this.id,
        is_collect: !this.is_collect
      })
    }
  },
  render() {
    const {
      id,
      update_at,
      is_complete,
      is_collect,
      title,
      content,
      tag,
      handleCollect,
      handleComplete
    } = this
    return (
      <transition leave-active-class="animated bounceOutLeft">
        <router-link to={`/note/${id}`} class={styles.wrap}>
          <div class={styles.action}>
            <Tag class={styles.tag} id={tag} />
            <Complete active={is_complete} onClick={handleComplete} />
          </div>
          <div class={styles.main}>
            <div class={classNames('ellipsis', styles.title)}>{title}</div>
            <div class={classNames(styles.content)}>
              <p class="ellipsis-2">{content}</p>
            </div>
          </div>
          <div class={styles.control}>
            <Collect active={is_collect} onClick={handleCollect} />

            <time>{formatDate.friendly(update_at)}</time>
          </div>
        </router-link>
      </transition>
    )
  }
}
