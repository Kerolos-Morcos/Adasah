<script setup>

</script>

<template>
    <main class="flex-grow-1">
        <section class="blog-hero position-relative overflow-hidden py-5">
            <div class="hero-grid"></div>
            <div class="hero-blobs">
                <span class="blob blob-orange"></span>
                <span class="blob blob-yellow"></span>
            </div>
            <div class="container text-center position-relative py-5">
                <span class="section-label d-inline-flex align-items-center gap-2 mb-3">
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    مدونتنا
                </span>
                <h1 class="display-4 fw-bold text-white mb-3">
                    استكشف <span class="gradient-text">مقالاتنا</span>
                </h1>
                <p class="text-neutral-400 fs-5 mx-auto" style="max-width:640px">
                    اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
                </p>
            </div>
        </section>
        <!-- FILTER BAR -->
        <div class="sticky-top blog-filter">
            <div class="container py-3">
                <div class="row g-3 align-items-center">
                    <div class="col-md-4 position-relative">
                        <input type="text" class="form-control input-dark ps-5" placeholder="ابحث في المقالات...">
                        <svg class="search-icon" width="20" height="20" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <div class="col-md-8 d-flex flex-wrap justify-content-md-end gap-2">
                        <button class="btn btn-primary-custom">جميع المقالات</button>
                        <button class="btn btn-dark-outline">إضاءة</button>
                        <button class="btn btn-dark-outline">بورتريه</button>
                        <button class="btn btn-dark-outline">مناظر طبيعية</button>
                        <button class="btn btn-dark-outline">تقنيات</button>
                        <button class="btn btn-dark-outline">معدات</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- POSTS -->
        <section class="container py-5">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <p class="text-neutral-400 mb-0">
                    عرض <strong class="text-white">28</strong> مقالات
                </p>
            </div>
            <div class="row g-4">
                <!-- CARD -->
                <div class="col-md-6 col-lg-4">
                    <article class="blog-card h-100">
                        <a href="#" class="text-decoration-none">
                            <div class="card-img">
                                <img src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800" alt="">
                                <span class="badge badge-dark">إضاءة</span>
                            </div>
                            <div class="p-4">
                                <h3 class="card-title">
                                    إتقان تصوير الساعة الذهبية: دليل شامل
                                </h3>
                                <p class="card-desc">
                                    تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية.
                                </p>
                                <div class="card-footer">
                                    <div class="author">
                                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100">
                                        <div>
                                            <span>سالم أحمد</span>
                                            <small>مصور محترف</small>
                                        </div>
                                    </div>
                                    <span class="arrow-circle">
                                        <svg width="16" height="16" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </article>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
.section-label {
    margin-bottom: calc(var(--spacing) * 6);
    align-items: center;
    gap: calc(var(--spacing) * 2);
    padding-inline: calc(var(--spacing) * 4);
    padding-block: calc(var(--spacing) * 2);
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
    font-weight: var(--font-weight-medium);
    color: #f97316;
    background: #f973161a;
    border: 1px solid #f973164d;
    border-radius: 3.40282e38px;
    display: inline-flex;
}

.section-label:before {
    content: "";
    height: calc(var(--spacing) * 1.5);
    width: calc(var(--spacing) * 1.5);
    background: #f97316;
    border-radius: 3.40282e38px;
    animation: 2s infinite pulse;
}

@keyframes pulse {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
    }
}

.gradient-text {
    -webkit-text-fill-color: transparent;
    background: linear-gradient(135deg, #f97316, #fbbf24);
    -webkit-background-clip: text;
    background-clip: text;
    font-weight: bold;
}

/* HERO */
.blog-hero {
    background: var(--color-dark);
}

.hero-grid {
    position: absolute;
    inset: 0;
    background:
        linear-gradient(rgba(38, 38, 38, .5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(38, 38, 38, .5) 1px, transparent 1px);
    background-size: 60px 60px;
}

.hero-blobs .blob {
    position: absolute;
    width: 380px;
    height: 380px;
    border-radius: 50%;
    filter: blur(64px);
}

.blob-orange {
    background: rgba(249, 115, 22, .15);
    top: 0;
    left: 20%;
}

.blob-yellow {
    background: rgba(251, 191, 36, .1);
    bottom: 0;
    right: 20%;
}

/* FILTER BAR */
.blog-filter {
    background: rgba(10, 10, 10, .9);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--color-border);
}

.search-icon {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    color: var(--color-neutral-500);
}

/* BUTTONS */
.btn-primary-custom {
    background: linear-gradient(90deg,
            var(--color-primary),
            var(--color-primary-dark));
    border: none;
    color: #fff;
    border-radius: var(--radius-xl);
}

.btn-dark-outline {
    background: var(--color-dark-card);
    border: 1px solid var(--color-border);
    color: var(--color-neutral-400);
    border-radius: var(--radius-xl);
}

/* CARD */
.blog-card {
    background: var(--color-dark-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-2xl);
    overflow: hidden;
    transition: transform .3s ease;
}

.blog-card:hover {
    transform: translateY(-4px);
}

.card-img {
    position: relative;
    height: 220px;
    overflow: hidden;
}

.card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .7s ease;
}

.blog-card:hover img {
    transform: scale(1.1);
}

.badge-dark {
    position: absolute;
    top: 12px;
    right: 12px;
    background: rgba(10, 10, 10, .8);
    border: 1px solid var(--color-border-light);
    color: #fff;
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 12px;
}

.card-title {
    color: #fff;
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 8px;
    transition: color .3s;
}

.blog-card:hover .card-title {
    color: var(--color-primary);
}

.card-desc {
    color: var(--color-neutral-400);
    font-size: 14px;
    line-height: var(--leading-relaxed);
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 16px;
    border-top: 1px solid var(--color-border);
}

.author {
    display: flex;
    gap: 10px;
    align-items: center;
}

.author img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
}

.arrow-circle {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(249, 115, 22, .1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
    transition: all .3s ease;
}

.blog-card:hover .arrow-circle {
    background: var(--color-primary);
    color: #fff;
}
</style>