<script setup>
const { part, index } = defineProps(['part', 'index'])
</script>

<template>
    <h2 :id="`section-${index}`" class="article-heading">
        <span class="icon-box">
            <i class="fa-solid fa-camera"></i>
        </span>
        {{ part.split('\n')[0].trim() }}
    </h2>
    <p>
        {{ part.split('\n').slice(1).join('').trim() }}
    </p>
</template>

<style scoped>
.article-heading {
    color: #fff;
    font-size: 1.9rem;
    font-weight: 800;
    margin: 3rem 0 1.5rem;
    display: flex;
    align-items: center;
    gap: 16px;
    scroll-margin-top: 120px;
}
</style>