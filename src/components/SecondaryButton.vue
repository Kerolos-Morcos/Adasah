<script setup>

</script>

<template>
    <button class="btn-secondary">
        <slot name="secondaryBtn" />
    </button>
</template>

<style scoped>
.btn-secondary {
    cursor: pointer;
    padding-inline: calc(var(--spacing) * 8);
    padding-block: calc(var(--spacing) * 4);
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
    color: var(--color-white);
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: .3s;
    background-color: #0000;
    border: 1px solid #333;
    border-radius: 3.40282e38px;
    justify-content: center;
    align-items: center;
    transition-duration: .3s;
    display: inline-flex;
}
.btn-secondary:hover {
    color: #f97316;
    background: #f973161a;
    border-color: #f97316;
}
</style>