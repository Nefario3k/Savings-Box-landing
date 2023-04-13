<template>
  <div>
    <div>
      <BreadCrumb :items="[{ text: 'Home', disabled: false, }, { text: 'Saving', disabled: true, }]"></BreadCrumb>
    </div>
    <section class="intro row">
      <div class="col-12 col-md-6 text-center text-md-left">
        <h2 class="my-8 px-4 px-md-0">Keep your money and earn 2.25% interest</h2>
        <p>
          At SavingsBox, you don’t need to wait for the next day to get answers.
          We’re 100% digital and offer you multiple ways to connect with us.
        </p>
        <p>
          Interest is calculated daily on the total closing balance and paid
          monthly. Rates are per annum and subject to change without notice.
        </p>
        <button class="l-btn mt-11 mt-md-13 mb-13 mb-md-0">Open Account</button>
      </div>
      <div class="col-12 col-md-6 pl-md-12">
        <div class="d-flex first-left text-center">
          <div class="relative">
            <span class="absolute"></span>
          </div>
          <img class="flex-grow-1" src="/images/saving-pic1.png" alt="contact page image" />
        </div>
      </div>
    </section>

    <!-- automated -->
    <section class="automated">
      <div class="row">
        <div class="col-12 col-md-6 order-1 order-md-0">
          <img src="/images/saving-pic2.png" alt="saving image" />
        </div>
        <div class="col-12 col-md-6 text-center text-md-left">
          <h2>Automated Savings payments</h2>
          <p class="mr-md-10">
            Make life easier with scheduled payments. Conveniently pay off your
            set savings plan and other bills all from one place.
          </p>
          <button class="l-btn mt-7 mb-16 mb-md-0 mt-md-13">Get Started</button>
        </div>
      </div>
    </section>

    <!-- plans -->
    <section class="plans">
      <h2 class="text-center mb-12">Available SavingsBox Plans</h2>
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="plan-card autobox d-flex flex-column justify-space-between">
            <div class="">
              <img src="/images/icons/autobox.png" alt="autobox image" />
              <h3>AutoBox</h3>
              <p>
                This is a general savings plan that allows users to save based on
                their preferences. The user decides how long they want to save
                for, how much they want to save and how frequent they want to be
                making payments.
              </p>
            </div>
            <div class=""><button class="saving-btn">Get Started</button></div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="plan-card target-box d-flex flex-column justify-space-between">
            <div class="">
              <img src="/images/icons/targetbox.png" alt="targetbox image" />
              <h3>TargetBox</h3>
              <p>
                This is a general savings plan that allows users to save based on
                their preferences. The user decides how long they want to save
                for, how much they want to save and how frequent they want to be
                making payments.
              </p>
            </div>
            <div class=""><button class="saving-btn">Get Started</button></div>
          </div>
        </div>
      </div>
      <div class="row mt-md-16">
        <div class="col-12 col-md-6">
          <div class="plan-card simple-box d-flex flex-column justify-space-between">
            <div class="">
              <img src="/images/icons/simplebox.png" alt="simplebox image" />
              <h3>SimpleBox</h3>
              <p>
                This is a general savings plan that allows users to save based on
                their preferences. The user decides how long they want to save
                for, how much they want to save and how frequent they want to be
                making payments.
              </p>
            </div>
            <div class=""><button class="saving-btn">Get Started</button></div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="plan-card safe-box d-flex flex-column justify-space-between">
            <div class="">
              <img src="/images/icons/safebox.png" alt="safebox image" />
              <h3>SafeBox</h3>
              <p>
                This is a general savings plan that allows users to save based on
                their preferences. The user decides how long they want to save
                for, how much they want to save and how frequent they want to be
                making payments.
              </p>
            </div>
            <div class=""><button class="saving-btn">Get Started</button></div>
          </div>
        </div>
      </div>
    </section>

    <!-- get app section -->
    <section class="get-app row d-none d-md-flex">
      <div class="col-12 col-md-7 text-center text-md-left">
        <h2>Keep your money and earn more on top</h2>
        <p class="mt-7 mt-md-11">
          Get one of the highest non-introductory interest rates in Nigeria.
          With interest calculated daily and paid out monthly, you can watch
          your interest rack up right from your SavingsBox app.
        </p>

        <div class="store-images mt-14">
          <img src="/images/appstore.png" alt="apple app store icon" />
          <img src="/images/playstore.png" alt="google app store icon" class="ml-3" />
        </div>
        <div class="new-users pt-13">
          <latest-users></latest-users>
        </div>
      </div>
      <div class="col-12 col-md-5 text-center relative">
        <div class="outer-circle d-flex justify-center align-center">
          <div></div>
        </div>
        <img class="get-app relative" src="/images/get-app.png" alt="get app image" />
      </div>
    </section>
    <section class="partners">
      <Partners />
    </section>
  </div>
