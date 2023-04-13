<template>
  <div>
    <div>
      <BreadCrumb :items="[{ text: 'Home', disabled: false, }, { text: 'Loan', disabled: true, }]"></BreadCrumb>
    </div>
    <section class="intro row">
      <div class="col-12 col-md-6 text-center text-md-left">
        <h2 class="my-8">
          Quick access to personal, business and collateral based loans.
        </h2>
        <p>
          Get loans up to ₦5 million. Don't let financial stress hold you back
          any longer. Apply now and get the financial support you need.
        </p>
        <button class="l-btn mt-10 mt-md-13">Get Started</button>
      </div>
      <div class="col-12 col-md-6 pl-md-12 mt-11 mt-md-0">
        <div class="first-left relative text-right">
          <img class="relative" src="/images/loan-pic1.png" alt="loan page image" />
          <div class="absolute">
            <span class="relative"></span>
          </div>
        </div>
      </div>
    </section>

    <!-- offers -->
    <section class="offers">
      <div class="first-row">
        <div class="loan-offers">
          <div class="offer-card px-8">
            <h2>Our Loan Offers</h2>
            <p class="pt-6">
              At SavingsBox, you don’t need to wait for the next day to get
              answers. We’re 100% digital and offer you multiple ways to connect
              with us.
            </p>
          </div>
        </div>
        <div class="loan-sme">
          <div class="offer-card sme">
            <h3>SMEs Loan</h3>
            <p class="pt-6">
              This type of loan is for small and medium enterprises or business
              people. The tenure for this loan ranges from 1 to 12 months. The
              user decides how long they want to save for, they want to be
              making payments.
            </p>
            <div class="text-center d-none d-md-block">
              <button class="l-btn mt-7 w-100">Apply Now</button>
            </div>
          </div>
        </div>
        <div class="d-md-none loan-collateral">
          <div class="offer-card sme">
            <h3>Collateral Loan</h3>
            <p class="pt-6">
              This type of loan is for small and medium enterprises or business
              people. The tenure for this loan ranges from 1 to 12 months. The
              user decides how long they want to save for, they want to be
              making payments.
            </p>
            <div class="text-center d-none d-md-block">
              <button class="l-btn mt-7 w-100">Apply Now</button>
            </div>
          </div>
        </div>
        <div class="loan-ippis">
          <div class="offer-card ipps">
            <h3>IPPS Loan</h3>
            <p class="pt-6">
              This type of loan is for small and medium enterprises or business
              people. The tenure for this loan ranges from 1 to 12 months. The
              user decides how long they want to save for, they want to be
              making payments.
            </p>
            <div class="text-center d-none d-md-block">
              <button class="l-btn mt-7 w-100">Apply Now</button>
            </div>
          </div>
        </div>
      </div>
      <div class="second-row mt-5">
        <div class="offer-card salary d-flex flex-column justify-space-between">
          <div class="">
            <h2>Salary Earners Loan</h2>
            <p>
              This type of loan is for small and medium enterprises or business
              people. The tenure for this loan ranges from 1 to 12 months. The
              user decides how long they want to save for, they want to be
              making payments.
            </p>
          </div>
          <button class="l-btn-outline d-none d-md-block">Apply Now</button>
        </div>
        <div class="offer-card collateral d-none d-sm-block">
          <h2>Collateral Loan</h2>
          <div class="row">
            <div class="col-12 col-md-4">
              <h4>Car For Cash Loan</h4>
              <p>
                This type of loan is for small and medium enterprises or
                business people. The tenure for this loan ranges from 1 to 12
                months. The user decides how long they want to save for, they
                want to be making payments.
              </p>
            </div>
            <div class="col-12 col-md-4">
              <h4>Landed property Loan</h4>
              <p>
                This type of loan is for small and medium enterprises or
                business people. The tenure for this loan ranges from 1 to 12
                months. The user decides how long they want to save for, they
                want to be making payments.
              </p>
            </div>
            <div class="col-12 col-md-4">
              <h4>Machinery for Loan</h4>
              <p>
                This type of loan is for small and medium enterprises or
                business people. The tenure for this loan ranges from 1 to 12
                months. The user decides how long they want to save for, they
                want to be making payments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- get app -->
    <section class="get-app">
      <div class="row text-center text-md-left">
        <div class="col-12 col-md-6 order-1 order-md-1">
          <img src="/images/loan-pic2.png" alt="loan page image" />
        </div>
        <div class="col-12 col-md-6 pl-8">
          <h2 class="my-5">Our loan application is quick and Fast.</h2>
          <p>
            Our process is simple and straightforward - all you have to do is
            fill out the form and within minutes, you'll receive a decision on
            your loan application. Don't let financial stress hold you back any
            longer. Apply now and get the financial support you need.
          </p>
          <div class="store-images mt-14">
            <img src="/images/appstore.png" alt="apple app store icon" />
            <img src="/images/playstore.png" alt="google app store icon" class="ml-md-3" />
          </div>
        </div>
      </div>
    </section>

    <!-- how it works -->
    <section class="how row">
      <div class="col-12 col-md-6">
        <h3 class="">How the SavingsBox Loan works</h3>
        <p class="mt-4">
          Loan amounts range between ₦3,500 to ₦5,000,000 with repayment periods
          from 61 days to 18 months at monthly interest rates that range from
          2.5% to 20%.
        </p>
        <p class="mt-6">
          An example of a SavingsBox loan <br />
          Borrow ₦100,000 over 3 months <br />
          Interest (total cost of the loan): ₦30,000 (12% rate) <br />
          Three monthly repayments: ₦43,333 <br />
          Total amount payable: ₦120,000 <br />
        </p>
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
  layout: "landing",
  mixins: [animate],
  mounted() {
    // animation for saving page
    this.slideY(".intro", 100);

    this.slideX(".loan-offers", -200);
    this.slideY(".loan-sme", 100);
    this.slideX(".loan-ippis");

    this.slideY(".second-row", 150);
    this.scale(".get-app");
    this.slideY(".how", 150);
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
      height: 27.6rem;
      width: 13.8rem;
      left: 0rem;
      bottom: 5rem;
      overflow: hidden;
      // border: 1px solid rgb(152, 146, 146);

      span {
        margin-left: -14rem;
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

// offers
section.offers {
  padding: 8.7rem var(--landing-x-padding) 8.4rem;

  div.offer-card {
    border-radius: 2rem;
    padding: 2.4rem 4.2rem;
  }

  div.first-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(32.8rem, 1fr));
    gap: 2rem;

    p {
      font-size: 1.8rem;
      line-height: 2.6rem;
    }

    h3 {
      color: #333940;
      font-size: 2.5rem;
      font-weight: 600;
    }

    div.sme {
      background-color: #f4f7ff;
    }

    div.ipps {
      background-color: #ddffdd;
    }
  }

  div.second-row {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;

    h2 {
      font-size: 2.5rem;
      font-weight: 600;
    }

    h4 {
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.6rem;
    }

    div.salary {
      background-color: var(--primary-color);
      color: white;

      p {
        color: white;
      }

      button {
        width: 100%;
        background-color: #fff;
        color: var(--primary-color);
      }
    }

    div.collateral {
      background-color: #f1f8ff;
    }
  }
}

