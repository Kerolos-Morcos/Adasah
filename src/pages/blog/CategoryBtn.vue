<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const { category } = defineProps(['category'])
const router = useRouter();
const route = useRoute();
function handleClick() {
    router.push({
        path: '/blog',
        query: { category: category.name }
    })
}

const isActive = computed(() => {
    return route.query.category === category.name
})
</script>

<template>
    <button class="btn" :class="isActive ? 'btn-primary-custom' : 'btn-dark-outline'" @click="handleClick">{{
        category.name
    }}</button>
</template>

<style scoped></style>