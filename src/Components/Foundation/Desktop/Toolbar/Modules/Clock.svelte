<script lang="ts">
  import { onMount } from "svelte";

  let date: Date;
  let time: string;
  function clock() {
    let refreshRate = 1000;
    setTimeout(() => clockHandler(), refreshRate);
  }
  function clockHandler() {
    date = new Date();
    time = formatToTime(date);
    clock();
  }
  function formatToTime(input: Date): string {
    return input.toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: true,
      minute: "numeric",
    });
  }
  onMount(async () => {
    clock();
  });
</script>

<div class="font-windows text-black">{time}</div>
