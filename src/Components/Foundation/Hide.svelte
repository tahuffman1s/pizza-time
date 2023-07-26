<script lang="ts">
  export let hide: boolean;
  export let x: number = 0;
  export let y: number = 0;

  function onHideClick() {
    hide = !hide;
  }
</script>

<div class="title-bar-controls" style="height: 10px; width: 10px;">
  <button
    class="relative"
    aria-label="Close"
    on:click={() => onHideClick()}
    style="left: {x}px; top: {y}px;"
  />
</div>
