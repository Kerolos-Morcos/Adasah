<script setup>
import GridBlobStyle from '@/components/GridBlobStyle.vue';
import PingDot from '@/components/PingDot.vue';
import SectionLabel from '@/components/SectionLabel.vue';
import SectionText from '@/components/SectionText.vue';
import StatsItem from '@/components/StatsItem.vue';

const statsData = [
    {
        icon: 'bi bi-people-fill',
        count: '+2مليون',
        title: 'قارئ شهريًا'
    },
    {
        icon: 'bi bi-journal-text',
        count: '+500',
        title: 'مقالة منشورة'
    },
    {
        icon: 'bi bi-pen',
        count: '50',
        title: 'كاتب خبير'
    },
    {
        icon: 'bi bi-book',
        count: '15',
        title: 'تصنيف'
    }
]
</script>

<template>
    <section class="hero-section pt-3 position-relative d-flex align-items-center overflow-hidden">
        <GridBlobStyle />
        <div class="container position-relative py-5">
            <div class="text-center mx-auto" style="max-width: 900px">
                <SectionLabel v-slot:sectionLabel>
                    <PingDot />
                    <span class="fw-medium">
                        من نحن
                    </span>
                </SectionLabel>
                <SectionText>
                    <template v-slot:sectionTitle>
                        مهمتنا هي
                    </template>
                    <template v-slot:sectionSpan>الإعلام والإلهام</template>
                    <template v-slot:sectionDesc>
                        مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
                        نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
                    </template>
                </SectionText>
                <div class="row g-3 justify-content-center align-items-center"
                    style="max-width: 850px; margin-inline:auto">
                    <StatsItem v-for="stat in statsData" :stat="stat" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero-section {
    min-height: 90vh;
    background: #0a0a0a;
}

.btn-arrow {
    transform: rotate(180deg);
    transition: transform .3s ease;
}

.btn-hover:hover .btn-arrow {
    transform: translateX(-4px) rotate(180deg);
}
</style>