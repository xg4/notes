import classNames from 'classnames'
import styles from './index.module.less'

export default ({ children }) => {
  return (
    <div class={styles.wrap}>
      <i class={classNames('x-icon x-icon-empty', styles.icon)} />
      <span class={styles.text}>{children || '空空如也~~'}</span>
    </div>
  )
}
