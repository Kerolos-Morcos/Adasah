<script setup>
import HighlightedInfo from '@/components/HighlightedInfo.vue';

</script>

<template>
    <HighlightedInfo>
        <template #icon>
            <i class="bi bi-shield-fill color-orange-500"></i>
        </template>

        <template #title>
            خصوصيتك تهمنا
        </template>

        <template #subtitle>
            نحن ملتزمون بحماية معلوماتك الشخصية والشفافية بشأن ما نجمعه.
        </template>
    </HighlightedInfo>

</template>

<style scoped></style>