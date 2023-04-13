<template>
  <div class="landing">
    <section class="intro row">
      <div class="col-12 col-md-6 text-center text-md-left">
        <h1 class="d-none d-md-block">About Us</h1>
        <h2 class="mt-4 mt-md-8">
          What if the future is right here, with Savingsbox
        </h2>
        <p class="my-8">
          We leverage on technology to impact the lives of our members
          positively. We raise standard of living and ensure poverty alleviation
          of members through diverse and dynamic features available on our
          platform.
        </p>
        <button class="l-btn">Get Started</button>
      </div>
      <div class="col-12 col-md-6 pl-md-8 mt-16">
        <div class="d-flex first-left">
          <div class="relative">
            <span class="relative"></span>
          </div>
          <img class="flex-grow-1" src="images/about-pic1.png" alt="" />
        </div>
        <div class="second-left d-flex">
          <img src="images/about-pic2.png" alt="about page image" />
          <div class="flex-grow-1"></div>
        </div>
      </div>
    </section>

    <section class="offers text-center">
      <h2>What we offer</h2>
      <p class="py-6 mx-md-8">
        SavingsBox is serving existing savings groups by supplying lines of
        credit and savings accounts that allow members to grow their business
        and meet their needs. We are piloting savings products and services that
        meets societal needs, by helping savings group members expand their
        economic activities with increased lending capability.
      </p>
      <div class="row mt-16">
        <div class="col-12 col-md-4 interest">
          <h3 class="py-5">High Interest</h3>
          <p class="pr-2">
            We value your money and you. We give Competitive interest to our
            customers
          </p>
        </div>
        <div class="col-12 col-md-4 secure">
          <h3 class="py-5">Safe & Secure</h3>
          <p class="px-1">
            Savings box uses the highest levels of Internet Security, and it is
            secured by 256 bits SSL security encryption to ensure that your
            information is completely protected from fraud.
          </p>
        </div>
        <div class="col-12 col-md-4 support">
          <h3 class="py-5">Live Support</h3>
          <p class="pl-2">
            Your concern is why we are here. We provide 24/7 live support via
            email, phone, and whatsapp whenever, whoever and wherever
          </p>
        </div>
      </div>
    </section>
    <section class="mission">
      <div class="row">
        <div class="col-12 col-md-6 mission-image text-center">
          <img src="images/about-pic3.png" alt="third about page image" />
        </div>
        <div class="col-12 col-md-6 text-center text-md-left">
          <h2>We have come so far, we are not playing</h2>
          <p class="my-8 pr-6">
            We’re on a journey to reshape the financial future for millions of
            people in Nigeria. Here are some milestones we’ve passed along the
            way.
          </p>
          <div class="row text-center mt-16">
            <div class="col-12 col-md-4">
              <h4>4.8</h4>
              <p>On App Store</p>
            </div>
            <div class="col-12 col-md-4">
              <h4>58+</h4>
              <p>Employees</p>
            </div>
            <div class="col-12 col-md-4">
              <h4>2,083+</h4>
              <p>Active Users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="partners" id="partners">
      <Partners></Partners>
    </section>
  </div>
</template>
<script>
import animate from "~/mixins/animate.js";

export default {
  layout: "landing",
  mixins: [animate],
  mounted() {
    // animation for about page
    this.slideY(".intro", 100);
    this.slideY(".offers", 100);
    this.slideX(".interest", -200);
    this.slideY(".secure", 100);
    this.slideX(".support");
    this.scale(".mission");
  },
};
</script>
<style lang="scss" scoped>
@import url('@/components/styles/landing-generics.scss');

// intro
section.intro {
  padding: 5.9rem var(--landing-x-padding);

  h1 {
    color: #999c9f;
    font-size: 1.6rem;
    font-weight: 500;
  }

  p {
    font-size: 1.8rem;
    line-height: 2.4rem;
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
        background-color: var(--primary-color);
        border-radius: 100%;
        right: 12.5rem;
        top: 4rem;
      }
    }

    img {
      max-height: 31.4rem;
    }
  }

  div.second-left {
    img {
      max-width: 26.1rem;
      max-height: 24.7rem;
    }

    div {
      background-color: var(--green);
      // width: 26.2rem;
      height: 15.8rem;
    }
  }
}

// offers section
section.offers {
  padding: 6.1rem var(--landing-x-padding);

  p {
    font-size: 2rem;
    line-height: 2.4rem;
  }

  h2+p,
  h3 {
    line-height: 3.4rem;
  }

  h3 {
    font-size: 2.4rem;
    font-weight: 600;
  }
}

// mission section
section.mission {
  background-color: #f4f7ff;
  padding: 7.6rem var(--landing-x-padding) 5.6rem;

  img {
    max-width: 100%;
  }

  h2 {
    font-size: 5rem;
  }

  h2+p {
    line-height: 3.4rem;
    font-size: 2rem;
  }

  h4 {
    font-size: 4.8rem;
    color: #000831;
  }
}

// partners
section.partners {
  // background-color: #F4F7FF;
  margin-top: 1.5rem;
}

@media screen and (max-width: 800px) {
  section.intro {
    padding: 5.9rem var(--landing-x-padding);

    h1 {
      color: #999c9f;
      font-size: 1.6rem;
      font-weight: 500;
    }

    p {
      font-size: 1.8rem;
      line-height: 2.4rem;
    }

    button {
      width: 100%;
    }

    div.first-left {
      div {
        max-width: 27.6rem;
        overflow: hidden;

        span {
          // margin-left: -14rem;
          display: block;
          width: 17.6rem;
          height: 17.6rem;
          background-color: var(--primary-color);
          border-radius: 100%;
          right: 11.5rem;
          top: 4rem;
        }
      }

      img {
        max-height: 24rem;
      }
    }

    div.second-left {
      img {
        max-width: 16.2rem;
        max-height: 24.7rem;
      }

      div {
        background-color: var(--green);
        // width: 26.2rem;
        height: 9.8rem;
      }
    }
  }

  // offers section
  section.offers {
    padding: 6.1rem var(--landing-x-padding);

    p {
      font-size: 2rem;
      line-height: 2.4rem;
    }

    h2+p,
    h3 {
      line-height: 3.4rem;
    }

    h3 {
      font-size: 2.4rem;
      font-weight: 600;
    }
  }

  // mission section
  section.mission {
    padding: 7.6rem var(--landing-x-padding) 5.6rem;

    .mission-image {
      order: 1;
    }

    h2 {
      font-size: 3rem;
    }

    h2+p {
      line-height: 3.4rem;
      font-size: 2rem;
    }

    h4 {
      font-size: 4.8rem;
      color: #000831;
    }
  }

  // partners
  section.partners {
    // background-color: #F4F7FF;
    margin-top: 1.5rem;
  }
}
</style>