<template lang="html">
  <footer>
    <shcontainer textCenter class="pa2 footer">
      <shlayer xs12>
        <div class="social-media">
          <ul class="link-style">
            <slot name="social"></slot>
          </ul>
        </div>
      </shlayer>

      <shlayer class="pa2" xs12>
        <div class="copyright-text">
          &copy; <slot name="copyright">THIS BE ZE COPYRIGHT</slot>
        </div>
      </shlayer>
    </shcontainer>
  </footer>
</template>

<script>
import shcontainer from './shcontainer'
import shlayer from './shlayer'

export default {
  name: 'shfooter',

  components: {
    shcontainer,
    shlayer
  }
}
</script>

<style lang="css" scoped>
.footer {
  background: #283349;
  color: white;
}

.link-style {
  list-style: none;
}

.social-media {
  font-size: 2em;
}

.social-media ul {
  padding: 0 0.2em;
}

.social-media:hover {
  transition: all 0.3s;
  color: #DFB66A;
  cursor: pointer;
}

.copyright-text {
  font-size: 12px;
}

.colour {
  background: red;
}
</style>

<docs>
  ### ** Requirements **
  ** This component requires both `shcontainer` and `shlayer` to work as intended. Adding links will require the `shlinks` component to wrap the links before being fed to the `#social` slot. **

  ### Description

  The footer component will take in two inputs from the user using the `#copyright` slot and the '#social' slot.

  * The `#copyright` slot takes in `text input` is used to display a copyright message at the bottom centre of the footer.
  * The `#social` slot will take in links wrapped in the ** `shlinks` ** component. The links inside the `shlinks` can be either a text link or an icon link that makes use of `Font Awesome` icons.

  ### Using Icons
  It is required to install [FortAwesome](https://github.com/FortAwesome/vue-fontawesome) to allow Vue.js components to make use of `Font Awesome` icons. Note that there is a separate install needed in addition to the core components for brand icons specifically.

  Afterwards, set the imports as stated on the install instructions on the `main.js` file and then specify which icons or brand will be used.

  ### Sub-components
  * `shlinks`

  ### Example

  ```jsx
  <shfooter>
    <template #social>
      <shlinks>
        <a href="#">Link1</a></shlinks>
      <shlinks>
        <a href="#">Link2</a>
      </shlinks>
      <shlinks>
        <a href="#">Link3</a>
      </shlinks>
    </template>

    <template #copyright>
      SHADOWBRINGERS PATTERN LIBRARY
    </template>
  </shfooter>
  ```
</docs>
