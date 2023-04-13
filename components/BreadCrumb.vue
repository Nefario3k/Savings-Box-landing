<template>
    <div class="b-container">
        <v-breadcrumbs :items="items" class="ml-n6">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
            <template v-slot:item="{ item }">
                <v-breadcrumbs-item :disabled="item.disabled">
                    <span>
                        {{ item.text }}
                    </span>
                </v-breadcrumbs-item>
            </template>
        </v-breadcrumbs>
    </div>
</template>
<script>
export default {
    props: ['items'],
    data() {
        return {
            /* items: [
                {
                    text: 'Home',
                    disabled: false,
                },
                {
                    text: 'Saving',
                    disabled: true,
                },
            ], */
        }
    },
}
</script>
<style lang="scss" scoped>
div.b-container {
    margin: 0px var(--landing-x-padding);

    span {
        // color: green;
    }
}
</style>