<template>
  <div class="">
    <!-- welcome section -->
    <section class="intro row py-15">
      <div class="col-12 col-md-6">
        <h1 class="text-center text-md-left px-6 px-md-0">Your personal finance made easier</h1>
        <p class="my-10 text-center text-md-left">
          With our Savings, Investment, Loan, and Jollification options, you can easily save money, borrow funds, Save up
          for a festive packages and items and invest in your future.
        </p>
        <div class="store-images text-center text-md-left">
          <img src="images/appstore.png" alt="apple app store icon">
          <img src="images/playstore.png" class="ml-md-5" alt="google app store icon">
        </div>
        <!-- <div class="new-users" style="">
          <img v-for="(item, index) in 4" :key="index" src="images/profile-image.png" width="32px" alt="latest user">
          <span>300 New Users</span>
        </div> -->
        <div class="text-center text-md-left">
          <LatestUsers class="mt-10" />
        </div>
      </div>
      <div class="col-12 col-md-6 intro-image mt-13 mt-md-0">
        <div class="black-circle"></div>
        <div class="green-rectangle"></div>
        <img src="images/intro.png" alt="intro image">
      </div>
    </section>

    <!-- welcome section -->
    <section class="welcome row">
      <h3 class="">Welcome to Savingbox</h3>
      <p class="my-9 ">
        Are you tired of feeling like you're just barely getting by with your finances?
      </p>
      <p class="">
        Don't miss out on the opportunity to take control of your finances. Sign up now and start enjoying the benefits of
        our Savings, Loan, Jollification and Investment options
      </p>
      <div class="button-group mt-12">
        <button class="get-started-btn">Get Started</button>
        <button class="learn-more-btn ml-0 ml-md-5 mt-5 mt-md-0">Learn More</button>
      </div>
    </section>

    <!-- financial partners -->
    <section class="partners row text-center py-14">
      <h2 class="px-8 px-md-0">Our trusted financial services partners</h2>
      <div class="mt-8 d-flex justify-space-around justify-md-center align-center flex-wrap">
        <img class="partner-image" src="images/partner1.png" alt="partner image">
        <img class="partner-image" src="images/partner2.png" alt="partner image">
        <img class="partner-image mt-4 mt-md-0" src="images/partner3.png" alt="partner image">
      </div>
    </section>

    <!-- services section -->
    <section class="services py-15">
      <div class="row align-center">
        <h2 class="col-12 col-md-5 text-center text-md-left">Your finance made easier and faster</h2>
        <div class="col-2 line d-none d-md-block">
          <hr>
        </div>
        <div class="col-12 col-md-5 text-center text-md-left">
          <p class="heading-p">Don't let your money just sit in a savings account earning minimal interest. </p>
        </div>
      </div>
      <div class="row service-cards-container">
        <div class="service-card relative jollification pt-6 px-10">
          <h2>Jollification</h2>
          <p>
            Our Savings Application is here to help! With our easy-to-use platform, you can set and track your savings
            goals, earn higher interest rates, and get personalized recommendations for how to grow your savings
            faster.
          </p>
          <button class="service-btn mt-9">
            Explore More
            <v-icon>mdi-arrow-top-right</v-icon>
          </button>
          <div class="mt-10 text-right image-container relative">
            <img src="images/jollification-photo.png" alt="image of jollification">
          </div>
          <div class="align-center floating-info jolli">
            <div class="d-flex justify-space-between align-center">
              <div class="">
                <p class=" pa-0 ma-0">December Jolly Items</p>
                <span>3/11 Months</span>
              </div>
              <div class="">
                <p class="border pa-0 ma-0">₦25,000</p>
                <span class="text-right">Weekly</span>
              </div>
            </div>
            <div class="new-users mt-3" style="">
              <img v-for="(item, index) in 4" :key="index" src="images/profile-image.png" width="32px" alt="latest user">
              <span>300 New Users</span>
            </div>
          </div>
        </div>
        <div class="service-card relative saving pt-6 pl-10 pr-5">
          <h2>Savings</h2>
          <p>
            Our Savings Application is here to help! With our easy-to-use platform, you can set and track your savings
            goals, earn higher interest rates, and get personalized recommendations for how to grow your savings faster.
          </p>
          <h4>Available Savings Plan</h4>
          <ul>
            <li>AutoBox</li>
            <li>SimpleBox</li>
            <li>TargetBox</li>
            <li>SafeBox</li>
          </ul>
          <button class="service-btn mt-9">
            Explore More
            <v-icon>mdi-arrow-top-right</v-icon>
          </button>
          <div class="text-right image-container relative" style="margin-top: -8rem;">
            <img src="images/jollification-photo.png" alt="image of jollification">
          </div>
          <div class="align-center floating-info jolli">
            <div class="d-flex justify-space-between align-center">
              <div class="">
                <p class=" pa-0 ma-0">December Jolly Items</p>
                <span>3/11 Months</span>
              </div>
              <div class="">
                <p class="border pa-0 ma-0">₦25,000</p>
                <span class="text-right">Weekly</span>
              </div>
            </div>
            <div class="new-users mt-3" style="">
              <img v-for="(item, index) in 4" :key="index" src="images/profile-image.png" width="32px" alt="latest user">
              <span>300 New Users</span>
            </div>
          </div>
        </div>
        <div class="service-card d-flex flex-column justify-space-between relative investibox" style="padding: 0px;">
          <div class="border pt-6 pl-10 pr-5">
            <h2>Investibox</h2>
            <p>
              Looking to take control of your financial future? Our investment application makes it easy to start
              building
              wealth today. With a simple and intuitive interface, you can easily track and manage your investments from
              anywhere.
            </p>
            <button class="service-btn mt-9">
              Explore More
              <v-icon>mdi-arrow-top-right</v-icon>
            </button>
          </div>
          <div class="text-right image-container relative" style="overflow: hidden;">
            <img class="card-image w-100" src="images/investibox-photo.png" alt="image of jollification">
          </div>
        </div>
        <div class="service-card relative loan " style=" padding: 0px">
          <div class="pt-6 pl-10 pr-5">
            <h2>Loan Facility</h2>
            <p>
              Our Savings Application is here to help! With our easy-to-use platform, you can set and track your savings
              goals, earn higher interest rates, and get personalized recommendations for how to grow your savings faster.
            </p>
            <h4>Loan Offers</h4>
            <ul>
              <li>SMEs Loans</li>
              <li>
                Collateral Loan
                <ul>
                  <li class="collateral-loan">Car for cash loan</li>
                  <li class="collateral-loan">Property for cash loan</li>
                </ul>
              </li>
              <li>IPPS Loan</li>
              <li>Salary Earners Loan</li>
            </ul>
            <button class="service-btn mt-9">
              <span style="color: black">Explore More</span>
              <v-icon>mdi-arrow-top-right</v-icon>
            </button>
          </div>
          <img class="card-image d-none d-md-inline relative" style="right: -10%" src="images/loan-photo.png"
            alt="image of loan">
          <div class="card-image-container pt-8 d-md-none w-100">
            <img class="card-image" src="images/loan-photo2.png" alt="image of loan">
          </div>
        </div>
      </div>
    </section>

    <!-- get app section -->
    <section class="get-app row">
      <div class="col-12 col-md-5 get-app-left text-center relative mt-16 mt-md-0">
        <div class="outer-circle d-flex justify-center align-center">
          <div class="inner-circle"></div>
        </div>
        <img class="get-app relative" src="images/get-app.png" alt="get app image">
      </div>
      <div class="col-12 col-md-7 get-app-right">
        <h2 class="text-center text-md-left">
          Your finance made easier
        </h2>
        <p class="mt-11 text-center text-md-left">
          Don't let your money just sit in a savings account earning minimal interest. Take the next step and start
          growing your wealth with our Savings, Loan and Investment Options. Sign up now and start taking control of your
          financial future!
        </p>

        <div class="store-images mt-14 text-center text-md-left">
          <img src="images/appstore.png" alt="apple app store icon">
          <img src="images/playstore.png" class="ml-md-5" alt="google app store icon">
        </div>
        <div class="new-users pt-13 text-center text-md-left">
          <latest-users></latest-users>
        </div>
      </div>
    </section>

    <!-- how it works -->
    <section class="how-it-works d-none d-md-block">
      <h2>How it works</h2>
      <p>Get a glimpse of how our platform works</p>
      <div class="row mt-11">
        <div class="col ">
          <span class="d-block text-center mb-5">
            <img src="images/create-account.png" width="50" alt="">
          </span>
          <h3>Create an account</h3>
          <p class="px-2">
            With our awesome features all build to guild you towards achieving that great target you have always wanted
            now you can select and start saving
          </p>
        </div>
        <div class="col ">
          <span class="d-block text-center mb-5">
            <img src="images/choose-product.png" width="50" alt="">
          </span>
          <h3>Choose a Product</h3>
          <p class="px-2">
            With our awesome features all build to guild you towards achieving that great target you have always wanted
            now you can select and start saving
          </p>
        </div>
        <div class="col ">
          <span class="d-block text-center mb-5">
            <img src="images/icons/saving.png" width="50" alt="">
          </span>
          <h3>Savings</h3>
          <p class="px-2">
            With our awesome features all build to guild you towards achieving that great target you have always wanted
            now you can select and start saving
          </p>
        </div>
        <div class="col ">
          <span class="d-block text-center mb-5">
            <img src="images/withdraw.png" width="50" alt="">
          </span>
          <h3>Withdrawal</h3>
          <p class="px-2">
            With our awesome features all build to guild you towards achieving that great target you have always wanted
            now you can select and start saving
          </p>
        </div>
      </div>
    </section>

    <!-- community section -->
    <section class="community">
      <community />
    </section>

    <section class="user-of-the-month row">
      <div class="col-12 col-md-6">
        <h2>Meet the User of the month!</h2>
        <p class="mt-10">
          Every month, we shine a spotlight on one or two SavingsBox users, asking them questions about their savings
          culture, Investment, jollification and how our products are specifically helping them shape their Financial
          life.
        </p>
        <div class="button-group">
          <button class="display " :disabled="currentWindow == 0" @click="slideWindow('previous')"
            :class="{ 'inactive': currentWindow == 0 }">
            <v-icon>mdi-arrow-left</v-icon>
          </button>
          <button class="ml-4" :class="{ 'inactive': currentWindow == (slideCount - 1) }"
            :disabled="currentWindow == (slideCount - 1)" @click="slideWindow('next')">
            <v-icon>mdi-arrow-right</v-icon>
          </button>
        </div>
      </div>
      <div class="col-12 col-md-6 text-center uotm-right">
        <v-window v-model="currentWindow" class="" style="max-width: 100$; overflow: hidden">
          <v-window-item>
            <img src="images/user-otm.png" alt="user of the month image">
          </v-window-item>
          <v-window-item>
            <img src="images/user-otm1.png" alt="user of the month image">
          </v-window-item>
          <v-window-item>
            <img src="images/user-otm2.png" alt="user of the month image">
          </v-window-item>
        </v-window>
      </div>
    </section>

    <!-- reviews -->
    <section class="review">
      <h2 class="px-8 px-md-0">What our Customers says</h2>
      <p class="">What our customers say about us</p>
      <div class="review-card-container row">
        <v-slide-group multiple>
          <v-slide-item v-for="(item, index) in 4" :key="index">
            <div class="col-10 col-md-4" style="max-width: 32.4rem">
              <div class="review-card">
                <div class="rating-icons">
                  <img src="images/icons/rating-star.svg" alt="rating icon">
                  <img src="images/icons/rating-star.svg" alt="rating icon">
                  <img src="images/icons/rating-star.svg" alt="rating icon">
                  <img src="images/icons/rating-star.svg" alt="rating icon">
                  <img src="images/icons/rating-star.svg" alt="rating icon">
                </div>
                <p class="pt-4 text-wrap">
                  Savings box was really easy to use and the customer service was top notch to listen all my questions
                  and
                  reservations
                </p>
                <img src="images/profile-image.png" alt="user image">
                <h4>John Doe</h4>
                <span class="mt-n2">Enterpreneuer</span>
              </div>
            </div>
          </v-slide-item>
        </v-slide-group>
      </div>
    </section>

  </div>
