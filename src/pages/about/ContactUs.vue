<script setup>
import { inject } from 'vue';

const scrollTop = inject('scrollTop');
</script>

<template>
    <section class="contact-cta">
        <div class="cta-content">
            <h2>لديك أسئلة؟ دعنا نتحدث!</h2>
            <p>
                نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا،
                أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
            </p>
            <div class="cta-actions">
                <a href="mailto:hello@adasah.com" class="btn btn-dark">
                    <i class="fa-regular fa-envelope"></i>
                    تواصل معنا
                </a>
                <RouterLink to="/blog" class="btn btn-outline" @click="scrollTop">
                    تصفح المقالات
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<style scoped>
.contact-cta {
    position: relative;
    padding: 5rem 1rem;
    background: linear-gradient(-200deg, var(--color-orange-600), var(--color-orange-500), var(--color-orange-400), var(--color-orange-400));
    overflow: hidden;
}

.cta-content {
    position: relative;
    max-width: 800px;
    margin: auto;
    text-align: center;
    color: #fff;
}

.cta-content h2 {
    font-size: clamp(28px, 4vw, 40px);
    font-weight: 800;
    margin-bottom: 1rem;
}

.cta-content p {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 2rem;
    line-height: 1.7;
}

.cta-actions {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 32px;
    font-weight: 600;
    border-radius: 14px;
    text-decoration: none;
    transition: all 0.3s ease;
}

.btn-dark {
    background: #0a0a0a;
    color: #fff;
}

.btn-dark:hover {
    background: #111;
    transform: translateY(-2px);
}

.btn-outline {
    border: 2px solid rgba(255, 255, 255, 0.4);
    color: #fff;
}

.btn-outline:hover {
    background: #fff;
    color: #0a0a0a;
}
</style>