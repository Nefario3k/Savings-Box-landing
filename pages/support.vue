<template>
  <div>
    <section class="intro row">
      <div class="col-12 col-md-6 text-center text-md-left">
        <h1 class="d-none d-md-block">Support</h1>
        <h2 class="mt-4 mt-md-8">Help and Support</h2>
        <p class="my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laborum
          est nihil voluptate maiores earum eligendi, voluptatem quam dolorem
          quaerat alias harum, numquam hic, modi facere? Libero atque vitae a!
        </p>
      </div>
    </section>
    <section class="partners">
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
    // animation for saving page
    this.slideY(".intro", 100);
  },
};
</script>
<style lang="scss" scoped>
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
}
</style>