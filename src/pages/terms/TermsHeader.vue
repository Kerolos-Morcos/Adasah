<script setup>
import PageSpecialHeader from '@/components/PageSpecialHeader.vue';


</script>

<template>
    <PageSpecialHeader>
        <template #breadcrumb>
            <RouterLink to="/home">الرئيسية</RouterLink>
            <i class="bi bi-chevron-left"></i>
            <span> شروط الخدمة</span>
        </template>
        <template #icon>
            <i class="bi bi-journal-text"></i>
        </template>
        <template #title>
            شروط الخدمة
        </template>
        <template #subtitle>
            آخر تحديث: 15 يناير 2026
        </template>
    </PageSpecialHeader>
</template>

<style scoped></style>