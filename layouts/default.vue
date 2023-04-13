<template>
  <v-app>
    <v-app-bar :height="90" app elevate-on-scroll>
      <div class="">
        <img src="/images/savingbox-logo.png" class="d-none d-md-inline" alt="" /> <span
          style="color: #4169E1; font-size: 2.1rem; font-weight: 600">
          <nuxt-link to="/" style="text-decoration: none; color: inherit;" ref="target">SavingsBox</nuxt-link>
        </span>
      </div>
      <v-spacer class="d-lg-none"></v-spacer>

      <!-- icon and menu for mobile screens -->
      <button class="l-btn mt-1 mr-5 d-lg-none" @click="authNavigate('register')" style="font-size: 1.2rem;">Create
        Account</button>
      <div class="d-lg-none">
        <v-menu location="bottom" style="border: 1px solid blue" v-model="menuOpen" :close-on-content-click="false">
          <template v-slot:activator="{ on, attrs }">
            <v-icon style="font-size: 3.5rem" v-bind="attrs" v-on="on" @click="menuOpen = !menuOpen">mdi-{{
              menuOpen ? 'close' :
              'menu' }}</v-icon>
          </template>
          <v-card elevation="8" class="pa-4 pb-2 mt-15 relative"
            style="width: 99vw; margin: auto; background-color: white; overflow-y: scroll;">
            <div class="w-100 pa-4" style="background: transparent; top: 0rem; position: fixed" @click="menuOpen = false">
            </div>
            <ul class="nav-links mobile" v-if="showSubMenu == false">
              <li v-for="item in links" :key="item.text" @click="linkClicked(item.text)">
                <template v-if="item.text != 'Services'">
                  <nuxt-link :to="item.link">{{ item.text }}</nuxt-link>
                </template>
                <template v-else>
                  <nuxt-link event="" to="/services">
                    <span>{{ item.text }}</span>
                  </nuxt-link>
                  <v-icon class="float-right">mdi-chevron-right</v-icon>
                </template>
              </li>
              <li class="btn-group">
                <button class="w-100" @click="authNavigate('login')">Login</button>
                <button class="w-100 mt-4" @click="authNavigate('register')">Create Account</button>
              </li>
            </ul>
            <div class="sub-menu" v-show="showSubMenu">
              <h2 class="text-center mb-7">
                <v-icon class="float-left" @click="showSubMenu = false">mdi-chevron-left</v-icon>
                Services
              </h2>
              <div class="" v-for="(item, index) in services" :key="index">
                <nuxt-link :to="item.link" class="nuxt-container">
                  <div class="" @click="menuOpen = false">
                    <h3>{{ item.name }}</h3>
                    <img class="float-right pl-3" :src="item.imgUrl" alt="">
                    <p>{{ item.description }}</p>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </v-card>
        </v-menu>
      </div>
      <v-spacer class="d-none d-md-block"></v-spacer>
      <!-- nav bar for desktop -->
      <ul class="nav-links d-none d-md-block">
        <li v-for="item in links" :key="item.link" class="">
          <template v-if="item.text != 'Services'">
            <nuxt-link :to="item.link">
              {{ item.text }}
            </nuxt-link>
          </template>
          <div v-else>
            <v-menu location="bottom" style="border: 1px solid blue">
              <template v-slot:activator="{ on, attrs }">
                <span class="" v-bind="attrs" v-on="on">

                  <nuxt-link event="" to="/services">
                    {{ item.text }}
                    <i class="fa fa-angle-down"></i>
                  </nuxt-link>
                </span>
              </template>
              <v-card class="pa-4 mt-15" style="width: 99vw; margin: auto; background-color: transparent;">
                <div class="services-container row px-6">
                  <div class="col" v-for="service in services" :key="service.name">
                    <nuxt-link :to="service.link" class="nuxt-container">
                      <div class="service-card pa-4">
                        <h2>{{ service.name }}</h2>
                        <img :src="service.imgUrl" :alt="`${service.name} icon`" style="float: right; width: 5.1rem"
                          class="pl-1 pb-1">
                        <p>{{ service.description }}</p>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </v-card>
            </v-menu>
          </div>
        </li>
      </ul>
      <v-spacer class="d-none d-md-block"></v-spacer>
      <div class="button-group nav-links d-none d-md-block">
        <!-- <button class="py-3 px-5" to="/auth/login">Login</button>
                <button class="py-3 px-5" to="/auth/register">Create Account</button> -->
        <v-btn class="py-6 px-5 mb-1" @click="authNavigate('login')">Login</v-btn>
        <v-btn class="py-6 px-5 mb-1" @click="authNavigate('register')">Create Account</v-btn>
      </div>
    </v-app-bar>
    <!-- page content here -->
    <main class="">
      <Nuxt />
    </main>
    <!-- page footer here -->
    <footer>
      <div class="row">
        <div class="col-12 col-md-3 saving-box">
          <h2 class="d-flex align-center">
            <img src="/images/savingbox-logo.png" alt="savingbox logo">
            <span class="pl-1">SavingsBox</span>
          </h2>
          <p class="pt-2">
            Savings box is serving existing savings groups by supplying lines of credit and savings accounts
            that allow members to manage their money. We are piloting savings products and services that meet
            community needs, by helping savings group members expand their economic activities with increased
            lending capability.
          </p>
        </div>
        <div class="col-12 col-md-9">
          <div class="row relative">
            <div class="col pl-8">
              <h3>COMPANY</h3>
              <ul>
                <li>
                  <nuxt-link to="/about">About Us</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about#partners">Partners</nuxt-link>
                </li>
                <li>Blog</li>
              </ul>
            </div>
            <div class="col">
              <h3>SERVICES</h3>
              <ul>
                <li>
                  <nuxt-link to="/jollification">Jollification</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/saving">Savings</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/investiboxes">Investibox</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/loan">Loan</nuxt-link>
                </li>
              </ul>
            </div>
            <div class="col pl-8 pl-md-0">
              <h3>FEATURES</h3>
              <ul>
                <li>
                  <nuxt-link to="/features/#feature-cards">Virtual Account</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/features/#investibox">Secure Investments</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/features/#saving">High Interest</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/features/#jollification">Jolly Gifting</nuxt-link>
                </li>
                <!-- <li>Money Transfer</li> -->
              </ul>
            </div>
            <div class="col">
              <h3>RESOURCES</h3>
              <ul>
                <li>
                  <nuxt-link to="/support">Support</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/contact">Contact</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/privacy_policy">Privacy & Policy</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/terms">Terms</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/faq">FAQ</nuxt-link>
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-3 text-center">
              <img src="/images/playstore.png" width="148" alt="playstore image">
              <img class="mt-md-3" src="/images/appstore.png" width="148" alt="appstore image">
              <button class="move-up" style="" @click="scrollToTop" v-scroll="onScroll" v-show="fab" fab>
                <span class="fa-solid fa-long-arrow-alt-up"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row bottom-group mt-13">
        <div class="col-12 col-md-8">
          <p class="text">©2023 Savingsbox All rights reserved | Designed by Bex-IT Solutions</p>
        </div>
        <div class="col-12 col-md-4 text-right icon-group">
          <span class="fab fa-facebook-f"></span>
          <span class="fab fa-instagram ml-4"></span>
          <span class="fab fa-linkedin ml-4"></span>
          <span class="fab fa-twitter ml-4"></span>
        </div>
      </div>
    </footer>
  </v-app>
