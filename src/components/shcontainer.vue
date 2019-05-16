<template lang="html">
  <div
    class="grid-container"
    :class="{
      centered80: centered80,
      centered90: centered90,
      textCenter: textCenter,
    }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'shcontainer',

  props: {
    centered80: Boolean,
    centered90: Boolean,
    textCenter: Boolean
  }
}
</script>

<style lang="css" scoped>
  div {
    font-family: 'Roboto';
    margin: 0;
  }

  .textCenter {
    text-align: center;
  }

  .centered80 {
    max-width: 80vw;
    margin: 0 auto;
  }

  .centered90 {
    max-width: 90vw;
    margin: 0 auto;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
</style>
