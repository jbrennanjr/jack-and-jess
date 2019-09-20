<template>
  <div id="app">
    <div class="header">
      <div class="header-content">
        Jessica Radin <br>
        & <br>
        Jack Brennan
      </div>
      <nav class="navbar">
        <ul class="nav-list">
            <li class="nav-item">
                <router-link class="nav-link" href="#" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" href="#" to="/about-us">About Us</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" href="#" to="/schedule">Schedule</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" href="#" to="/travel">Travel</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" href="#" to="/lodging">Lodging</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" href="#" to="/registry">Registry</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" href="#" to="/rsvp">RSVP</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" href="#" to="/faq">FAQ</router-link>
            </li>
        </ul>
    </nav>
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
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

  .navbar {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding-inline-start: 0px;

    .nav-list {
      list-style: none;
      background-color: #444;
      text-align: center;
      padding: 5;

      .nav-item {
        font-family: 'Oswald', sans-serif;
        font-size: 15px;
        line-height: 40px;
        height: 40px;

        .nav-link {
          text-decoration: none;
          color: #fff;
          display: block;
          transition: .3s background-color;

          &:hover {
            background-color: #005f5f;
          }

          &.active {
            background-color: #fff;
            color: #444;
            cursor: default;
          }
        }
      }
    }
  }

  @media screen and (min-width: 600px) {
    .nav-item {
      display: inline-block;
      width: 130px;
      border-bottom: none;
      height: 50px;
      line-height: 50px;
    }
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
