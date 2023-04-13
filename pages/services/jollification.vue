<template>
  <div>
    <div>
      <BreadCrumb :items="[{ text: 'Home', disabled: false, }, { text: 'Jollification', disabled: true, }]"></BreadCrumb>
    </div>
    <section class="intro row">
      <div class="col-12 col-md-6 text-center text-md-left">
        <h2 class="my-md-8">
          Save to spend on seasonal food and household items
        </h2>
        <p class="mt-4 mt-md-0">
          With Jollification plans, you can save towards the yuletide season
          with just a little amount you get great stuff like food items,
          beverages, etc and get them delivered to you.
        </p>
        <button class="l-btn mt-13">Start Jollificating</button>
      </div>
      <div class="col-12 col-md-6 pl-12">
        <div class="d-flex first-left">
          <div class="relative">
            <span class="relative"></span>
          </div>
          <img class="flex-grow-1" src="/images/jolli-pic1.png" alt="contact page image" />
        </div>
      </div>
    </section>

    <!-- jolli journey -->
    <section class="jolli-journey">
      <h2 class="text-center mt-4 my-md-4">Start your Jollification Journey</h2>
      <div class="row mt-md-10">
        <div class="col-12 col-md-6 px-8 py-12 text-center order-1 order-md-0">
          <img src="/images/jolli-pic2.png" alt="jollification image" />
        </div>
        <div class="col-12 col-md-6 px-8 py-12">
          <h3>Choose a Jollification Plan</h3>
          <p>
            We have different plans you can join that can make it easier for you
            to save in order for you to jollificate at the end of the year
            irrespective of the inflation of food prices, Electronics and other
            valuable items.
          </p>
          <h3>Customize plan to your Budget</h3>
          <p>
            Once plan has been selected, you can edit and customize your plan by
            removing or adding to the existing items benefits attached to each
            plan. Enter your personal information including your address and
            phone numbers
          </p>
          <h3>Safe & Secure Payment</h3>
          <p>
            Savings box uses the highest levels of Internet Security, and it is
            secured by 256 bits SSL security encryption to ensure that your
            information is completely protected from fraud.
          </p>
        </div>
      </div>
    </section>
    <!-- seasons section -->
    <section class="seasons">
      <div class="row">
        <div class="col-12 col-md-6 mytime text-center text-md-left">
          <h2>Grace up for yelitude seasons,</h2>
          <p>
            Jollification is a save to spend plan and its here to help you edge
            against seasonal food and household items with high prices during
            their off peak period. By committing to monthly savings on items
            like bag of rice, palm oil, groundnut oil, refrigerator etc. We then
            deliver to you all of your selected items at the end of your savings
            tenure usually one year
          </p>
          <div class="row text-center justify-start mt-9">
            <div class="col-12 col-md-4">
              <h4>4.8</h4>
              <p>High Interest</p>
            </div>
            <div class="col-12 col-md-4">
              <h4>58+</h4>
              <p>Jollification Plans</p>
            </div>
            <div class="col-12 col-md-4">
              <h4>2,083+</h4>
              <p>Verified Members</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 text-center right">
          <div class="relative">
            <div class="green-box absolute"></div>
            <img src="/images/jolli-pic3.png" class="relative" alt="jollification image" />
          </div>
        </div>
      </div>
    </section>

    <!-- kickstart -->
    <section class="kickstart">
      <div class="row">
        <div class="col-12 col-md-6 order-1 order-md-0 mt-13 mt-md-0">
          <img src="/images/jolli-pic4.png" class="animated" alt="jollification image" />
        </div>
        <div class="col-12 col-md-6 px-3 px-md-12 text-center text-md-left kickstart-right">
          <h2>Kick Start your jollification journey</h2>
          <p class="mt-5">
            This account helps you save towards the yuletide season with just a
            little amount you get great stuff like food items, beverages, etc
            delivered to you. We have different plans you can join that can make
            it easier for you to save in order for you to jollificate at the end
            of the year irrespective of the inflation of food prices.
          </p>
          <div class="app-icons mt-6">
            <img src="/images/playstore.png" alt="playstore image" />
            <img class="ml-4" src="/images/appstore.png" alt="appstore image" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import animate from "~/mixins/animate.js";

