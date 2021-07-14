<template>
    <div class="page-content">
        <h3>Frequently Asked Questions</h3>
        <div class="question-content">
            <p class="question">How do I RSVP?</p>
            <p class="answer">You can RSVP through the form on this website, or you can call/text or email us as well. Just please be sure to include your meal choices!</p>
            <p class="question">When is the RSVP deadline?</p>
            <p class="answer">Please have your RSVP submitted by July 25th to allow us time to prepare.</p>
            <p class="question">What time should we arrive?</p>
            <p class="answer">The ceremony is scheduled to start at 4:45pm but we suggest you arrive 15 minutes beforehand to settle in.</p>
            <p class="question">Will the wedding be indoors or outdoors?</p>
            <p class="answer">We are hoping for good weather so we can have our ceremony outside and cocktail hour under a tent. The reception will be inside a beautiful old barn. In the event of poor weather we will be able to accommodate and host everything indoors.</p>
            <p class="question">Is there a required dress code?</p>
            <p class="answer">The dress code for our wedding is semi-formal/cocktail attire.  Ladies should wear cocktail dresses, and the gentlemen should wear a suit and tie or a sports coat.</p>
            <p class="question">Are kids welcome?</p>
            <p class="answer">To allow all of our guests, including parents, the chance to have an evening of relaxation, we request that the ceremony and reception be for adults only.</p>
            <p class="question">Do you have a hotel block for guests? Where do you recommend I stay?</p>
            <p class="answer">Yes we have a number of rooms blocked at the DoubleTree by Hilton in Leominster. Addresses and directions are available in the <router-link href="#" to="/travel">Travel</router-link> tab.</p>
            <p class="question">How do I get to the venue?</p>
            <p class="answer">We will be providing a shuttle service to the venue from our preferred lodging location, and back again at the end of the night. Otherwise guests will have to plan for their own transportation.</p>
            <p class="question">Is there parking available near the ceremony and reception venue?</p>
            <p class="answer">Yes there is a parking lot at the venue with ample space.</p>
            <p class="question">If I still have questions, what is the best way to contact you?</p>
            <p class="answer">If you need to get in touch with us for any reason don't hesitate to call or text! You can also email us at <span class="email">jackbrennan.jessradin@gmail.com</span></p>
        </div>
    </div>
</template>

<style lang="less" scoped>
.question-content {
    margin: 20px;

    .question {
        font-weight: bold;
        font-style: italic;
        margin-bottom: 5px;
        margin-top: 20px;
    }

    .answer {
        margin-top: 0px;
        font-size: 14px;
    }
}

@media only screen and (max-device-width : 700px) {
    .page-content {
        padding: 20px 0px !important;
        margin: 0px 20px;
        background: rgba(255, 255, 255, 0.5);

        .question-content {
            margin: 10px;
        }
    }
}
</style>