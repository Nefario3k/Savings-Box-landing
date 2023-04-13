<template>
    <div>
        <div>
            <BreadCrumb :items="[{ text: 'Home', disabled: false, }, { text: 'Features', disabled: true, }]"></BreadCrumb>
        </div>
        <section class="intro">
            <div class="intro-text text-center">
                <h1 class="">
                    Revolutionize Your Finances with Our Services
                </h1>
                <p class="mt-8">
                    Here is a few list of solutions and features to our services, an all-in-one financial service on
                    Savings,
                    Investment and Easy borrowing
                </p>
            </div>
            <div class="feature-cards-container row" id="feature-cards">
                <div class="col">
                    <div class="feature-card transfer">
                        <img src="images/icons/seamless-transfer.png" alt="seamless payment icon">
                        <h2>
                            Seamless <br> Transfer
                        </h2>
                        <p>
                            Move money with ease
                            Get your money where it needs to be in a few taps. Send money easily
                        </p>
                    </div>
                </div>
                <div class="col">
                    <div class="feature-card virtual">
                        <img src="images/icons/virtual-account.png" alt="seamless payment icon">
                        <h2>
                            Virtual <br> Bank Account
                        </h2>
                        <p>
                            Move money with ease
                            Get your money where it needs to be in a few taps. Send money easily
                        </p>
                    </div>
                </div>
                <div class="col">
                    <div class="feature-card payment">
                        <img src="images/icons/secured-payment.png" alt="seamless payment icon">
                        <h2>
                            Secured <br> Payments
                        </h2>
                        <p>
                            Move money with ease
                            Get your money where it needs to be in a few taps. Send money easily
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- saving section -->
        <section class="feature-type saving" id="saving">
            <div class="row feature">
                <div class="col-12 col-md-6 feature-intro">
                    <h2 class="d-flex align-center mb-4">
                        <img src="images/icons/saving.png" width="50" alt="saving icon">
                        <span class="pl-3">Savings</span>
                    </h2>
                    <p class="pr-0 pr-md-15">
                        Looking to save more money and take control of your finances? Our Savings Application is here to
                        help!
                        With our easy-to-use platform, you can set and track your savings goals, earn higher interest rates,
                        and
                        get personalized recommendations for how to grow your savings faster.
                    </p>
                    <p class="pr-0 pr-md-15">
                        Try our Savings Application today and take the first step towards financial freedom!
                    </p>
                </div>
                <div class="col-12 col-md-6 feature-image-container">
                    <img src="images/feature-saving.png" alt="saving feature image">
                </div>
            </div>
            <div class="feature-cards mt-16">
                <div class="feature-card d-flex flex-column justify-space-between">
                    <div>
                        <h3>High Interest</h3>
                        <p>
                            Keep your money, and earn 10%¹ interest on top or more. Interest is calculated daily on the
                            total
                            closing
                            balance and paid monthly. Rates are per annum and subject to change without notice.
                        </p>
                    </div>
                    <div class="">
                        <button class="pa-0">Get Started</button>
                    </div>
                </div>
                <div class="feature-card d-flex flex-column justify-space-between">
                    <div class="">
                        <h3>Savings Plans</h3>
                        <p>
                            Whatever you’re saving for, put money aside regularly to reach your goals. You can choose any of
                            our
                            plans, Autobox, SimpleBox, TargetBox, and SafeBox.
                        </p>
                    </div>
                    <div class="">
                        <button class="pa-0">Get Started</button>
                    </div>
                </div>
                <div class="feature-card d-flex flex-column justify-space-between">
                    <div class="">
                        <h3>Deposit Automation</h3>
                        <p>
                            Make life easier with automations. Have Interest e-transfers automatically deposited into your
                            account.
                        </p>
                    </div>
                    <div class="">
                        <button class="pa-0">Get Started</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- jollification section -->
        <section class="jollification" id="jollification">
            <div class="row feature">
                <div class="col-12 col-md-6 feature-intro">
                    <h2 class="d-flex align-center mb-4">
                        <img src="images/icons/jollification.png" width="50" alt="saving icon">
                        <span class="pl-3">Jollification</span>
                    </h2>
                    <p class="pr-0 pr-md-15">
                        Looking to save more money and take control of your finances? Our Savings Application is here to
                        help!
                        With our easy-to-use platform, you can set and track your savings goals, earn higher interest rates,
                        and
                        get personalized recommendations for how to grow your savings faster.
                    </p>
                    <p class="pr-0 pr-md-15">
                        Try our Savings Application today and take the first step towards financial freedom!
                    </p>
                </div>
                <div class="col-12 col-md-6 feature-image-container">
                    <img src="images/feature-jollification.png" alt="saving feature image">
                </div>
            </div>
            <div class="row feature-cards mt-16">
                <div class="col-12 col-md-4">
                    <div class="feature-card">
                        <h3>High Interest</h3>
                        <p>
                            This is a general savings plan that allows users to save based on their preferences. The user
                            decides how long they want to save for, how much they want to save and how frequent they want to
                            be making payments.
                        </p>
                        <button class="pa-0">Get Started</button>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="feature-card">
                        <h3>Secured Payment</h3>
                        <p>
                            This is a general savings plan that allows users to save based on their preferences. The user
                            decides how long they want to save for, how much they want to save and how frequent they want to
                            be making payments.
                        </p>
                        <button class="pa-0">Get Started</button>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="feature-card">
                        <h3>Deposit Automation</h3>
                        <p>
                            This is a general savings plan that allows users to save based on their preferences. The user
                            decides how long they want to save for, how much they want to save and how frequent they want to
                            be making payments.
                        </p>
                        <button class="pa-0">Get Started</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- InvestiBox section -->
        <section class="feature-type investibox" id="investibox">
            <div class="row feature">
                <div class="col-12 col-md-6 feature-intro">
                    <h2 class="d-flex align-center mb-4">
                        <img src="images/icons/investment.png" width="50" alt="saving icon">
                        <span class="pl-3">InvestiBox</span>
                    </h2>
                    <p class="pr-0 pr-md-15">
                        Consistently setting aside funds for your investments is a great way to continue building wealth.
                    </p>
                    <p class="pr-0 pr-md-15">
                        Auto-Invest allows you to choose how much money you would like to add to your account on a weekly or
                        monthly basis.
                    </p>
                    <p class="pr-0 pr-md-15">
                        Reach your investing goals with ease
                    </p>
                </div>
                <div class="col-12 col-md-6 feature-image-container">
                    <img src="images/investibox-pic1.png" alt="investibox feature image">
                </div>
            </div>
            <div class="feature-cards mt-16">
                <div class="feature-card d-flex flex-column justify-space-between">
                    <div>
                        <h3>High ROI</h3>
                        <p>
                            Set it and forget it. Get return of investment as high as 10-12% annually on your direct
                            investment of our verified and secured investment options.
                        </p>
                    </div>
                    <div class="">
                        <button plain class="pa-0">Get Started</button>
                    </div>
                </div>
                <div class="feature-card d-flex flex-column justify-space-between">
                    <div class="">
                        <h3>TargetBox</h3>
                        <p>
                            With actively managed portfolios, our industry experts do what they do best, while you focus on
                            what’s important to you.
                        </p>
                    </div>
                    <div class="">
                        <button plain class="pa-0">Get Started</button>
                    </div>
                </div>
                <div class="feature-card d-flex flex-column justify-space-between">
                    <div class="">
                        <h3>Themed Portfolios</h3>
                        <p>
                            With our diverse options and portfolio, you can choose to invest in Agriculture, Transportation,
                            Tech, Real Estate, Oil and Gas, Education, etc. There’s no panic buying or selling of our listed
                            options as the market fluctuates.
                        </p>
                    </div>
                    <div class="">
                        <button plain class="pa-0">Get Started</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- loan section -->
        <section class="feature-type  loan" id="loan">
            <div class="row feature">
                <div class="col-12 col-md-6 feature-intro">
                    <h2 class="d-flex align-center mb-4">
                        <img src="images/icons/loan.png" width="50" alt="saving icon">
                        <span class="pl-3">Loan Facility</span>
                    </h2>
                    <p class="pr-0 pr-md-15">
                        We understand that sometimes life throws unexpected financial challenges your way and that's where
                        we come in.
                    </p>
                    <p class="pr-0 pr-md-15">
                        Our process is simple and straightforward - all you have to do is fill out the form
                        and within minutes. <br>
                        Don't let financial stress hold you back any longer. Apply now and get the financial support you
                        need.
                    </p>
                </div>
                <div class="col-12 col-md-6 feature-image-container">
                    <img src="images/feature-loan.png" alt="investibox feature image">
                </div>
            </div>
            <div class="feature-cards mt-16">
                <div class="feature-card d-flex flex-column justify-space-between">
                    <div>
                        <h3>Flexible Repayment</h3>
                        <p>
                            Your Loan renewal is around the corner and so is a better rate. SavingsBox Loan saves you
                            thousands, and with a fully digital process—you can count on convenience.
                        </p>
                    </div>
                    <div class="">
                        <button plain class="pa-0">Get Started</button>
                    </div>
                </div>
                <div class="feature-card d-flex flex-column justify-space-between">
                    <div class="">
                        <h3>Low rates, low stress</h3>
                        <p>
                            We work with multiple lenders to find your best rate. No surprises. No hidden fees. No
                            obligations.
                        </p>
                    </div>
                    <div class="">
                        <button plain class="pa-0">Get Started</button>
                    </div>
                </div>
                <div class="feature-card d-flex flex-column justify-space-between">
                    <div class="">
                        <h3>Secured Payment</h3>
                        <p>
                            This is a general savings plan that allows users to save based on their preferences. The user
                            decides how long they want to save for, how much they want to save and how frequent they want to
                            be making payments.
                        </p>
                    </div>
                    <div class="">
                        <button plain class="pa-0">Get Started</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="loan"></section>
        <section class="community">
            <Community />
        </section>
    </div>
