<script setup>
import Categories from './home/Categories.vue';
import HomeHeader from './home/HomeHeader.vue';
import LastPublished from './home/LastPublished.vue';
import SpecialArticles from './home/SpecialArticles.vue';


</script>

<template>
    <HomeHeader style="padding-top: 85px;" />
    <SpecialArticles />
    <Categories />
    <LastPublished />
</template>

<style scoped></style>