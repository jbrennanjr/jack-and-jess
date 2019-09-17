<template>
  <div id="app">
    <div class="header">
      <div class="header-image"></div>
      <nav-bar></nav-bar>
    </div>
  <div class="body"></div>
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
body {
  margin: 0px;
  background-color: #cef5d8;
}
#app {
  .header {
    height: 200px;
    background-color: #A83288;

    .header-image {
      height: 160px;
    }
  }

  .body {
    width: 60%;
    background-color: #fff;
    height: 800px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 16px;
  }
}
</style>