</template>
<script>
import animate from '~/mixins/animate.js';

export default {
    layout: 'landing',
    mixins: [animate],
    mounted() {
        // animation for features page
        this.slideY('.intro-text', 100);
        this.slideX('.transfer', -200);
        this.slideY('.virtual', 100);
        this.slideX('.payment');
        this.slideY('.saving', 200);
        this.slideY('.jollification', 200);
        this.slideY('.investibox', 200);
        this.slideY('.loan', 200);
        this.scale('.community');
    },
}
</script>
<style lang="scss" scoped>
section {
    max-width: 100%;
    overflow: hidden;
}

button {
    color: var(--primary-color);
    font-size: 1.8rem !important;
    text-transform: initial;
    font-weight: 600;
}

h3+p {
    font-size: 1.6rem;
}

.feature-intro {
    p {
        font-size: 2.0rem;
        line-height: 2.9rem;
    }
}


h2,
h3 {
    font-weight: 600;
}

h2 {
    color: #000831;
    font-size: 5rem;
    line-height: 6.8rem;
}

h3 {
    color: #333940;
    font-size: 3rem;
    line-height: 6rem;
    letter-spacing: -0.015em;
}

p {
    color: #666B70;
}

// intro
section.intro {
    padding: 7rem var(--landing-x-padding) 0rem;


    div.intro-text {
        h1 {
            font-size: 6rem;
            font-weight: 700;
            line-height: 6rem;
        }

        p {
            font-size: 2.2rem;
            font-weight: 500;
            line-height: 3.4rem;
        }

        padding: 0rem 16rem;
    }

    div.feature-cards-container {
        margin-top: 7.6rem;

        div.feature-card {

            h2,
            p {
                color: white;
            }

            padding: 3.9rem;
            border-radius: 1rem;
            min-height: 36.6rem;

            img {
                max-width: 5.8rem;
                max-height: 6.3rem;
            }

            h2 {
                padding: 1.8rem 0rem;
                font-weight: 600;
                font-size: 3rem;
                line-height: 3.5rem;
            }

            p {
                font-size: 2rem;
                line-height: 2.6rem;
            }

            &.transfer {
                background-color: var(--primary-color);

            }

            &.virtual {
                background-color: var(--green);

            }

            &.payment {

                h2,
                p {
                    color: #333940;
                }

                background: #E7EDFF;
            }
        }
    }
}

