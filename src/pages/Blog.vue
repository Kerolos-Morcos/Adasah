<script setup>
import BlogBody from './blog/BlogBody.vue';
import BlogHeader from './blog/BlogHeader.vue';
import { ref, computed, provide } from 'vue'
import { useRoute } from 'vue-router'
import postsData from '@/store/posts.json'

const route = useRoute()

const searchQuery = ref('')

const filteredPosts = computed(() => {
    let posts = postsData.posts

    if (route.query.category) {
        posts = posts.filter(p => p.category === route.query.category)
    }

    if (searchQuery.value.trim()) {
        const q = searchQuery.value.toLowerCase()
        posts = posts.filter(p =>
            p.title.toLowerCase().includes(q) ||
            p.excerpt.toLowerCase().includes(q)
        )
    }

    return posts
})

provide('searchQuery', searchQuery)
provide('filteredPosts', filteredPosts)
</script>

<template>
    <BlogHeader />
    <BlogBody />
</template>

<style scoped></style>