</template>
<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      menu: false,
      drawer: true,
      menuOpen: false,
      fab: false,
      showSubMenu: false,
      navLinks: null,
      onServices: null,
      links: [
        { text: 'Features', link: '/features' },
        { text: 'Services', link: '/services' },
        { text: 'About', link: '/about' },
        { text: 'Blog', link: '/blog' },
      ],
      services: [
        { name: 'Jollification', description: 'Save cost and get cheap and quality items for your festive celebration', imgUrl: '../images/icons/jollification.png', link: '/services/jollification' },
        { name: 'Savings', description: 'Save cost and get cheap and quality items for your festive celebration', imgUrl: '../images/icons/saving.png', link: '/services/saving' },
        { name: 'Investment', description: 'Save cost and get cheap and quality items for your festive celebration', imgUrl: '../images/icons/investment.png', link: '/services/investiboxes' },
        { name: 'Loan', description: 'Save cost and get cheap and quality items for your festive celebration', imgUrl: '../images/icons/loan.png', link: '/services/loan' },
      ],
    }
  },
  computed: {
    ...mapState(['faqCategories']),
  },
  methods: {
    linkClicked(text) {
      // alert(text);
      if (text === 'Services') {
        this.showSubMenu = true;
      } else {
        this.menuOpen = !this.menuOpen;
      }
    },
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    scrollToTop() {
      this.$gsap.to(window, { duration: .1, scrollTo: 0 })
    },
    authNavigate(link) {
      window.location = 'https://dashboard.savingsbox.ng/auth/' + link;
    },
    async fetchFAQ() {
      const baseURL = 'https://api.savingsbox.ng/api/';
      try {
        const faqCategories = await this.$axios.get(baseURL + 'user/faq-category/all');
        if (faqCategories.data.success) {
          this.$store.commit('setFaq', { faqCategories: faqCategories.data.data });
        }
      } catch (error) {
        console.log('an error occurred', error);
      }
      const faqCategoriesLength = this.faqCategories.length;
      let index = 0;
      let categoryFaqs = [];
      do {
        const link = baseURL + 'user/faq-category/faqs?faq_category_id=' + this.faqCategories[index].id;
        try {
          const faqs = await this.$axios.get(link);
          if (faqs.data.success) {
            categoryFaqs = faqs.data.data;
            this.$store.commit('setFaq', { faqs: faqs.data.data });
            this.$store.commit('setFaq', { currentFaqIndex: index });
          }
        } catch (error) {
          console.log('an error occurred', error);
        }
        index++;
      } while (categoryFaqs.length < 1 && index < faqCategoriesLength)
    }
  },
  watch: {
    menuOpen(newVal, oldVal) {
      if (newVal) {
        this.showSubMenu = false;
      }
    }
  },
  mounted() {
    this.fetchFAQ();
  },
}
</script>
<style lang="scss" scoped>
ul.nav-links {
  li {
    display: inline-block;

    font-weight: 500;
    font-size: 1.6rem;

    &+li {
      padding-left: 5rem;
    }

    a,
    span {
      text-decoration: none;
      color: #000831 !important;
      transition: all .5s;
      cursor: pointer;

      &:hover {
        color: var(--primary-color) !important;
      }
    }

    .nuxt-link-active {
      color: var(--primary-color) !important;
    }
  }
}