// saving section
section.feature-type {
    background: #F4F7FF;
    padding: 4.7rem 5.1rem;
    border-radius: 2rem;
    margin: 8.9rem var(--landing-x-padding) 0rem;

    div.feature {
        h2 {}


        div.feature-image-container {
            overflow: hidden;

            img {
                max-width: 100%;
            }
        }
    }

    div.feature-cards {
        display: grid;
        grid-template-columns: repeat(3, auto);
        gap: 5rem;

        .v-btn {
            color: darken($color: #4169E1, $amount: 10%);
            font-size: 1.8rem !important;
            text-transform: initial;
        }
    }

    div.feature-card {
        // border: 1px solid gray;

        h3 {
            line-height: 3rem;
            margin-bottom: 2.1rem;
        }

        p {
            // padding-right: 1.5rem;
        }

        padding-right: 1rem;
    }

    &.investibox {
        background-color: #fff;
    }

    &.loan {
        background: linear-gradient(243.7deg, #4169E1 -1.5%, #000831 101.6%);

        h2,
        h3,
        p {
            color: white;
        }

        h3+p {
            color: #D0D0D0;
            font-size: 1.6rem;
        }


        button {
            color: #fff;
            font-size: 1.8rem !important;
            text-transform: initial;
            font-weight: 600;
        }
    }
}

// jollification 
section.jollification {
    background-color: var(--green);
    color: white;
    margin: 6rem var(--landing-x-padding) 0rem;
    padding: 4.7rem 5.1rem;
    border-radius: 2rem;

    h2,
    h3,
    p {
        color: white;
    }

    div.feature {
        h2 {}

        h3+p {
            font-size: 1.6rem;
        }

        div.feature-image-container {
            overflow: hidden;

            img {
                max-width: 100%;
            }
        }
    }

    div.feature-cards {

        .v-btn {
            color: darken($color: #4169E1, $amount: 10%);
            font-size: 1.8rem !important;
            text-transform: initial;
        }
    }

    div.feature-card {
        p {
            padding-right: 1.5rem;
        }

        padding-right: 1rem;
    }
}

// community
section.community {
    margin-top: 8.9rem;
}


@media screen and (max-width: 800px) {

    h2 {
        font-size: 5rem;
        line-height: 6.8rem;
    }

    h3 {
        color: #333940;
        font-size: 3rem;
        line-height: 3.6rem;
        letter-spacing: -0.015em;
    }

    .feature-intro {
        p {
            font-size: 1.6rem;
            line-height: 2.9rem;
        }
    }

    h3 {
        font-size: 2.5rem;
    }

    h3+p {
        font-size: 1.4rem;
    }

    p {
        color: #666B70;
    }

    section.intro {
        padding: 7rem var(--landing-x-padding) 0rem;


        div.intro-text {
            h1 {
                font-size: 3.2rem;
                line-height: 3.6rem;
            }

            p {
                font-size: 2.2rem;
                font-weight: 500;
                line-height: 3.4rem;
            }

            padding: 0rem 1rem;
        }

        div.feature-cards-container {
            margin-top: 7.6rem;

            div.feature-card {

                h2,
                p {
                    color: white;
                }

                padding: 3.9rem;
                border-radius: 1rem;
                min-height: 36.6rem;

                img {
                    max-width: 5.8rem;
                    max-height: 6.3rem;
                }

                h2 {
                    padding: 1.8rem 0rem;
                    font-weight: 600;
                    font-size: 3rem;
                    line-height: 3.5rem;
                }

                p {
                    font-size: 2rem;
                    line-height: 2.6rem;
                }

                &.transfer {
                    background-color: var(--primary-color);

                }

                &.virtual {
                    background-color: var(--green);

                }

                &.payment {

                    h2,
                    p {
                        color: #333940;
                    }

                    background: #E7EDFF;
                }
            }
        }
    }

    // saving section
    section.feature-type {
        background: #F4F7FF;
        padding: 1.8rem 2.6rem;
        border-radius: 2rem;
        margin: 8.9rem var(--landing-x-padding) 0rem;

        div.feature {
            h2 {
                font-size: 3rem;
            }


            div.feature-image-container {
                overflow: hidden;

                img {
                    max-width: 100%;
                }
            }
        }

        div.feature-cards {
            display: grid;
            // grid-template-columns: repeat(3, auto);
            grid-template-columns: repeat(auto-fit, minmax(29.1rem, 1fr));
            ;
            gap: 5rem;

            .v-btn {
                color: darken($color: #4169E1, $amount: 10%);
                font-size: 1.8rem !important;
                text-transform: initial;
            }
        }

        div.feature-card {
            h3 {
                margin-bottom: 1.1rem;
            }

            p {
                // padding-right: 1.5rem;
            }

            padding-right: 1rem;
        }
    }

    // jollification 
    section.jollification {
        background-color: var(--green);
        color: white;
        margin: 6rem var(--landing-x-padding) 0rem;
        padding: 1.8rem 2.6rem;
        border-radius: 2rem;

        h2 {
            font-size: 3rem;
        }

        h2,
        h3,
        p {
            color: white;
        }

        div.feature {
            h2 {}


            div.feature-image-container {
                overflow: hidden;

                img {
                    max-width: 100%;
                }
            }
        }

        div.feature-cards {

            .v-btn {
                color: darken($color: #4169E1, $amount: 10%);
                font-size: 1.8rem !important;
                text-transform: initial;
            }
        }

        div.feature-card {
            p {
                padding-right: 1.5rem;
            }

            padding-right: 1rem;
        }
    }

    // community
    section.community {
        margin-top: 8.9rem;
    }
}
</style>