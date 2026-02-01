<script setup>
defineProps({
    color: {
        type: String,
        default: '249, 115, 22'
    },
    subColor: {
        type: String,
        default: '255, 185, 109'
    }
})
</script>

<template>
    <div class="info-card mb-4" :style="{
        '--main-color': color,
        '--sub-color': subColor
    }">
        <div class="d-flex align-items-start gap-3">
            <div class="icon-slot flex-shrink-0">
                <slot name="icon" />
            </div>

            <div>
                <h3 class="info-title mb-2">
                    <slot name="title" />
                </h3>

                <p class="info-subtitle mb-0">
                    <slot name="subtitle" />
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.info-card {
    background-color: rgba(var(--main-color), 0.1);
    border: 1px solid rgba(var(--main-color), 0.2);
    border-radius: 1rem;
    padding: 1.5rem;
    transition: all 0.3s ease;
}

.icon-slot svg {
    width: 24px;
    height: 24px;
    color: rgb(var(--main-color));
}

.info-title {
    font-weight: 600;
    font-size: 1rem;
    color: rgb(var(--main-color));
}

.info-subtitle {
    font-size: 0.875rem;
    color: rgba(var(--sub-color), 0.7);
}
</style>
