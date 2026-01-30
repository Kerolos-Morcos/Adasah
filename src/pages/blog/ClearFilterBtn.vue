<script setup>
import { inject } from 'vue';

const { route } = defineProps(['route'])
const emit = defineEmits(['handleClearFilter'])
const searchQuery = inject('searchQuery');
</script>

<template>
    <button v-show="route.query.category || searchQuery" class="clear-filters-btn" @click="emit('handleClearFilter')">
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        مسح الفلاتر
    </button>
</template>

<style scoped>
.clear-filters-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    background: transparent;
    border: none;
    color: var(--color-neutral-500);
    transition: color .3s ease;
}

.clear-filters-btn:hover {
    color: var(--color-orange-500);
}

.clear-filters-btn svg {
    transition: transform .3s ease;
}

.clear-filters-btn:hover svg {
    transform: rotate(90deg);
}
</style>