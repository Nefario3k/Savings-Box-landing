<template>
    <div class="" style="">
        <img v-for="(item, index) in 4" :key="index" src="/images/profile-image.png" width="32px" alt="latest user">
        <span>300 New Users</span>
    </div>
</template>
<style lang="scss" scoped>
div {
    font-size: 1.4rem;
    color: #333940;
    font-weight: 500;

    img+img {
        display: inline-block;
        margin-left: -1.5rem;
    }
}
</style>