<template>
<div>
    <p>Please submit the form once for each guest.</p>
    <form class="rsvp-form" name="rsvp" method="POST" data-netlify="true">
        <div class="text-input-field">
            <input type="text" name="full-name" id="full-name" placeholder=" ">
            <label for="full-name">Full Name</label>
        </div>
        <div class="dinner-radio-group">
            <div class="dinner-radio-item">
                <input type="radio" id="chicken" name="dinner-choice" value="chicken">
                <label for="chicken">Chicken</label>
            </div>
            <div class="dinner-radio-item">
                <input type="radio" id="steak" name="dinner-choice" value="steak">
                <label for="steak">Steak</label>
            </div>
            <div class="dinner-radio-item">
                <input type="radio" id="other" name="dinner-choice" value="other">
                <label for="other">Other</label>
            </div>
        </div>
        <div class="submit-buttons">
            <button class="accept-button">Accept</button>
            <button class="decline-button">Regret</button>
        </div>
    </form>
    <p>Please let us know if you have any dietary restrictions.</p>
</div>
</template>

<style lang="less" scoped>
p {
    margin: 0px;
    font-size: 12px;
}

.rsvp-form {
    text-align: left;
    padding: 20px;
    width: 50%;
    margin-left: auto;
    margin-right: auto;

    .text-input-field {
        display: flex;
        flex-flow: column-reverse;

        label, input {
            transition: all 0.2s;
            touch-action: manipulation;
        }

        input {
            font-size: 1.5em;
            border: 0;
            border-bottom: 1px solid #ccc;
            font-family: inherit;
            -webkit-appearance: none;
            border-radius: 0;
            padding-bottom: 5px;
            cursor: text;
            
        }

        input:focus {
            outline: 0;
            border-bottom: 1px solid #666;
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
        }
    }

    .dinner-radio-group {
        margin: 20px;

        .dinner-radio-item {
            padding: 10px;
        }
    }

    .submit-buttons {
        text-align: center;

        button {
            margin: 0px 10px;
            padding: 10px;
            width: 100px;
            border: none;
            opacity: 1;
            border-radius: 5px;

            &:hover {
                cursor: pointer;
            }

            &.accept-button {
                background-color: #64d193;
            }
            &.decline-button {
                background-color: #d19364;
            }
        }
    }
}


</style>