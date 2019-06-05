import classNames from 'classnames'
import styles from './index.module.less'

export default {
  props: {
    src: String,
    size: String
  },
  data() {
    return {
      loading: true,
      error: false
    }
  },
  watch: {
    src() {
      this.loading = true
      this.error = false
    }
  },
  computed: {
    url() {
      return this.src || this.$store.state.user.avatar
    }
  },
  methods: {
    onLoad() {
      this.loading = false
    },
    onError() {
      this.loading = false
      this.error = true
    },
    renderPlaceholder() {
      if (this.loading) {
        return (
          <div class={styles.loading}>
            <i class={classNames('x-icon x-icon-img', styles.icon)} />
          </div>
        )
      }

      if (this.error) {
        return (
          <div class={styles.error}>
            <i class={classNames('x-icon x-icon-img-fail', styles.icon)} />
          </div>
        )
      }
    }
  },
  render() {
    return (
      <div class={classNames(styles.avatar, styles[this.size])}>
        {this.renderPlaceholder()}
        <transition name="animate-fade">
          <img
            vShow={!this.error}
            src={this.url}
            onLoad={this.onLoad}
            onError={this.onError}
          />
        </transition>
      </div>
    )
  }
}
