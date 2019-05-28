import classNames from 'classnames'
import styles from './index.module.less'

export default ({ props: { active }, listeners: { click }, children }) => {
  return (
    <a href="javascript:;" onClick={click} class={styles.wrap}>
      <transition mode="out-in" name="animate-fade">
        <i
          key={active}
          class={classNames(
            'x-icon',
            `x-icon-${active ? 'certificate' : 'circle'}`,
            active && styles.active
          )}
        />
      </transition>
      {children && <span class={styles.text}>{children}</span>}
    </a>
  )
}
