<script setup>
const { post } = defineProps(['post'])
</script>

<template>
    <div class="content-box mt-5">
        <h5 class="d-flex align-items-center mb-4 gap-2">
            <i class="bi bi-tags icon-box"></i> الوسوم
        </h5>
        <div class="d-flex flex-wrap gap-2">
            <span v-for="tag in post.tags" :key="tag" class="tag">
                #{{ tag }}
            </span>
        </div>
    </div>
</template>

<style scoped>
.tag {
    padding: 6px 16px;
    border-radius: 999px;
    border: 1px solid #262626;
    background: #1a1a1a;
    color: #9ca3af;
    font-size: 14px;
    cursor: pointer;
    transition: .3s;
}

.tag:hover {
    color: #f97316;
    border-color: rgba(249, 115, 22, .5);
}
</style>