<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Icon from "./Icon.svelte";
  const dispatch = createEventDispatcher();
  export let click = () => {
    dispatch("Click");
  };
</script>

<Icon
  on:Click={click}
  name="pizzaboy.piz"
  imagePath="images\icons\pizzaboy.gif"
/>
