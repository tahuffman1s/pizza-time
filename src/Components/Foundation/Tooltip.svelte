<div class="bubble font-windows text-lg">
  <slot />
</div>

<style>
  .bubble {
    position: relative;
    width: 300px;
    height: 150px;
    left: -90px;
    top: -25px;
    padding: 6px;
    text-align: center;
    background: #fcfacf;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    border: #000000 solid 2px;
  }

  .bubble:after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 23px 15px 0;
    border-color: #fcfacf transparent;
    display: block;
    width: 0;
    z-index: 1;
    bottom: -23px;
    left: 120px;
  }

  .bubble:before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 24px 16px 0;
    border-color: #000000 transparent;
    display: block;
    width: 0;
    z-index: 0;
    bottom: -26px;
    left: 119px;
  }
</style>
