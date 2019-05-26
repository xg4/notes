import classNames from 'classnames'
import styles from './index.module.less'
import { friendlyDate } from '../../util'
import Collect from '../collect'
import Complete from '../complete'
import Tag from '../tag'

export default ({
  parent: { $store },
  props: { id, create_at, is_complete, is_collect, title, content }
}) => {
  const handleComplete = ev => {
    // ev.preventDefault()
    ev.stopPropagation()
    $store.dispatch('PUT_NOTE', { id, is_complete: !is_complete })
  }
  const handleCollect = ev => {
    // ev.preventDefault()
    ev.stopPropagation()
    $store.dispatch('PUT_NOTE', { id, is_collect: !is_collect })
  }
  return (
    <transition leave-active-class="animated bounceOutLeft">
      <router-link to={`/note/${id}`} class={styles.wrap}>
        <div class={styles.action}>
          <Tag class={styles.tag} />
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

          <time>{friendlyDate(create_at)}</time>
        </div>
      </router-link>
    </transition>
  )
}
