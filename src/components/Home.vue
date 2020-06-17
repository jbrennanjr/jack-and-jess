<template>
    <div class="page-content no-padding">
        <div class="welcome-content">
            <h1>Welcome</h1>
            <h4>We can’t wait to celebrate our wedding day with you.</h4>
            <p>Be sure to stay up to date with us while we deal with the uncertainties of the COVID-19 pandemic. Please see our latest updates <router-link href="#" to="/covid-19">here</router-link>.</p>
            <p>If you have any questions at all for us regarding the wedding or any details please feel free to call or text, or email us at <span class="email">jackbrennan.jessradin@gmail.com</span></p>
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