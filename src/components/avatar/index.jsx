import classNames from 'classnames'
import { loadImage } from '../../utils'
import styles from './index.module.less'

export default {
  props: {
    src: String
  },
  data() {
    return {
      avatar: {}
    }
  },
  watch: {
    src: {
      handler() {
        this.avatar = {}
        this.loadImage()
      },
      immediate: true
    }
  },
  computed: {
    isLoaded() {
      return !!this.avatar.src
    }
  },
  methods: {
    async loadImage() {
      this.avatar = await loadImage(this.src)
    }
  },
  render() {
    return (
      <div
        class={classNames(styles.avatar, styles.lg, {
          [styles.mask]: !this.isLoaded
        })}
      >
        <transition name="animate-fade">
          <img vShow={this.isLoaded} src={this.avatar.src} alt="avatar" />
        </transition>
      </div>
    )
  }
}
