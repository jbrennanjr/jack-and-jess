<template>
    <div>
        <div class="page-content">
            <div class="welcome-content">
                <br>
                <br>
                <br>
                <br>
                <br>
                <h3>Welcome to our wedding website!</h3>
                <h4>We can’t wait to celebrate our wedding day with you.</h4>
                <p>If you have any questions at all for us regarding the wedding or any details please feel free to call or text, or email us at <span class="email">jackbrennan.jessradin@gmail.com</span></p>
            </div>
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