<script setup>
const { post } = defineProps(['post'])
import { postsDateArabicFormat } from '@/utils/utils';

</script>

<template>
    <div class="col-md-6 col-lg-4" v-show="post.date >= '2026-01-03' && post.date <= '2026-01-08'">
        <article class="post-card">
            <a href="#" class="text-decoration-none">
                <div class="post-image">
                    <img :src="post.image" :alt="post.slug">
                    <div class="post-overlay"></div>
                    <span class="post-category">{{ post.category }}</span>
                </div>
                <div class="p-4">
                    <div class="post-meta mb-3">
                        <span>{{ post.readTime }}</span>
                        <span class="dot"></span>
                        <span>{{ postsDateArabicFormat(post) }}</span>
                    </div>
                    <h3 class="post-title">
                        {{ post.title }}
                    </h3>
                    <p class="post-excerpt">
                        {{ post.excerpt }}
                    </p>
                    <div class="post-footer">
                        <div class="d-flex align-items-center gap-3">
                            <img class="author-img" :src="post.author.avatar">
                            <div>
                                <p class="author-name">{{ post.author.name }}</p>
                                <p class="author-role">{{ post.author.role }}</p>
                            </div>
                        </div>
                        <div class="arrow-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </a>
        </article>
    </div>
</template>

<style scoped>
.post-card {
    background: var(--color-dark-card);
    border: 1px solid var(--color-border);
    border-radius: 1.5rem;
    overflow: hidden;
    transition: all .4s;
}

.post-card:hover {
    transform: translateY(-6px);
    border-color: color-mix(in oklab, var(--color-orange-500) 30%, transparent);
}

.post-image {
    position: relative;
    height: 210px;
    overflow: hidden;
}

.post-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .7s ease;
}

.post-card:hover img {
    transform: scale(1.1);
}

.post-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, .6), transparent);
    opacity: 0;
    transition: opacity .4s;
}

.post-card:hover .post-overlay {
    opacity: 1;
}

.post-category {
    position: absolute;
    top: 16px;
    right: 16px;
    font-size: 0.75rem;
    padding: 4px 10px;
    background: rgba(10, 10, 10, .8);
    border: 1px solid var(--color-border-light);
    border-radius: 999px;
    color: #fff;
}

.post-meta {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: .875rem;
    color: var(--color-neutral-500);
}

.post-meta .dot {
    width: 4px;
    height: 4px;
    background: var(--color-neutral-600);
    border-radius: 50%;
}

.post-title {
    color: #fff;
    font-weight: 700;
    margin-bottom: .75rem;
    transition: color .3s;
}

.post-card:hover .post-title {
    color: var(--color-orange-500);
}

.post-excerpt {
    color: var(--color-neutral-400);
    font-size: .875rem;
}

.post-footer {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.author-img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid var(--color-border);
    transition: all .3s;
}

.author-name {
    color: #fff;
    font-size: .875rem;
    margin: 0;
}

.author-role {
    color: var(--color-neutral-500);
    font-size: .75rem;
}

.arrow-btn {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: color-mix(in oklab, var(--color-orange-500) 10%, transparent);
    border: 1px solid color-mix(in oklab, var(--color-orange-500) 20%, transparent);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s;
}

.arrow-btn svg {
    width: 16px;
    height: 16px;
    color: var(--color-orange-500);
    transform: rotate(180deg);
}

.post-card:hover .arrow-btn {
    background: var(--color-orange-500);
}

.post-card:hover .arrow-btn svg {
    color: #fff;
}
</style>