</template>

<script>
import animate from '~/mixins/animate.js';

export default {
  mixins: [animate],
  data() {
    return {
      currentWindow: 0,
      slideCount: 3,
    };
  },
  mounted() {

    // run through the slides to fix shifting height issue. 
    const intVar = setInterval(() => {
      this.currentWindow++;
      if (this.currentWindow === this.slideCount) {
        this.currentWindow = 0;
        clearInterval(intVar);
      }
    }, 1);

    // animations for homepage
    this.slideY('.intro', 200);
    this.slideX('.get-started-btn', -200);
    this.slideX('.learn-more-btn');
    this.scale('.welcome');
    this.scale('.jollification');
    this.scale('.saving');
    this.slideX('.investibox', -400);
    this.slideX('.loan');
    this.slideX('.get-app-left');
    this.slideX('.get-app-right');

    this.fadeIn('.uotm-right', 0);
    this.slideY('.review', 150);

    this.$gsap.from('.partner-image', {
      y: 194,
      rotate: 45,
      scale: 0.001,
      opacity: 0,
      duration: 0.75 * 3,
      ease: 'Power1.easeInOut',
      scrollTrigger: {
        trigger: '.partner-image',
        // pin: true,
        // end: 'top',
        end: 'top 100%',
        scrub: .5
      }
    })
    this.$gsap.from('.outer-circle', {
      rotate: 360,
      // opacity: 0.75,
      duration: 8,
      repeat: -1,
    });
    this.$gsap.from('.inner-circle', {
      rotate: -360,
      // opacity: 0.75,
      duration: 8,
      repeat: -1,
    });
  },
  methods: {
    slideWindow(type) {
      // alert('about to slide');
      type === 'next' ? this.currentWindow++ : this.currentWindow--;
    }
  },
};
</script>

