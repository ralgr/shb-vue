<template lang="html">
  <div
    class="grid-container"
    :class="{
      centered80: centered80,
      centered90: centered90,
      textCenter: textCenter,
      'grid-gap': gridGap
    }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'shcontainer',

  props: {
    /**
       * Centres the content using `margin` by giving it a width of `80vw`.
    */
    centered80: Boolean,
    /**
       * Centres the content using `margin` by giving it a width of `90vw`.
    */
    centered90: Boolean,
    /**
       * Aligns the text content to the centre.
    */
    textCenter: Boolean,
    /**
       * Shows grid gaps. For testing purposes.
    */
    gridGap: Boolean
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

  .grid-gap {
    grid-gap: 10px;
  }
</style>

<docs>
### ** Requirements **
** The `<shcontainer></shcontainer>` grid requires the use of its sub-component `<shlayer></shlayer>` to place contents inside the grid. Otherwise, it will just be an ordinary `div` with text content using the font `Roboto`. **

### Desription
A grid system for positioning contents that ensures responsiveness on every breakpoint by using props. The `<shcontainer></shcontainer>` is a 12-column grid that is used in tandem with `<shlayer></shlayer>` to position contents inside it. The default setting for the grid will be `full-width`, with two props, `centered80` and `centered90`, to make a centred layout. The numbers indicate the `vw` value used for each prop. The `textCenter` prop will align all text content to the centre.

### Sub-components
* `shlayer`

### Examples

Resize the screen to see responsiveness.

```jsx
<shcontainer gridGap textCenter>
  <shlayer class="sampleClass2" xs12 md6 lg12>
    1
  </shlayer>
  <shlayer class="sampleClass2" xs6 md6 lg12>
    2
  </shlayer>
  <shlayer class="sampleClass2" xs6 md12 lg12>
    3
  </shlayer>
</shcontainer>
```

Open isolated and resize the screen to check the effects of `centered80`.

```jsx
<shcontainer gridGap centered80 textCenter>
  <shlayer class="sampleClass2" xs12 md6 lg12>
    1
  </shlayer>
  <shlayer class="sampleClass2" xs6 md6 lg12>
    2
  </shlayer>
  <shlayer class="sampleClass2" xs6 md12 lg12>
    3
  </shlayer>
</shcontainer>
```
</docs>