</template>
<script>
import animate from "~/mixins/animate.js";

export default {
  mixins: [animate],
  mounted() {
    // animation for saving page
    this.slideY(".intro", 100);
    this.scale(".automated");
    this.slideX(".autobox", -200);
    this.slideX(".target-box");
    this.slideX(".simple-box", -200);
    this.slideX(".safe-box");
    this.scale(".get-app");
  },
};
</script>
<style lang="scss" scoped>
@import url('@/components/styles/landing-generics.scss');

// intro section
section.intro {
  padding: 5rem var(--landing-x-padding) 9rem;

  h2+p {
    font-size: 1.8rem;
  }

  div.first-left {
    overflow: hidden;

    div {
      max-width: 27.6rem;
      left: 4%;
      width: 20%;

      span {
        // margin-left: -14rem;
        display: block;
        width: 27.6rem;
        height: 27.6rem;
        background-color: var(--green);
        border-radius: 100%;
        right: -1.5rem;
        top: 6rem;
      }
    }

    img {
      max-height: 41.8rem;
    }
  }
}

// automated
section.automated {
  padding: 7.6rem var(--landing-x-padding) 5.6rem;

  h2 {
    font-size: 5rem;
  }

  h2+p {
    font-size: 2rem;
    line-height: 3.4rem;
    font-weight: 500;
    margin-top: 2.1rem;
  }
}

