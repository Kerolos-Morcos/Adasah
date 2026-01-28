<script setup>

</script>

<template>
    <div class="section-grid"></div>
    <div class="blob blob-orange"></div>
    <div class="blob blob-yellow"></div>
    <div class="blob blob-center"></div>
</template>

<style scoped>
.section-grid {
    position: absolute;
    inset: 0;
    background:
        linear-gradient(rgba(38, 38, 38, .5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(38, 38, 38, .5) 1px, transparent 1px);
    background-size: 60px 60px;
}

.blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(64px);
}

.blob-orange {
    width: 280px;
    height: 280px;
    background: rgba(249, 115, 22, .1);
    top: 80px;
    left: 40px;
}

.blob-yellow {
    width: 380px;
    height: 380px;
    background: rgba(251, 191, 36, .05);
    bottom: 80px;
    right: 40px;
}

.blob-center {
    width: 500px;
    height: 500px;
    background: rgba(249, 115, 22, .05);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>