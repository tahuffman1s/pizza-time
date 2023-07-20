<script lang="ts">
  import Window from "../Foundation/Window.svelte";
  import RainbowHeaderStatic from "../Effects/RainbowHeaderStatic.svelte";
</script>

<Window height={200} width={400}>
  <div slot="title">pizzaboy.exe</div>
  <div slot="content">
    <RainbowHeaderStatic>I'm a pizza boy</RainbowHeaderStatic>
  </div>
</Window>
