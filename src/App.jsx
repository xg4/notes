import classNames from 'classnames'
import styles from './App.module.less'
import * as config from './config'

export default {
  beforeMount() {
    this.$store.dispatch('INIT_NOTES')
  },
  data() {
    return {
      transitionName: 'slideInLeft'
    }
  },
  computed: {
    title() {
      return this.$route.meta.title || config.title
    },
    showNavbar() {
      return this.$route.meta.showNavbar
    },
    showTabbar() {
      return this.$route.meta.showTabbar
    }
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slideInRight' : 'slideInLeft'
    }
  },
  methods: {
    handleBack() {
      this.$router.back()
    }
  },
  render() {
    const { showNavbar, showTabbar } = this
    return (
      <main>
        <van-nav-bar
          vShow={showNavbar}
          title={this.title}
          left-text="返回"
          left-arrow
          fixed
          onClick-left={this.handleBack}
        />
        <transition
          enter-active-class={classNames('animated', this.transitionName)}
        >
          <router-view
            class={classNames(
              { [styles.top]: showNavbar },
              { [styles.bottom]: showTabbar }
            )}
          />
        </transition>

        <van-tabbar vShow={showTabbar} route>
          <van-tabbar-item replace to="/" icon="label-o">
            记录
          </van-tabbar-item>
          <van-tabbar-item replace to="/new" icon="add-o">
            新建
          </van-tabbar-item>
          <van-tabbar-item replace to="/star" icon="star-o">
            收藏
          </van-tabbar-item>
          <van-tabbar-item replace to="/profile" icon="user-circle-o">
            我的
          </van-tabbar-item>
        </van-tabbar>
      </main>
    )
  }
}
