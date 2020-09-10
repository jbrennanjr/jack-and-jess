<template>
    <div>
        <div class="mobile-nav"><div class="icon-hamburger" @click="toggleNav"></div></div>
        <nav v-show="$store.state.showNav" class="navbar mobile">
            <div class="nav-link-container"><router-link class="nav-link" href="#" to="/">Home</router-link></div>
            <div class="nav-link-container"><router-link class="nav-link" href="#" to="/about-us">About Us</router-link></div>
            <div class="nav-link-container"><router-link class="nav-link" href="#" to="/photos">Photos</router-link></div>
            <div class="nav-link-container"><router-link class="nav-link" href="#" to="/travel">Travel</router-link></div>
            <div class="nav-link-container"><router-link class="nav-link" href="#" to="/rsvp">RSVP</router-link></div>
            <div class="nav-link-container"><router-link class="nav-link" href="#" to="/registry">Registry</router-link></div>
            <div class="nav-link-container"><router-link class="nav-link" href="#" to="/faq">FAQ</router-link></div>
        </nav>

        <nav class="navbar desktop">
            <router-link class="nav-link" href="#" to="/">Home</router-link>
            <router-link class="nav-link" href="#" to="/about-us">About Us</router-link>
            <router-link class="nav-link" href="#" to="/photos">Photos</router-link>
            <router-link class="nav-link" href="#" to="/travel">Travel</router-link>
            <router-link class="nav-link" href="#" to="/rsvp">RSVP</router-link>
            <router-link class="nav-link" href="#" to="/registry">Registry</router-link>
            <router-link class="nav-link" href="#" to="/faq">FAQ</router-link>
        </nav>
    </div>
</template>

<script>
module.exports = {
    methods: {
        toggleNav() {
            this.$store.commit('toggleNav', !this.$store.state.showNav);
        }
    }
}
</script>

<style lang="less" scoped>
.mobile-nav {
    display: none;

    .icon-hamburger {
        width: 33px;
        height: 33px;
        background-image: url('../assets/icons/icon-hamburger.svg');
        cursor: pointer;
        float: right;
        margin: 8px;
    }
}

nav {
    display: block;
    background: rgba(255, 255, 255, 0.2);

    &.mobile {
        display: none;

        .nav-link-container {
            width: 100%;
            text-align: left;
            padding-left: 10px;
        }
    }

    a {
        position: relative;
        display: inline-block;
        margin: 15px 25px;
        padding: 10px;
        outline: none;
        color: black;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 700;
        text-shadow: none;
        font-size: 1em;
        font-family: 'Raleway', sans-serif;
        -webkit-transition: color 0.3s;
        -moz-transition: color 0.3s;
        transition: color 0.3s;

        &.active,
        &:hover {
            color: #fff;
        }

        &:before {
            top: 0;
            -webkit-transform: translateY(-10px);
            -moz-transform: translateY(-10px);
            transform: translateY(-10px);
        }

        &:after {
            bottom: 0;
            -webkit-transform: translateY(10px);
            -moz-transform: translateY(10px);
            transform: translateY(10px);
        }

        &.active::before,
        &.active::after,
        &:hover::before,
        &:hover::after {
            opacity: 1;
            -webkit-transform: translateY(0px);
            -moz-transform: translateY(0px);
            transform: translateY(0px);
        }

        &:after,
        &:before {
            position: absolute;
            left: 0;
            width: 100%;
            height: 2px;
            background: #fff;
            content: '';
            opacity: 0;
            -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
            -moz-transition: opacity 0.3s, -moz-transform 0.3s;
            transition: opacity 0.3s, transform 0.3s;
        }
    }
}

@media (max-device-width : 1100px) {
    nav {
        a {
            margin: 15px 15px;
        }
    }
}

@media (max-device-width : 935px) {
    nav {
        a {
            padding: 5px;
            margin: 15px 10px;
        }
    }
}

@media (max-device-width : 775px) {
    nav {
        a {
            font-size: 13px;
            margin: 15px 10px;
        }
    }
}

/* Smartphones (portrait and landscape) ----------- */
@media only screen and (max-device-width : 700px) {
    .mobile-nav {
        display: block;
        width: 100%;
        height:50px;
        position:absolute;
        top: 0;
    }

    nav {
        position: absolute;
        width: 45%;
        height: 100%;
        top: 50px;
        right: 0px;
        z-index: 2;
        background-color: #69ac9a;

        a {
            margin: 15px 25px;
            padding: 10px;
            font-size: 1em;
            color: #ecf4f6;
        }

        &.desktop {
            display: none;
        }

        &.mobile {
            display: block;
        }
    }
}
</style>