<script lang="ts">
  import "98.css";
  import { createEventDispatcher } from "svelte";
  import Draggable from "../../Draggable.svelte";
  export let imagePath: string;
  export let name: string;
  const dispatch = createEventDispatcher();
  export let click = () => {
    dispatch("Click");
  };
</script>

<Draggable>
  <div on:click={click} role="none">
    <img class="pl-2" width="50" height="50" src={imagePath} alt={name} />
    <div class="title-bar-text">{name}</div>
  </div>
</Draggable>
