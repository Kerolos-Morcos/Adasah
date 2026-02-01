<script setup>
import PrimaryButton from '@/components/PrimaryButton.vue';
import SecondaryButton from '@/components/SecondaryButton.vue';
import SectionLabel from '@/components/SectionLabel.vue';
import SectionText from '@/components/SectionText.vue';
import StatsItem from '../../components/StatsItem.vue';
import GridBlobStyle from '@/components/GridBlobStyle.vue';
import PingDot from '@/components/PingDot.vue';
import { inject } from 'vue';

const statsData = [
    {
        icon: 'bi bi-journal-text',
        count: '+50',
        title: 'مقالة'

    },
    {
        icon: 'bi bi-people-fill',
        count: '+10 ألف',
        title: 'قارئ'
    },
    {
        icon: 'bi bi-folder2-open',
        count: '4',
        title: 'تصنيفات'
    },
    {
        icon: 'bi bi-pen',
        count: '6',
        title: 'كاتب'
    }
]

const scrollTop = inject('scrollTop');
</script>

<template>
    <section class="hero-section position-relative d-flex align-items-center overflow-hidden">
        <GridBlobStyle />
        <div class="container position-relative py-5">
            <div class="text-center mx-auto" style="max-width: 900px">
                <SectionLabel v-slot:sectionLabel>
                    <PingDot />
                    <span class="text-neutral-300 small fw-medium">
                        مرحباً بك في عدسة
                    </span>
                </SectionLabel>
                <SectionText>
                    <template v-slot:sectionTitle>
                        اكتشف
                    </template>
                    <template v-slot:sectionSpan>فن</template>
                    <template v-slot:sectionTitleCompletion>
                        التصوير الفوتوغرافي
                    </template>
                    <template v-slot:sectionDesc>
                        انغمس في اسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
                    </template>
                </SectionText>
                <div class="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-5">
                    <RouterLink to="/blog" @click.native="scrollTop">
                        <PrimaryButton v-slot:primaryBtn class="d-inline-flex align-items-center gap-2 btn-hover">
                            <span class="fw-bold fs-6">استكشف المقالات</span>
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                class="btn-arrow">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </PrimaryButton>
                    </RouterLink>
                    <RouterLink to="/about" @click.native="scrollTop">
                        <SecondaryButton v-slot:secondaryBtn class="d-inline-flex align-items-center gap-2">
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>اعرف المزيد</span>
                        </SecondaryButton>
                    </RouterLink>
                </div>
                <div class="row g-3 justify-content-center align-items-center"
                    style="max-width: 720px; margin-inline:auto">
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