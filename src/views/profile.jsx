import classNames from 'classnames'
import styles from './profile.module.less'
import { upload } from '../utils'
import Avatar from '../components/avatar'

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
          message: '您确定要同步上传数据？\n将根据最后的更新时间进行合并'
        })
        .then(() => {
          this.$refs.file.click()
          this.$dialog.close()
        })
        .catch(() => {})
    },
    handleDownload() {
      this.$dialog
        .confirm({
          title: '导出数据',
          message: '请您在PC浏览器上进行操作\n手机端暂不支持导出'
        })
        .then(() => {
          this.$store
            .dispatch('DOWNLOAD_DATA')
            .then(() => {})
            .catch(({ message }) => {
              this.$dialog({
                title: '下载失败',
                message
              })
            })
        })
        .catch(() => {})
    }
  },
  render() {
    return (
      <div class={styles.wrap}>
        <router-link to="/settings" class={styles.user}>
          <div class={styles.avatar}>
            <Avatar size="sm" />
          </div>

          <div class={styles.info}>
            <b class={styles.name}>{this.$store.state.user.name}</b>
            <p class={classNames(styles.id, 'ellipsis')}>
              id:
              {this.$store.state.user.id}
            </p>
          </div>
        </router-link>
        <van-cell-group class={styles.group}>
          <van-cell title="导出数据" isLink onClick={this.handleDownload}>
            <i
              class={classNames(styles.icon, 'x-icon x-icon-download')}
              slot="icon"
            />
          </van-cell>
          <van-cell title="导入数据" isLink onClick={this.handleUpload}>
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

        <van-cell-group>
          <van-cell
            title="反馈"
            isLink
            url="https://github.com/xg4/notes/issues"
          >
            <i
              class={classNames(styles.icon, 'x-icon x-icon-bug')}
              slot="icon"
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
