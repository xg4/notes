import Card from '../components/card'
import Empty from '../components/empty'
import './index.less'

export default {
  computed: {
    notes() {
      return this.$store.getters.notes
    }
  },
  render() {
    return (
      <div>
        {this.notes.length ? (
          <transition-group name="flip-list" tag="div">
            {this.notes.map(item => (
              <Card {...{ attrs: item }} key={item.id} />
            ))}
          </transition-group>
        ) : (
          <Empty key="empty" />
        )}
      </div>
    )
  }
}
