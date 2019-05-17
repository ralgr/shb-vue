<template>
  <div id="app" class="dark eerie-black">
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
        <shlinks><a href="#"><i class="fab fa-facebook"></i></a></shlinks>
        <shlinks><a href="#"><i class="fab fa-twitter"></i></a></shlinks>
        <shlinks><a href="#"><i class="fab fa-github"></i></a></shlinks>
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

export default {
  name: 'App',

  components: {
    shnav,
    shlinks,
    shfooter
  }
}
</script>

<style>

</style>
