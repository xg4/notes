import Card from '../components/card'

export default {
  computed: {
    notes() {
      return this.$store.getters.notesByCollection
    }
  },
  render() {
    return (
      <div>
        {this.notes.map(item => (
          <Card {...{ attrs: item }} />
        ))}
      </div>
    )
  }
}
