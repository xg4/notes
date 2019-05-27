import { Origin } from '../util'
import styles from './createAndEdit.module.less'

export default {
  beforeMount() {
    if (this.hasID) {
      Object.entries(this.note).forEach(([key, value]) => {
        this[key] = value
      })
    }
  },
  data() {
    return {
      title: '',
      content: '',
      is_collect: false,
      is_complete: false
    }
  },
  computed: {
    note() {
      return this.$store.state.notes[this.activeID]
    },
    hasID() {
      return !!this.activeID
    },
    activeID() {
      return this.$route.params.id
    }
  },
  methods: {
    handleSubmit() {
      let note
      if (this.hasID) {
        note = {
          id: this.id,
          title: this.title,
          content: this.content,
          is_collect: this.is_collect,
          is_complete: this.is_complete,
          update_at: Date.now()
        }
        this.$store.dispatch('PUT_NOTE', note)
        this.$router.back()
      } else {
        note = Origin.generate(this)
        this.$store.dispatch('POST_NOTE', note)
        this.$router.replace(`/note/${note.id}`)
      }
      this.$toast.success('保存成功')
    },
    handleReset() {
      this.title = ''
      this.content = ''
      this.is_collect = false
      this.is_complete = false
    },
    handleCancel() {
      this.$router.back()
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
          {this.hasID ? (
            <van-button size="large" onClick={this.handleCancel}>
              取消
            </van-button>
          ) : (
            <van-button size="large" onClick={this.handleReset}>
              重置
            </van-button>
          )}
        </div>
      </div>
    )
  }
}
