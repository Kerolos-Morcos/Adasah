<script setup>
import PrimaryButton from '@/components/PrimaryButton.vue';
import { postsDateArabicFormat } from '@/utils/utils';
import { inject } from 'vue';

const { post, parts } = defineProps(['post', 'parts'])
const scrollTop = inject('scrollTop');
</script>

<template>
    <aside class="col-lg-4 order-1 order-lg-2">
        <div class="sidebar sticky-top">
            <div class="content-box">
                <h5 class="box-title d-flex align-items-center gap-2">
                    <i class="bi bi-list icon-box"></i> محتويات المقال
                </h5>
                <ul class="toc-list">
                    <li v-for="(part, index) in parts.slice(1)" :key="index">
                        <a class="toc-link d-flex align-items-center gap-2 my-3" :href="`#section-${index}`">
                            <span class="toc-index">{{ index + 1 }}</span>
                            <span>
                                {{ part.split('\n')[0].trim() }}
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="content-box mt-4">
                <div class="row g-3 text-center">
                    <div class="col-6">
                        <div class="info-card">
                            <i class="fa-regular fa-clock"></i>
                            <p>{{ post.readTime.split(' ')[0] }}
                                {{ post.readTime.split(' ')[1] }}</p>
                            <small>وقت القراءة</small>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="info-card">
                            <i class="fa-regular fa-calendar"></i>
                            <p>{{ postsDateArabicFormat(post).split(' ')[0] }} {{
                                postsDateArabicFormat(post).split(' ')[1] }}</p>
                            <small>تاريخ النشر</small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="newsletter-box text-center mt-4">
                <div class="newsletter-icon mb-4">
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <h5 class="newsletter-title mb-2">لا تفوّت جديدنا</h5>
                <p class="newsletter-desc mb-4">
                    اشترك للحصول على أحدث المقالات
                </p>
                <RouterLink to="/blog">
                    <PrimaryButton v-slot:primaryBtn class="w-100" @click.native="scrollTop">اشترك الان</PrimaryButton>
                </RouterLink>
            </div>
        </div>
    </aside>
</template>

<style scoped>
.sidebar {
    top: 120px;
    z-index: 2;
}

.toc-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.toc-list li a {
    display: block;
    padding: 10px 12px;
    border-radius: 12px;
    color: #9ca3af;
    text-decoration: none;
    transition: .3s;
}

.toc-list li a:hover {
    background: rgba(249, 115, 22, .1);
    color: #f97316;
}

.toc-link {
    padding: 12px;
    border-radius: 16px;
    color: #9ca3af;
    text-decoration: none;
    transition: all .3s ease;
}

.toc-link:hover {
    color: #f97316;
    background: rgba(249, 115, 22, 0.05);
}

.toc-index {
    width: 24px;
    height: 24px;
    border-radius: 8px;
    background: #1a1a1a;
    font-size: 12px;
    font-weight: 700;
    color: #6b7280;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s ease;
}

.toc-link:hover .toc-index {
    background: rgba(249, 115, 22, 0.1);
    color: #f97316;
}

.toc-text {
    font-size: 14px;
}

.info-card {
    background: #0a0a0a;
    border-radius: 14px;
    padding: 20px;
}

.info-card i {
    color: #f97316;
    font-size: 20px;
}

.info-card p {
    color: #fff;
    font-weight: 700;
    margin: 8px 0 0;
}

.info-card small {
    color: #9ca3af;
}

.newsletter-box {
    padding: 24px;
    border-radius: 20px;
    background: linear-gradient(135deg,
            rgba(249, 115, 22, 0.15),
            rgba(234, 179, 8, 0.05));
    border: 1px solid rgba(249, 115, 22, 0.3);
}

.newsletter-icon {
    width: 56px;
    height: 56px;
    border-radius: 16px;
    background: rgba(249, 115, 22, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-inline: auto;
}

.newsletter-icon i {
    font-size: 20px;
    color: #f97316;
}

.newsletter-title {
    color: #fff;
    font-weight: 700;
}

.newsletter-desc {
    color: #9ca3af;
    font-size: 14px;
}

.newsletter-btn {
    background: #f97316;
    color: #fff;
    font-weight: 600;
    padding: 12px;
    border-radius: 14px;
    transition: 0.3s;
}

.newsletter-btn:hover {
    background: #ea580c;
    color: #fff;
}
</style>