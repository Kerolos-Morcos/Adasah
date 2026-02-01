<script setup>
import { computed, inject } from 'vue';
import { posts } from '@/store/posts';

const scrollTop = inject('scrollTop');
const post = inject('post');
const relatedPosts = computed(() => {
    return posts.filter(p => p.category === post.value.category && p.slug !== post.value.slug).slice(0, 3);
})
</script>

<template>
    <section class="related-posts mt-5 pt-5 borderTop">
        <div class="d-flex align-items-center justify-content-between mb-4">
            <div class="d-flex align-items-center gap-3">
                <span class="icon-box">
                    <i class="fa-solid fa-images"></i>
                </span>
                <div>
                    <h2 class="section-title mb-1">مقالات قد تعجبك</h2>
                    <p class="section-subtitle mb-0">استكشف المزيد من المحتوى المميز</p>
                </div>
            </div>
            <RouterLink to="/blog" class="view-all d-none d-sm-flex align-items-center gap-2" @click.native="scrollTop">
                عرض الكل
                <i class="bi bi-arrow-left d-flex align-items-center"></i>
            </RouterLink>
        </div>
        <div class="row g-4 pt-2 mb-4">
            <div class="col-sm-6 col-lg-4" v-for="post in relatedPosts" :key="post.slug">
                <RouterLink :to="{ name: 'blogDetails', params: { slug: post.slug } }" @click.native="scrollTop"
                    class="related-card d-block text-decoration-none h-100 mb-1">
                    <div class="card-image">
                        <img :src="post.image" :alt="post.title">
                        <span class="card-category">{{ post.category }}</span>
                    </div>
                    <div class="p-4">
                        <h3 class="card-title">
                            {{ post.title }}
                        </h3>
                        <div class="card-meta">
                            <span class="d-flex align-items-center gap-2">
                                <img :src="post.author.avatar" class="author-img">
                                {{ post.author.name }}
                            </span>
                            <span>{{ post.readTime }}</span>
                        </div>
                    </div>
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<style scoped>
.borderTop {
    border-top: 1px solid #262626;
}

.icon-box {
    width: 48px;
    height: 48px;
    background: rgba(249, 115, 22, 0.1);
    border: 1px solid rgba(249, 115, 22, 0.3);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-orange-500);
    font-size: 20px;
}

.section-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
}

.section-subtitle {
    font-size: 0.875rem;
    color: #9ca3af;
}

.view-all {
    color: var(--color-orange-500);
    font-weight: 600;
    transition: all 0.3s;
    text-decoration: none;
}

.view-all:hover {
    color: var(--color-orange-400);
    transform: translateX(4px);
}

.related-card {
    background: #111;
    border: 1px solid #262626;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.4s;
}

.related-card:hover {
    border-color: rgba(249, 115, 22, 0.3);
}

.card-image {
    position: relative;
    height: 190px;
    overflow: hidden;
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s;
}

.related-card:hover img {
    transform: scale(1.1);
}

.card-image::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, #111, transparent);
}

.card-category {
    position: absolute;
    top: 16px;
    right: 16px;
    background: var(--color-orange-500);
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 999px;
    z-index: 2;
}

.card-title {
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 12px;
    transition: color 0.3s;
}

.related-card:hover .card-title {
    color: var(--color-orange-500);
}

.card-meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
    color: #9ca3af;
}

.author-img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    object-fit: cover;
    transition: transform 0.7s;
}
</style>