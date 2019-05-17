<template lang="html">
  <div
    :class="{
      xs12: xs12,
      xs11: xs11,
      xs10: xs10,
      xs9: xs9,
      xs8: xs8,
      xs7: xs7,
      xs6: xs6,
      xs5: xs5,
      xs4: xs4,
      xs3: xs3,
      xs2: xs2,
      xs1: xs1,
      sm12: sm12,
      sm11: sm11,
      sm10: sm10,
      sm9: sm9,
      sm8: sm8,
      sm7: sm7,
      sm6: sm6,
      sm5: sm5,
      sm4: sm4,
      sm3: sm3,
      sm2: sm2,
      sm1: sm1,
      md12: md12,
      md11: md11,
      md10: md10,
      md9: md9,
      md8: md8,
      md7: md7,
      md6: md6,
      md5: md5,
      md4: md4,
      md3: md3,
      md2: md2,
      md1: md1,
      lg12: lg12,
      lg11: lg11,
      lg10: lg10,
      lg9: lg9,
      lg8: lg8,
      lg7: lg7,
      lg6: lg6,
      lg5: lg5,
      lg4: lg4,
      lg3: lg3,
      lg2: lg2,
      lg1: lg1,
      xl12: xl12,
      xl11: xl11,
      xl10: xl10,
      xl9: xl9,
      xl8: xl8,
      xl7: xl7,
      xl6: xl6,
      xl5: xl5,
      xl4: xl4,
      xl3: xl3,
      xl2: xl2,
      xl1: xl1,
    }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'shlayer',

  props: {
    // xs props
    xs12: Boolean,
    xs11: Boolean,
    xs10: Boolean,
    xs9: Boolean,
    xs8: Boolean,
    xs7: Boolean,
    xs6: Boolean,
    xs5: Boolean,
    xs4: Boolean,
    xs3: Boolean,
    xs2: Boolean,
    xs1: Boolean,

    // sm props
    sm12: Boolean,
    sm11: Boolean,
    sm10: Boolean,
    sm9: Boolean,
    sm8: Boolean,
    sm7: Boolean,
    sm6: Boolean,
    sm5: Boolean,
    sm4: Boolean,
    sm3: Boolean,
    sm2: Boolean,
    sm1: Boolean,

    // md props
    md12: Boolean,
    md11: Boolean,
    md10: Boolean,
    md9: Boolean,
    md8: Boolean,
    md7: Boolean,
    md6: Boolean,
    md5: Boolean,
    md4: Boolean,
    md3: Boolean,
    md2: Boolean,
    md1: Boolean,

    // lg props
    lg12: Boolean,
    lg11: Boolean,
    lg10: Boolean,
    lg9: Boolean,
    lg8: Boolean,
    lg7: Boolean,
    lg6: Boolean,
    lg5: Boolean,
    lg4: Boolean,
    lg3: Boolean,
    lg2: Boolean,
    lg1: Boolean,

    // xl props
    xl12: Boolean,
    xl11: Boolean,
    xl10: Boolean,
    xl9: Boolean,
    xl8: Boolean,
    xl7: Boolean,
    xl6: Boolean,
    xl5: Boolean,
    xl4: Boolean,
    xl3: Boolean,
    xl2: Boolean,
    xl1: Boolean
  }
}
</script>

<style lang="css" scoped>
/* [[ EXTRA SMALL ]] ================================*/
@media screen and (min-width: 10px) {
  .xs12 {
    grid-column: span 12;
  }

  .xs11 {
    grid-column: span 11;
  }

  .xs10 {
    grid-column: span 10;
  }

  .xs9 {
    grid-column: span 9;
  }

  .xs8 {
    grid-column: span 8;
  }

  .xs7 {
    grid-column: span 7;
  }

  .xs6 {
    grid-column: span 6;
  }

  .xs5 {
    grid-column: span 5;
  }

  .xs4 {
    grid-column: span 4;
  }

  .xs3 {
    grid-column: span 3;
  }

  .xs2 {
    grid-column: span 2;
  }

  .xs1 {
    grid-column: span 1;
  }
}

