<template lang="html">
  <footer>
    <shcontainer textCenter class="pa2 jp-indigo">
      <shlayer class="pa2" xs12>
        <div class="social-media">
          <slot name="social"></slot>
        </div>
      </shlayer>

      <shlayer class="pa2" xs12>
        <div class="copyright-text">
          &copy; <slot name="copyright">THE BE ZE COPYRIGHT</slot>
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
.social-media {
  font-size: 2em;
}

.social-media> * {
  padding: 0 0.2em;
}

.social-media> *:hover {
  transition: all 0.3s;
  color: #DFB66A;
  cursor: pointer;
}

.copyright-text {
  font-size: 12px;
}
</style>