// get-app
section.get-app {
  padding: 7.5rem var(--landing-x-padding);

  img {
    max-width: 100%;
  }

  h2 {
    font-size: 4.8rem;
    line-height: 5.6rem;
  }

  div.store-images {
    img {
      max-width: 18.8rem;
    }
  }
}

// how it works
section.how {
  padding: 6.6rem var(--landing-x-padding);

  h3 {
    font-size: 2.5rem;
    font-weight: 600;
  }

  p {
    font-size: 2rem;
  }
}

@media screen and (max-width: 800px) {

  // intro section
  section.intro {
    padding: 5rem var(--landing-x-padding) 7.4rem;

    h2+p {
      font-size: 1.8rem;
    }

    button {
      width: 100%;
    }

    div.first-left {
      div {
        height: 27.6rem;
        width: 13.8rem;
        left: 0rem;
        bottom: -5rem;
        overflow: hidden;
        // border: 1px solid rgb(152, 146, 146);
        margin-left: -3rem;

        span {
          margin-left: -10rem;
          display: block;
          width: 17.6rem;
          height: 17.6rem;
          background-color: var(--green);
          border-radius: 100%;
        }
      }

      img {
        max-height: 41.8rem;
      }
    }
  }

  // offers
  section.offers {
    padding: 1.7rem var(--landing-x-padding) 8.4rem;
    background-color: #f4f7ff;

    div.offer-card {
      border-radius: 2rem;
      padding: 2.4rem 4.2rem;
      background-color: #f4f7ff;
      // min-width: 32.8rem;
    }

    div.first-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(32.8rem, 1fr));
      gap: 2rem;

      p {
        font-size: 1.8rem;
        line-height: 2.6rem;
      }

      h3 {
        color: #333940;
        font-size: 2.5rem;
        font-weight: 600;
      }

      div.sme {
        background-color: #fff;
      }

      div.ipps {
        background-color: #fff;
      }
    }

    div.second-row {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;

      h2 {
        font-size: 2.5rem;
        font-weight: 600;
      }

      h4 {
        font-size: 2rem;
        font-weight: 500;
        margin-bottom: 1.5rem;
      }

      p {
        font-size: 1.6rem;
      }

      div.salary {
        background-color: #fff;
        color: inherit;

        p {
          color: inherit;
        }

        button {
          width: 100%;
          background-color: #fff;
          color: var(--primary-color);
        }
      }

      div.collateral {
        background-color: #f1f8ff;
      }
    }
  }

  // get-app
  section.get-app {
    padding: 7.5rem var(--landing-x-padding);

    img {
      max-width: 100%;
    }

    h2 {
      font-size: 4.8rem;
      line-height: 5.6rem;
    }

    div.store-images {
      img {
        max-width: 14.8rem;
      }
    }
  }

  // how it works
  section.how {
    padding: 6.6rem var(--landing-x-padding);

    h3 {
      font-size: 2.5rem;
      font-weight: 600;
    }

    p {
      font-size: 2rem;
    }
  }
}
</style>