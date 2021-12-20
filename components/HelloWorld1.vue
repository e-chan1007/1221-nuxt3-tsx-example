<script setup lang="tsx">
interface Props {
  name: string;
}
const { name } = defineProps<Props>();
</script>

<script lang="tsx">
export default defineComponent({
  setup() {
    return { name };
  },
  render() {
    return <div>Hello {this.name}!</div>;
  },
});
</script>
