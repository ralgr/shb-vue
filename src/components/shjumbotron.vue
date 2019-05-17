<template lang="html">
  <shcontainer>
    <shlayer xs12>
      <div class="jumbo"
        :class="{
          'clean-white': white,
          'eerie-black': black
        }"
        >
        <div class="jumbo-title">
          <slot name="jtitle">
            Jumbotron
          </slot>
        </div>
        <div class="jumbo-subtitle">
          <slot name="jsub-title">
            Component
          </slot>
        </div>
        <shcontainer>
          <shlayer class="jumbo-body" xs12 sm11 md8 lg6
            :class="{
              dark: dark,
              light: light
              }">
            <slot name="jbody">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting.
            </slot>
          </shlayer>
        </shcontainer>
        <div class="jumbo-buttons">
          <slot name="jbuttons">
          </slot>
        </div>
      </div>
    </shlayer>
  </shcontainer>
</template>

<script>
import shcontainer from './shcontainer'
import shlayer from './shlayer'


export default {
  name: 'shjumbotron',

  components: {
    shcontainer,
    shlayer
  },

  props: {
    dark: Boolean,
    light: Boolean,
    white: Boolean,
    black: Boolean
  }
}
</script>

<style lang="css" scoped>
.jumbo {
  padding: 5vw;
}

.jumbo-title {
  font-size: 6vw;
  color: #333074;
}

.jumbo-subtitle {
  font-size: 3vw;
  color: #DFB66A;
}

.jumbo-body {
  padding: 1em 0;
}

/* Dark theme */
.dark {
  color: white;
}

/* Light theme */
.light {
  color: black;
}

/* Dark and Light */
.eerie-black {
  background: #171617;
}

.clean-white {
  background: #fff;
}
</style>
