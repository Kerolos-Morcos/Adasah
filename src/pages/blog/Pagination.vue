<script setup>
import { computed, inject, ref, watch } from 'vue'

const filteredPosts = inject('filteredPosts')

const currentPage = inject('currentPage')
const perPage = inject('perPage')

const totalPages = computed(() =>
    Math.ceil(filteredPosts.value.length / perPage)
)

watch(filteredPosts, () => {
    currentPage.value = 1
})
</script>

<template>
    <div class="pagination-wrapper mt-5">
        <button :class="{ disabled: currentPage === 1 }" class="page-btn" :disabled="currentPage === 1"
            @click="currentPage--">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
        </button>

        <button :class="{ active: currentPage === page }" v-for="page in totalPages" :key="page" class="page-number"
            @click="currentPage = page">{{ page }}</button>

        <button :class="{ disabled: currentPage === totalPages }" class="page-btn"
            :disabled="currentPage === totalPages" @click="currentPage++">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
        </button>
    </div>
    <p class="text-center text-neutral-500 mt-3 small">صفحة {{ currentPage }} من {{ totalPages }}</p>
</template>

<style scoped>
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