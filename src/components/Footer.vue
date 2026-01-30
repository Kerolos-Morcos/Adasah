<script setup>
import { inject } from 'vue';
import PrimaryButton from './PrimaryButton.vue';
import postsData from '@/store/posts'

const siteInfo = postsData.siteInfo
const scrollTop = inject('scrollTop');

const categoriesData = postsData.categories;
</script>

<template>
    <footer class="footer-custom position-relative overflow-hidden border-top">
        <div class="footer-blob blob-1"></div>
        <div class="footer-blob blob-2"></div>
        <div class="container py-5 position-relative">
            <div class="row g-5">
                <div class="col-lg-3">
                    <RouterLink to="/" class="d-flex align-items-center gap-3 mb-4 text-decoration-none footer-logo"
                        @click.native="scrollTop">
                        <div class="logo-icon">
                            <span>ع</span>
                        </div>
                        <span class="fs-4 fw-bold text-white">{{ siteInfo.name }}</span>
                    </RouterLink>
                    <p class="text-sm text-neutral-500 mb-4">
                        {{ siteInfo.description }}
                    </p>
                    <div class="d-flex gap-2">
                        <a class="social-icon" :href="siteInfo.social.twitter" target="_blank"><i
                                class="fa-brands fa-x-twitter"></i></a>
                        <a class="social-icon" :href="siteInfo.social.github" target="_blank"><i
                                class="fa-brands fa-github"></i></a>
                        <a class="social-icon" :href="siteInfo.social.linkedin" target="_blank"><i
                                class="fa-brands fa-linkedin-in"></i></a>
                        <a class="social-icon" :href="siteInfo.social.youtube" target="_blank"><i
                                class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <h5 class="footer-title">استكشف</h5>
                    <ul class="list-unstyled footer-links">
                        <li>
                            <RouterLink to="/home" class="footer-link" @click.native="scrollTop">
                                <svg class="footer-link-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7" />
                                </svg>
                                الرئيسية
                            </RouterLink>
                        </li>

                        <li>
                            <RouterLink to="/blog" class="footer-link" @click.native="scrollTop">
                                <svg class="footer-link-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7" />
                                </svg>
                                المدونة
                            </RouterLink>
                        </li>

                        <li>
                            <RouterLink to="/about" class="footer-link" @click.native="scrollTop">
                                <svg class="footer-link-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7" />
                                </svg>
                                من نحن
                            </RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 col-lg-3">
                    <h5 class="footer-title">التصنيفات</h5>
                    <ul class="list-unstyled footer-links">
                        <li v-for="category in categoriesData" :key="category.name">
                            <RouterLink :to="`/blog?category=${category.name}`" class="footer-link"
                                @click.native="scrollTop">
                                <svg class="footer-link-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7" />
                                </svg>
                                {{ category.name }}
                            </RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <h5 class="footer-title">ابقى على اطلاع</h5>
                    <p class="text-sm text-neutral-500 mb-3">
                        اشترك للحصول على أحدث المقالات والتحديثات.
                    </p>
                    <form class="d-flex flex-column gap-2">
                        <input type="email" class="form-control footer-input" placeholder="أدخل بريدك الإلكتروني">
                        <PrimaryButton class="mt-2" v-slot:primaryBtn>
                            اشترك
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </div>
        <div class="border-top border-neutral-800 py-3">
            <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                <p class="mb-0 text-sm text-neutral-600">
                    © 2026 عدسة. صنع بكل <i class="bi bi-heart-fill"></i> جميع الحقوق محفوظة.
                </p>
                <div class="d-flex gap-4">
                    <RouterLink class="footer-bottom-link text-sm" to="/privacy" @click.native="scrollTop">سياسة
                        الخصوصية</RouterLink>
                    <RouterLink class="footer-bottom-link text-sm" to="/terms" @click.native="scrollTop">شروط الخدمة
                    </RouterLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer-custom {
    background-color: var(--color-dark);
    border-color: var(--color-border);
}

.border-top {
    border-top: var(--bs-border-width) var(--bs-border-style) var(--color-border) !important;
}

.bi-heart-fill {
    color: var(--color-primary);
}

.footer-blob {
    position: absolute;
    width: 24rem;
    height: 24rem;
    border-radius: 50%;
    filter: blur(var(--blur-3xl));
    opacity: 0.08;
}

.blob-1 {
    top: 0;
    left: 25%;
    background: var(--color-primary);
}

.blob-2 {
    bottom: 0;
    right: 25%;
    background: var(--color-accent);
}

.logo-icon {
    width: 44px;
    height: 44px;
    border-radius: var(--radius-xl);
    background: linear-gradient(135deg,
            var(--color-primary),
            var(--color-primary-dark));
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 700;
    box-shadow: 0 4px 20px rgba(249, 115, 22, 0.3);
    transition: transform .3s ease;
}

.footer-logo:hover .logo-icon {
    transform: scale(1.05);
}

.footer-title {
    color: #fff;
    font-weight: 600;
    margin-bottom: 1.5rem;
    position: relative;
}

.footer-title::before {
    content: "";
    display: inline-block;
    width: 32px;
    height: 2px;
    background: linear-gradient(to right,
            var(--color-primary),
            var(--color-accent));
    margin-left: .5rem;
}

.footer-links li {
    margin-bottom: 1rem;
}

.footer-links a {
    color: var(--color-neutral-500);
    text-decoration: none;
    transition: color .3s ease;
}

.footer-links a:hover {
    color: var(--color-primary);
}

.social-icon {
    width: 40px;
    height: 40px;
    background: var(--color-dark-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-neutral-500);
    text-decoration: none;
    transition: all .3s ease;
}

.social-icon:hover {
    background: linear-gradient(135deg,
            var(--color-primary),
            var(--color-primary-dark));
    color: #fff;
    border-color: transparent;
    transform: scale(1.1);
}

.footer-input {
    background: var(--color-dark-card);
    border: 1px solid var(--color-border);
    color: #fff;
    padding: .6rem 1rem;
    border-radius: var(--radius-xl)
}

.footer-input::placeholder {
    color: var(--color-neutral-600);
}

.footer-input:focus {
    background-color: #161616;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 .15rem rgba(249, 115, 22, .25);
}

.footer-bottom-link {
    color: var(--color-neutral-600);
    text-decoration: none;
}

.footer-bottom-link:hover {
    color: var(--color-primary);
}


.footer-link {
    display: inline-flex;
    align-items: center;
    gap: .5rem;

    font-size: .875rem;
    color: var(--color-neutral-500);
    text-decoration: none;

    transition: color .3s ease;
}

/* السهم */
.footer-link-arrow {
    width: 16px;
    height: 16px;

    opacity: 0;
    margin-right: -16px;

    transform: rotate(180deg);
    color: var(--color-primary);

    transition: all .3s ease;
}

/* hover */
.footer-link:hover {
    color: var(--color-primary);
}

.footer-link:hover .footer-link-arrow {
    opacity: 1;
    margin-right: 0;
}
</style>