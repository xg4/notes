import styles from './name.module.less'

export default {
  created() {
    this.value = this.$store.state.user.name
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    handleInput(value) {
      this.value = value
    },
    handleSubmit() {
      this.$store.dispatch('UPDATE_USER', { name: this.value })
      this.$notify({
        message: '修改成功',
        duration: 1500,
        background: '#1989fa'
      })
      this.$router.back()
    },
    handleBack() {
      this.$router.back()
    }
  },
  render() {
    return (
      <div class={styles.wrap}>
        <van-cell-group class={styles.group}>
          <van-field
            value={this.value}
            onInput={this.handleInput}
            placeholder="请输入用户名"
            clearable
          />
        </van-cell-group>

        <div class={styles.btns}>
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
