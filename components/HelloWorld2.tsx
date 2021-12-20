export default defineComponent({
  props: {
    name: {
      type: String,
      default: null
    }
  },
  setup(props) {
    return { name: props.name };
  },
  render() {
    return <div>Hello {this.name}!</div>;
  }
});
