<script lang="tsx">
import HelloWorld1 from "./components/HelloWorld1.vue";
import HelloWorld2 from "./components/HelloWorld2";
import HelloWorld3 from "./components/HelloWorld3";

export default defineComponent({
  render() {
    return (
      <div>
        <HelloWorld1 name="World" />
        <HelloWorld2 name="World 2" />
        <HelloWorld3 name="World 3" />
      </div>
    );
  },
});
</script>
