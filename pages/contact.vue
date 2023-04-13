<template>
  <div>
    <div>
      <BreadCrumb :items="[{ text: 'Home', disabled: false, }, { text: 'Contact', disabled: true, }]"></BreadCrumb>
    </div>
    <section class="intro row">
      <div class="col-12 col-md-6 text-center text-md-left">
        <p class="intro-text text-right text-md-left">
          Our friendly support team <br />
          is here for you
        </p>
        <h2 class="my-8">Have questions? Need help?</h2>
        <p>
          At SavingsBox, you don’t need to wait for the next day to get answers.
          We’re 100% digital and offer you multiple ways to connect with us.
        </p>
        <button class="l-btn mt-9 mt-md-13">Contact Support</button>
      </div>
      <div class="col-12 col-md-6 pl-12 mt-15 mt-md-0">
        <div class="d-flex first-left">
          <div class="relative">
            <span class="relative"></span>
          </div>
          <img class="flex-grow-1" src="images/contact.png" alt="contact page image" />
        </div>
      </div>
    </section>
    <!-- connect section -->
    <section class="connect">
      <h2 class="px-4 px-md-16 text-center">
        Connect with us through a few ways
      </h2>
      <div class="row contact-cards mt-6">
        <div class="col-12 col-md-6">
          <div class="contact-card contact-card-left">
            <h4>Chat with us</h4>
            <p class="mb-10">
              You can ask questions to our virtual assistant 24/7 or chat with
              our team in real time during business hours.
            </p>
            <span>7 days a week from 7:00 AM to 8:00 PM MST</span>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="contact-card contact-card-right">
            <h4>Speak with us</h4>
            <p>
              Speaking with a human is always an option. Call our customer
              support line at 1-855-636-2265. 7 days a week from 7:00 AM to 8:00
              PM MST.
            </p>
            <span>Call Now</span>
          </div>
        </div>
      </div>
    </section>
    <!-- contact form section -->
    <section class="contact-form relative">
      <div class="form-container relative">
        <h2 class="text-center my-3">Send us message</h2>
        <form action="" class="mt-8 mt-md-0">
          <div class="">
            <label for="exampleFormControlInput1" class="form-label label-design">Full Name</label>
            <input type="text" class="form-control input-design" id="exampleFormControlInput1" placeholder="Full Name" />
          </div>
          <div class="mt-5">
            <label for="exampleFormControlInput1" class="form-label label-design">Email Address</label>
            <input type="text" class="form-control input-design" id="exampleFormControlInput1"
              placeholder="Email Address" />
          </div>
          <div class="mt-5">
            <label for="exampleFormControlInput1" class="form-label label-design">Purpose</label>
            <select class="form-control input-design" id="exampleFormControlInput1">
              <option value="">General Enquiry</option>
              <option value="">Jollification</option>
              <option value="">Saving</option>
              <option value="">Loans</option>
              <option value="">Invoice Payment</option>
              <option value="">Investibox</option>
            </select>
          </div>
          <div class="col-12">
            <label for="message" class="form-label label-design">Message</label>
            <textarea rows="4" class="form-control input-design" id="exampleFormControlInput1"
              placeholder="Describe your plan" style="height: 100px">
                    </textarea>
          </div>
          <div class="mt-5"><button class="l-btn">Send</button></div>
        </form>
      </div>
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
    this.fadeIn(".intro-text", 0);

    this.scale(".connect");
    this.slideX(".contact-card-left", -200);
    this.slideX(".contact-card-right");

    this.slideY(".form-container", 150);
    this.scale(".get-app");
    this.slideY(".how", 250);
  },
};
</script>
<style lang="scss" scoped>
@import url('@/components/styles/landing-generics.scss');

// intro section
section.intro {
  padding: 5rem var(--landing-x-padding) 8.4rem;

  p.intro-text {
    color: var(--primary-color);
    font: 1.6rem;
    font-weight: 500;
  }

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
    }
  }
}

// connect section
section.connect {
  background: #f4f7ff;
  padding: 7.2rem var(--landing-x-padding) 15.2rem;

  div.contact-cards {
    padding: 2rem;

    &>div {
      padding: 2rem;
    }

    div.contact-card {
      background-color: #fff;
      padding: 2rem 3.2rem;
      min-height: 18.5rem;
      border: 1px solid #d0d0d0;
      border-radius: 1rem;

      h4 {
        font-size: 2.5rem;
        font-weight: 500;
      }

      p {
        margin-top: 1rem;
      }

      span {
        font-size: 1.8rem;
        font-weight: 500;
      }
    }
  }
}

// contact form
section.contact-form {
  background: linear-gradient(102.2deg, #4169e1 1.86%, #000831 100%);
  overflow: visible;
  // min-height: 66.2rem;

  div.form-container {
    top: -8rem;
    border-radius: 2rem;
    background: white;
    width: min(98rem, 96%);
    margin: auto;
    padding: 4rem 10.8rem 6.4rem;
    box-shadow: 0px -8px 30px rgba(0, 0, 0, 0.05);

    h2 {
      font-size: 4.8rem;
    }

    button {
      min-width: 15rem;
    }
  }
}

@media screen and (max-width: 800px) {

  // intro section
  section.intro {
    padding: 5rem var(--landing-x-padding) 8.4rem;

    p.intro-text {}

    h2+p {
      font-size: 1.8rem;
    }

    button {
      width: 100%;
    }

    div.first-left {
      div {
        max-width: 27.6rem;
        overflow: hidden;
        // border: 2px solid red;
        margin-left: -4rem;

        span {
          // margin-left: -14rem;
          display: block;
          width: 27.6rem;
          height: 27.6rem;
          background-color: var(--green);
          border-radius: 100%;
          left: -15rem;
          top: 6rem;
        }
      }

      img {
        max-height: 41.8rem;
      }
    }
  }

  // connect section
  section.connect {
    background: #f4f7ff;
    padding: 7.2rem var(--landing-x-padding) 15.2rem;

    div.contact-cards {
      padding: 0.5rem;

      &>div {
        padding: 2rem;
      }

      div.contact-card {
        background-color: #fff;
        padding: 2rem 3.2rem;
        min-height: 18.5rem;
        border: 1px solid #d0d0d0;
        border-radius: 1rem;

        h4 {
          font-size: 2.5rem;
          font-weight: 500;
        }

        p {
          margin-top: 1rem;
        }

        span {
          font-size: 1.4rem;
          font-weight: 500;
        }
      }
    }
  }

  // contact form
  section.contact-form {
    background: linear-gradient(102.2deg, #4169e1 1.86%, #000831 100%);
    // min-height: 66.2rem;

    div.form-container {
      top: -8rem;
      border-radius: 2rem;
      background: white;
      // width: 98rem;
      margin: auto;
      padding: 4rem 1.6rem 6.4rem;
      box-shadow: 0px -8px 30px rgba(0, 0, 0, 0.05);

      h2 {
        font-size: 3rem;
      }

      button {
        min-width: 15rem;
        width: 100%;
      }
    }
  }
}
</style>