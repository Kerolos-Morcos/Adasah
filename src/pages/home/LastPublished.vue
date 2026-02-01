<script setup>
import PingDot from '@/components/PingDot.vue';
import SectionLabel from '@/components/SectionLabel.vue';
import LastPublishedCard from './LastPublishedCard.vue';
import postsData from '@/store/posts'
import { inject } from 'vue';

const scrollTop = inject('scrollTop');
</script>

<template>
    <section class="latest-section position-relative overflow-hidden">
        <div class="latest-bg"></div>

        <div class="container-xl position-relative">
            <div class="mb-5">
                <SectionLabel v-slot:sectionLabel>
                    <PingDot />
                    الأحدث
                </SectionLabel>
                <h2 class="section-title text-white mb-3">
                    أحدث المقالات
                </h2>
                <div class="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3">
                    <p class="section-subtitle mb-0">
                        محتوى جديد طازج من المطبعة
                    </p>
                    <RouterLink to="/blog" class="latest-link d-inline-flex align-items-center gap-2"
                        @click.native="scrollTop">
                        عرض جميع المقالات
                        <svg class="icon-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </RouterLink>
                </div>
            </div>
            <div class="row g-4">
                <LastPublishedCard v-for="post in postsData.posts" :key="post.id"
                    v-show="post.date >= '2026-01-03' && post.date <= '2026-01-08'" :post="post" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.latest-section {
    padding: 6rem 0;
    background: var(--color-dark);
}

.latest-bg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 35%;
    height: 100%;
    background: linear-gradient(to right,
            color-mix(in oklab, var(--color-orange-500) 5%, transparent),
            transparent);
}

.section-title {
    font-size: var(--text-6xl);
    color: #fff;
    font-weight: 700;
}

.section-subtitle {
    font-size: var(--text-lg);
    color: var(--color-neutral-400);
    max-width: 32rem;
}

.latest-link {
    color: var(--color-orange-500);
    font-weight: 600;
    transition: color .3s;
    text-decoration: none;
}

.latest-link:hover {
    color: var(--color-orange-400);
}

.latest-link .icon-arrow {
    width: 20px;
    height: 20px;
    transform: rotate(180deg);
    transition: transform .3s;
}

.latest-link:hover .icon-arrow {
    transform: translateX(-4px) rotate(180deg);
}
</style>