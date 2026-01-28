<script setup>

</script>

<template>
    <button class="btn-primary">
        <slot name="primaryBtn" />
    </button>
</template>

<style scoped>
.btn-primary {
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-weight: var(--font-weight-semibold);
    font-size: var(--text-sm);
    color: var(--color-white);
    padding: 1rem 2rem;
    border-radius: 200px;
    background: linear-gradient(135deg, rgb(249, 115, 22), rgb(234, 88, 12));
    transition: all 0.3s ease;
}

.btn-primary:hover {
    transform: translateY(-1.5px);
}
</style>