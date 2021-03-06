import styles from './new.module.less'
import Tag from '../components/tag'

export default {
  created() {
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
      tag: '',
      is_collect: false,
      is_complete: false,
      showTags: false
    }
  },
  watch: {
    showTags(newVal) {
      if (!newVal) {
        this.$refs.picker.setColumnIndex(0, this.activeIndex)
      }
    }
  },
  computed: {
    activeIndex() {
      return this.tags.findIndex(tag => tag.id === this.tag)
    },
    note() {
      return this.$store.getters.getNoteById(this.activeID)
    },
    hasID() {
      return !!this.activeID
    },
    activeID() {
      return this.$route.params.id
    },
    tags() {
      return this.$store.getters.tags.map(tag => ({
        ...tag,
        text: `<i class="x-icon x-icon-tag" style="color:${tag.color}"></i>
        <span style="color:${tag.color}">${tag.name}</span>`
      }))
    }
  },
  methods: {
    async handleSubmit() {
      if (this.hasID) {
        const note = {
          id: this.id,
          title: this.title,
          content: this.content,
          is_collect: this.is_collect,
          is_complete: this.is_complete,
          tag: this.tag,
          update_at: Date.now()
        }
        this.$store.dispatch('note/put', note)
        this.$router.back()
      } else {
        console.log(this)
        const note = await this.$store.dispatch('note/create', this)
        this.$router.replace(`/note/${note.id}`)
      }
      this.$toast.success('保存成功')
    },
    handleReset() {
      this.title = ''
      this.content = ''
      this.is_collect = false
      this.is_complete = false
      this.tag = ''
    },
    handleCancel() {
      this.$router.back()
    },
    toggleTagsVisible() {
      this.showTags = !this.showTags
    },
    confirmTag(item) {
      this.tag = item.id
      this.showTags = false
    },
    cancelTag() {
      this.showTags = false
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
            center
          />
          <van-field
            vModel={this.content}
            label="内容"
            placeholder="请输入内容"
            center
            type="textarea"
            rows="1"
            autosize
          />
          <van-cell onClick={this.toggleTagsVisible} title="标签" isLink>
            {this.tag && <Tag id={this.tag} showName />}
          </van-cell>
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

        <van-popup vModel={this.showTags} position="bottom">
          <van-picker
            ref="picker"
            showToolbar
            defaultIndex={this.activeIndex}
            columns={this.tags}
            onConfirm={this.confirmTag}
            onCancel={this.cancelTag}
          />
        </van-popup>
      </div>
    )
  }
}
