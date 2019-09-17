<template>
  <div id="app">
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style lang="less">
#app {
  background-color: #cef5d8;
}
</style>
