<script lang="ts">
  import Pizzaboy from "./Icons/pizzaboy.svelte";
  import Logo from "./Logo/logo.svelte";
  import Toolbar from "./Toolbar/Toolbar.svelte";
</script>

<div class="flex flex-col h-screen justify-between">
  <div id="icons" class="p-5">
    <Pizzaboy />
  </div>
  <footer>
    <Toolbar />
  </footer>
  <Logo height={200} width={200} x={50} y={50} />
</div>
