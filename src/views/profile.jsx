import classNames from 'classnames'
import styles from './profile.module.less'
import { download, upload } from '../util'

export default {
  methods: {
    async uploadFile({ target: { files } }) {
      const file = files[0]
      if (!file) {
        return
      }
      const data = await upload(file)
      this.$store.dispatch('UPLOAD_DATA', data)
    },
    handleUpload() {
      this.$dialog
        .confirm({
          title: '数据同步',
          message: '您确定要同步上传数据？\n备忘录将根据最后的更新时间进行合并'
        })
        .then(() => {
          // FIXME: hide dialog
          this.$refs.file.click()
        })
        .catch(() => {})
    },
    handleDownload() {
      download()
        .then(() => {})
        .catch(({ message }) => {
          this.$dialog({
            title: '下载失败',
            message
          })
        })
    }
  },
  render() {
    return (
      <div class={styles.wrap}>
        <figure class={styles.user}>
          <i class={classNames('x-icon x-icon-avatar', styles.avatar)} />
          <figcaption>
            <p>{this.$store.state.user.name || '用户名'}</p>
            <p class="ellipsis">
              id:
              {this.$store.state.user.id}
            </p>
          </figcaption>
        </figure>
        <van-cell-group>
          <van-cell title="导出数据" is-link onClick={this.handleDownload}>
            <i
              class={classNames(styles.icon, 'x-icon x-icon-download')}
              slot="icon"
            />
          </van-cell>
          <van-cell title="导入数据" is-link onClick={this.handleUpload}>
            <i
              class={classNames(styles.icon, 'x-icon x-icon-upload')}
              slot="icon"
            />
            <input
              style={{ display: 'none' }}
              ref="file"
              type="file"
              onChange={this.uploadFile}
            />
          </van-cell>
        </van-cell-group>

        <small class={styles.copyright}>
          <a href="https://github.com/xg4/notes" target="_blank">
            <i class="x-icon x-icon-github-fill" />
          </a>
          <p>&copy; 2019 xg4</p>
        </small>
      </div>
    )
  }
}
