<script setup>
import { postsDateArabicFormat } from '@/utils/utils';
const { post } = defineProps(['post'])

</script>

<template>
    <article class="featured-article" v-show="post.featured">
        <RouterLink :to="`/blog/${post.slug}`" class="text-decoration-none d-block">
            <div class="row g-0">
                <div class="col-md-6 position-relative article-img">
                    <img :src="post.image" :alt="post.slug">
                    <div class="img-overlay"></div>
                    <span class="featured-badge">
                        <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        مميز
                    </span>
                </div>
                <div class="col-md-6 p-4 p-md-5 d-flex flex-column">
                    <div class="d-flex align-items-center gap-3 mb-3">
                        <span class="category-pill">{{ post.category }}</span>
                        <span class="read-time">
                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {{ post.readTime }}
                        </span>
                    </div>
                    <h3 class="article-title mb-3">
                        {{ post.title }}
                    </h3>
                    <p class="article-desc mb-4">
                        {{ post.excerpt }}
                    </p>
                    <div class="d-flex justify-content-between align-items-center mt-auto">
                        <div class="d-flex align-items-center gap-3">
                            <div class="author-img">
                                <img :src="post.author.avatar">
                                <span></span>
                            </div>
                            <div>
                                <p class="author-name">{{ post.author.name }}</p>
                                <p class="author-date">{{ postsDateArabicFormat(post) }}</p>
                            </div>
                        </div>

                        <span class="read-more">
                            اقرأ المقال
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                class="rotate-180">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </RouterLink>
    </article>
</template>

<style scoped>
.featured-article {
    background: #161616;
    border-radius: 24px;
    border: 1px solid #262626;
    overflow: hidden;
    transition: border-color .4s ease;
}

.featured-article:hover {
    border-color: rgba(249, 115, 22, .3);
}

.article-img {
    height: 100%;
    overflow: hidden;
}

.article-img img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    transition: transform 0.7s ease;
}

.featured-article:hover img {
    transform: scale(1.1);
}

.img-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top,
            rgba(0, 0, 0, .5),
            transparent);
    opacity: 0;
    transition: opacity .4s;
}

.featured-article:hover .img-overlay {
    opacity: 1;
}

.featured-badge {
    position: absolute;
    top: 16px;
    right: 16px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    border-radius: 999px;
    background: linear-gradient(90deg,
            var(--color-primary),
            #facc15);
}

.category-pill {
    padding: 4px 12px;
    font-size: 12px;
    font-weight: 600;
    color: var(--color-primary);
    background: rgba(249, 115, 22, .1);
    border: 1px solid rgba(249, 115, 22, .2);
    border-radius: 999px;
}

.read-time {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    color: var(--color-neutral-500);
}

.article-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    transition: color .3s;
}

.featured-article:hover .article-title {
    color: var(--color-primary);
}

.article-desc {
    color: var(--color-neutral-400);
    line-height: 1.7;
}

.author-img {
    position: relative;
    width: 48px;
    height: 48px;
}

.author-img img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #262626;
    transition: transform .7s ease;
}

.author-img span {
    position: absolute;
    bottom: -4px;
    left: -4px;
    width: 16px;
    height: 16px;
    background: var(--color-primary);
    border-radius: 50%;
    border: 2px solid #161616;
}

.author-name {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
}

.author-date {
    margin: 0;
    font-size: 12px;
    color: var(--color-neutral-500);
}

.read-more {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 600;
    color: var(--color-primary);
    transition: gap .3s ease;
}

.featured-article:hover .read-more {
    gap: 12px;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: transform .3s ease;
}

.rotate-parent:hover .rotate-180 {
    transform: translateX(-4px) rotate(180deg);
}
</style>