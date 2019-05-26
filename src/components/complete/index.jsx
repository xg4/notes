import styles from './index.module.less'

export default ({ props: { active }, listeners: { click }, children }) => {
  return (
    <transition mode="out-in" enter-active-class="animated bounceInLeft">
      <a key={active} href="javascript:;" onClick={click} class={styles.wrap}>
        <van-icon
          class={active && styles.active}
          name={active ? 'certificate' : 'circle'}
        />
        {children && <span class={styles.text}>{children}</span>}
      </a>
    </transition>
  )
}
