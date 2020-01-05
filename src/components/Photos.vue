<template>
    <div class="page-content">
        <div class="clearfix section-header" @click="showEngagement = !showEngagement">
            <div class="icon-arrow" :class="{collapse: !showEngagement}"></div>
            <h2>Engagement Photos - Arnold Arboretum</h2>
        </div>
        <div v-show="showEngagement" class="engagement-photos">
            <img v-for="(src, index) in engagementPaths" :key="index" :src="src" alt=""  @click="() => showImg(index)">

            <vue-easy-lightbox
                :visible="visible"
                :imgs="engagementPaths"
                @hide="handleHide"
            ></vue-easy-lightbox>
        </div>
    </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox';

export default {
    components: {
        VueEasyLightbox
    },
    data() {
        return{
            // dir/s/b *.jpg > photoPaths.txt
            engagementPaths: [
                require("../assets/images/engagement/_R6A1578-2.jpg"),
                require("../assets/images/engagement/_R6A1617.jpg"),
                require("../assets/images/engagement/_R6A1643.jpg"),
                require("../assets/images/engagement/_R6A1677.jpg"),
                require("../assets/images/engagement/_R6A1707.jpg"),
                require("../assets/images/engagement/_R6A1721-2.jpg"),
                require("../assets/images/engagement/_R6A1723-2.jpg"),
                require("../assets/images/engagement/_R6A1750-2.jpg"),
                require("../assets/images/engagement/_R6A1753.jpg"),
                require("../assets/images/engagement/_R6A1853.jpg"),
                require("../assets/images/engagement/_R6A1886-2.jpg"),
                require("../assets/images/engagement/_R6A1952.jpg"),
                require("../assets/images/engagement/_R6A1968-2.jpg"),
                require("../assets/images/engagement/_R6A2002.jpg"),
                require("../assets/images/engagement/_R6A2013.jpg"),
                require("../assets/images/engagement/_R6A2041.jpg"),
                require("../assets/images/engagement/_R6A2056-2.jpg"),
                require("../assets/images/engagement/_R6A2100.jpg")
            ],
            visible: false,
            index: 0,
            showEngagement: false
        }
    },
    methods: {
        show() {
            this.visible = true;
        },
        handleHide() {
            this.visible = false;
        },
        showImg (index) {
            this.index = index;
            this.visible = true;
        }
    }
}
</script>

<style lang="less" scoped>
.page-content {
    padding: 20px;

    .section-header {
        cursor: pointer;
    }

    .clearfix:after {
        content: "";
        display: table;
        clear: both;
    }

    h2 {
        margin-top: 0px;
        float: left;
        padding-left: 15px;
    }

    .icon-arrow {
        width: 30px;
        height: 30px;
        background-image: url('../assets/icons/icon-expand.svg');
        float: left;
        cursor: pointer;

        &.collapse {
            background-image: url('../assets/icons/icon-collapse.svg');
        }
    }

    .engagement-photos {
        width: 100%;
        line-height: 0;
        -webkit-column-count: 5;
        -webkit-column-gap: 0px;
        -moz-column-count: 5;
        -moz-column-gap: 0px;
        column-count: 5;
        column-gap: 10px;

        img {
            width: 100% !important;
            height: auto !important;
            cursor: pointer;
            padding: 5px 0px;
        }
    }
}

@media (max-device-width : 810px) {
    .page-content {
        h2 {
            font-size: 20px;
        }

        .icon-arrow {
            position: relative;
            bottom: 5px;
        }
    }
}

@media (max-device-width : 530px) {
    .page-content {
        h2 {
            font-size: 16px;
        }

        .icon-arrow {
            position: relative;
            bottom: 5px;
        }
    }
}

/* Smartphones (portrait and landscape) ----------- */
@media only screen and (max-device-width : 480px) {
    .page-content {
        h2 {
            font-size: 13px;
        }

        .icon-arrow {
            position: relative;
            bottom: 8px;
        }
    }
}
</style>