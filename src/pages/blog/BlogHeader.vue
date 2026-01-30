<script setup>
import GridBlobStyle from '@/components/GridBlobStyle.vue';
import SectionLabel from '@/components/SectionLabel.vue';
import SectionText from '@/components/SectionText.vue';
import BlogBody from './BlogBody.vue';
import postsData from '@/store/posts.json'
import CategoryBtn from './CategoryBtn.vue';
import { computed, inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const categoryData = postsData.categories
const isAllActive = computed(() => {
    return !route.query.category
})

const searchQuery = inject('searchQuery');
</script>

<template>
    <main class="flex-grow-1">
        <section class="blog-hero position-relative overflow-hidden">
            <GridBlobStyle />
            <div class="container text-center position-relative py-5">
                <SectionLabel v-slot:sectionLabel> <svg width="16" height="16" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg> مدونتنا
                </SectionLabel>
                <SectionText title-size="3.5rem" desc-size="1.2rem">
                    <template #sectionTitle>
                        استكشف
                    </template>
                    <template #sectionSpan>
                        مقالاتنا
                    </template>
                    <template #sectionDesc>
                        اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
                    </template>
                </SectionText>
            </div>
        </section>
    </main>
    <!-- FILTER BAR -->
    <div class="blog-filter">
        <div class="container py-3">
            <div class="row g-3 align-items-center">
                <div class="col-md-4 position-relative">
                    <input v-model="searchQuery" type="text" class="form-control input-dark ps-5"
                        placeholder="ابحث في المقالات...">
                    <svg class="search-icon" width="20" height="20" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <div class="col-md-8 d-flex flex-wrap justify-content-md-end gap-2">
                    <button :class="isAllActive ? 'btn-primary-custom' : 'btn-dark-outline'" class="btn"
                        @click="router.push('/blog')">
                        جميع المقالات
                    </button>
                    <CategoryBtn v-for="category in categoryData" :category="category" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* HERO */
.blog-hero {
    background: var(--color-dark);
}

.hero-grid {
    position: absolute;
    inset: 0;
    background:
        linear-gradient(rgba(38, 38, 38, .5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(38, 38, 38, .5) 1px, transparent 1px);
    background-size: 60px 60px;
}

/* FILTER BAR */
.blog-filter {
    position: sticky;
    top: 80px;
    z-index: 20;
    background: #0A0A0A;
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--color-border);
}

.input-dark {
    background: var(--color-dark-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    color: var(--color-neutral-400);
    padding: 10px;
}

.input-dark::placeholder {
    color: var(--color-neutral-400);
}


.search-icon {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    color: var(--color-neutral-500);
}

.input-dark:focus {
    outline: none;
    box-shadow: none;
    background: #0f0f0f;
    border-color: var(--color-primary);
    box-shadow:
        0 0 0 3px rgba(249, 115, 22, 0.25),
        0 8px 30px rgba(0, 0, 0, 0.4);
    color: #fff;
}
</style>