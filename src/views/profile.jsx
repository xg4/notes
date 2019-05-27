import styles from './profile.module.less'

export default {
  render() {
    return (
      <div>
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
