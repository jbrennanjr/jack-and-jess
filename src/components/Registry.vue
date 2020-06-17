<template>
    <div class="page-content no-padding">
        <div class="content-top">
            <h3>Registry</h3>
            <div>
                Your love and company on our wedding day is all we could could ask for. However if you do wish to honor us with a gift, 
                we have created an online gift registry that can be found here: 
            </div>
            <a href="http://www.zola.com/registry/jessicaandjackaugust23" target="_blank">www.zola.com/registry/jessicaandjackaugust23</a>
        </div>
        <div class="content-bottom photo"></div>
    </div>
</template>

<style lang="less" scoped>
.page-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 600px;
}

a {
    display: block;
    margin-top: 45px;
    text-align: center;
    font-size: 14pt;
}

.content-top {
    padding: 20px;
}

.photo {
    background-image: url('../assets/images/registry.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 350px;
    border-radius: 0px 0px 5px 5px;
    background-position-y: 10%;
}

@media only screen and (max-device-width : 900px) {
    .page-content {
        min-height: 700px;

        a {
            overflow-wrap: break-word;
        }

        .photo {
            background-position: 100%;
        }
    }
}

@media only screen and (max-device-width : 700px) {
    .photo {

        border-radius: 0px 0px 0px 0px;
    }
}
</style>