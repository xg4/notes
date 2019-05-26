import styles from './index.module.less'

export default ({ props: { active }, listeners: { click }, children }) => {
  return (
    <transition mode="out-in" enter-active-class="animated zoomIn">
      <a key={active} href="javascript:;" onClick={click} class={styles.wrap}>
        <van-icon name={active ? 'star' : 'star-o'} />

        {children && <span class={styles.text}>{children}</span>}
      </a>
    </transition>
  )
}
