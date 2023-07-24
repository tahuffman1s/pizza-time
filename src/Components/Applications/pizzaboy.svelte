<script lang="ts">
  import Window from "../Foundation/Window.svelte";
  import RainbowHeaderStatic from "../Effects/RainbowHeaderStatic.svelte";
</script>

<Window height={600} width={800}>
  <div slot="title">pizzaboy.exe</div>
  <div slot="content" style="text-align: center;">
    <RainbowHeaderStatic>I'm a pizza boy</RainbowHeaderStatic>
  </div>
</Window>
