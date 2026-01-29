<script setup>

</script>

<template>
    <h1 class="section-title mb-4">
        <slot name="sectionTitle" />
        <span class="gradient-text">
            <slot name="sectionSpan" />
        </span><br>
        <slot name="sectionTitleCompletion" />
    </h1>
    <p class="section-desc text-neutral-400 mb-10 mx-auto leading-relaxed">
        <slot name="sectionDesc" />
    </p>
</template>

<style scoped>
.section-title {
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 800;
    color: #fff;
    line-height: 1.15;
}

.section-desc {
    font-size: 1.5rem;
    color: var(--color-neutral-400);
    max-width: 640px;
}

.gradient-text {
    -webkit-text-fill-color: transparent;
    background: linear-gradient(135deg, #f97316, #fbbf24);
    -webkit-background-clip: text;
    background-clip: text;
    font-weight: 800;
}
</style>