ul.nav-links.mobile {
  background-color: rgb(255, 255, 255);

  padding: 2rem 1rem;

  li {
    display: block;

    &+li {
      padding-left: 0rem;
      margin-top: 1.6rem;
    }

    button {
      padding: 1.2rem 2.3rem;
      font-weight: 600;
      font-size: 1.6rem;
      border-radius: 1rem;
      transition: all .5s;
    }

    button:nth-child(1) {
      border: 1px solid var(--primary-color);
      color: var(--primary-color);

      &:hover {
        background-color: darken($color: #ffffff, $amount: 10%);
      }
    }

    button:nth-child(2) {
      background-color: var(--primary-color);
      color: white;

      &:hover {
        background-color: darken($color: #4169E1, $amount: 10%);
      }
    }
  }
}

div.sub-menu {
  background-color: #fff;
  padding: 2rem;

  a {
    color: inherit;
    text-decoration: none;
  }

  a.nuxt-container.nuxt-link-active {
    // border: 1px solid blue;
    box-shadow: 0px 1px 1px rgb(128, 128, 204);
    display: block;
    // border-radius: 1.2rem;

    h3 {
      color: var(--primary-color);
    }

    p {
      padding-bottom: .5rem;
    }
  }

  h3,
  h2 {
    font-size: 1.6rem;
    font-weight: 500;
  }

  h2 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.4rem;
  }

  img {
    max-width: 4.8rem;
  }
}

div.button-group {

  .v-btn,
  button {
    // padding: 1.2rem 2.3rem;
    font-weight: 600;
    font-size: 1.6rem;
    border-radius: 1rem;
    transition: all .5s;
    text-transform: none;
  }

  .v-btn:nth-child(1),
  button:nth-child(1) {
    border: 1px solid var(--primary-color);
    color: var(--primary-color);

    &:hover {
      background-color: darken($color: #ffffff, $amount: 10%);
    }
  }

  .v-btn:nth-child(2),
  button:nth-child(2) {
    background-color: var(--primary-color);
    color: white;
    margin-left: 1rem;

    &:hover {
      background-color: darken($color: #4169E1, $amount: 10%);
    }
  }
}

// main style
main {
  // margin: 9rem 11rem 0rem;
  margin-top: 9rem;
}

footer {
  padding: 8.3rem 11.2rem;
  background-color: #000831;
  color: white;

  p {
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  h3 {
    font-weight: 600;
  }

  ul {
    margin: 0px;
    padding: 0px;

    li {
      list-style-type: none;
      font-size: 1.5rem;
      line-height: 1.9rem;
      font-weight: 400;
      margin-top: 1rem;

      a {
        text-decoration: none;
        color: inherit;
        transition: all .25s;
      }

      a:hover {
        text-decoration: underline;
        font-weight: 500;
      }
    }
  }

  .saving-box {
    h2 {
      font-size: 2.9rem;
    }
  }

  div.bottom-group {
    p {
      font-size: 1.5rem;
    }

    div.icon-group {
      // border: 1px solid red;
      font-size: 2rem;

      span.fab {
        display: inline-block;
      }
    }
  }

  button.move-up {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 4.7rem;
    height: 4.7rem;
    background-color: #61CA61;
    color: #000831;
    transition: all .5s;

    &:hover {
      background-color: darken($color: #61CA61, $amount: 10%);
      color: white;
    }
  }
}

// for the drop-down menu
.services-container {
  background-color: white;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);

  a {
    color: inherit;
    text-decoration: none;
  }

  a.nuxt-container.nuxt-link-active {
    // border: 1px solid blue;
    box-shadow: 1px 1px 4px blue;
    display: block;
    border-radius: 1.2rem;

    h2 {
      color: var(--primary-color);
    }
  }

  div.service-card {
    border-radius: 1.2rem;
    border: 1px solid #D0D0D0;
    transition: all .5s;
    cursor: pointer;

    h2 {
      font-weight: 500;
      font-size: 2rem;
    }

    &:hover {
      border: 1px solid #4169E1;

      h2 {
        color: rgb(2, 2, 113);
      }
    }
  }
}

element.style {
  left: 0px !important;
}

.v-menu__content {
  box-shadow: none !important;
  max-width: 100% !important;
}

@media screen and (max-width: 800px) {
  ul.nav-links {
    li {
      display: inline-block;

      font-weight: 500;
      font-size: 1.6rem;

      &+li {
        padding-left: 5rem;
      }

      a,
      span {
        text-decoration: none;
        color: #000831 !important;
        transition: all .5s;
        cursor: pointer;

        &:hover {
          color: var(--primary-color) !important;
        }
      }

      .nuxt-link-active {
        color: var(--primary-color) !important;
      }
    }
  }

  div.button-group {
    button {
      // padding: 1.2rem 2.3rem;
      font-weight: 600;
      font-size: 1.6rem;
      border-radius: 1rem;
      transition: all .5s;
    }

    button:nth-child(1) {
      border: 1px solid var(--primary-color);
      color: var(--primary-color);

      &:hover {
        background-color: darken($color: #ffffff, $amount: 10%);
      }
    }

    button:nth-child(2) {
      background-color: var(--primary-color);
      color: white;
      margin-left: 1rem;

      &:hover {
        background-color: darken($color: #4169E1, $amount: 10%);
      }
    }
  }

  // main style
  main {
    // margin: 9rem 11rem 0rem;
    margin-top: 9rem;
  }

  footer {
    padding: 3.8rem 2.4rem;
    background-color: #000831;
    color: white;

    div.col {
      min-width: 50%;
    }

    p {
      font-size: 1.2rem;
      margin-top: 1rem;
    }

    h3 {
      font-weight: 600;
    }

    ul {
      margin: 0px;
      padding: 0px;

      li {
        list-style-type: none;
        font-size: 1.5rem;
        line-height: 1.9rem;
        font-weight: 400;
        margin-top: 1rem;

        a {
          text-decoration: none;
          color: inherit;
          transition: all .25s;
        }

        a:hover {
          text-decoration: underline;
          font-weight: 500;
        }
      }
    }

    .saving-box {
      h2 {
        font-size: 2.9rem;
      }
    }

    div.bottom-group {
      p {
        font-size: 1.5rem;
      }

      div:nth-child(1) {
        order: 1;
      }

      div.icon-group {
        // border: 1px solid red;
        font-size: 2rem;
      }
    }

    button.move-up {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 4.7rem;
      height: 4.7rem;
      background-color: #61CA61;
      color: #000831;
      transition: all .5s;

      &:hover {
        background-color: darken($color: #61CA61, $amount: 10%);
        color: white;
      }
    }
  }

  // for the drop-down menu
  .services-container {
    background-color: white;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);

    div.service-card {
      border-radius: 1.2rem;
      border: 1px solid #D0D0D0;
      transition: all .5s;
      cursor: pointer;

      h2 {
        font-weight: 500;
        font-size: 2rem;
      }

      &:hover {
        border: 1px solid #4169E1;

        h2 {
          color: rgb(2, 2, 113);
        }
      }
    }
  }

  element.style {
    left: 0px !important;
  }

  .v-menu__content {
    box-shadow: none !important;
    max-width: 100% !important;
  }
}
</style>