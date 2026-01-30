<script setup>
import { useRoute, useRouter } from 'vue-router';
import LastPublishedCard from '../home/LastPublishedCard.vue';
import { inject, provide, ref } from 'vue';
import ClearFilterBtn from './ClearFilterBtn.vue';
import ToggleView from './ToggleView.vue';
import ArticleItem from '../home/ArticleItem.vue';
import NoBlogsFound from './NoBlogsFound.vue';

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
                <LastPublishedCard v-for="post in filteredPosts" :key="post.id" :post="post" />
            </div>
            <div v-else class="d-flex flex-column gap-5">
                <ArticleItem v-for="post in filteredPosts" :key="post.id" :post="post" />
            </div>
            <NoBlogsFound v-if="filteredPosts.length === 0" />
            <!-- pagination -->
            <div class="pagination-wrapper mt-5">
                <button class="page-btn disabled">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button class="page-number active">1</button>
                <button class="page-number">2</button>
                <button class="page-number">3</button>
                <button class="page-number">4</button>
                <button class="page-number">5</button>

                <button class="page-btn">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <p class="text-center text-muted mt-3 small">صفحة 1 من 5</p>

        </div>
    </section>
</template>

<style scoped>
.blog-list-section {
    padding: 3rem 0;
    background: #0a0a0a;
}

/* pagination */
.pagination-wrapper {
    display: flex;
    justify-content: center;
    gap: 6px;
}

.page-btn,
.page-number {
    min-width: 44px;
    height: 44px;
    border-radius: 12px;
    border: 1px solid #262626;
    background: #161616;
    color: #9ca3af;
    transition: 0.3s;
}

.page-number.active {
    background: linear-gradient(90deg, #f97316, #ea580c);
    color: #fff;
    border: none;
}

.page-number:hover,
.page-btn:hover {
    color: #fff;
    border-color: rgba(249, 115, 22, .5);
}

.page-btn.disabled {
    opacity: .4;
    cursor: not-allowed;
}
</style>