<style lang="scss" scoped>
section {
  max-width: 100%;
  overflow: hidden;
  margin: auto;
}

div.store-images {

  img {
    max-width: 21.1rem;
  }
}

section.intro {
  background-color: #F4F7FF;
  padding: 0rem var(--landing-x-padding);

  h1 {
    color: #000831;
    font-size: 6.4rem;
    font-weight: 600;
    line-height: 6rem;
  }

  p {
    font-size: 2.2rem;
    line-height: 3.4rem;
  }



  div.intro-image {
    text-align: right;
    position: relative;

    div.black-circle {
      background-color: #000;
      border-radius: 50%;
      width: 22.2rem;
      height: 22.2rem;
      position: absolute;
      z-index: 0;
      left: 2rem;
    }

    div.green-rectangle {
      width: 15.9rem;
      height: 32.6rem;
      background-color: var(--green);
      border-radius: 1rem;
      position: absolute;
      bottom: -2rem;
      left: 4rem;
    }

    img {
      max-width: min(100%, 48.3rem);
      // z-index: 5;
      position: relative;
    }
  }
}

section.welcome {
  padding: 10.1rem 23.5rem;
  text-align: center;

  h3 {
    color: var(--primary-color);
    font-size: 3rem;
    font-weight: 500;
  }

  p:nth-of-type(1) {
    // font-size: 4.8rem;
    font-size: 48px;
    font-weight: 600;
    line-height: 5.3rem;
  }

  p:nth-of-type(2) {
    font-size: 2.2rem;
    font-weight: 500;
    color: #666B70;
    line-height: 3.4rem;
  }

  div.button-group {
    button {
      padding: 1rem 2.3rem;
      font-size: 1.8rem;
      font-weight: 600;
      border-radius: 1rem;
      transition: all .5s;

      &:nth-child(1) {
        color: white;
        background-color: var(--primary-color);

        &:hover {
          background-color: darken($color: #4169E1, $amount: 10%);
        }
      }

      &:nth-child(2) {
        border: 1px solid #999C9F;
        // margin-left: 1.7rem;

        &:hover {
          background-color: darken($color: #fff, $amount: 10%);
        }
      }

    }
  }
}

// partners
section.partners {
  background-color: #F4F7FF;
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

// services
section.services {
  padding: 0rem var(--landing-x-padding);

  h2 {
    font-size: 5.6rem;
    font-weight: 600;
    line-height: 6rem;
  }

  div.line {
    hr {
      border: 1px solid #000831;
    }
  }

  .heading-p {
    font-size: 2rem;
    color: #333940;
    line-height: 3.2rem;
  }

  div.service-cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(45rem, 90vw), 1fr));
    gap: 1.5rem;

    div.service-card {
      h2 {
        font-weight: 600;
        font-size: 3.8rem;
        line-height: 6rem;
      }

      button {
        padding: .8rem 1.4rem;
        background-color: #fff;

        &:hover {
          background-color: darken($color: #fff, $amount: 10%);
        }
      }

      div.floating-info {
        background-color: #fff;
        border-radius: 1rem;
        padding: .8rem 1.4rem;
        position: absolute;

        &.jolli {
          max-width: 22rem;
          bottom: 15rem;
          left: 9rem;

          h2,
          p {
            font-size: 1rem;
            font-weight: 700;
          }

          span {
            font-size: 0.8rem;
          }

          p+span {
            display: block;
            color: #333940;
            font-weight: 400;
          }
        }

        div.new-users {
          img+img {
            margin-left: -1rem;
          }
        }
      }

      &>ul {
        margin: 0px;
        padding: 0px;

        li {
          list-style-type: none;

          li {
            list-style-type: initial;
          }
        }
      }

      &.jollification,
      &.saving {

        background-color: #CDE0FF;

        div.image-container {
          overflow: hidden;

          img:nth-child(1) {
            margin-right: -1rem;
          }
        }
      }

      &.saving {
        background-color: #BEF6BE;

      }

      &.investibox {
        background-color: #DFF2DF;

        img.card-image {
          margin-top: 8rem;
          position: relative;
          // bottom: -1rem;
        }
      }

      &.loan {
        h4 {
          font-size: 1.6rem;
          font-weight: 600;
        }

        background-color: var(--primary-color);

        color: white;

        img.card-image {
          display: block;
          margin-left: 15rem;
          margin-top: -13rem;
          max-width: 38.6rem;
        }
      }
    }
  }
}

// get app section
section.get-app {
  background-color: #F4F7FF;
  padding: 7.7rem var(--landing-x-padding);

  h2 {
    font-size: 6rem;
    line-height: 6.4rem;
    font-weight: 600;
    color: #000810;
  }

  p {
    color: #666B70;
  }

  img.get-app {
    max-width: 30.3rem;
    // z-index: 8;
  }

  div.outer-circle {
    width: 38rem;
    height: 38rem;
    background: conic-gradient(from 180deg at 50% 50%, rgba(97, 202, 97, 0.5) 0deg, rgba(65, 105, 225, 0.5) 360deg);
    border-radius: 50%;
    position: absolute;
    bottom: 10%;
    left: calc(50% - 38rem/2);
    max-width: 100%;
    // z-index: 1;

    div {
      width: 85%;
      height: 85%;
      border-radius: 50%;
      background: conic-gradient(from 180deg at 50% 50%, rgba(97, 202, 97, 0.5) 0deg, rgba(65, 105, 225, 0.5) 360deg);
    }
  }
}

// how it works
section.how-it-works {
  padding: 8.6rem var(--landing-x-padding);
  text-align: center;

  h2 {
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 7rem;
  }

  h2+p {
    font-size: 1.8rem;
    font-weight: 500;
    color: #666B70;
  }

  h3 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 3.4rem;
  }

  h3+p {
    font-size: 1.6rem;
    font-weight: 400;
  }
}

