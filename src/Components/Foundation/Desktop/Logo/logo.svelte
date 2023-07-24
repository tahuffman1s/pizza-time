<script lang="ts">
  import "98.css";
  export let height: number;
  export let width: number;
  export let x: number;
  export let y: number;
</script>

<div style="position:absolute; left:{x}%; top:{y}%;">
  <img
    src="images\icons\start.gif"
    alt="logo"
    style="height: {height}px; width: {width}px;"
  />
</div>
