<template lang="html">
  <nav >
    <shcontainer class="pa2 nav">
      <shlayer class="nav-logo" xs6>
        <slot name="logo">LOGO/TEXT</slot>
      </shlayer>
      <shlayer class="nav-link" xs6>
        <ul class="nav-list">
          <slot name="links"></slot>
        </ul>
      </shlayer>
    </shcontainer>
  </nav>
</template>

<script>
import shcontainer from './shcontainer'
import shlayer from './shlayer'

export default {
  name: 'shnav',

  components: {
    shcontainer,
    shlayer
  }
}
</script>

<style lang="css" scoped>
.nav {
  background: #283349;
  color: white;
}

.nav-logo {
  align-self: center;
  justify-self: start;
}

.nav-link {
  justify-self: end;
}

.nav-list {
  padding: 0 .5em;
}
</style>

<docs>
### ** Requirements **
** This component require both `shcontainer` and `shlayer` to work as intended. Adding links will require the `shlinks` component to wrap the links before being fed to the `#links` slot. **

### Description

A navigation bar component that takes in two inputs using named `slots` called `#logo` and `#links`. The `#logo` slot will take in either a text input or a logo, while `#links` takes in links wrapped around the `shlinks` component. The responsive of the `shnav` can be tweaked by adding breakpoint conditions on the `shlayer` component. However, this is only possible by accessing `shnav`'s code base at the moment.

### Sub-components
* `shlinks`

### Examples

  ```jsx
  <shnav>
    <template #logo>
      <img src="./public/favicon.ico" alt="logo">
      / TEXT
    </template>
    <template #links>
      <shlinks><a href="#">home</a></shlinks>
      <shlinks><a href="#">about</a></shlinks>
      <shlinks><a href="#">contact</a></shlinks>
    </template>
  </shnav>
  ```
</docs>
