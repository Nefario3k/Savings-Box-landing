<template>
    <div>
        <header class="intro text-center pt-14">
            <h1 class="">FAQ</h1>
            <p class="d-none d-md-block">Need something cleared up? Here are most frequently asked Questions</p>
            <p class="d-md-none">Ask us anything</p>
            <div class="relative d-flex align-center text-left search-input">
                <div class="">
                    <span class="fa fa-search" style="color: #999C9F"></span>
                </div>
                <input type="text" name="" id="" placeholder="Type and Search your question here">
            </div>
        </header>
        <section class="faq row">
            <div class="col-12 col-md-6 pr-8 faq-left">
                <h2 class="text-center text-md-left">Got questions? We can answer them.</h2>
                <p class="pr-0 pr-md-8 mt-7 text-center text-md-left mb-16">
                    Do you have a question that is not answered here? Feel free to contact us at support@savingbox.com {{
                        currentPanel }}
                </p>
                <ul class="mt-10">
                    <li v-for="(category, index) in faqCategories" :key="index" :class="{ active: currentIndex === index }"
                        @click="setCategory(index)">
                        {{ category.name }}
                    </li>
                </ul>
            </div>
            <div class="col-12 col-md-6 faq-right">
                <v-progress-linear class="mb-1" indeterminate color="blue darken-2" v-if="loading"></v-progress-linear>
                <v-expansion-panels v-model="panels">
                    <v-expansion-panel v-for="(faq, i) in faqs" :key="i" class="panel-item">
                        <v-expansion-panel-header
                            :expand-icon="(panelExpanded && currentPanel === i) ? 'mdi-minus' : 'mdi-plus'"
                            @click="toggleExpand(i)">
                            {{ faq.title }}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            {{ faq.content }}
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
                <v-progress-linear class="mt-1" indeterminate color="blue darken-2" v-if="loading"></v-progress-linear>
            </div>

        </section>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import animate from '~/mixins/animate.js';

