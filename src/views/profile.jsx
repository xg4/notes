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
          message: '您确定要同步上传数据？\n备忘录将根据最后的更新时间进行合并'
        })
        .then(() => {
          // FIXME: hide dialog
          this.$refs.file.click()
        })
        .catch(() => {})
    },
    handleDownload() {
      this.$store
        .dispatch('DOWNLOAD_DATA')
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
        <div class={styles.user}>
          <router-link class={styles.avatar} to="/settings/avatar">
            <Avatar size="sm" />
          </router-link>

          <div class={styles.info}>
            <p>{this.$store.state.user.name || '用户名'}</p>
            <p class="ellipsis">
              id:
              {this.$store.state.user.id}
            </p>
          </div>
        </div>
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
