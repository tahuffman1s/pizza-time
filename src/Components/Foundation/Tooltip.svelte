<div class="bubble">
  <slot />
</div>

<style>
  .bubble {
    position: relative;
    background: #fcfacf;
    color: #000000;
    font-family: Arial;
    font-size: 20px;
    line-height: 120px;
    text-align: center;
    left: -30px;
    top: -30px;
    max-width: 600px;
    max-height: 120px;
    border-radius: 10px;
    border-color: #000000;
    padding: 0px;
  }
  .bubble:after {
    content: "";
    position: absolute;
    display: block;
    width: 0;
    z-index: 1;
    border-style: solid;
    border-width: 0 20px 20px 0;
    border-color: transparent #fcfacf transparent transparent;
    bottom: -20px;
    left: 38%;
    margin-left: -10px;
  }
</style>
