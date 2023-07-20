<script lang="ts">
  import "98.css";
  import Draggable from "./Draggable.svelte";
  import { onMount } from "svelte";

  export let width: number;
  export let height: number;

  let viewWidth: number;
  let viewHeight: number;
  let oldWidth: number;
  let oldHeight: number;
  let oldX: number;
  let oldY: number;
  let window: HTMLElement;
  let draggable: Draggable;
  let maximized = false;
  let minimized = false;

  function minimize() {
    if (!minimized) {
      oldWidth = width;
      oldHeight = height;
      width = 200;
      height = 30;
      minimized = true;
      maximized = false;
    } else {
      height = oldHeight;
      width = oldWidth;
      minimized = false;
    }
  }

  function maximize() {
    if (!maximized) {
      if (minimized) {
        minimize();
      }
      oldX = draggable.getX();
      oldY = draggable.getY();
      oldWidth = width;
      oldHeight = height;
      draggable.setXY(0, 0);
      width = viewWidth;
      height = viewHeight;
      maximized = true;
    } else {
      draggable.setXY(oldX, oldY);
      height = oldHeight;
      width = oldWidth;
      maximized = false;
    }
  }
</script>

<Draggable bind:this={draggable}>
  <div
    class="window height"
    bind:this={window}
    style="width: {width}px; height: {height}px;"
  >
    <div class="title-bar">
      <div class="title-bar-text">
        <slot name="title" />
      </div>
      <div class="title-bar-controls">
        <button aria-label="Minimize" on:click={() => minimize()}></button>
        <button aria-label="Maximize" on:click={() => maximize()}></button>
        <button
          aria-label="Close"
          on:click={() => window.parentNode?.removeChild(window)}
        ></button>
      </div>
    </div>
    <div class="window-body">
      {#if !minimized}
        <slot name="content" />
      {/if}
    </div>
  </div>
</Draggable>

<svelte:window bind:innerWidth={viewWidth} bind:innerHeight={viewHeight} />
