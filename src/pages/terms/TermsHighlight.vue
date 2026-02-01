<script setup>
import HighlightedInfo from '@/components/HighlightedInfo.vue';


</script>

<template>
    <HighlightedInfo color="240, 177, 0" sub-color="255, 223, 32">
        <template #icon>
            <i class="bi bi-exclamation-triangle color-yellow-500"></i>
        </template>

        <template #title>
            إشعار مهم
        </template>

        <template #subtitle>
            يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا. بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بهذه
            الشروط.
        </template>
    </HighlightedInfo>
</template>

<style scoped></style>