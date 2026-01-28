<script setup>
import PrimaryButton from './PrimaryButton.vue';


</script>

<template>
    <footer class="footer-custom position-relative overflow-hidden border-top">
        <div class="footer-blob blob-1"></div>
        <div class="footer-blob blob-2"></div>
        <div class="container py-5 position-relative">
            <div class="row g-5">
                <div class="col-lg-3">
                    <RouterLink to="/" class="d-flex align-items-center gap-3 mb-4 text-decoration-none footer-logo">
                        <div class="logo-icon">
                            <span>ع</span>
                        </div>
                        <span class="fs-4 fw-bold text-white">عدسة</span>
                    </RouterLink>
                    <p class="text-sm text-neutral-500 mb-4">
                        مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
                    </p>
                    <div class="d-flex gap-2">
                        <a class="social-icon" href="https://twitter.com/Adasah" target="_blank"><i
                                class="fa-brands fa-x-twitter"></i></a>
                        <a class="social-icon" href="https://github.com/Adasah" target="_blank"><i
                                class="fa-brands fa-github"></i></a>
                        <a class="social-icon" href="https://www.linkedin.com/company/adasah" target="_blank"><i
                                class="fa-brands fa-linkedin-in"></i></a>
                        <a class="social-icon" href="https://www.youtube.com/@adasah" target="_blank"><i
                                class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <h5 class="footer-title">استكشف</h5>
                    <ul class="list-unstyled footer-links">
                        <li>
                            <RouterLink to="/home">الرئيسية</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/blog">المدونة</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/about">من نحن</RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 col-lg-3">
                    <h5 class="footer-title">التصنيفات</h5>
                    <ul class="list-unstyled footer-links">
                        <li><a href="#">إضاءة</a></li>
                        <li><a href="#">بورتريه</a></li>
                        <li><a href="#">مناظر طبيعية</a></li>
                        <li><a href="#">تقنيات</a></li>
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
                    <RouterLink class="footer-bottom-link text-sm" to="/privacy">سياسة الخصوصية</RouterLink>
                    <RouterLink class="footer-bottom-link text-sm" to="/terms">شروط الخدمة</RouterLink>
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
</style>