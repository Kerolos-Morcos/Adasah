<script setup>
import PrimaryButton from '@/components/PrimaryButton.vue';
import SectionText from '@/components/SectionText.vue';


</script>

<template>
    <section class="newsletter-section position-relative overflow-hidden">
        <div class="newsletter-glow"></div>

        <div class="container position-relative">
            <div class="newsletter-box text-center mx-auto">
                <div class="newsletter-icon mx-auto mb-4">
                    <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <SectionText title-size="2rem" desc-size="1.1rem">
                    <template #sectionTitle>
                        اشترك في
                    </template>
                    <template #sectionSpan> نشرتنا الإخبارية</template>
                    <template #sectionDesc>
                        احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
                    </template>
                </SectionText>

                <form class="newsletter-form d-flex flex-column flex-sm-row gap-3 mx-auto mb-4">
                    <input type="email" class="form-control newsletter-input" placeholder="أدخل بريدك الإلكتروني" />
                    <PrimaryButton v-slot:primaryBtn style="width: 43%; border-radius: 12px;">
                        اشترك الآن
                    </PrimaryButton>
                </form>

                <div class="newsletter-footer d-flex flex-wrap justify-content-center align-items-center gap-3">
                    <div class="d-flex align-items-center gap-3">
                        <div class="avatars d-flex">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" />
                            <img
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face" />
                            <img
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
                        </div>
                        <span>انضم لـ <strong class="text-white">+10,000</strong> مصور</span>
                    </div>

                    <span class="dot d-none d-sm-inline">•</span>
                    <span>بدون إزعاج</span>
                    <span class="dot d-none d-sm-inline">•</span>
                    <span>إلغاء الاشتراك في أي وقت</span>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
/* section */
.newsletter-section {
    padding: 6rem 0;
    background: #0a0a0a;
}

/* glow */
.newsletter-glow {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 300px;
    background: rgba(249, 115, 22, 0.1);
    border-radius: 50%;
    filter: blur(80px);
}

/* box */
.newsletter-box {
    background: #161616;
    border: 1px solid #262626;
    border-radius: 24px;
    padding: 3rem;
    max-width: 720px;
}

/* icon */
.newsletter-icon {
    width: 64px;
    height: 64px;
    border-radius: 16px;
    background: linear-gradient(135deg, #f97316, #ea580c);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}


/* form */
.newsletter-form {
    max-width: 520px;
}

/* input */
.newsletter-input { 
    background: #0a0a0a;
    border: 1px solid #262626;
    color: #fff;
    padding: 0.9rem 1.2rem;
    border-radius: 14px;
}

.newsletter-input::placeholder {
    color: #6b7280;
}

.newsletter-input:focus {
    border-color: rgba(249, 115, 22, 0.5);
    box-shadow: none;
}

/* footer */
.newsletter-footer {
    color: #9ca3af;
    font-size: 0.9rem;
}

/* avatars */
.avatars img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid #161616;
    margin-left: -8px;
}

/* dots */
.dot {
    color: #262626;
}
</style>