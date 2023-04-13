<template>
    <section class="partners row text-center py-14">
        <h2 class="px-8 px-md-0">Our trusted financial services partners</h2>
        <div class="mt-8 d-flex justify-space-around justify-md-center align-center flex-wrap">
            <img src="/images/partner1.png" alt="partner image">
            <img src="/images/partner2.png" alt="partner image" class="px-md-8">
            <img src="/images/partner3.png" class="mt-4 mt-md-0" alt="partner image">
        </div>
    </section>
</template>
<style lang="scss" scoped>
div.partners {
    // background-color: #F4F7FF;
    padding: 0rem var(--landing-x-padding);

    h2 {
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 7rem;
    }

    div {
        img+img {
            padding-left: 4.7rem;
        }
    }
}

@media screen and (max-width: 800px) {
    div.partners {
        // background-color: #F4F7FF;
        padding: 0rem var(--landing-x-padding);

        h2 {
            font-size: 2.4rem;
            font-weight: 500;
            line-height: 7rem;
        }

        div.partner-images {

            img {
                max-width: 15.4rem;
            }

            img+img {
                padding-left: 0rem;
            }
        }
    }
}
</style>