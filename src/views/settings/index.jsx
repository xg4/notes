import Avatar from '../../components/avatar'

export default {
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  render() {
    return (
      <div>
        <van-cell-group>
          <van-cell title="头像" to="/settings/avatar" isLink center>
            <Avatar size="sm" />
          </van-cell>
          <van-cell
            title="名字"
            to="/settings/name"
            isLink
            value={this.user.name}
          />
          <van-cell title="ID" isLink value={this.user.id} />
        </van-cell-group>
      </div>
    )
  }
}
