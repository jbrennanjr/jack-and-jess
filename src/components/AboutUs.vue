<template>
    <div>
        <div class="page-content">
            <h3>About Us</h3>
            <p>Jack and I met in 2010 at the University of Vermont. While our initial introduction happened on the very first day as freshman, our friendship really started sophomore year. We spent those college years as very close friends while we were living our best lives in Burlington.</p>
            <p>After graduation, Jack was able to slowly but surely make his way out of the friend zone. The catch was that I had just moved to the midwest for my dietetic internship. Despite me being in Indiana and Jack in Colorado, we decided to brave a long distance relationship.</p>
            <p>Now after about five years of dating, hiking and skiing countless trails, becoming cat parents, and a couple cross country moves, we’re getting married! So I’d say it worked out pretty well. We are so grateful to have the best family and friends in the world and can’t wait to share this exciting day with you all!</p>
        </div>
        <div class="photos">
            <div class="photo zion"></div>
            <div class="photo skiing"></div>
            <div class="photo fenway"></div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.page-content {
    padding: 20px;
    text-align: left;

    h3 {
        margin-top: 0px;
    }
}
.photos {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 300px;

    .photo {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        display: flex;

        &.zion {
            background-image: url('../assets/images/about-us/zion.jpg');
            border-radius: 0px 0px 0px 5px;
        }
        &.skiing {
            background-image: url('../assets/images/about-us/skiing.png');
        }
        &.fenway {
            background-image: url('../assets/images/about-us/fenway.png');
            border-radius: 0px 0px 5px 0px;
        }
    }
}

@media only screen and (max-device-width : 500px) {
    .photos {
        display: block;

        .photo {
            display: block;
            height: 200px;
            border-radius: 0px 0px 0px 0px;
        }
    }
}
</style>