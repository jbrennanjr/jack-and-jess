<template>
    <nav class="navbar">
        <router-link class="nav-link" href="#" to="/">Home</router-link>
        <router-link class="nav-link" href="#" to="/about-us">About Us</router-link>
        <router-link class="nav-link" href="#" to="/photos">Photos</router-link>
        <router-link class="nav-link" href="#" to="/schedule">Schedule</router-link>
        <router-link class="nav-link" href="#" to="/travel">Travel</router-link>
        <router-link class="nav-link" href="#" to="/rsvp">RSVP</router-link>
        <router-link class="nav-link" href="#" to="/registry">Registry</router-link>
        <router-link class="nav-link" href="#" to="/faq">FAQ</router-link>
    </nav>
</template>

<style lang="less" scoped>
nav {
    display: block;

    a {
        position: relative;
        display: inline-block;
        margin: 15px 25px;
        padding: 10px;
        outline: none;
        color: #237546;
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
</style>