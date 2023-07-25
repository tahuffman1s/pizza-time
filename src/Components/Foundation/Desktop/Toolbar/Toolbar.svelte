<script lang="ts">
  import "98.css";
  import Clock from "./Modules/Clock.svelte";
</script>

<div
  id="toolbar"
  class="bg-windows-grey title-bar-text w-screen border-t-4 content-center grid grid-cols-[100px_auto_200px]"
>
  <div class="col-span-1">
    <button class="grid grid-cols-[25px_auto] p-0 text-left">
      <img
        class="h-[25px] w-[25px] pl-1"
        src="images\icons\start.gif"
        alt="start"
      />
      <div class="pt-1 pb-1 col-span-1">Start</div>
    </button>
  </div>
  <div class="col-auto"></div>
  <div class="status-bar-field col-span-1">
    <div class="grid gap-0 grid-cols-[auto_auto]">
      <div />
      <div class="text-right pr-2">
        <Clock />
      </div>
    </div>
  </div>
</div>
