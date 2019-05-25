import styles from './404.module.less'
import classNames from 'classnames'

export default ({ parent: { $router } }) => {
  const backHome = () => {
    $router.replace('/')
  }
  const backPrev = () => {
    $router.back()
  }

  return (
    <div class={styles.container}>
      <i class={classNames('x-icon x-icon-404', styles.icon)} />
      <div>
        <van-button class={styles.btn} type="info" onClick={backHome}>
          返回首页
        </van-button>
        <van-button type="primary" onClick={backPrev}>
          返回上一页
        </van-button>
      </div>
    </div>
  )
}
