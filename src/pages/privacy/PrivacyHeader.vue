<script setup>
import PageSpecialHeader from '@/components/PageSpecialHeader.vue';


</script>

<template>
    <PageSpecialHeader>
        <template #breadcrumb>
            <RouterLink to="/home">الرئيسية</RouterLink>
            <i class="bi bi-chevron-left"></i>
            <span>سياسة الخصوصية</span>
        </template>
        <template #icon>
            <i class="bi bi-lock-fill"></i>
        </template>
        <template #title>
            سياسة الخصوصية
        </template>
        <template #subtitle>
            آخر تحديث: 15 يناير 2026
        </template>
    </PageSpecialHeader>
</template>

<style scoped></style>