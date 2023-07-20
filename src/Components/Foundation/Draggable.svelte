<script lang="ts">
  let x = 0;
  let y = 0;
  let moving = false;

  function onMouseDown() {
    moving = true;
  }

  function onMouseUp() {
    moving = false;
  }

  export function onMouseMove(e: { movementX: number; movementY: number }) {
    if (moving) {
      x += e.movementX;
      y += e.movementY;
    }
  }

  export function setXY(ox: number, oy: number) {
    x = ox;
    y = oy;
  }

  export function getX(): number {
    return x;
  }

  export function getY(): number {
    return y;
  }

  export function getMoving(): boolean {
    return moving;
  }
</script>

<section
  on:mousedown={onMouseDown}
  style="left: {x}px; top: {y}px;"
  class="draggable"
  role="none"
>
  <slot />
</section>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<style>
  .draggable {
    user-select: none;
    position: absolute;
  }
</style>
