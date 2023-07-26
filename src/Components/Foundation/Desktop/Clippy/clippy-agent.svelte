<script lang="ts">
  import "98.css";
  import { getContext, onMount } from "svelte";
  import type { Quote } from "../../../../Types/Quote";
  import Tooltip from "../../Tooltip.svelte";
  import Hide from "../../Hide.svelte";
  import Draggable from "../../Draggable.svelte";

  export let x: number = 0;
  export let y: number = 0;

  let hide = false;
  let timer = 10000;
  let quote: Quote;

  async function getQuote() {
    await fetch(`https://api.breakingbadquotes.xyz/v1/quotes`)
      .then((r) => r.json())
      .then((data) => {
        quote = data[0];
      });
  }

  onMount(async () => {
    getQuote();
  });

  async function reset() {
    await getQuote().then(() => {
      hide = false;
    });
  }

  function hideChanged() {
    if (hide) {
      setTimeout(async () => {
        await reset();
      }, timer);
    }
  }

  $: hide && hideChanged();
</script>

{#if !hide}
  <Draggable>
    <div style=" left: {x}px; top: {y}px; position: absolute;">
      <Tooltip>
        {#if quote}
          {quote.quote}
        {/if}
      </Tooltip>
      <Hide bind:hide x={210} y={-190} />
      <img height="250" width="150" src="images/clippy.gif" alt="clippy" />
    </div>
  </Draggable>
{/if}
