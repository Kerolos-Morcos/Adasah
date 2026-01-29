<script setup>
import PingDot from '@/components/PingDot.vue';
import SectionLabel from '@/components/SectionLabel.vue';
import postsData from '@/store/posts'
import CategoryItem from './CategoryItem.vue';
const categoriesData = postsData.categories
</script>

<template>
    <section class="categories-section position-relative py-5 border-top border-bottom border-dark">
        <div class="container">
            <div class="text-center mb-5">
                <SectionLabel v-slot:sectionLabel>
                    <PingDot />
                    التصنيفات
                </SectionLabel>
                <h2 class="section-title text-white mb-2">استكشف حسب الموضوع</h2>
                <p class="section-subtitle mx-auto">اعثر على محتوى مصمم حسب اهتماماتك</p>
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

.section-title {
    font-size: 3.8rem;
    font-weight: 800;
}

.section-subtitle {
    font-size: 1.2rem;
    max-width: 420px;
    color: #999;
}
</style>