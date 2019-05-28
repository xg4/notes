import styles from './index.module.less'
import classNames from 'classnames'

export default ({ props: { active }, listeners: { click }, children }) => {
  return (
    <a href="javascript:;" onClick={click} class={styles.wrap}>
      <transition mode="out-in" name="animate-fade">
        <i
          key={active}
          class={classNames(
            'x-icon',
            `x-icon-${active ? 'favor-fill' : 'favor'}`
          )}
        />
      </transition>
      {children && <span class={styles.text}>{children}</span>}
    </a>
  )
}
