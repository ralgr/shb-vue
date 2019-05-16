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
