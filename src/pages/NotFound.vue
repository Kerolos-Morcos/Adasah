<script setup>
import GridBlobStyle from '@/components/GridBlobStyle.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import SecondaryButton from '@/components/SecondaryButton.vue';
import { inject } from 'vue';


const scrollTop = inject('scrollTop');
</script>

<template>
    <main class="flex-grow-1">
        <div class="error-page pt-3 d-flex align-items-center justify-content-center position-relative overflow-hidden">
            <GridBlobStyle />
            <div class="container position-relative text-center">
                <div class="position-relative mb-4">
                    <h1 class="error-code">404</h1>
                    <span class="error-code-glow">404</span>
                </div>
                <div class="icon-wrapper mx-auto mb-4 position-relative">
                    <div class="icon-bg"></div>
                    <svg class="icon-face" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="decor-square"></span>
                    <span class="decor-circle"></span>
                </div>
                <h2 class="text-white fw-bold mb-3 pt-2">عفواً! الصفحة غير موجودة</h2>
                <p class="text-neutral-500 fs-5 mb-4 py-2 mx-auto" style="max-width: 550px;">
                    الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.
                </p>
                <div class="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-4">
                    <RouterLink to="/home">
                        <PrimaryButton v-slot:primaryBtn @click="scrollTop">
                            <i class="bi bi-house-door d-flex align-items-center ms-2"></i> الذهاب للرئيسية
                        </PrimaryButton>
                    </RouterLink>
                    <RouterLink to="/blog">
                        <SecondaryButton v-slot:secondaryBtn @click="scrollTop">
                            <i class="bi bi-journal-text d-flex align-items-center ms-2"></i> تصفح المقالات
                        </SecondaryButton>
                    </RouterLink>
                </div>
                <div class="pt-3 border-top">
                    <p class="text-neutral-400 small mb-2">قد تجد هذه مفيدة:</p>
                    <div class="d-flex justify-content-center flex-wrap gap-3 mb-3">
                        <RouterLink @click="scrollTop" to="/blog" class="link-orange">المدونة</RouterLink>
                        <span class="text-secondary">•</span>
                        <RouterLink @click="scrollTop" to="/about" class="link-orange">من نحن</RouterLink>
                        <span class="text-secondary">•</span>
                        <RouterLink @click="scrollTop" to="/privacy" class="link-orange">الخصوصية</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>


<style scoped>
.border-top {
    border-color: var(--color-neutral-700) !important;
    max-width: 500px;
    margin: 0 auto;
}

.error-page {
    min-height: calc(100vh - 5rem);
    background-color: #0a0a0a;
}

.error-code {
    font-size: 180px;
    font-weight: 900;
    line-height: 1;
    background: linear-gradient(to right, var(--color-orange-500), var(--color-yellow-500), var(--color-orange-500));
    background-clip: text;
    -webkit-text-fill-color: transparent;
    user-select: none;
}

.error-code-glow {
    position: absolute;
    inset: 0;
    font-size: 180px;
    font-weight: 900;
    color: rgba(255, 159, 28, 0.2);
    filter: blur(25px);
    user-select: none;
    pointer-events: none;
}

.icon-wrapper {
    width: 120px;
    height: 120px;
}

.icon-bg {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    color: var(--color-orange-600);
    background: rgb(255, 159, 28, 0.1);
    border: 1px solid rgba(255, 159, 28, .3);
}

.icon-face {
    width: 56px;
    height: 56px;
    color: var(--color-orange-500);
    position: relative;
    z-index: 2;
    margin-top: 32px;
}

.decor-square {
    position: absolute;
    top: -6px;
    right: -6px;
    width: 18px;
    height: 18px;
    background: var(--color-orange-500);
    border-radius: 4px;
    transform: rotate(12deg);
    animation: bounce 1.5s infinite;
}

.decor-circle {
    position: absolute;
    bottom: -6px;
    left: -10px;
    width: 14px;
    height: 14px;
    background: var(--color-yellow-500);
    border-radius: 50%;
    animation: pulse 2s infinite;
}

.link-orange {
    color: var(--color-orange-500);
    font-weight: 500;
    text-decoration: none;
    transition: color 0.25s ease;
}

.link-orange:hover {
    color: #ffb347;
    text-decoration: underline;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0) rotate(12deg);
    }

    50% {
        transform: translateY(-6px) rotate(12deg);
    }
}

@keyframes pulse {

    0%,
    100% {
        opacity: .6;
    }

    50% {
        opacity: 1;
    }
}
</style>