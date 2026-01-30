<script setup>
const props = defineProps(['view'])

const emit = defineEmits(['update:view'])

const setView = (mode) => {
    emit('update:view', mode)
}

</script>

<template>
    <div class="view-toggle d-flex">
        <button :class="{ active: view === 'grid' }" class="view-btn" title="عرض شبكي" @click="setView('grid')">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
        </button>
        <button :class="{ active: view === 'list' }" class="view-btn" title="عرض قائمة" @click="setView('list')">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
    </div>
</template>

<style scoped>
/* view toggle */
.view-toggle {
    background: #161616;
    border: 1px solid #262626;
    border-radius: 12px;
    padding: 4px;
}

.view-btn {
    background: none;
    border: 0;
    color: #9ca3af;
    padding: 8px;
    border-radius: 8px;
    transition: 0.3s;
}

.view-btn.active {
    background: #f97316;
    color: #fff;
}

.view-btn:hover {
    color: #fff;
}
</style>