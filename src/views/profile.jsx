import classNames from 'classnames'
import styles from './profile.module.less'
import { download } from '../util'

export default {
  render() {
    return (
      <div class={styles.wrap}>
        <figure class={styles.user}>
          <i class={classNames('x-icon x-icon-avatar', styles.avatar)} />
          <figcaption>
            <p>{this.$store.state.user.name || '用户名'}</p>
            <p class="ellipsis">{this.$store.state.user.id}</p>
          </figcaption>
        </figure>
        <van-cell-group>
          <van-cell title="导出数据" is-link onClick={download}>
            <i
              class={classNames(styles.icon, 'x-icon x-icon-download')}
              slot="icon"
            />
          </van-cell>
          {/* <van-cell title="导入数据" is-link>
            <i
              class={classNames(styles.icon, 'x-icon x-icon-upload')}
              slot="icon"
            />
          </van-cell> */}
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
