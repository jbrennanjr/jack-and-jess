<template>
    <div class="page-content">
        <div class="content-left">
            <ul class="location-list">
                <li>
                    <h3>Ceremony & Reception Venue</h3>
                    <a class="location-name" target="_blank" href="http://harringtonfarm.com/">Harrington Farm</a>
                    <address>
                        <blockquote>
                            <a class="location-address" target="_blank" href="https://goo.gl/maps/veHPpePEVXiVvHzG9">178 Westminster Rd, Princeton, MA 01541</a>
                        </blockquote>
                    </address>
                </li>
                <li>
                    <h3>Suggested Lodging</h3>
                    <a class="location-name" target="_blank" href="https://doubletree3.hilton.com/en/hotels/massachusetts/doubletree-by-hilton-hotel-leominster-ORHLEDT/index.html">DoubleTree by Hilton Hotel Leominster</a>
                    <address>
                        <blockquote>
                            <a class="location-address" target="_blank" href="https://goo.gl/maps/h1yZS4gq5yk6zAUx8">99 Erdman Way, Leominster, MA 01453</a>
                            <p class="phone-number">(978) 534-9000</p>
                        </blockquote>
                    </address>
                    <p>Please use code "TBD" to reserve a room at our discounted rate.</p>
                </li>
            </ul>
        </div>
        <div class="content-right">
            <iframe src="https://www.google.com/maps/d/embed?mid=1aUCLgS-sp2XAoCqkQMFi6VW2Mvi0vIU-"></iframe>
        </div>
    </div>
</template>

<style lang="less" scoped>
.page-content {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    overflow: hidden;

    .content-left,
    .content-right {
        width: 100%;
        text-align: left;
        display: flex;
    }

    .content-left {
        padding: 20px;
    }

    .content-right {
        display: flex;
        min-height: 600px;

        iframe {
            flex-grow: 1;
            border: none;
            margin: 0;
            padding: 0;
            border-radius: 0px 5px 5px 0px;
        }
    }

    .location-list {
        list-style-type: none;
        padding-left: 10px;
        margin-top: 0px;

        h3 {
            margin-top: 0px;
        }

        li:first-of-type {
            margin-bottom: 50px;
        }

        .location-name {
            font-weight: 700;
            text-decoration: none;
            color: inherit;

            &:hover {
                color: #8c8cff;
            }
        }

        .location-address {
            text-decoration: none;
            color: inherit;

            &:hover {
                color: #8c8cff;
            }
        }

        .phone-number {
            margin: 10px 0px;
        }
    }
}
</style>