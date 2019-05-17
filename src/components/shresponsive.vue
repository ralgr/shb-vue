<template lang="html">
  <header>
    <shcontainer textCenter>
      <shlayer class="shresponsive" xs12>
        <div
          :class="{
          hero1: hero1,
          hero2: hero2,
          hero3: hero3,
          hero4: hero4,
          hero5: hero5
          }">
          <slot>
            <img src="https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2749&q=80" alt="Tori Gate">
          </slot>
        </div>
        <div class="centerpiece"
          :class="{'img-only': imgOnly}">
          <slot name="heading-text">
          </slot>
        </div>
      </shlayer>
    </shcontainer>
  </header>
</template>

<script>
import shcontainer from './shcontainer'
import shlayer from './shlayer'

export default {
  name: 'shresponsive',

  props: {
    /**
       * Modifies the image opacity to `0.1`.
    */
    hero1: Boolean,
    /**
       * Modifies the image opacity to `0.2`.
    */
    hero2: Boolean,
    /**
       * Modifies the image opacity to `0.3`.
    */
    hero3: Boolean,
    /**
       * Modifies the image opacity to `0.4`.
    */
    hero4: Boolean,
    /**
       * Modifies the image opacity to `0.5`.
    */
    hero5: Boolean,
    /**
       * Modifies the `shresponsive` component to only show the image.
    */
    imgOnly: Boolean
  },

  components: {
    shcontainer,
    shlayer
  }
}
</script>

<style lang="css" scoped>
img {
  width: 100%;
  height: auto;
}

.shresponsive {
  position: relative;
}

/* Hide text if set to img only */
.img-only {
  display: none;
}

/* Hero image opacity */
.hero1 {
  opacity: 0.1;
}

.hero2 {
  opacity: 0.2;
}

.hero3 {
  opacity: 0.3;
}

.hero4 {
  opacity: 0.4;
}

.hero5 {
  opacity: 0.5;
}

.centerpiece {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 11vw;
}
</style>

<docs>
  ### ** Requirements **
  ** This component requires both `shcontainer` and `shlayer` to work as intended. **

  ### Description
  The `shresponsive` component is designed to take in two inputs from the user via `slot` templates.

  * The default `slot` will take in an `img` element that is preconfigured using global CSS to be responsive according to its container.
  * The second `slot` is named `#heading-text` and will require a template to take in text input.

  The `shresponsive` component will use this text input and display it in the centre of the image. In addition to the two inputs, props will be able to modify this component to turn it from a static image header into a hero image header.

  For a static image, add the `imgOnly` prop and leave out the `#heading-text`. For a hero image header, remove `imgOnly` prop and a text to be displayed using `#heading-text` slot. The opacity of the image can be controlled using `hero1 to 5` props with the numbers indicating the opacity levels.

  ### Examples

  ** Note ** - The image shown here is a fallback image used when no `img` element is detected.

  Hero image header example.
  ```jsx
  <shcontainer>
    <shlayer xs12>
      <shresponsive hero5>
        <!-- img here -->
        <template #heading-text>
          Hero Text
        </template>
      </shresponsive>
    </shlayer>
  </shcontainer>

  ```

  Image only header example.
  ```jsx
  <shcontainer>
    <shlayer xs12>
      <shresponsive imgOnly>
        <!-- img here -->
        <template #heading-text>
          Should not be seen
        </template>
      </shresponsive>
    </shlayer>
  </shcontainer>

  ```

</docs>