export default {
  mixins: [animate],

  mounted() {
    // animation for jollification
    this.slideY(".intro", 100);
    this.scale(".jolli-journey");
    this.slideY(".seasons", 100);

    this.$gsap.from(".animated", {
      x: -94,
      rotate: 45,
      scale: 0.001,
      opacity: 0,
      duration: 0.75,
      ease: "Power1.easeInOut",
      scrollTrigger: {
        trigger: ".animated",
        // pin: true,
        // end: 'top',
        end: "top 90%",
        scrub: 0.5,
      },
    });
    this.slideX(".kickstart-right", 550);
  },
};
</script>
<style lang="scss" scoped>
@import url('@/components/styles/landing-generics.scss');

// intro section
section.intro {
  padding: 5rem var(--landing-x-padding) 0rem;

  h2+p {
    font-size: 1.8rem;
  }

  div.first-left {
    div {
      max-width: 27.6rem;
      overflow: hidden;

      span {
        // margin-left: -14rem;
        display: block;
        width: 27.6rem;
        height: 27.6rem;
        background-color: var(--green);
        border-radius: 100%;
        right: 13.5rem;
        top: 6rem;
      }
    }

    img {
      max-height: 41.8rem;
      max-width: 100%;
    }
  }
}

// jolli journey
section.jolli-journey {
  padding: 7.5rem var(--landing-x-padding) 6.6rem;

  h3 {
    font-size: 2.5rem;
    font-weight: 600;
    color: #000831;
    line-height: 2.4rem;
  }

  p {
    font-size: 1.8rem;
    color: #666b70;
    line-height: 2.4rem;
  }

  p+h3 {
    margin-top: 3rem;
  }
}

// seasons
section.seasons {
  padding: 8.1rem var(--landing-x-padding) 7rem;

  h2 {
    font-size: 5rem;
  }

  h2+p {
    margin-top: 3rem;
    line-height: 3rem;
  }

  h4 {
    font-size: 3.5rem;
    color: #000831;
  }

  .right {
    div.green-box {
      height: 24.3rem;
      width: 100%;
      background-color: var(--green);
      top: calc(50% - 12rem);
      max-width: 30.4rem;
      left: calc(50% - 15rem);
    }
  }
}

// kickstart
section.kickstart {
  padding: 7.2rem var(--landing-x-padding);

  img {
    max-width: 100%;
  }

  h2 {
    font-size: 4.8rem;
    line-height: 5.6rem;
  }

  h2+p {
    font-size: 1.8rem;
    line-height: 2.8rem;
  }

  div.app-icons {
    img {
      max-width: 18.8rem;
    }
  }
}

@media screen and (max-width: 800px) {
  section.intro {
    h2+p {
      font-size: 1.8rem;
    }

    div.first-left {
      div {
        max-width: 27.6rem;
        overflow: hidden;
        margin-left: -4rem;

        span {
          // margin-left: -14rem;
          display: block;
          width: 12.2rem;
          height: 12.5rem;
          background-color: var(--green);
          border-radius: 100%;
          left: -95%;
          top: 6rem;
        }
      }

      img {
        // max-height: 41.8rem;
        max-width: 100%;
      }
    }
  }

  // jolli journey
  section.jolli-journey {
    padding: 7.5rem var(--landing-x-padding) 6.6rem;

    img {
      max-width: 100%;
    }

    h3 {
      font-size: 2.5rem;
      font-weight: 600;
      color: #000831;
      line-height: 2.4rem;
    }

    p {
      font-size: 1.8rem;
      color: #666b70;
      line-height: 2.4rem;
    }

    p+h3 {
      margin-top: 3rem;
    }
  }

  // seasons
  section.seasons {
    padding: 1.1rem var(--landing-x-padding) 7rem;

    h2 {
      font-size: 3rem;
      line-height: 3.6rem;
    }

    h2+p {
      margin-top: 3rem;
      line-height: 3rem;
    }

    h4 {
      font-size: 3.5rem;
      color: #000831;
    }

    .right {
      div.green-box {
        height: 24.3rem;
        width: 100%;
        background-color: var(--green);
        top: calc(50% - 12rem);
        max-width: 30.4rem;
        left: calc(50% - 15rem);
      }
    }
  }

  // kickstart
  section.kickstart {
    padding: 7.2rem var(--landing-x-padding);

    img {
      max-width: 100%;
    }

    h2 {
      font-size: 3rem;
      line-height: 4rem;
    }

    h2+p {
      font-size: 1.8rem;
      line-height: 2.8rem;
    }

    div.app-icons {
      img {
        max-width: 15rem;
      }
    }
  }
}
</style>