<template>
<div class="page-content">
    <h3>RSVP</h3>
    <div class="sub-header">
        <p><strong>If you already RSVP'd for our 2020 date, please RSVP again for 2021.</strong></p>
        <br />
        <p>Submit the form once for each guest</p>
    </div>
    <form class="rsvp-form" name="rsvp" @submit="checkForm" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="rsvp" />
        <input type="text" name="bot-field" v-show="false">
        <div class="text-input-field">
            <input type="text" name="full-name" id="full-name" placeholder=" "  v-model="fullName">
            <label for="full-name">Full Name</label>
        </div>
        <div class="radio-group attending-group">
            <div class="radio-item">
                <input type="radio" id="accept" name="attending-accept" value="accept" v-model="attending">
                <label for="accept">Gladly Accept</label>
            </div>
            <div class="radio-item">
                <input type="radio" id="decline" name="attending-decline" value="decline" v-model="attending">
                <label for="decline">Sadly Decline</label>
            </div>
        </div>
        <p>Please select your entree preference:</p>
        <div class="radio-group meal-group">
            <div class="radio-item">
                <input type="radio" id="chicken" name="dinner-chicken" value="chicken" v-model="meal">
                <label for="chicken">Chicken</label>
            </div>
            <div class="radio-item">
                <input type="radio" id="beef" name="dinner-beef" value="beef" v-model="meal">
                <label for="beef">Beef</label>
            </div>
            <div class="radio-item">
                <input type="radio" id="salmon" name="dinner-salmon" value="salmon" v-model="meal">
                <label for="salmon">Salmon</label>
            </div>
            <p class="disclaimer">Please call or email us if we need to be made aware of any dietary restrictions.</p>
        </div>
        <p>In an effort to help us book transportation, please let us know if you'd take advatage of a shuttle service between our suggested lodging and the venue:</p>
        <div class="radio-group shuttle-group">
            <div class="radio-item">
                <input type="radio" id="affirmative" name="shuttle-affirmative" value="affirmative" v-model="shuttle">
                <label for="affirmative">Yes</label>
            </div>
            <div class="radio-item">
                <input type="radio" id="negative" name="shuttle-negative" value="negative" v-model="shuttle">
                <label for="negative">No</label>
            </div>
        </div>

        <p class="error">{{errorText}}</p>
        <div class="submit-container">
            <button class="sumbit-button">Submit</button>
        </div>
    </form>
</div>
</template>

<script>
module.exports = {
    data() {
        return{
            fullName: null,
            attending: null,
            meal: null,
            shuttle: null,
            showError: false,
            errorText: null
        }
    },
    methods: {
        checkForm(e) {
            if (!this.fullName) {
                e.preventDefault();
                this.errorText = "Please enter your name.";
                return;
            }

            if (this.attending == null) {
                e.preventDefault();
                this.errorText = "Please select whether or not this guest is able to attend.";
                return;
            }

            if (this.attending == "accept" && this.meal == null) {
                e.preventDefault();
                this.errorText = "Please select a meal option.";
                return;
            }
        }
    }
}
</script>

<style lang="less" scoped>
.sub-header {
    text-align: center;
}

p {
    margin: 0px;
    font-size: 14px;

    &.disclaimer {
        padding: 5px;
        text-align: left;
    }

    &.error {
        display: block;
        height: 15px;
        color: red;
        margin: 15px 0px;
    }
}

.rsvp-form {
    text-align: left;
    padding: 5px 20px 20px 20px;
    width: 55%;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;

    #full-name {
        background-color: transparent;
    }

    .text-input-field {
        display: flex;
        flex-flow: column-reverse;
        margin-bottom: 20px;

        label, input {
            transition: all 0.2s;
            touch-action: manipulation;
        }

        input {
            font-size: 1.5em;
            border: 0;
            border-bottom: 1px solid black;
            font-family: inherit;
            -webkit-appearance: none;
            border-radius: 0;
            padding-bottom: 5px;
            cursor: text;
            
        }

        input:focus {
            outline: 0;
            border-bottom: 1px solid #666;

            &:placeholder-shown + label {
                opacity: .5;
            }
        }

        input:placeholder-shown + label {
            cursor: text;
            max-width: 66.66%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            transform-origin: left bottom;
            transform: translate(0, 2.125rem) scale(1.5);
        }

        ::-webkit-input-placeholder {
            opacity: 0;
            transition: inherit;
        }

        input:focus::-webkit-input-placeholder {
            opacity: 1;
        }

        input:not(:placeholder-shown) + label,
            input:focus + label {
            transform: translate(0, 0) scale(1);
            cursor: pointer;
            opacity: .5;
        }
    }

    .radio-group {
        margin: 10px 20px 20px 20px;

        .radio-item {
            padding: 10px;
        }

        &.attending-group {
            margin: 0px 20px 20px 0px;

            .radio-item {
                padding-left: 0px;
            }
        }

        [type="radio"]:checked,
        [type="radio"]:not(:checked) {
            position: absolute;
            left: -9999px;
        }
        [type="radio"]:checked + label,
        [type="radio"]:not(:checked) + label
        {
            position: relative;
            padding-left: 28px;
            cursor: pointer;
            line-height: 20px;
            display: inline-block;
        }
        [type="radio"]:checked + label:before,
        [type="radio"]:not(:checked) + label:before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 18px;
            height: 18px;
            border: 1px solid #4e664e;
            border-radius: 100%;
            background: #fff;
        }
        [type="radio"]:checked + label:after,
        [type="radio"]:not(:checked) + label:after {
            content: '';
            width: 12px;
            height: 12px;
            background: #4e664e;
            position: absolute;
            top: 4px;
            left: 4px;
            border-radius: 100%;
            -webkit-transition: all 0.2s ease;
            transition: all 0.2s ease;
        }
        [type="radio"]:not(:checked) + label:after {
            opacity: 0;
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        [type="radio"]:checked + label:after {
            opacity: .8;
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

    .submit-container {
        text-align: center;

        button {
            margin: 0px 10px;
            padding: 15px 30px;
            border: none;
            border-radius: 5px;
            font-family: 'Raleway', sans-serif;
            letter-spacing: 1px;
            font-weight: 700;
            font-size: 14px;

            &:hover {
                cursor: pointer;
            }

            &.sumbit-button {
                background-color: rgba(255, 255, 255, 0.0);
                border: 1px solid #1a221a;
                transition: all .2s ease;

                &:hover {
                    transition: all .2s ease;
                    background-color: #2a7e92;
                }
            }
        }
    }
}

/* Smartphones (portrait and landscape) ----------- */
@media only screen and (max-device-width : 700px) {
	.rsvp-form {
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.5);
    }
}

/* Smartphones (portrait and landscape) ----------- */
@media only screen and (max-device-width : 480px) {
    .rsvp-form {
        width: 80%;
    }
}
</style>