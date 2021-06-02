<template>
    <div class="page-content">
        <h3>Schedule of Events</h3>
        <h4>Sunday, August 22nd, 2021 </h4>
        <div class="flex-container">
            <div class="event">Shuttle Departs</div>
            <div class="details">
                <div>4:00 PM</div>
                <div class="location">Harrington Farm <br/> 178 Westminster Rd, Princeton, MA 01541</div>
            </div>
        </div>
        <div class="flex-container">
            <div class="event">Ceremony</div>
            <div class="details">
                <div>4:30 PM</div>
                <div class="location">Harrington Farm <br/> 178 Westminster Rd, Princeton, MA 01541</div>
            </div>
        </div>
        <div class="flex-container">
            <div class="event">Cocktail Hour</div>
            <div class="details">
                <div>5:00 PM</div>
                <div class="location">Harrington Farm <br/> 178 Westminster Rd, Princeton, MA 01541</div>
            </div>
        </div>
        <div class="flex-container">
            <div class="event">Dinner & Dancing</div>
            <div class="details">
                <div>6:00 PM - 10:30 PM</div>
                <div class="location">Harrington Farm <br/> 178 Westminster Rd, Princeton, MA 01541</div>
            </div>
        </div>
        <h4>Monday, August 23rd, 2021 </h4>
        <div class="flex-container">
            <div class="event">Brunch</div>
            <div class="details">
                <div>9:00 AM - 11:30 AM</div>
                <div class="location">DoubleTree by Hilton Hotel Leominster <br/> 99 Erdman Way, Leominster, MA 01453</div>
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