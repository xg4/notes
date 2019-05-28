import Card from '../components/card'
import Empty from '../components/empty'

export default {
  computed: {
    notes() {
      if (this.$route.path === '/collection') {
        return this.$store.getters.collectedNotes
      }
      return this.$store.getters.notes
    },
    isEmpty() {
      return !this.notes.length
    }
  },
  render() {
    return (
      <section>
        {this.isEmpty ? (
          <Empty />
        ) : (
          <transition-group name="animate-notes" tag="div">
            {this.notes.map(item => (
              <Card {...{ attrs: item }} key={item.id} />
            ))}
          </transition-group>
        )}
      </section>
    )
  }
}
