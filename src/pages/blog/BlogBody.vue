<script setup>
import { useRoute, useRouter } from 'vue-router';
import LastPublishedCard from '../home/LastPublishedCard.vue';
import { computed, inject, provide, ref } from 'vue';
import ClearFilterBtn from './ClearFilterBtn.vue';
import ToggleView from './ToggleView.vue';
import ArticleItem from '../home/ArticleItem.vue';
import NoBlogsFound from './NoBlogsFound.vue';
import Pagination from './Pagination.vue';

const route = useRoute();
const router = useRouter();

const filteredPosts = inject('filteredPosts');

const searchQuery = inject('searchQuery')
function handleClearFilter() {
    if (searchQuery.value) {
        searchQuery.value = '';
    }
    router.push('/blog')
}
provide('handleClearFilter', handleClearFilter);

const currentPage = ref(1);
const perPage = 6
const paginatedPosts = computed(() => {
    return filteredPosts.value.slice(
        (currentPage.value - 1) * perPage,
        currentPage.value * perPage
    )
})
provide('currentPage', currentPage)
provide('perPage', perPage)

const viewMode = ref('grid')
</script>

<template>
    <section class="blog-list-section">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
                <p class="text-neutral-500 mb-0">
                    عرض <strong class="text-white"> {{ filteredPosts.length }} </strong> مقالات
                    <span v-show="route.query.category">في <span class="color-orange-500"> {{ filteredPosts[0]?.category
                        || ''
                            }}</span></span>
                </p>
                <div class="d-flex align-items-center gap-2">
                    <ToggleView v-model:view="viewMode" />
                    <ClearFilterBtn :route="route" @handleClearFilter="handleClearFilter" />
                </div>
            </div>
            <div v-if="viewMode === 'grid'" class="row g-4">
                <LastPublishedCard v-for="post in paginatedPosts" :key="post.id" :post="post" />
            </div>
            <div v-else class="d-flex flex-column gap-5">
                <ArticleItem v-for="post in paginatedPosts" :key="post.id" :post="post" />
            </div>
            <NoBlogsFound v-if="filteredPosts.length === 0" />
            <Pagination v-if="filteredPosts.length > 0" />
        </div>
    </section>
</template>

<style scoped>
.blog-list-section {
    padding: 3rem 0;
    background: #0a0a0a;
}
</style>