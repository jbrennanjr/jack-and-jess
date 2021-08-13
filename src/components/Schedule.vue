<template>
    <div class="page-content">
        <h3>Schedule of Events</h3>
        <h4>Sunday, August 22nd, 2021 </h4>
        <div class="flex-container">
            <div class="event">Shuttles To the Venue</div>
            <div class="details">
                <div>3:45 PM</div>
                <div class="location">
                    DoubleTree by Hilton Hotel Leominster
                    <br />
                    to
                    <br />
                    Harrington Farm
                </div>
            </div>
        </div>
        <div class="flex-container">
            <div class="event">Ceremony</div>
            <div class="details">
                <div>4:45 PM</div>
                <div class="location">Harrington Farm</div>
            </div>
        </div>
        <div class="flex-container">
            <div class="event">Cocktail Hour</div>
            <div class="details">
                <div>5:15 PM</div>
                <div class="location">Harrington Farm</div>
            </div>
        </div>
        <div class="flex-container">
            <div class="event">Reception</div>
            <div class="details">
                <div>6:30 PM - 10:15 PM</div>
                <div class="location">Harrington Farm</div>
            </div>
        </div>
        <div class="flex-container">
            <div class="event">Shuttles To the Hotel</div>
            <div class="details">
                <div>10:30 PM</div>
                <div class="location">
                    Harrington Farm
                    <br />
                    to
                    <br />
                    DoubleTree by Hilton Hotel Leominster
                </div>
            </div>
        </div>
        <h4>Monday, August 23rd, 2021 </h4>
        <div class="flex-container">
            <div class="event">Brunch</div>
            <div class="details">
                <div>9:00 AM - 11:30 AM</div>
                <div class="location">DoubleTree by Hilton Hotel Leominster</div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
h4 {
    font-size: 20px;
    margin-top: 40px;
    text-align: center;
}

.flex-container {
    width: 90%;
    display: flex;
    margin: 20px auto;

    .event {
        padding-right: 20px;
        text-align: right;
        width: 40%;
    }

    .details {
        padding-left: 20px;
    }

    .location {
        font-size: 14px;
        font-style: italic;
    }
}

@media only screen and (max-device-width : 480px) {
    .page-content {
        padding: 20px 0px !important;
        margin: 0px 20px;
        background: rgba(255, 255, 255, 0.5);
    }

    .flex-container {
        display: block;

        .event {
            width: 100%;
            font-weight: bold;
            text-align: center;
            padding-right: 0px;
        }

        .details {
            padding-left: 0px;
            text-align: center;
        }
    }
}
</style>