// plans
section.plans {
  padding: 5.3rem var(--landing-x-padding) 11.4rem;

  h2 {
    font-size: 4.8rem;
  }

  div.plan-card {
    padding: 4.9rem 5.3rem;
    min-height: 54rem;
    border-radius: 1rem;
    background-image: url('/images/group-3.svg');

    img {}

    button {
      background-color: var(--primary-color);
      color: white;
      line-height: 3.7rem;
      font-size: 1.8rem;
      font-weight: 600;
      padding: 1.1rem 6.45rem;
      border-radius: 55.6rem;

      &:hover {
        background-color: darken($color: #4169E1, $amount: 10%);
      }
    }

    h3 {
      margin: 2.7rem 0rem 2rem;
      font-weight: 500;
      font-size: 3rem;
    }

    p {
      font-size: 1.8rem;
    }

    &.autobox,
    &.safe-box {
      background-color: #d7e1ff;
    }

    &.target-box,
    &.simple-box {

      h3+p,
      h3 {
        color: white;
      }
    }

    &.target-box {
      background-color: var(--green);
    }

    &.simple-box {
      // color: white;
      background-color: var(--primary-color);

      button {
        background-color: #fff;
        color: var(--primary-color);

        &:hover {
          background-color: darken($color: #fff, $amount: 10%);
        }
      }
    }
  }
}

// get app section
section.get-app {
  background-color: #f4f7ff;
  padding: 7.7rem var(--landing-x-padding);

  h2 {
    font-size: 6rem;
    line-height: 6.4rem;
    font-weight: 600;
    color: #000810;
  }

  p {
    color: #666b70;
  }

  div.store-images {
    img {
      max-width: 21rem;
    }
  }

  img.get-app {
    max-width: 30.3rem;
    // z-index: 8;
  }

  div.outer-circle {
    width: 38rem;
    height: 38rem;
    background: conic-gradient(from 180deg at 50% 50%,
        rgba(97, 202, 97, 0.5) 0deg,
        rgba(65, 105, 225, 0.5) 360deg);
    border-radius: 50%;
    position: absolute;
    bottom: 10%;
    left: 10%;
    // z-index: 1;

    div {
      width: 85%;
      height: 85%;
      border-radius: 50%;
      background: conic-gradient(from 180deg at 50% 50%,
          rgba(97, 202, 97, 0.5) 0deg,
          rgba(65, 105, 225, 0.5) 360deg);
    }
  }
}

// partners
section.partners {
  // margin-top: 13.1rem;
}

@media screen and (max-width: 800px) {

  // intro section
  section.intro {
    padding: 5rem var(--landing-x-padding) 9rem;

    h2+p {
      font-size: 1.8rem;
    }

    button {
      width: 100%;
    }

    div.first-left {

      div {
        max-width: 27.6rem;
        width: 20%;
        left: 6%;

        span {
          // margin-left: -14rem;
          // width: 12.5rem;
          width: 43vw;
          height: calc(80vw/3 * 2);
          // height: 12.5rem;
          border-radius: 100%;
          right: -1.5rem;
          top: 34%;
        }
      }

      img {
        max-height: 41.8rem;
      }
    }
  }

  // automated
  section.automated {
    padding: 7.6rem var(--landing-x-padding) 5.6rem;

    h2 {
      font-size: 3rem;
    }

    h2+p {
      font-size: 2rem;
      line-height: 3.4rem;
      font-weight: 500;
      margin-top: 2.1rem;
    }

    button {
      width: 100%;
    }
  }

  // plans
  section.plans {
    padding: 5.3rem var(--landing-x-padding) 0.4rem;

    h2 {
      font-size: 2.8rem;
    }

    div.plan-card {
      padding: 2rem;
      min-height: 44rem;
      border-radius: 1rem;

      img {}

      h3 {
        margin: 2.7rem 0rem 2rem;
        font-weight: 500;
        font-size: 3rem;
      }

      p {
        font-size: 1.8rem;
      }

      &.autobox,
      &.safe-box {
        background-color: #d7e1ff;
      }

      &.target-box,
      &.simple-box {
        h3+p {
          color: white;
        }
      }

      &.target-box {
        background-color: var(--green);
      }

      &.simple-box {
        color: white;
        background-color: var(--primary-color);
      }
    }
  }

  // get app section
  section.get-app {
    background-color: #f4f7ff;
    padding: 7.7rem var(--landing-x-padding);

    h2 {
      font-size: 3rem;
      line-height: 3.4rem;
      font-weight: 600;
      color: #000810;
    }

    p {
      color: #666b70;
    }

    div.store-images {
      img {
        max-width: 15rem;
      }
    }

    img.get-app {
      max-width: 30.3rem;
      // z-index: 8;
    }

    div.outer-circle {
      width: 38rem;
      height: 38rem;
      background: conic-gradient(from 180deg at 50% 50%,
          rgba(97, 202, 97, 0.5) 0deg,
          rgba(65, 105, 225, 0.5) 360deg);
      border-radius: 50%;
      position: absolute;
      bottom: 10%;
      left: 10%;
      // z-index: 1;

      div {
        width: 85%;
        height: 85%;
        border-radius: 50%;
        background: conic-gradient(from 180deg at 50% 50%,
            rgba(97, 202, 97, 0.5) 0deg,
            rgba(65, 105, 225, 0.5) 360deg);
      }
    }
  }

  // partners
  section.partners {
    margin-top: 6.1rem;
  }
}
</style>