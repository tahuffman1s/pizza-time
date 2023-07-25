<script lang="ts">
  import ClippyAgent from "./Clippy/clippy-agent.svelte";
  import Pizzaboy from "./Icons/pizzaboy.svelte";
  import Toolbar from "./Toolbar/Toolbar.svelte";
  let viewHeight: number;
  let viewWidth: number;
  $: console.log(viewHeight);
</script>

<div
  bind:clientWidth={viewWidth}
  bind:clientHeight={viewHeight}
  class=" h-screen w-screen flex flex-col justify-between"
>
  <div class="p-5">
    <Pizzaboy />
  </div>
  <ClippyAgent x={viewWidth - 160} y={viewHeight - 200} />
  <footer>
    <Toolbar />
  </footer>
</div>
