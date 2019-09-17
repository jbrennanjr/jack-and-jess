<template>
  <div id="app">
    <div class="header">
      <div class="header-content">
        Jessica Radin <br>
        & <br>
        Jack Brennan
      </div>
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
  background-image: url('./assets/images/wood-background.jpg');
}
#app {
  .header-content {
    color: white;
    text-align: center;
    font-size: 40px;
    padding: 30px;
  }

  .body {
    width: 60%;
    background-color: #fff;
    height: 800px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 16px;
    margin-bottom: 20px;
  }
}
</style>
