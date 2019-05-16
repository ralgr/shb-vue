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

.nav-list li {
  display: inline-block;
  list-style: none;
  height: 100%;
  padding: 0 1em;
}

a:hover {
  transition: all 0.3s;
  color: #DFB66A;
}
</style>
