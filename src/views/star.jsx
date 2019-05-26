import Card from '../components/card'
import Empty from '../components/empty'

export default {
  computed: {
    notes() {
      return this.$store.getters.collectedNotes
    }
  },
  render() {
    return (
      <div>
        {this.notes.length ? (
          this.notes.map(item => <Card {...{ attrs: item }} key={item.id} />)
        ) : (
          <Empty />
        )}
      </div>
    )
  }
}