/* [[ SMALL ]] ================================*/
@media screen and (min-width: 600px) {
  .sm12 {
    grid-column: span 12;
  }
  .sm11 {
    grid-column: span 11;
  }

  .sm10 {
    grid-column: span 10;
  }

  .sm9 {
    grid-column: span 9;
  }

  .sm8 {
    grid-column: span 8;
  }

  .sm7 {
    grid-column: span 7;
  }

  .sm6 {
    grid-column: span 6;
  }

  .sm5 {
    grid-column: span 5;
  }

  .sm4 {
    grid-column: span 4;
  }

  .sm3 {
    grid-column: span 3;
  }

  .sm2 {
    grid-column: span 2;
  }

  .sm1 {
    grid-column: span 1;
  }
}

/* [[ MEDIUM ]] ================================*/
@media screen and (min-width: 960px) {
  .md12 {
    grid-column: span 12;
  }

  .md11 {
    grid-column: span 11;
  }

  .md10 {
    grid-column: span 10;
  }

  .md9 {
    grid-column: span 9;
  }

  .md8 {
    grid-column: span 8;
  }

  .md7 {
    grid-column: span 7;
  }

  .md6 {
    grid-column: span 6;
  }

  .md5 {
    grid-column: span 5;
  }

  .md4 {
    grid-column: span 4;
  }

  .md3 {
    grid-column: span 3;
  }

  .md2 {
    grid-column: span 2;
  }

  .md1 {
    grid-column: span 1;
  }
}

/* [[ LARGE ]] ================================*/
@media screen and (min-width: 1264px) {
  .lg12 {
    grid-column: span 12;
  }

  .lg11 {
    grid-column: span 11;
  }

  .lg10 {
    grid-column: span 10;
  }

  .lg9 {
    grid-column: span 9;
  }

  .lg8 {
    grid-column: span 8;
  }

  .lg7 {
    grid-column: span 7;
  }

  .lg6 {
    grid-column: span 6;
  }

  .lg5 {
    grid-column: span 5;
  }

  .lg4 {
    grid-column: span 4;
  }

  .lg3 {
    grid-column: span 3;
  }

  .lg2 {
    grid-column: span 2;
  }

  .lg1 {
    grid-column: span 1;
  }
}

/* [[ EXTRA LARGE ]] ================================*/
@media screen and (min-width: 1904px) {
  .xl12 {
    grid-column: span 12;
  }

  .xl11 {
    grid-column: span 11;
  }

  .xl10 {
    grid-column: span 10;
  }

  .xl9 {
    grid-column: span 9;
  }

  .xl8 {
    grid-column: span 8;
  }

  .xl7 {
    grid-column: span 7;
  }

  .xl6 {
    grid-column: span 6;
  }

  .xl5 {
    grid-column: span 5;
  }

  .xl4 {
    grid-column: span 4;
  }

  .xl3 {
    grid-column: span 3;
  }

  .xl2 {
    grid-column: span 2;
  }

  .xl1 {
    grid-column: span 1;
  }
}

.sampleClass {
  grid-gap: 10px;
}

.sampleClass2 {
  padding: 30px;
  background: silver;
}
</style>

<docs>
### ** Requirements **
** The `<shlayer></shlayer>` component is a sub-component of `<shcontainer></shcontainer>`, and is to be used only inside it. Otherwise, it will just be an ordinary `div` with unformatted text content. **

### Description

The `<shlayer></shlayer>` is a sub-component of `shcontainer` and will wrap the contents to be put inside the `shcontainer` grid, representing a row in the grid. Props are used to control how many columns it will take up on the `<shcontainer></shcontainer>` grid on each breakpoint. These props are divided in 4 categories of breakpoints, which are:

* ** `xs12 to 1` ** refers to ** `less than 600px` ** device resolution.
* ** `sm12 to 1` ** refers to ** `between 600px and 960px` ** device resolution.
* ** `md12 to 1` ** refers to ** `between 960px and 1264px` ** device resolution.
* ** `lg12 to 1` ** refers to ** `between 1264px and 1904px` ** device resolution.
* ** `xl12 to 1` ** refers to ** `greater than 1904px` ** device resolution.

In each category, there are 12 levels that corresponds to the number of columns in the grid. For example, the code:

`<shlayer xs12 md6></shlayer>`

will make sure that `xs` devices makes use of all 12 columns until it reaches the `md` breakpoint, on which it would then use 6 columns.

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
