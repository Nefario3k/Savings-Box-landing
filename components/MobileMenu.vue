<template>
    <div class="container">
        <ul class="">
            <li v-for="item in links" :key="item.text" @click="linkClicked(item.text)">
                <template v-if="item.text != 'Services'">
                    {{ item.text }}
                </template>
                <template v-else>
                    {{ item.text }}
                    <v-icon class="float-right">mdi-chevron-right</v-icon>
                </template>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    data() {
        return {
            links: null,
            services: null,
            showSubMenu: false,
        }
    },
    methods: {
        linkClicked(text) {
            alert(text);
            setTimeout(() => {
                this.menuOpen = true;
            }, 2000);
        }
    },
    mounted() {
    },
}
</script>
<style lang="scss" scoped>
div.container {
    background-color: #fff;

    ul {
        li {
            list-style-type: none;
            font-weight: 500;
            font-size: 1.6rem;
        }

        li+li {
            margin-top: 1.6rem;
        }
    }
}
</style>