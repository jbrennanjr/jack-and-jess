<template>
    <div class="page-content">
        <h3>Photo Albums</h3>
        <div class="album">
            <a class="album-header" href="https://photos.app.goo.gl/Waq5EdxPdx7SKMm68" target="_blank">Engagement Photos - Arnold Arboretum</a>
            <div class="photos">
                <div class="photo engagement1"></div>
                <div class="photo engagement2"></div>
                <div class="photo engagement3"></div>
            </div>
            <p>
                These photos were taken at the Arnold Arboretum in October 2019. The time of year was able to give us some great color in our photos.
            </p>
            <a class="album-link" href="https://photos.app.goo.gl/Waq5EdxPdx7SKMm68" target="_blank">View full album</a>
        </div>
        <div class="coming-soon">We will add photo albums for the ceremony and reception after the wedding. Be sure to check back later!</div>
        <div class="photographer">Photos by Ginny Cummings - <a href="https://www.capturedbyginny.com" target="_blank">Captured By Ginny</a></div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.page-content {
    padding: 20px 0px !important;
}

.album {
    text-align: left;

    .photos {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        height: 300px;
        margin-top: 1em;
        margin-bottom: 1em;

        .photo {
            background-size: cover;
            background-repeat: no-repeat;
            width: 100%;
            display: flex;

            &.engagement1 {
                background-image: url('../assets/images/photos/engagement1.jpg');
                background-position: 15%;
                width: 40%;
            }
            &.engagement2 {
                background-image: url('../assets/images/photos/engagement2.jpg');
                background-position: 100%;
                width: 25%;
            }
            &.engagement3 {
                background-image: url('../assets/images/photos/engagement3.jpg');
                background-position: 0%;
                width: 40%;
            }
        }
    }

    .album-header {
        display: inline-block;
        font-weight: bold;
        padding-left: 20px;
        text-decoration: none;
        color: black;

        &:hover {
            text-decoration: underline;
            color: blue;
        }
    }

    p, .album-link {
        padding-left: 20px;
    }
}

.coming-soon {
    font-weight: bold;
    margin-top: 20px;
    padding-left: 20px;
}

.photographer {
    margin-top: 50px;
    padding-left: 20px;
}

@media only screen and (max-device-width : 900px) {
    .album {
        .photos {
            display: block;
            height: inherit;

            .photo {
                display: block;
                height: 250px;
                width: 100% !important;

                &.engagement1 {
                    background-position: 0% 70%;
                }
                &.engagement2 {
                    background-position: 0% 50%;
                }
                &.engagement3 {
                    background-position: 0% 10%;
                }
            }
        }
    }
}
</style>