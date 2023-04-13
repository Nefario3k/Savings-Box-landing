<template>
  <div>
    <div>
      <BreadCrumb :items="[{ text: 'Home', disabled: false, }, { text: 'Investibox', disabled: true, }]"></BreadCrumb>
    </div>
    <section class="intro row">
      <div class="col-12 col-md-6 text-center text-md-left">
        <h2 class="my-8">Invest with and Build your Wealth</h2>
        <p>
          As part of our many investment option is the Fixed deposit box which
          provides investors a higher rate of interest than a regular savings
          account, until the given maturity date. Savingsbox allows users to
          earn more on their savings by investing in low-medium risk, fixed
          deposit and also 3,6,9 and 12 months interest investment
          opportunities.
        </p>
        <p>
          All investments alternatives aggregated on Savingsbox have been
          properly evaluated for insurance against loss.
        </p>
        <button class="l-btn mt-13">Open Account</button>
      </div>
      <div class="col-12 col-md-6 pl-md-12 mt-11">
        <div class="first-left relative">
          <img class="relative" src="/images/investibox-pic1.png" alt="investibox page image" />
          <div class="absolute">
            <span class="relative"></span>
          </div>
        </div>
      </div>
    </section>

    <!-- categories -->
    <section class="categories relative">
      <h2 class="mb-8 text-center text-md-left">
        Investment <br class="d-md-none" />
        Categories
      </h2>
      <div class="d-flex justify-space-between overflow-hidden pa-0" style="left: 0px">
        <v-slide-group multiple :show-arrows="false">
          <v-slide-item>
            <button class="l-btn-outline">Agriculture</button>
          </v-slide-item>
          <v-slide-item>
            <button class="l-btn-outline mx-8">Real Estate</button>
          </v-slide-item>
          <v-slide-item>
            <button class="l-btn-outline">Transportation</button>
          </v-slide-item>
          <v-slide-item>
            <button class="l-btn-outline mx-8">Oil & Gas</button>
          </v-slide-item>
          <v-slide-item>
            <button class="l-btn-outline">Agriculture</button>
          </v-slide-item>
        </v-slide-group>
      </div>
      <div class="row p-2">
        <div class="col-12 col-md-6 order-1 order-md-0 text-center">
          <img src="/images/investibox-pic2.png" alt="investibox image" />
        </div>
        <div class="col-12 col-md-6 text-center text-md-left">
          <h2>Level up your investment strategy</h2>
          <p>
            Make life easier with scheduled payments. Conveniently pay off your
            set savings plan and other bills all from one place.
          </p>
          <button class="l-btn mt-15 mb-16 mb-md-0">Get Started</button>
        </div>
      </div>
    </section>

    <!-- step up -->
    <section class="step-up">
      <div class="row">
        <div class="col-12 col-md-6 text-center text-md-left">
          <h2>Step up the game</h2>
          <p class="mt-9">
            Make life easier with scheduled payments. Conveniently pay off your
            set savings plan and other bills all from one place.
          </p>
          <div class="row stats-container text-center justify-start mb-16 mb-md-0" style="">
            <div class="col-12 col-md-4">
              <h4>4.8</h4>
              <p>High Interest</p>
            </div>
            <div class="col-12 col-md-4">
              <h4>58+</h4>
              <p>Jollification Plans</p>
            </div>
            <div class="col-12 col-md-4">
              <h4>2,083</h4>
              <p>Verified Members</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 text-center right">
          <div class="relative">
            <div class="green-box absolute"></div>
            <img src="/images/jolli-pic3.png" class="relative" alt="investibox image" />
            <div class="graph absolute">
              <img src="/images/investibox-pic3.png" alt="graph" />
            </div>
          </div>
        </div>
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
    this.scale(".categories");
    this.slideY(".step-up", 150);
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
    div {
      max-width: 27.6rem;
      right: 5rem;
      bottom: -5rem;
      overflow: hidden;
      height: 12rem;

      span {
        // margin-left: -14rem;
        display: block;
        width: 27.6rem;
        height: 27.6rem;
        background-color: var(--green);
        border-radius: 100%;
      }
    }

    img {
      max-height: 41.8rem;
    }
  }
}

// categories
section.categories {
  padding: 5.6rem var(--landing-x-padding);

  div.row {
    margin-top: 11.3rem;
  }

  h2 {
    font-size: 5rem;
  }

  p {
    margin-top: 2.1rem;
    font-size: 2rem;
    line-height: 3.4rem;
  }
}

// step up
section.step-up {
  padding: 8.1rem var(--landing-x-padding);

  h2 {
    font-size: 5rem;
  }

  h2+p {
    font-size: 2rem;
    font-weight: 500;
    line-height: 3.4rem;
  }

  h4 {
    font-size: 3.5rem;
    color: #000831;
  }

  div.stats-container {
    margin-top: 8rem;
  }

  div.right {
    div.green-box {
      height: 24.3rem;
      width: 100%;
      background-color: var(--green);
      top: calc(50% - 12rem);
      max-width: 30.4rem;
      left: calc(50% - 15rem);
    }

    div.graph {
      padding: 2.1rem;
      border-radius: 2rem;
      bottom: calc(40% - 10rem);
      background-color: #fff;
      box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.08);
      border-radius: 20px;
      max-width: 27rem;

      img {
        max-width: 100%;
      }
    }
  }
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
        right: 5rem;
        bottom: -3rem;
        overflow: hidden;
        height: 9rem;

        span {
          // margin-left: -14rem;
          display: block;
          width: 18.6rem;
          height: 18.6rem;
          background-color: var(--green);
          border-radius: 100%;
        }
      }

      img {
        max-height: 41.8rem;
      }
    }
  }

  // categories
  section.categories {
    padding: 5.6rem var(--landing-x-padding);

    div.row {
      margin-top: 11.3rem;
    }

    h2 {
      font-size: 3rem;
    }

    p {
      margin-top: 2.1rem;
      font-size: 2rem;
      line-height: 3.4rem;
    }

    button {
      width: 100%;
    }
  }

  // step up
  section.step-up {
    padding: 6.1rem var(--landing-x-padding);

    h2 {
      font-size: 3rem;
    }

    h2+p {
      font-size: 2rem;
      font-weight: 500;
      line-height: 3.4rem;
    }

    h4 {
      font-size: 3.5rem;
      color: #000831;
    }

    div.stats-container {
      margin-top: 4rem;
    }

    div.right {
      div.green-box {
        height: 24.3rem;
        width: 100%;
        background-color: var(--green);
        top: calc(50% - 12rem);
        max-width: 30.4rem;
        left: calc(50% - 15rem);
      }

      div.graph {
        padding: 2.1rem;
        border-radius: 2rem;
        bottom: calc(40% - 10rem);
        background-color: #fff;
        box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.08);
        border-radius: 20px;
        max-width: 27rem;

        img {
          max-width: 100%;
        }
      }
    }
  }
}
</style>