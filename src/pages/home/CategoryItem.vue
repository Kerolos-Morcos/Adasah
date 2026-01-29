<script setup>
const { category } = defineProps(['category'])
const categoryIcons = [
    { name: "إضاءة", icon: "fa-solid fa-sun" },
    { name: "بورتريه", icon: "fa-solid fa-user" },
    { name: "مناظر طبيعية", icon: "fa-solid fa-cloud" },
    { name: "تقنيات", icon: "bi bi-sliders" },
    { name: 'معدات', icon: 'fa-solid fa-sun' }
]
categoryIcons.map((cat) => {
    if (cat.name == category.name) {
        category.icon = cat.icon
    }
})
</script>

<template>
    <div class="col-6 col-md-3">
        <RouterLink :to="`/blog?category=${category.name}`" :title="category.name" `
            class="category-card d-block position-relative transition-all">
            <div class="category-overlay"></div>
            <div class="position-relative z-10">
                <div class="category-icon d-inline-flex align-items-center justify-content-center mb-3">
                    <i :class="`${category.icon} text-orange`"></i>
                </div>
                <h3 class="text-white fw-bold mb-1">{{ category.name }}</h3>
                <p class="mb-0">{{ category.count }} مقالة</p>
                <div class="category-arrow position-absolute top-0 d-flex align-items-center justify-content-center">
                    <svg class="w-4 h-4 text-white rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </div>
            </div>
        </RouterLink>
    </div>
</template>

<style scoped>
.category-card {
    position: relative;
    display: block;
    padding: 1.8rem 1.5rem;
    border-radius: var(--radius-2xl);
    background: var(--color-dark-card);
    border: 1px solid;
    border-color: #262626;
    overflow: hidden;
    text-decoration: none;
    transition: all 0.5s ease;
}

.category-card:hover {
    border-color: var(--color-dark-card);
    transform: translateY(-0.25rem);
}

.category-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom right, var(--color-orange-500), var(--color-yellow-500));
    opacity: 0;
    transition: opacity 0.5s ease;
}

.category-card:hover .category-overlay {
    opacity: 1;
}

.category-icon {
    width: 3rem;
    height: 3rem;
    border-radius: var(--radius-xl);
    background: rgba(249, 115, 22, 0.1);
    border: 1px solid rgba(249, 115, 22, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    transition: all 0.3s;
}

.category-card:hover .category-icon {
    background: rgba(255, 255, 255, 0.2);
    border-color: transparent;
}

.category-icon i {
    font-size: 1.25rem;
    color: var(--color-primary);
    transition: color 0.3s;
}

.category-card:hover .category-icon i {
    color: var(--color-white);
}

.category-card h3 {
    font-weight: var(--font-weight-bold);
    font-size: var(--text-lg);
    color: var(--color-white);
    margin-bottom: 0.25rem;
    transition: color 0.3s;
}

.category-card p {
    font-size: var(--text-sm);
    color: var(--color-neutral-500);
    margin-bottom: 0;
    transition: color 0.3s;
}

.category-card:hover h3 {
    color: var(--color-white);
}

.category-card:hover p {
    color: rgba(255, 255, 255, 0.8);
}

.category-arrow {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: var(--color-border);
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s;
}

.category-card:hover .category-arrow {
    opacity: 1;
    background: rgba(255, 255, 255, 0.2);
}

.category-arrow svg {
    width: 1rem;
    height: 1rem;
    color: var(--color-white);
    transform: rotate(180deg);
}
</style>