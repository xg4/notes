import { generateNote } from '../util'
import styles from './new.module.less'

export default {
  data() {
    return {
      title: '',
      content: '',
      is_collect: false,
      is_complete: false
    }
  },
  methods: {
    handleSubmit() {
      const note = generateNote(this)
      this.$store.dispatch('POST_NOTE', note)
      this.$toast.success('保存成功')
      this.$router.push(`/note/${note.id}`)
    },
    handleReset() {
      this.title = ''
      this.content = ''
      this.is_collect = false
      this.is_complete = false
    }
  },
  render() {
    return (
      <div class={styles.wrap}>
        <van-cell-group>
          <van-field
            vModel={this.title}
            label="标题"
            placeholder="请输入标题"
          />
          <van-field
            vModel={this.content}
            label="内容"
            placeholder="请输入内容"
            type="textarea"
            rows="1"
            autosize
          />
          <van-switch-cell vModel={this.is_collect} title="是否收藏" />
          <van-switch-cell vModel={this.is_complete} title="是否完成" />
        </van-cell-group>

        <div class={styles.btns}>
          <van-button type="info" size="large" onClick={this.handleSubmit}>
            保存
          </van-button>
          <van-button size="large" onClick={this.handleReset}>
            重置
          </van-button>
        </div>
      </div>
    )
  }
}
