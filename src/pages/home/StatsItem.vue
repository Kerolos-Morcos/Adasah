<script setup>
const { stat } = defineProps([
    "stat",
])
</script>

<template>
    <div class="col-6 col-md-3">
        <div class="glass-card text-center">
            <i :class="`${stat.icon} bi bi-journal-text color-orange-500 fs-3 mb-1`"></i>
            <p class="stat-number gradient-text">{{ stat.count }}</p>
            <p class="stat-label">{{ stat.title }}</p>
        </div>
    </div>
</template>

<style scoped>
.glass-card {
    background: rgba(22, 22, 22, .7);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    padding: 16px;
    transition: transform .3s ease;
}

.glass-card:hover {
    transform: scale(1.05);
}

.gradient-text {
    -webkit-text-fill-color: transparent;
    background: linear-gradient(135deg, #f97316, #fbbf24);
    -webkit-background-clip: text;
    background-clip: text;
}

.stat-number {
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0;
}

.stat-label {
    margin: 0;
    font-size: .875rem;
    color: var(--color-neutral-500);
}
</style>