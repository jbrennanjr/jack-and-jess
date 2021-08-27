<template>
    <div class="page-content no-padding">
        <div class="welcome-content">
            <h1>Welcome</h1>
            <h4>Thank you everyone for celebrating our special day with us!</h4>
            <p>As you may already know, we recently moved to VT. If you need our new address please reach out to us! Also be sure to check back soon for pictures from our wedding.</p>
        </div>
    </div>
</template>

<style lang="less" scoped>
.page-content {
    background-image: url('../assets/images/home-page.png');
	background-size: cover;
	background-repeat: no-repeat;
    background-position: top;
    min-height: 600px;
    border-radius: 5px;

    .welcome-content {
        padding: 20px;
        padding-top: 40px;
        position: absolute;
        bottom: 0px;
        border-radius: 5px;
        background: rgb(255,255,255);
        background: linear-gradient(0deg, rgba(255,255,255,1) 30%, rgba(255,255,255,0) 100%);

        h1 {
            padding-top: 30px;
            font-family: 'Allura', sans-serif;
            font-size: 60px;
            margin: 0px;
            color: #191919;
        }

        .email {
            color:#8c8cff;
        }
    }
}

@media only screen and (max-device-width : 700px) {
    .page-content {
        border-radius: 0px;

        .welcome-content {
            border-radius: 0px;
        }
    }
}
</style>