<template lang="html">
  <li><a href="#"><slot></slot></a></li>
</template>

<script>
export default {
  name: 'shlinks'
}
</script>

<style lang="css" scoped>
a {
  text-decoration: none;
  color: white;
}

li {
  display: inline-block;
  list-style: none;
  padding: 0 0.5em;
}

a:hover {
  transition: all 0.3s;
  color: #DFB66A;
}
</style>

<docs>
  ### ** Requirements **
  ** This component can only be used by `shnav` and `shfooter`. **

  ### Description

  The `shlinks` component is a sub-component used for both `shnav` and `shfooter`. It is used to wrap around the links to be fed inside named slots on the stated parent components.

  ### Examples

  Used on the `#links` slot of `shnav`.
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
