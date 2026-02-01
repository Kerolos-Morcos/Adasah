<script setup>
import { useRoute } from 'vue-router';
import BlogDetailsHeader from './blogDetails/BlogDetailsHeader.vue';
import posts from '@/store/posts.json'
import { computed, provide } from 'vue';
import BlogDetailsContent from './blogDetails/BlogDetailsContent.vue';

const route = useRoute();

const post = computed(() => {
    return posts.posts.find(p => p.slug === route.params.slug)
})
provide('post', post)
</script>

<template>
    <BlogDetailsHeader />
    <BlogDetailsContent />
</template>

<style scoped></style>