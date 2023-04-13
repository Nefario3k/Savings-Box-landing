<template>
    <div class="row align-center">
        <div class="col-12 col-md-6">
            <h2 class="">Join other <span>2,058+</span> Active users</h2>
        </div>
        <div class="col-12 col-md-6 d-flex flex-wrap flex-md-row justify-center justify-md-start align-center mt-n8 pb-8">
            <input class="flex-grow-1 mt-6 mt-md-0" type="email" name="email" id="" placeholder="Enter your Email">
            <v-btn class="white--text ml-md-4 py-6 mt-6 mt-md-0" color="#4169E1">Subscribe Now</v-btn>
            <!-- <button class="l-btn ml-4">Subscribe Now</button> -->
        </div>
    </div>
</template>
<style lang="scss" scoped>
div.row {
    background: #F4F7FF;
    padding: 0rem var(--landing-x-padding) 0rem;

    h2 {
        font-size: 3.8rem;
        font-weight: 600;
        line-height: 6rem;

        color: #000831;

        span {
            color: var(--primary-color);
        }
    }

    input {
        // width: 70%;
        border: 1px solid #999C9F;
        padding: 1rem;
        border-radius: var(--normal-radius);
        background-color: #fff;

        &::placeholder {
            color: #999C9F;
        }

        &:focus {
            outline: 1px solid rgb(158, 158, 205);
        }
    }

    button {
        text-transform: none;
        padding: 1rem 0px;
        font-size: 1.6rem
    }
}

@media screen and (max-width: 800px) {
    div.row {
        background: #F4F7FF;
        padding: 0rem 2.4rem 0rem;
        margin: 0px;

        h2 {
            font-size: 2.6rem;
            line-height: 3.4rem;

            color: #000831;

            span {
                color: var(--primary-color);
            }
        }

        input {
            width: 100%;
            border: 1px solid #999C9F;
            padding: 1rem;
            border-radius: var(--normal-radius);
            background-color: #fff;

            &::placeholder {
                color: #999C9F;
            }

            &:focus {
                outline: 1px solid rgb(158, 158, 205);
            }
        }

        button {
            width: 100%;
            text-transform: none;
            padding: 0rem 0px;
            font-size: 1.6rem;
        }
    }
}
</style>