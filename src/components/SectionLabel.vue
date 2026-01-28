<script setup>

</script>

<template>
    <div class="section-label d-inline-flex align-items-center gap-2 mb-4">
        <slot name="sectionLabel" />
    </div>
</template>

<style scoped>
.section-label {
    margin-bottom: calc(var(--spacing) * 6);
    align-items: center;
    gap: calc(var(--spacing) * 2);
    padding-inline: calc(var(--spacing) * 4);
    padding-block: calc(var(--spacing) * 2);
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
    font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    color: #f97316;
    background: #f973161a;
    border: 1px solid #f973164d;
    border-radius: 3.40282e38px;
    display: inline-flex;
}

.section-label:before {
    content: "";
    height: calc(var(--spacing) * 1.5);
    width: calc(var(--spacing) * 1.5);
    background: #f97316;
    border-radius: 3.40282e38px;
    animation: 2s infinite pulse;
}

@keyframes pulse {
    0% {
        opacity: 1
    }

    50% {
        opacity: 0.5
    }

    to {
        opacity: 1
    }
}
</style>