// community
section.community {}

// user of the month
section.user-of-the-month {
  padding: 11.6rem var(--landing-x-padding) 6.8rem;

  h2 {
    font-size: 6rem;
    font-weight: 600;
    line-height: 6.8rem;
    color: #000831;
  }

  p {
    font-size: 2rem;
    font-weight: 400;
    line-height: 3.2rem;
    color: #333940;
  }

  img {
    max-width: 50.8rem;
  }

  .button-group {
    margin-top: 8.1rem;

    button {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      border: 1px solid var(--primary-color);
      transition: all .5s;

      .v-icon {
        font-size: 2rem;
        color: var(--primary-color);
      }

      &.inactive {
        border: 1px solid #D9D9D9;
        cursor: default;
      }

      .v-icon {
        color: #D9D9D9;
      }

      &:hover:not(.inactive) {
        background-color: var(--primary-color);
        color: white;
      }
    }
  }
}

// reviews
section.review {
  padding: 9rem var(--landing-x-padding);

  h2,
  h2+p {
    line-height: 7rem;
    text-align: center;
  }

  h2 {
    font-size: 4.8rem;
    font-weight: 700;
    color: #000810;
    margin: 0px;
  }

  h2+p {
    font-weight: 500;
    font-size: 1.8rem;
    color: #666B70;
  }

  div.review-card-container {
    div.review-card {
      padding: 2.6rem;
      background-color: #F0F4FF;
      border-radius: 2rem;

      div.rating-icons {
        img {
          max-width: 2.3rem;
        }
      }

      img {
        max-width: 3.2rem;
      }

      p {
        color: #666B70;
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 2.6rem;
      }

      h4 {
        color: #333940;
        font-weight: 500;
        font-size: 1.6rem;
      }

      span {
        font-size: 1.4rem;
        color: #999C9F;
        display: block;
      }
    }
  }
}

