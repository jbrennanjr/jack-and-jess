<template>
    <div class="page-content">
        <div class="content-left">
            <ul class="location-list">
                <li style="margin-bottom: 30px;">
                    <h3>Ceremony & Reception Venue</h3>
                    <a class="location-name" target="_blank" href="http://harringtonfarm.com/">Harrington Farm <span class="map-marker">B</span></a>
                    <address>
                        <blockquote>
                            <a class="location-address" target="_blank" href="https://goo.gl/maps/veHPpePEVXiVvHzG9">178 Westminster Rd, Princeton, MA 01541</a>
                        </blockquote>
                    </address>
                </li>
                <li style="margin-bottom: 30px;">
                    <h3>Suggested Lodging</h3>
                    <a class="location-name" target="_blank" href="https://doubletree3.hilton.com/en/hotels/massachusetts/doubletree-by-hilton-hotel-leominster-ORHLEDT/index.html">DoubleTree by Hilton Hotel <span class="map-marker">A</span></a>
                    <address>
                        <blockquote>
                            <a class="location-address" target="_blank" href="https://goo.gl/maps/h1yZS4gq5yk6zAUx8">99 Erdman Way, Leominster, MA 01453</a>
                            <p class="phone-number">(978) 534-9000</p>
                        </blockquote>
                    </address>
                    <p>Please use code "TBD" to reserve a room at our discounted rate.</p>
                </li>
                <li>
                    <h3>Other Lodging Options</h3>
                    <p>Please note that shuttle service will not be available from these locations.</p>
                    <a class="location-name" href="https://www.marriott.com/hotels/travel/bossd-springhill-suites-devens-common-center/">SpringHill Suites by Marriott</a>
                    <address>
                        <blockquote>
                            <a class="location-address" href="https://goo.gl/maps/ABAqf1ZwgSsryVby6">27 Andrews Pkwy, Devens, MA 01434</a>
                            <p class="phone-number">(978) 772-3030</p>
                        </blockquote>
                    </address>
                </li>
                <li>
                    <a class="location-name" href="https://hiltongardeninn3.hilton.com/en/hotels/massachusetts/hilton-garden-inn-devens-common-ORHDCGI/index.html?SEO_id=GMB-HI-ORHDCGI">Hilton Garden Inn</a>
                    <address>
                        <blockquote>
                            <a class="location-address" href="https://goo.gl/maps/ygXd3GAbSkMFQkcu6">59 Andrews Pkwy, Devens, MA 01434</a>
                            <p class="phone-number">(978) 772-0600</p>
                        </blockquote>
                    </address>
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
        text-align: left;
        flex: 1;
    }

    .content-left {
        padding: 20px;

        .map-marker {
            background-color: #1267ff;
            color: white;
            font-weight: bold;
            border-radius: 18px;
            padding: 4px 6px 4px 8px;
        }

        .location-list {
            list-style-type: none;
            padding-left: 10px;
            margin-top: 0px;

            h3 {
                margin-top: 0px;
                margin-bottom: 15px;
            }

            p {
                margin-left: 10px;
            }

            .location-name {
                font-weight: 700;
                text-decoration: none;
                color: inherit;
                margin-left: 10px;

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

    .content-right {
        display: flex;
        min-height: 600px;
        background-color: #f2f1f0;
        border-radius: 0px 5px 5px 0px;

        iframe {
            flex-grow: 1;
            border: none;
            margin: 0;
            padding: 0;
            border-radius: 0px 5px 5px 0px;
        }
    }
}
</style>