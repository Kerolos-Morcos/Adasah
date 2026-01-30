<script setup>
import PingDot from '@/components/PingDot.vue';
import SectionLabel from '@/components/SectionLabel.vue';
import postsData from '@/store/posts.json'
import CategoryItem from './CategoryItem.vue';
import SectionText from '@/components/SectionText.vue';

const categoriesData = postsData.categories;
console.log("sa", categoriesData)
</script>

<template>
    <section class="categories-section position-relative py-5 border-top border-bottom border-dark">
        <div class="container">
            <div class="text-center mb-5">
                <SectionLabel v-slot:sectionLabel>
                    <PingDot />
                    التصنيفات
                </SectionLabel>
                <SectionText title-size="3.8rem" desc-size="1.2rem">
                    <template #sectionTitle>
                        استكشف حسب الموضوع
                    </template>
                    <template #sectionDesc>
                        اعثر على محتوى مصمم حسب اهتماماتك
                    </template>
                </SectionText>
            </div>
            <div class="row g-3 g-md-4">
                <CategoryItem v-for="category in categoriesData" :key="category.name" :category="category" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.categories-section {
    background: #111111;
}
</style>