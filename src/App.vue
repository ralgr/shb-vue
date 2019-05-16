<template>
  <div id="app" class="dark">
    <shnav>
      <template #logo>
        SHADOWBRINGERS PATTERN LIBRARY
      </template>

      <template #links>
        <shlinks><router-link to="/">home</router-link></shlinks>
        <shlinks><router-link to="/about">about</router-link></shlinks>
      </template>
    </shnav>

    <router-view/>

    <shfooter>
      <template #social>
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-github"></i></a>
      </template>

      <template #copyright>
        SHADOWBRINGERS PATTERN LIBRARY
      </template>
    </shfooter>
  </div>
</template>

<script>
import shnav from './components/shnav'
import shfooter from './components/shfooter'
import shlinks from './components/shlinks'
import shbutton from './components/shbutton'

export default {
  name: 'App',

  components: {
    shnav,
    shlinks,
    shfooter,
    shbutton
  }
}
</script>

<style>

</style>
