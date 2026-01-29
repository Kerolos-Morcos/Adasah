<script setup>
import PingDot from '@/components/PingDot.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import SectionLabel from '@/components/SectionLabel.vue';
import postsData from '@/store/posts'
import ArticleItem from './ArticleItem.vue';

</script>

<template>
    <section class="featured-section position-relative overflow-hidden">
        <div class="featured-gradient"></div>
        <div class="container position-relative py-5">
            <div
                class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end mb-5 gap-3">
                <div>
                    <SectionLabel v-slot:sectionLabel>
                        <PingDot />
                        مميز
                    </SectionLabel>
                    <h2 class="section-title text-white mb-2">مقالات مختارة</h2>
                    <p class="section-subtitle">
                        محتوى منتقى لبدء رحلة تعلمك
                    </p>
                </div>
                <RouterLink to="/blog">
                    <PrimaryButton v-slot:primaryBtn class="rotate-parent"
                        style="border-radius: 15px; padding: 12px 20px;">
                        عرض الكل
                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            class="rotate-180 btn-arrow me-2">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </PrimaryButton>
                </RouterLink>
            </div>
            <!-- articles -->
            <div class="d-flex flex-column gap-4">
                <ArticleItem v-for="post in postsData.posts" :key="post.id" :post="post" />
            </div>
        </div>
    </section>

</template>

<style scoped>
.featured-section {
    background: #0a0a0a;
    padding-block: 1.5rem;
}

.featured-gradient {
    position: absolute;
    inset: 0 0 0 auto;
    width: 35%;
    background: linear-gradient(to left,
            rgba(249, 115, 22, .05),
            transparent);
}

.section-title {
    font-size: var(--text-6xl);
    line-height: var(--leading-relaxed, var(--text-4xl--line-height));
    --tw-leading: var(--leading-tight);
    line-height: var(--leading-tight);
    --font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
    color: var(--color-white);
}

.section-subtitle {
    color: var(--color-neutral-400);
    font-size: var(--text-lg);
    max-width: 420px;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: transform .3s ease;
}

.rotate-parent:hover .rotate-180 {
    transform: translateX(-4px) rotate(180deg);
}
</style>