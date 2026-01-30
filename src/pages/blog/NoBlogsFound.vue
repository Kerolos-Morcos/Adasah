<script setup>
import PrimaryButton from '@/components/PrimaryButton.vue';
import { inject } from 'vue';

const handleClearFilter = inject('handleClearFilter');
</script>

<template>
    <div class="no-posts text-center py-5">
        <div class="no-posts-icon mx-auto mb-4">
            <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <h3 class="no-posts-title mb-3">لا توجد مقالات</h3>
        <p class="no-posts-text mb-4">
            حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
        </p>
        <PrimaryButton v-slot:primaryBtn @click="handleClearFilter">
            إعادة تعيين الفلاتر
            <svg class="me-2" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        </PrimaryButton>
    </div>
</template>

<style scoped>
.no-posts {
    padding-top: 5rem;
    padding-bottom: 5rem;
}

.no-posts-icon {
    width: 96px;
    height: 96px;
    background: #161616;
    border: 1px solid #262626;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6b7280;
}

.no-posts-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #ffffff;
}

.no-posts-text {
    color: #9ca3af;
    max-width: 420px;
    margin-inline: auto;
}
</style>