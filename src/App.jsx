import classNames from 'classnames'
import styles from './App.module.less'
import { TITLE } from './config'

export default {
  beforeMount() {
    this.$store.dispatch('APP_INIT')
  },
  data() {
    return {
      transitionName: 'slideInLeft',
      visibleSheet: false
    }
  },
  computed: {
    title() {
      return this.$route.meta.title || TITLE
    },
    showNavbar() {
      return this.$route.meta.showNavbar
    },
    showTabbar() {
      return this.$route.meta.showTabbar
    },
    hasActionSheet() {
      return !!this.$route.meta.actionSheet
    },
    actionSheet() {
      return this.hasActionSheet ? this.$route.meta.actionSheet : []
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
    },
    handleActionSheet() {
      this.visibleSheet = !this.visibleSheet
    },
    handleSheetSelect(item) {
      switch (item.action) {
        case 'new':
          this.$router.push('/new')
          break
        case 'sort':
          this.$store.dispatch('PUT_NOTES_SORT')
          break
        case 'deleteCompleted':
          if (!this.$store.getters.completedNotes.length) {
            this.$toast('没有已完成的备忘录')
          } else {
            this.$dialog
              .confirm({
                message: '您确定要删除已完成的备忘录吗？\n此操作不可恢复',
                closeOnClickOverlay: true
              })
              .then(() => {
                this.$store.dispatch('DELETE_COMPLETED_NOTES')
              })
              .catch(() => {})
          }

          break
        case 'deleteAll':
          if (!this.$store.getters.notes.length) {
            this.$toast('当前备忘录为空，您可以先新建几个')
          } else {
            this.$dialog
              .confirm({
                message: '您确定要删除全部备忘录吗？\n此操作不可恢复',
                closeOnClickOverlay: true
              })
              .then(() => {
                this.$store.dispatch('DELETE_NOTES')
              })
              .catch(() => {})
          }
          break
        case 'edit':
          this.$router.push(`/edit/${this.$route.params.id}`)
          break
        case 'delete':
          this.$dialog
            .confirm({
              message: '您确定要删除此备忘录吗？\n此操作不可恢复',
              closeOnClickOverlay: true
            })
            .then(() => {
              this.$store.dispatch('DELETE_NOTE', this.$route.params.id)
              this.$router.replace('/')
            })
            .catch(() => {})
          break
        default:
          break
      }
    }
  },
  render() {
    return (
      <main>
        <van-nav-bar
          vShow={this.showNavbar}
          title={this.title}
          leftText="返回"
          leftArrow
          fixed
          onClick-left={this.handleBack}
          onClick-right={this.handleActionSheet}
        >
          {this.hasActionSheet && <van-icon name="ellipsis" slot="right" />}
        </van-nav-bar>
        {this.hasActionSheet && (
          <van-action-sheet
            vModel={this.visibleSheet}
            actions={this.actionSheet}
            onSelect={this.handleSheetSelect}
            cancelText="取消"
            closeOnClickAction
          />
        )}

        <router-view
          class={classNames(
            { [styles.top]: this.showNavbar },
            { [styles.bottom]: this.showTabbar }
          )}
        />

        <van-tabbar vShow={this.showTabbar} route>
          <van-tabbar-item replace to="/" icon="label-o">
            记录
          </van-tabbar-item>
          <van-tabbar-item to="/new" icon="add-o">
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
