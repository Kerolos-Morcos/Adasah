<template>
    <div v-if="open" class="mobile-menu position-fixed start-0 end-0 top-100 mx-3 mt-3 z-50">
        <div class="menu-card">
            <a class="menu-link active" href="/">الرئيسية</a>
            <a class="menu-link" href="/blog">المدونة</a>
            <a class="menu-link" href="/about">من نحن</a>

            <PrimaryButton v-slot:primaryBtn>
                ابدأ القراءة
            </PrimaryButton>
        </div>
    </div>
</template>

<script setup>
import PrimaryButton from './PrimaryButton.vue';

defineProps({
    open: Boolean,
});
</script>

<style scoped>
.menu-card {
    background: #161616;
    backdrop-filter: blur(24px);
    border-radius: 1rem;
    padding: 1rem;
    border: 1px solid #262626;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.menu-link {
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    font-size: var(--text-sm);
    font-weight: var(--font-weight-medium);
    color: var(--color-neutral-400);
    transition: all 0.3s ease;
    text-decoration: none;
}

.menu-link:hover {
    background: #1a1a1a;
    color: white;
}

.menu-link.active {
    background: rgba(249, 115, 22, 0.1);
    color: var(--color-primary);
    border: 1px solid rgba(249, 115, 22, 0.3);
}
</style>
