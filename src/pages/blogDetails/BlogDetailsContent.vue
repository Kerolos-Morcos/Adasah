<script setup>
import { inject } from 'vue';
import BlogSectionHeading from './BlogSectionHeading.vue';
import SectionTags from './SectionTags.vue';
import ShareArticleSection from './ShareArticleSection.vue';
import BlogSidebar from './BlogSidebar.vue';
import ArticlesYouMayLike from './ArticlesYouMayLike.vue';

const post = inject('post');
const parts = post.value.content.split('##');
</script>

<template>
    <section class="blog-content-section">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-8 order-2 order-lg-1">
                    <div class="highlight-box mb-5">
                        <p class="m-0">
                            "{{ post.excerpt }}"
                        </p>
                    </div>
                    <div class="article-content">
                        <p>
                            {{ parts[0].trim() }}
                        </p>
                        <div v-for="(part, index) in parts.slice(1)" :key="index">
                            <BlogSectionHeading :part="part" :index="index" />
                        </div>
                    </div>
                    <SectionTags :post="post" />
                    <ShareArticleSection />
                    <div class="author-card mt-4">
                        <img :src="post.author.avatar" :alt="post.author.name">
                        <div>
                            <span class="author-label">كاتب المقال</span>
                            <h4>{{ post.author.name }}</h4>
                            <p class="author-job m-0">{{ post.author.role }}</p>
                        </div>
                    </div>
                </div>
                <BlogSidebar :post="post" :parts="parts" />
            </div>
            <ArticlesYouMayLike :post="post" />
        </div>
    </section>
</template>

<style scoped>
.blog-content-section {
    background: #0a0a0a;
    padding: 2rem 0;
}

.highlight-box {
    background: linear-gradient(90deg, rgba(249, 115, 22, .15), rgba(234, 179, 8, .05));
    border: 1px solid rgba(249, 115, 22, .3);
    border-radius: 20px;
    padding: 24px;
    font-style: italic;
    color: #e5e7eb;
    font-size: 1.1rem;
}

.article-content p {
    color: #d1d5db;
    line-height: 1.9;
    font-size: 1.1rem;
}

.author-card {
    background: linear-gradient(135deg, #161616, #111);
    border: 1px solid #262626;
    border-radius: 20px;
    padding: 24px;
    display: flex;
    gap: 20px;
}

.author-card img {
    width: 96px;
    height: 96px;
    border-radius: 16px;
    object-fit: cover;
    border: 3px solid rgba(249, 115, 22, .4);
}

.author-label {
    color: #f97316;
    font-size: 12px;
    font-weight: 600;
}

.author-card h4 {
    color: #fff;
    margin: 4px 0;
}

.author-job {
    color: #9ca3af;
    font-size: 14px;
}
</style>