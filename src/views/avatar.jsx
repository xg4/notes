import styles from './avatar.module.less'
import Avatar from '../components/avatar'
import { Avatar as Ava } from '../utils'

const { THEME_MAP } = Ava

export default {
  created() {
    this.ava = new Ava(this.$store.state.user.avatar)
    this.theme = this.ava.formatByQuery()
  },
  data() {
    return {
      showPicker: false,
      active: null,
      activeIndex: 0,
      ava: {},
      theme: {},
      url: ''
    }
  },
  watch: {
    showPicker(newVal) {
      if (!newVal) {
        this.$refs.picker.setColumnIndex(0, this.activeIndex)
      }
    }
  },
  computed: {
    list() {
      const list = THEME_MAP[this.active]
      return list ? list.data : []
    }
  },
  methods: {
    handleToggle(type) {
      this.active = type
      this.activeIndex = this.list.findIndex(
        ({ value }) =>
          this.theme[this.active] && value === this.theme[this.active].value
      )
      this.showPicker = !this.showPicker
    },
    handleConfirm(item) {
      this.theme[this.active] = item
      this.url = this.ava.create(this.theme)
      this.showPicker = false
    },
    handleCancel() {
      this.showPicker = false
    },
    handleBack() {
      this.$router.back()
    },
    handleSubmit() {
      this.$store.dispatch('UPDATE_USER', { avatar: this.url })
      this.$notify({
        message: '保存成功',
        duration: 1500,
        background: '#1989fa'
      })
      this.$router.back()
    }
  },
  render() {
    return (
      <div class={styles.wrap}>
        <div class={styles.avatar}>
          <Avatar src={this.url || this.$store.state.user.avatar} />
        </div>

        <van-cell-group class={styles.form}>
          {Object.entries(THEME_MAP).map(([key, item]) => (
            <van-cell
              onClick={() => {
                this.handleToggle(key)
              }}
              title={item.title}
              value={this.theme[key] && this.theme[key].text}
              isLink
              key={key}
            />
          ))}
        </van-cell-group>

        <van-popup vModel={this.showPicker} position="bottom">
          <van-picker
            ref="picker"
            showToolbar
            defaultIndex={this.activeIndex}
            columns={this.list}
            onConfirm={this.handleConfirm}
            onCancel={this.handleCancel}
          />
        </van-popup>

        <div class={styles.group}>
          <van-button
            onClick={this.handleSubmit}
            class={styles.btn}
            type="info"
            size="large"
          >
            保存
          </van-button>
          <van-button onClick={this.handleBack} class={styles.btn} size="large">
            取消
          </van-button>
        </div>
      </div>
    )
  }
}
