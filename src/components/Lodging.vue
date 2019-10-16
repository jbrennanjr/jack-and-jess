<template>
    <div class="page-content">
        <div class="content-left">
            <ul class="hotel-list">
                <li>
                    <a class="hotel-name" href="https://www.marriott.com/hotels/travel/bossd-springhill-suites-devens-common-center/">SpringHill Suites by Marriott</a>
                    <address>
                        <blockquote>
                            <a class="hotel-address" href="https://goo.gl/maps/ABAqf1ZwgSsryVby6">27 Andrews Pkwy, Devens, MA 01434</a>
                            <p class="phone-number">(978) 772-3030</p>
                        </blockquote>
                    </address>
                </li>
                <li>
                    <a class="hotel-name" href="https://hiltongardeninn3.hilton.com/en/hotels/massachusetts/hilton-garden-inn-devens-common-ORHDCGI/index.html?SEO_id=GMB-HI-ORHDCGI">Hilton Garden Inn</a>
                    <address>
                        <blockquote>
                            <a class="hotel-address" href="https://goo.gl/maps/ygXd3GAbSkMFQkcu6">59 Andrews Pkwy, Devens, MA 01434</a>
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
        width: 100%;
        text-align: left;
        display: flex;
    }

    .content-left {
        padding: 20px;
    }

    .content-right {
        display: flex;

        iframe {
            flex-grow: 1;
            border: none;
            margin: 0;
            padding: 0;
            border-radius: 0px 5px 5px 0px;
        }
    }

    .hotel-list {
        list-style-type: none;
        padding-left: 10px;

        li:first-of-type {
            margin-bottom: 50px;
        }

        .hotel-name {
            font-weight: 700;
            text-decoration: none;
            color: inherit;

            &:hover {
                color: #8c8cff;
            }
        }

        .hotel-address {
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