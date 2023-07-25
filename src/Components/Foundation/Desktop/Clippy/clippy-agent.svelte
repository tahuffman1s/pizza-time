<script lang="ts">
  import Tooltip from "../../Tooltip.svelte";

  export let width: number = 150;
  export let height: number = 250;
  export let x: number = 0;
  export let y: number = 0;
</script>

<div style=" left: {x}px; top: {y}px; position: absolute;">
  <Tooltip>this is a testdfsdfasdfsadfasdfsad</Tooltip>
  <img {height} {width} src="images/clippy.gif" alt="clippy" />
</div>
