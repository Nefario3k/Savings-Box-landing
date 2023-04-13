export const state = () => ({
    faqCategories: [],
    faqs: [],
    currentFaqIndex: null,
})

export const getters = {
    /* getCounter(state) {
        return state.counter
    } */
}

export const mutations = {
    setFaq(state, faqData) {
        for (const key in faqData) {
            state[key] = faqData[key];
        }
    }
}

export const actions = {
    /* fetchCounter({ state }) {
        // make request
        const res = { data: 10 };
        state.counter = res.data;
        return res.data;
    } */
}