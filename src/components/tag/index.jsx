import classNames from 'classnames'
import styles from './index.module.less'

export default ({ props: { id, showName }, parent: { $store }, data }) => {
  const tag = $store.getters.getTagById(id) || {}
  return (
    <span class={styles.wrap} style={{ color: tag.color || '#1989fa' }}>
      <i class={classNames('x-icon x-icon-tag', data.class)} />
      {showName && <span class={styles.text}>{tag.name}</span>}
    </span>
  )
}
