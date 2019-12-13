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
                require("../assets/images/engagement/_R6A1578.jpg"),
                require("../assets/images/engagement/_R6A1590.jpg"),
                require("../assets/images/engagement/_R6A1612-2.jpg"),
                require("../assets/images/engagement/_R6A1612.jpg"),
                require("../assets/images/engagement/_R6A1616-2.jpg"),
                require("../assets/images/engagement/_R6A1616.jpg"),
                require("../assets/images/engagement/_R6A1617-2.jpg"),
                require("../assets/images/engagement/_R6A1617-3.jpg"),
                require("../assets/images/engagement/_R6A1617.jpg"),
                require("../assets/images/engagement/_R6A1626.jpg"),
                require("../assets/images/engagement/_R6A1629-2.jpg"),
                require("../assets/images/engagement/_R6A1629-3.jpg"),
                require("../assets/images/engagement/_R6A1629.jpg"),
                require("../assets/images/engagement/_R6A1643.jpg"),
                require("../assets/images/engagement/_R6A1655.jpg"),
                require("../assets/images/engagement/_R6A1657.jpg"),
                require("../assets/images/engagement/_R6A1677.jpg"),
                require("../assets/images/engagement/_R6A1706.jpg"),
                require("../assets/images/engagement/_R6A1707.jpg"),
                require("../assets/images/engagement/_R6A1709-2.jpg"),
                require("../assets/images/engagement/_R6A1709.jpg"),
                require("../assets/images/engagement/_R6A1721-2.jpg"),
                require("../assets/images/engagement/_R6A1721.jpg"),
                require("../assets/images/engagement/_R6A1723-2.jpg"),
                require("../assets/images/engagement/_R6A1723.jpg"),
                require("../assets/images/engagement/_R6A1727-2.jpg"),
                require("../assets/images/engagement/_R6A1727.jpg"),
                require("../assets/images/engagement/_R6A1728.jpg"),
                require("../assets/images/engagement/_R6A1747-2.jpg"),
                require("../assets/images/engagement/_R6A1747.jpg"),
                require("../assets/images/engagement/_R6A1750-2.jpg"),
                require("../assets/images/engagement/_R6A1750.jpg"),
                require("../assets/images/engagement/_R6A1751-2.jpg"),
                require("../assets/images/engagement/_R6A1751.jpg"),
                require("../assets/images/engagement/_R6A1753.jpg"),
                require("../assets/images/engagement/_R6A1817.jpg"),
                require("../assets/images/engagement/_R6A1818.jpg"),
                require("../assets/images/engagement/_R6A1822.jpg"),
                require("../assets/images/engagement/_R6A1824.jpg"),
                require("../assets/images/engagement/_R6A1827.jpg"),
                require("../assets/images/engagement/_R6A1836.jpg"),
                require("../assets/images/engagement/_R6A1837.jpg"),
                require("../assets/images/engagement/_R6A1853.jpg"),
                require("../assets/images/engagement/_R6A1879-2.jpg"),
                require("../assets/images/engagement/_R6A1879.jpg"),
                require("../assets/images/engagement/_R6A1886-2.jpg"),
                require("../assets/images/engagement/_R6A1886.jpg"),
                require("../assets/images/engagement/_R6A1892.jpg"),
                require("../assets/images/engagement/_R6A1931.jpg"),
                require("../assets/images/engagement/_R6A1937.jpg"),
                require("../assets/images/engagement/_R6A1952-2.jpg"),
                require("../assets/images/engagement/_R6A1952.jpg"),
                require("../assets/images/engagement/_R6A1961-2.jpg"),
                require("../assets/images/engagement/_R6A1961.jpg"),
                require("../assets/images/engagement/_R6A1968-2.jpg"),
                require("../assets/images/engagement/_R6A1968.jpg"),
                require("../assets/images/engagement/_R6A2002.jpg"),
                require("../assets/images/engagement/_R6A2013.jpg"),
                require("../assets/images/engagement/_R6A2021.jpg"),
                require("../assets/images/engagement/_R6A2025.jpg"),
                require("../assets/images/engagement/_R6A2027.jpg"),
                require("../assets/images/engagement/_R6A2034.jpg"),
                require("../assets/images/engagement/_R6A2041.jpg"),
                require("../assets/images/engagement/_R6A2042.jpg"),
                require("../assets/images/engagement/_R6A2049.jpg"),
                require("../assets/images/engagement/_R6A2056-2.jpg"),
                require("../assets/images/engagement/_R6A2056.jpg"),
                require("../assets/images/engagement/_R6A2061-2.jpg"),
                require("../assets/images/engagement/_R6A2061.jpg"),
                require("../assets/images/engagement/_R6A2065.jpg"),
                require("../assets/images/engagement/_R6A2066.jpg"),
                require("../assets/images/engagement/_R6A2071.jpg"),
                require("../assets/images/engagement/_R6A2080.jpg"),
                require("../assets/images/engagement/_R6A2088-2.jpg"),
                require("../assets/images/engagement/_R6A2088.jpg"),
                require("../assets/images/engagement/_R6A2091-2.jpg"),
                require("../assets/images/engagement/_R6A2091.jpg"),
                require("../assets/images/engagement/_R6A2100-2.jpg"),
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