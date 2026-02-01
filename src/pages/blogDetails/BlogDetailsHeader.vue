<script setup>
import { inject } from 'vue';
import { postsDateArabicFormat } from '@/utils/utils.js';

const scrollTop = inject('scrollTop');
const post = inject('post');
</script>

<template>
    <section class="blog-hero position-relative overflow-hidden">
        <img :src="post.image" :alt="post.excerpt" class="blog-hero-img">
        <div class="hero-overlay-dark"></div>
        <div class="hero-overlay-gradient"></div>
        <div class="container position-absolute top-0 start-0 end-0 py-3 py-md-4">
            <nav class="breadcrumb-nav d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill">
                <RouterLink to="/" class="breadcrumb-link">
                    <i class="fa-solid fa-home"></i>
                </RouterLink>
                <i class="bi bi-chevron-left breadcrumb-separator"></i>
                <RouterLink to="/blog" class="breadcrumb-link" @click.native="scrollTop">
                    المدونة
                </RouterLink>
                <i class="bi bi-chevron-left breadcrumb-separator"></i>
                <span class="breadcrumb-current">
                    {{ post.category }}
                </span>
            </nav>
        </div>
        <div class="container position-absolute bottom-0 content start-0 pe-4">
            <div class="row justify-content-center align-content-center">
                <div class="col-lg-10 mx-auto">
                    <div class="d-flex flex-wrap align-items-center gap-3 mb-4">
                        <RouterLink :to="`/blog?category=${post.category}`" class="category-badge">
                            {{ post.category }}
                        </RouterLink>
                        <div class="d-flex align-items-center gap-4 text-muted-light small">
                            <span class="d-flex align-items-center gap-2">
                                <i class="fa-regular fa-calendar"></i>
                                {{ postsDateArabicFormat(post) }}
                            </span>
                            <span class="d-flex align-items-center gap-2">
                                <i class="fa-regular fa-clock"></i>
                                {{ post.readTime }}
                            </span>
                        </div>
                    </div>
                    <h1 class="blog-title max-w-4xl">
                        {{ post.title }}
                    </h1>
                    <div class="author-box d-flex align-items-center gap-3">
                        <img :src="post.author.avatar" :alt="post.author.name" class="author-img">
                        <div>
                            <p class="mb-0 fw-bold text-white">{{ post.author.name }}</p>
                            <small class="text-muted-light">{{ post.author.role }} </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.content {
    padding: 3.5rem 0;
}

.blog-hero {
    height: 60vh;
    min-height: 500px;
    background-color: #0a0a0a;
}

.blog-hero-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-overlay-dark {
    position: absolute;
    inset: 0;
    background: rgba(10, 10, 10, 0.1);
}

.hero-overlay-gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top,
            #0a0a0a 0%,
            rgba(10, 10, 10, 0.5) 40%,
            transparent 100%);
}

.breadcrumb-nav {
    background: rgba(0, 0, 0, 0.17);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    max-width: 100%;
    overflow-x: auto;
    white-space: nowrap;
}

.breadcrumb-link {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: 0.3s;
}

.breadcrumb-link:hover {
    color: #fff;
}

.breadcrumb-separator {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.3);
}

.breadcrumb-current {
    color: #f97316;
    font-weight: 600;
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.category-badge {
    background: #f97316;
    color: #fff;
    padding: 6px 16px;
    border-radius: 999px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    transition: 0.3s;
}

.category-badge:hover {
    background: #ea580c;
    color: #fff;
}

.text-muted-light {
    color: rgba(255, 255, 255, 0.7);
}

.blog-title {
    font-size: clamp(28px, 5vw, 56px);
    font-weight: 800;
    line-height: 1.2;
    color: white;
}

.author-box {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 16px;
    margin-top: 25px;
    width: fit-content;
}

.author-img {
    width: 56px;
    height: 56px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid rgba(249, 115, 22, 0.5);
}
</style>