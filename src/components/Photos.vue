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
                These photos were taken at the Arnold Arboretum in October 2019.
            </p>
            <a class="album-link" href="https://photos.app.goo.gl/Waq5EdxPdx7SKMm68" target="_blank">View full album</a>
        </div>
        <div class="album">
            <a class="album-header" href="https://photos.app.goo.gl/Waq5EdxPdx7SKMm68" target="_blank">Wedding Photos - Harrington Farm</a>
            <div class="photos">
                <div class="photo wedding1"></div>
                <div class="photo wedding2"></div>
                <div class="photo wedding3"></div>
            </div>
            <p>
                These photos were taken at the Harrington Farm in August 2021.
            </p>
            <a class="album-link" href="https://photos.app.goo.gl/e7obfPnXMWbTBefg6" target="_blank">View full album</a>
        </div>
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
    margin-bottom: 20px;

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
            &.wedding1 {
                background-image: url('../assets/images/photos/wedding1.jpg');
                background-position: 0%;
                width: 25%;
            }
            &.wedding2 {
                background-image: url('../assets/images/photos/wedding2.jpg');
                background-position: 90%;
                width: 35%;
            }
            &.wedding3 {
                background-image: url('../assets/images/photos/wedding3.jpg');
                background-position: 50%;
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

.photographer {
    margin-top: 30px;
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

                &.wedding1 {
                    background-position: 0% 20%;
                }
                &.wedding2 {
                    background-position: 0% 0%;
                }
                &.wedding3 {
                    background-position: 0% 10%;
                }
            }
        }
    }
}
</style>