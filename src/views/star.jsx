import Item from '../components/item'

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
          <Item {...{ attrs: item }} />
        ))}
      </div>
    )
  }
}
