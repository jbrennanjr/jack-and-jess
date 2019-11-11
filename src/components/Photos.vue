<template>
    <div>
        <div
            v-for="(src, index) in photos"
            :key="index"
            class="photo"
            @click="() => showImg(index)"
        ><img :src="src"></div>

        <vue-easy-lightbox
            :visible="visible"
            :imgs="photos"
            @hide="handleHide"
        ></vue-easy-lightbox>
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
            imageDir: "../assets/images/engagement/",
            photos: [],
            visible: false,
            index: 0
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
        },
        importAll(r) {
            var photos = [];
            r.keys().forEach(key => (photos[key] = r(key)));
            this.photos = photos;
        }
    },
    mounted() {
         this.importAll(requireContext(this.imageDir, true, /\.jpg$/));
    }
}
</script>

<style lang="less" scoped>
.photo {
    img {
        width: 20%;
        cursor: pointer;
    }
}
</style>