import Card from '../components/card'

export default {
  computed: {
    notes() {
      return this.$store.getters.notes
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
