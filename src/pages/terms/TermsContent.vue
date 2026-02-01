<script setup>
import { inject } from 'vue';
import TermsHighlight from './TermsHighlight.vue';

const scrollTop = inject('scrollTop');
</script>

<template>
    <section class="Terms-content">
        <div class="container" style="max-width: 1000px;">
            <TermsHighlight style="max-width: 900px;" class="me-5" />
            <div class="mt-5 space-y-5">
                <section class="section-group">
                    <h2 class="section-title mb-3">
                        <span class="section-number">1</span>
                        الموافقة على الشروط
                    </h2>
                    <div class="section-body me-5">
                        <p class="text-neutral-400 lh-lg">
                            بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بشروط الخدمة هذه وجميع القوانين واللوائح
                            المعمول بها. إذا لم توافق على أي من هذه الشروط، فأنت ممنوع من استخدام هذا الموقع أو الوصول
                            إليه.
                        </p>
                    </div>
                </section>
                <section class="section-group">
                    <h2 class="section-title mb-3">
                        <span class="section-number">2</span>
                        رخصة الاستخدام
                    </h2>
                    <div class="section-body me-5">
                        <p class="text-neutral-400 lh-lg">
                            يُمنح الإذن للوصول المؤقت إلى المواد على موقع عدسة للعرض الشخصي غير التجاري فقط. هذا منح
                            ترخيص وليس نقل ملكية.
                        </p>
                        <ul class="list-unstyled me-5">
                            <span class="text-neutral-200 mb-2 pb-1 d-inline-block">بموجب هذا الترخيص لا يجوز لك:</span>
                            <li class="d-flex gap-3 mb-2">
                                <i class="bi bi-x-lg text-danger d-flex align-items-center"></i>
                                <span class="text-neutral-400">
                                    تعديل أو نسخ المواد
                                </span>
                            </li>
                            <li class="d-flex gap-3 mb-2">
                                <i class="bi bi-x-lg text-danger d-flex align-items-center"></i>
                                <span class="text-neutral-400">
                                    استخدام المواد لأي غرض تجاري أو للعرض العام
                                </span>
                            </li>
                            <li class="d-flex gap-3 mb-2">
                                <i class="bi bi-x-lg text-danger d-flex align-items-center"></i>
                                <span class="text-neutral-400">
                                    محاولة فك أو عكس هندسة أي برنامج على الموقع
                                </span>
                            </li>
                            <li class="d-flex gap-3 mb-2">
                                <i class="bi bi-x-lg text-danger d-flex align-items-center"></i>
                                <span class="text-neutral-400">
                                    إزالة أي حقوق نشر أو علامات ملكية من المواد
                                </span>
                            </li>
                            <li class="d-flex gap-3 mb-2">
                                <i class="bi bi-x-lg text-danger d-flex align-items-center"></i>
                                <span class="text-neutral-400">
                                    نقل المواد إلى شخص آخر أو نسخها على أي خادم آخر
                                </span>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class="section-group">
                    <h2 class="section-title mb-3">
                        <span class="section-number">3</span>
                        إخلاء المسؤولية
                    </h2>
                    <div class="section-body">
                        <p class="text-neutral-400 lh-lg me-5">
                            المواد الموجودة على موقع عدسة مقدمة على أساس "كما هي". عدسة لا يقدم أي ضمانات، صريحة أو
                            ضمنية، ويخلي مسؤوليته من جميع الضمانات الأخرى.
                        </p>
                    </div>
                </section>
                <section class="section-group">
                    <h2 class="section-title mb-3">
                        <span class="section-number">4</span>
                        القيود
                    </h2>
                    <div class="section-body">
                        <p class="text-neutral-400 lh-lg me-5">
                            في أي حال من الأحوال، لن يكون عدسة أو مورديه مسؤولين عن أي أضرار ناتجة عن استخدام أو عدم
                            القدرة على استخدام المواد على الموقع.
                        </p>
                    </div>
                </section>
                <section class="section-group">
                    <h2 class="section-title mb-3">
                        <span class="section-number">5</span>
                        محتوى المستخدم
                    </h2>
                    <div class="section-body me-5">
                        <p class="text-neutral-400 lh-lg">
                            إذا نشرت محتوى على موقعنا (مثل التعليقات)، فإنك تمنحنا ترخيصاً غير حصري وعالمي ومجاني
                            لاستخدام هذا المحتوى وإعادة إنتاجه وتعديله وتوزيعه.
                        </p>
                        <ul class="list-unstyled me-5">
                            <span class="text-neutral-200 mb-2 pb-1 d-inline-block">يجب ألا يكون محتواك:</span>
                            <li class="d-flex gap-3 mb-2">
                                <i class="bi bi-x-lg text-danger d-flex align-items-center"></i>
                                <span class="text-neutral-400">
                                    أن يكون تشهيرياً أو فاحشاً أو مسيئاً
                                </span>
                            </li>
                            <li class="d-flex gap-3 mb-2">
                                <i class="bi bi-x-lg text-danger d-flex align-items-center"></i>
                                <span class="text-neutral-400">
                                    انتهاك حقوق الملكية الفكرية للآخرين
                                </span>
                            </li>
                            <li class="d-flex gap-3 mb-2">
                                <i class="bi bi-x-lg text-danger d-flex align-items-center"></i>
                                <span class="text-neutral-400">
                                    احتواء فيروسات أو أكواد ضارة
                                </span>
                            </li>
                            <li class="d-flex gap-3 mb-2">
                                <i class="bi bi-x-lg text-danger d-flex align-items-center"></i>
                                <span class="text-neutral-400">
                                    انتهاك أي قوانين أو لوائح معمول بها
                                </span>
                            </li>
                            <li class="d-flex gap-3 mb-2">
                                <i class="bi bi-x-lg text-danger d-flex align-items-center"></i>
                                <span class="text-neutral-400">
                                    الإعلان عن منتجات أو خدمات غير مصرح بها
                                </span>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class="section-group">
                    <h2 class="section-title mb-3">
                        <span class="section-number">6</span>
                        التعديلات
                    </h2>
                    <div class="section-body">
                        <p class="text-neutral-400 lh-lg me-5">
                            قد يراجع عدسة شروط الخدمة هذه في أي وقت دون إشعار. باستخدام هذا الموقع، فإنك توافق على
                            الالتزام بالنسخة الحالية من شروط الخدمة.
                        </p>
                    </div>
                </section>
                <section class="section-group">
                    <h2 class="section-title mb-3">
                        <span class="section-number">7</span>
                        معلومات الاتصال
                    </h2>
                    <div class="section-body mailUs">
                        <p class="lh-lg mb-3 me-5">
                            إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى التواصل معنا:
                        </p>
                        <a href="mailto:hello@adasah.com" class="d-inline-flex align-items-center gap-2 me-5">
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                </path>
                            </svg>
                            hello@adasah.com
                        </a>
                    </div>
                </section>
            </div>
            <div class="mt-3 pt-5 border-top">
                <p class="text-sm text-center mb-0 text-neutral-400">
                    باستخدام موقعنا، فإنك توافق على سياسة الخصوصية هذه. انظر أيضاً
                    <RouterLink to="/privacy" class="color-orange-500 text-decoration-none" @click.native="scrollTop">
                        سياسة الخصوصية</RouterLink>.
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.Terms-content {
    padding: 3rem 0;
    background: #0a0a0a;
}

.space-y-5>*+* {
    margin-top: 3rem;
}

.section-group {
    padding-right: 3rem;
}

.section-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.section-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    background: linear-gradient(to bottom right, var(--color-primary), var(--color-primary), var(--color-accent));
    color: #fff;
    font-size: 0.875rem;
    font-weight: 700;
    border-radius: 0.5rem;
    flex-shrink: 0;
}

.section-body {
    padding-left: 8rem;
}


.text-white {
    color: #fff;
}

.lh-lg {
    line-height: 1.75;
}

.mailUs a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color 0.2s ease;
}

.mailUs a:hover {
    color: var(--color-accent);
}

.border-top {
    border-top: 1px solid var(--color-neutral-700) !important;
    max-width: 900px;
    margin: auto;
}
</style>