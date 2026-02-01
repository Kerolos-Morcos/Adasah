<script setup>

const statsData = [
    {
        icon: 'bi bi-bullseye',
        title: 'الجودة أولاً',
        desc: 'محتوى مدروس ومكتوب بخبرة'
    },
    {
        icon: 'bi bi-lightning-charge-fill',
        title: 'تركيز عملي',
        desc: 'أمثلة واقعية يمكنك تطبيقها اليوم'
    },
    {
        icon: 'fa-solid fa-handshake',
        title: 'المجتمع',
        desc: 'تعلم مع آلاف المصورين'
    },
    {
        icon: 'bi-solid bi-arrow-repeat',
        title: 'دائمًا محدث',
        desc: 'أحدث الاتجاهات وأفضل الممارسات'
    }
]
</script>

<template>
    <section class="values-section">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="values-title">
                    <span class="line"></span>
                    قيمنا
                    <span class="line reverse"></span>
                </h2>
                <p class="values-subtitle">
                    المبادئ التي توجه كل ما نقوم بإنشائه
                </p>
            </div>
            <div class="row g-4">
                <div class="col-md-6 col-lg-3" v-for="state in statsData" :key="state.desc">
                    <div class="value-card">
                        <i :class="state.icon" class="value-icon"></i>
                        <h3>{{ state.title }}</h3>
                        <p>{{ state.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.values-section {
    padding: 5rem 0;
    background: #111;
    border-top: 1px solid #262626;
    border-bottom: 1px solid #262626;
}

.values-title {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-size: 2.25rem;
    font-weight: 800;
    color: var(--color-white);
    margin-bottom: 12px;
}

.values-title .line {
    width: 6px;
    height: 32px;
    background: linear-gradient(to bottom, var(--color-primary), var(--color-accent));
    border-radius: 6px;
}

.values-title .line.reverse {
    background: linear-gradient(to bottom, var(--color-accent), var(--color-primary));
}

.values-subtitle {
    color: var(--color-neutral-400);
    font-size: 1.1rem;
    max-width: 520px;
    margin: auto;
}

.value-card {
    background: #161616;
    border: 1px solid #262626;
    border-radius: 20px;
    padding: 32px 20px;
    text-align: center;
    transition: all 0.35s ease;
    position: relative;
    overflow: hidden;
}

.value-card::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--color-orange-500), var(--color-yellow-500));
    opacity: 0;
    transition: opacity 0.35s;
}

.value-card:hover::before {
    opacity: 0.08;
}

.value-card:hover {
    border-color: rgba(249, 115, 22, 0.4);
    transform: translateY(-6px);
}

.value-icon {
    font-size: 2.4rem;
    color: var(--color-orange-500);
    margin-bottom: 16px;
    position: relative;
    z-index: 1;
}

.value-card h3 {
    color: var(--color-white);
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 8px;
    position: relative;
    z-index: 1;
}

.value-card p {
    color: var(--color-neutral-400);
    font-size: 0.9rem;
    margin: 0;
    position: relative;
    z-index: 1;
}
</style>