export default {
    layout: 'landing',
    mixins: [animate],
    data() {
        return {
            topics: [
                'Savings Box',
                'Security & Safety',
                'Savings',
                'Investment',
                'Jollification',
                'Loan',
                'Withdrawal',
            ],
            currentIndex: 0,
            currentPanel: null,
            panelExpanded: false,
            loading: false,
            pageTitle: 'FAQ SavingBox',
            panels: null,
        }
    },
    computed: {
        ...mapState(['faqCategories', 'faqs']),
    },
    methods: {
        async setCategory(index) {
            if (this.currentIndex === index) return;
            this.currentIndex = index;
            this.loading = true;
            try {
                const link = 'https://api.savingsbox.ng/api/user/faq-category/faqs?faq_category_id=' + this.faqCategories[this.currentIndex].id;
                const response = await this.$axios.get(link);
                if (response.data.success) {
                    this.$store.commit('setFaq', { faqs: response.data.data });
                    this.panels = null;
                    // alert('fetched faqs');
                }
            } catch (error) {
                console.log('an error occurred', error);
            } finally {
                this.loading = false;
            }

        },
        toggleExpand(index) {
            if (this.currentPanel === index) {
                // alert('this panel ' + index + ' was open');
                this.panelExpanded = false;
                this.currentPanel = null;
            } else {
                this.currentPanel = index;
                this.panelExpanded = true;
            }
        }
    },
    mounted() {
        //  set current index from store if   it not null
        if (this.$store.state.currentFaqIndex !== null) {
            this.currentIndex = this.$store.state.currentFaqIndex;
        }

        // animation for saving page
        this.slideY('.intro', 100);
        this.fadeIn('.intro-text', 0);

        // this.scale('.connect');
        this.fadeIn('.faq-left', 0);
        // this.slideX('.faq-right');

        setTimeout(() => {
            this.$gsap.from('.panel-item', {
                x: 194,
                // rotate: 45,
                scale: 0,
                opacity: 0,
                duration: 2,
                ease: 'Power1.easeInOut',
                stagger: 0.25,
                scrollTrigger: {
                    trigger: '.panel-item',
                    // pin: true,
                    // end: 'top',
                    end: 'top 70%',
                    scrub: .9
                }
            })
        }, 100);

    },
}
</script>
<style lang="scss" scoped>
header {
    color: white;
    padding-bottom: 10.1rem;
    background-image: radial-gradient(53.92% 506.18% at 40.28% 66.81%, #4169E1 0%, #61CA61 100%);

    h1 {
        font-size: 5.8rem;
        font-weight: 600;
    }

    p {
        font-size: 2rem;
        font-weight: 500;
        line-height: 7rem;
    }

    div.search-input {
        width: 70%;
        margin: auto;

        div {
            position: absolute;
            left: 0rem;
            margin-right: 4rem !important;
            border: 2rem solid transparent;
        }

        input {
            width: 100%;
            background-color: white;
            padding: 1.4rem;
            padding-left: 5rem;
            border-radius: 1.4rem;
            border: 2px solid transparent;

            &:focus {
                border: 2px solid var(--primary-color);
                outline: 1px solid gray;
            }
        }
    }
}

section.faq {
    padding: 8.1rem var(--landing-x-padding);

    h2 {
        font-size: 4.8rem;
        font-weight: 600;
        line-height: 5.6rem;
    }

    p {
        font-size: 1.8rem;
        color: #666B70;
    }

    ul {
        margin-right: 22rem;
        padding: 0rem;

        li {
            list-style-type: none;
            font-size: 1.8rem;
            color: #000831;
            font-weight: 400;
            padding: 1.5rem;
            cursor: pointer;
            transition: all .5s;

            &:hover {
                color: var(--primary-color);
                font-weight: 400;
            }
        }

        li+li {
            // margin-top: 3rem;
        }

        li.active {
            background-color: #E2E9FF;
            border-radius: 1rem;
            color: var(--primary-color);
            font-weight: 500;
        }
    }

    .v-expansion-panel-header {
        font-size: 1.8rem !important;
        color: #333940;
        font-weight: 500;
    }

    .theme--light.v-expansion-panels .v-expansion-panel {
        margin-top: 1rem;
    }
}

@media screen and (max-width: 800px) {
    header {
        color: var(--black2);
        padding-bottom: 1.1rem;
        background-image: none;

        h1 {
            font-size: 5.8rem;
            font-weight: 600;
        }

        p {
            font-size: 2rem;
            font-weight: 500;
            line-height: 7rem;
        }

        div.search-input {
            width: 80%;
            margin: auto;

            div {
                position: absolute;
                left: 0rem;
                margin-right: 4rem !important;
                border: 2rem solid transparent;
            }

            input {
                width: 100%;
                background-color: white;
                padding: 1.4rem;
                padding-left: 5rem;
                border-radius: 1.4rem;
                border: 1px solid #D0D0D0;

                &:focus {
                    border: 2px solid var(--primary-color);
                    outline: 1px solid gray;
                }
            }
        }
    }

    section.faq {
        padding: 8.1rem var(--landing-x-padding);

        h2 {
            font-size: 3rem;
            line-height: 4.0rem;
        }

        p {
            font-size: 1.8rem;
            color: #666B70;
        }

        ul {
            margin-right: 2rem;
            padding: 0rem;
            display: flex;
            overflow: scroll;
            overflow-y: hidden;

            li {
                list-style-type: none;
                font-size: 1.8rem;
                color: #000831;
                font-weight: 400;
                padding: 1.5rem;
                cursor: pointer;
                transition: all .5s;
                min-width: fit-content;

                &:hover {
                    color: var(--primary-color);
                    font-weight: 600;
                }
            }

            li+li {
                // margin-top: 3rem;
            }

            li.active {
                background-color: #E2E9FF;
                border-radius: 1rem;
                color: var(--primary-color);
                font-weight: 600;
            }
        }

        .v-expansion-panel-header {
            font-size: 1.8rem !important;
            color: #333940;
            font-weight: 500;
        }

        .theme--light.v-expansion-panels .v-expansion-panel {
            margin-top: 1rem;
        }
    }
}
</style>