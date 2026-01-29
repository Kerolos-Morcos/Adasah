<script setup>

</script>

<template>
    <div class="ping-dot-parent">
        <span class="ping-dot"></span>
    </div>
</template>

<style scoped>
.ping-dot-parent {
    position: relative;
    width: 8px;
    height: 8px;
}

.ping-dot {
    position: absolute;
    inset: 0;
    background: var(--color-primary);
    border-radius: 50%;
    animation: ping 1.5s infinite;
}

@keyframes ping {

    75%,
    to {
        opacity: 0;
        transform: scale(1.2)
    }
}
</style>