@media screen and (max-width: 800px) {

  div.store-images {

    img {
      max-width: 15rem;
    }
  }

  section.intro {
    background-color: #F4F7FF;
    padding: 0rem var(--landing-x-padding);

    h1 {
      font-size: 3.2rem;
      line-height: 4rem;
    }

    p {
      font-size: 2.2rem;
      line-height: 3.4rem;
    }



    div.intro-image {

      div.black-circle {
        border-radius: 50%;
        width: 12.2rem;
        height: 14.2rem;
        left: -0.3rem;
      }

      div.green-rectangle {
        width: 15.9rem;
        height: 21.7rem;
        bottom: -2rem;
        left: 0rem;
      }

      img {
        max-width: min(90%, 48.3rem);
        // z-index: 5;
        position: relative;
      }
    }
  }

  section.welcome {
    padding: 10.1rem var(--landing-x-padding);
    text-align: center;

    h3 {
      color: var(--primary-color);
      font-size: 3rem;
      font-weight: 500;
    }

    p:nth-of-type(1) {
      // font-size: 4.8rem;
      font-size: 2.6rem;
      line-height: 3.4rem;
    }

    p:nth-of-type(2) {
      font-size: 2.2rem;
      font-weight: 500;
      color: #666B70;
      line-height: 3.4rem;
    }

    div.button-group {
      button {
        padding: 1rem 2.3rem;
        font-size: 1.8rem;
        font-weight: 600;
        border-radius: 1rem;
        transition: all .5s;
        width: 100%;

        &:nth-child(1) {
          color: white;
          background-color: var(--primary-color);

          &:hover {
            background-color: darken($color: #4169E1, $amount: 10%);
          }
        }

        &:nth-child(2) {
          border: 1px solid #999C9F;
          // margin-left: 1.7rem;

          &:hover {
            background-color: darken($color: #fff, $amount: 10%);
          }
        }

      }
    }
  }

  // partners
  section.partners {
    background-color: #F4F7FF;
    padding: 0rem var(--landing-x-padding);

    h2 {
      font-size: 2rem;
      font-weight: 500;
      line-height: 2.6rem;
    }

    div {
      img {
        max-width: 12.9rem;
      }

      img+img {
        padding-left: 0rem;
      }
    }
  }

  // services
  section.services {
    padding: 0rem var(--landing-x-padding);

    h2 {
      font-size: 3rem;
      line-height: 3.6rem;
    }

    div.line {
      hr {
        border: 1px solid #000831;
      }
    }

    .heading-p {
      font-size: 2rem;
      color: #333940;
      line-height: 3.2rem;
    }

    div.service-cards-container {
      div.service-card {
        h2 {
          font-weight: 600;
          font-size: 3.8rem;
          line-height: 6rem;
        }

        button {
          padding: .8rem 1.4rem;
          background-color: #fff;

          &:hover {
            background-color: darken($color: #fff, $amount: 10%);
          }
        }

        div.floating-info {
          background-color: #fff;
          border-radius: 1rem;
          padding: .8rem 1.4rem;
          position: absolute;

          &.jolli {
            max-width: 22rem;
            bottom: 15rem;
            left: 9rem;

            h2,
            p {
              font-size: 1rem;
              font-weight: 700;
            }

            span {
              font-size: 0.8rem;
            }

            p+span {
              display: block;
              color: #333940;
              font-weight: 400;
            }
          }

          div.new-users {
            img+img {
              margin-left: -1rem;
            }
          }
        }

        &>ul {
          margin: 0px;
          padding: 0px;

          li {
            list-style-type: none;

            li {
              list-style-type: initial;
            }
          }
        }

        &.jollification,
        &.saving {

          background-color: #CDE0FF;

          div.image-container {
            overflow: hidden;

            img:nth-child(1) {
              margin-right: -1rem;
            }
          }
        }

        &.saving {
          background-color: #BEF6BE;

          .image-container>img:nth-child(1) {
            margin-top: 12rem;
          }
        }

        &.investibox {
          background-color: #DFF2DF;

          img.card-image {
            margin-top: 8rem;
            max-width: 100%;
          }
        }

        &.loan {
          h4 {
            font-size: 1.6rem;
            font-weight: 600;
          }

          background-color: var(--primary-color);

          *:not(button, .v-icon, h4) {
            color: white;
          }

          img.card-image {
            display: block;
            margin-left: 0rem;
            margin-top: 0rem;
            max-width: min(100%, 38.6rem);
          }

        }

      }

      div.card-image-container {
        background-color: var(--primary-color) !important;

        img {
          width: 100%;
        }
      }
    }
  }

  // get app section
  section.get-app {
    background-color: #F4F7FF;
    padding: 7.7rem var(--landing-x-padding);

    div:nth-child(1) {
      order: 1;
    }

    h2 {
      font-size: 3rem;
      line-height: 3.6rem;
    }

    p {
      color: #666B70;
    }

    img.get-app {
      max-width: 21.3rem;
      // z-index: 8;
    }

    div.outer-circle {
      width: 31rem;
      height: 31rem;
      background: conic-gradient(from 180deg at 50% 50%, rgba(97, 202, 97, 0.5) 0deg, rgba(65, 105, 225, 0.5) 360deg);
      border-radius: 50%;
      position: absolute;
      bottom: 10%;
      left: calc(50% - 31rem/2);
      // z-index: 1;

      div {
        width: 85%;
        height: 85%;
        border-radius: 50%;
        background: conic-gradient(from 180deg at 50% 50%, rgba(97, 202, 97, 0.5) 0deg, rgba(65, 105, 225, 0.5) 360deg);
      }
    }
  }

  // how it works
  section.how-it-works {
    padding: 8.6rem var(--landing-x-padding);
    text-align: center;

    h2 {
      font-size: 4.8rem;
      font-weight: 700;
      line-height: 7rem;
    }

    h2+p {
      font-size: 1.8rem;
      font-weight: 500;
      color: #666B70;
    }

    h3 {
      font-size: 2rem;
      font-weight: 500;
      line-height: 3.4rem;
    }

    h3+p {
      font-size: 1.6rem;
      font-weight: 400;
    }
  }

  // community
  section.community {}

  // user of the month
  section.user-of-the-month {
    padding: 11.6rem var(--landing-x-padding) 6.8rem;

    h2 {
      font-size: 3rem;
      line-height: 3.4rem;
    }

    p {
      font-size: 2rem;
      font-weight: 400;
      line-height: 3.2rem;
      color: #333940;
    }

    img {
      max-width: min(100%, 50.8rem);
    }

    .button-group {
      margin-top: 8.1rem;

      button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        border: 1px solid var(--primary-color);
        transition: all .5s;

        .v-icon {
          font-size: 2rem;
          color: var(--primary-color);
        }

        &.inactive {
          border: 1px solid #D9D9D9;
          cursor: default;
        }

        .v-icon {
          color: #D9D9D9;
        }

        &:hover:not(.inactive) {
          background-color: var(--primary-color);
          color: white;
        }
      }
    }
  }

  // reviews
  section.review {
    padding: 9rem var(--landing-x-padding);

    h2,
    h2+p {
      line-height: 7rem;
      text-align: center;
    }

    h2 {
      font-size: 3rem;
      margin: 0px;
      line-height: 3.6rem;
    }

    h2+p {
      font-weight: 500;
      font-size: 1.8rem;
      color: #666B70;
    }

    div.review-card-container {
      div.review-card {
        padding: 2.6rem;
        background-color: #F0F4FF;
        border-radius: 2rem;

        div.rating-icons {
          img {
            max-width: 2.3rem;
          }
        }

        img {
          max-width: 3.2rem;
        }

        p {
          color: #666B70;
          font-weight: 500;
          font-size: 1.8rem;
          line-height: 2.6rem;
        }

        h4 {
          color: #333940;
          font-weight: 500;
          font-size: 1.6rem;
        }

        span {
          font-size: 1.4rem;
          color: #999C9F;
          display: block;
        }
      }
    }
  }
}
</style>
