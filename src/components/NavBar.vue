<template>
<nav class="navbar">
    <ul class="nav-list">
        <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Schedule</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Travel & Lodging</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Registry</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">RSVP</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">FAQ</a>
        </li>
    </ul>
</nav>
</template>

<style lang="less" scoped>
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
</style>