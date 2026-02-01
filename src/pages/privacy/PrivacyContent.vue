<script setup>
import { inject } from 'vue';
import PrivacyHighlight from './PrivacyHighlight.vue';

const scrollTop = inject('scrollTop');
</script>

<template>
    <section class="privacy-content">
        <div class="container" style="max-width: 1000px;">
            <PrivacyHighlight style="max-width: 900px;" class="me-5" />
            <div class="mt-5 space-y-5">
                <section class="section-group">
                    <h2 class="section-title mb-3">
                        <span class="section-number">1</span>
                        مقدمة
                    </h2>
                    <div class="section-body me-5">
                        <p class="text-neutral-400 lh-lg">
                            مرحباً بك في عدسة. نحن نحترم خصوصيتك وملتزمون بحماية بياناتك الشخصية. ستعلمك سياسة الخصوصية
                            هذه بكيفية العناية ببياناتك الشخصية عند زيارة موقعنا وتخبرك عن حقوق الخصوصية الخاصة بك.
                        </p>
                    </div>
                </section>
                <section class="section-group">
                    <h2 class="section-title mb-4">
                        <span class="section-number">2</span>
                        المعلومات التي نجمعها
                    </h2>
                    <div class="section-body">
                        <ul class="list-unstyled me-5">
                            <li class="d-flex gap-3 mb-2">
                                <svg class="flex-shrink-0 mt-1" width="20" height="20" fill="currentColor"
                                    viewBox="0 0 20 20" style="color: #f97316;">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="text-neutral-400">
                                    <strong class="text-white">بيانات الهوية:</strong> تشمل الاسم الأول، الاسم الأخير،
                                    اسم المستخدم أو معرف مشابه.
                                </span>
                            </li>
                            <li class="d-flex gap-3 mb-2">
                                <svg class="flex-shrink-0 mt-1" width="20" height="20" fill="currentColor"
                                    viewBox="0 0 20 20" style="color: #f97316;">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="text-neutral-400">
                                    <strong class="text-white">بيانات الاتصال:</strong> تشمل عنوان البريد الإلكتروني.
                                </span>
                            </li>
                            <li class="d-flex gap-3 mb-2">
                                <svg class="flex-shrink-0 mt-1" width="20" height="20" fill="currentColor"
                                    viewBox="0 0 20 20" style="color: #f97316;">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="text-neutral-400">
                                    <strong class="text-white">البيانات التقنية:</strong> تشمل عنوان IP، نوع المتصفح،
                                    المنطقة الزمنية، ونظام التشغيل.
                                </span>
                            </li>
                            <li class="d-flex gap-3 mb-2">
                                <svg class="flex-shrink-0 mt-1" width="20" height="20" fill="currentColor"
                                    viewBox="0 0 20 20" style="color: #f97316;">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="text-neutral-400">
                                    <strong class="text-white">بيانات الاستخدام:</strong> تشمل معلومات حول كيفية
                                    استخدامك لموقعنا وخدماتنا.
                                </span>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class="section-group">
                    <h2 class="section-title mb-4">
                        <span class="section-number">3</span>
                        كيف نستخدم معلوماتك
                    </h2>
                    <div class="section-body">
                        <ul class="list-unstyled me-5">
                            <li class="d-flex gap-3 mb-2">
                                <svg class="flex-shrink-0 mt-1" width="20" height="20" fill="currentColor"
                                    viewBox="0 0 20 20" style="color: #f97316;">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="text-neutral-400">لتقديم خدمتنا والحفاظ عليها</span>
                            </li>
                            <li class="d-flex gap-3 mb-2">
                                <svg class="flex-shrink-0 mt-1" width="20" height="20" fill="currentColor"
                                    viewBox="0 0 20 20" style="color: #f97316;">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="text-neutral-400">لإخطارك بالتغييرات في خدمتنا</span>
                            </li>
                            <li class="d-flex gap-3 mb-2">
                                <svg class="flex-shrink-0 mt-1" width="20" height="20" fill="currentColor"
                                    viewBox="0 0 20 20" style="color: #f97316;">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="text-neutral-400">لتقديم دعم العملاء</span>
                            </li>
                            <li class="d-flex gap-3 mb-2">
                                <svg class="flex-shrink-0 mt-1" width="20" height="20" fill="currentColor"
                                    viewBox="0 0 20 20" style="color: #f97316;">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="text-neutral-400">لجمع تحليلات أو معلومات قيمة لتحسين خدمتنا</span>
                            </li>
                            <li class="d-flex gap-3 mb-2">
                                <svg class="flex-shrink-0 mt-1" width="20" height="20" fill="currentColor"
                                    viewBox="0 0 20 20" style="color: #f97316;">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="text-neutral-400">لمراقبة استخدام خدمتنا</span>
                            </li>
                            <li class="d-flex gap-3 mb-2">
                                <svg class="flex-shrink-0 mt-1" width="20" height="20" fill="currentColor"
                                    viewBox="0 0 20 20" style="color: #f97316;">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="text-neutral-400">لاكتشاف ومنع ومعالجة المشاكل التقنية</span>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class="section-group">
                    <h2 class="section-title mb-3">
                        <span class="section-number">4</span>
                        ملفات تعريف الارتباط
                    </h2>
                    <div class="section-body">
                        <p class="text-neutral-400 lh-lg me-5">
                            نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتتبع النشاط على موقعنا. يمكنك توجيه
                            متصفحك لرفض جميع ملفات تعريف الارتباط أو للإشارة عند إرسال ملف تعريف ارتباط. ومع ذلك، إذا لم
                            تقبل ملفات تعريف الارتباط، فقد لا تتمكن من استخدام بعض أجزاء موقعنا.
                        </p>
                    </div>
                </section>
                <section class="section-group">
                    <h2 class="section-title mb-3">
                        <span class="section-number">5</span>
                        أمان البيانات
                    </h2>
                    <div class="section-body">
                        <p class="text-neutral-400 lh-lg me-5">
                            لقد وضعنا تدابير أمنية مناسبة لمنع فقدان بياناتك الشخصية أو استخدامها أو الوصول إليها بشكل
                            غير مصرح به عن طريق الخطأ. نحن نحد الوصول إلى بياناتك الشخصية لأولئك الذين لديهم حاجة عملية
                            للمعرفة.
                        </p>
                    </div>
                </section>
                <section class="section-group">
                    <h2 class="section-title mb-3">
                        <span class="section-number">6</span>
                        حقوقك
                    </h2>
                    <div class="section-body">
                        <ul class="list-unstyled space-y-3 me-5">
                            <li class="d-flex gap-3 mb-2">
                                <svg class="flex-shrink-0 mt-1" width="20" height="20" fill="currentColor"
                                    viewBox="0 0 20 20" style="color: #f97316;">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="text-neutral-400">طلب الوصول إلى بياناتك الشخصية</span>
                            </li>
                            <li class="d-flex gap-3 mb-2">
                                <svg class="flex-shrink-0 mt-1" width="20" height="20" fill="currentColor"
                                    viewBox="0 0 20 20" style="color: #f97316;">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="text-neutral-400">طلب تصحيح بياناتك الشخصية</span>
                            </li>
                            <li class="d-flex gap-3 mb-2">
                                <svg class="flex-shrink-0 mt-1" width="20" height="20" fill="currentColor"
                                    viewBox="0 0 20 20" style="color: #f97316;">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="text-neutral-400">طلب مسح بياناتك الشخصية</span>
                            </li>
                            <li class="d-flex gap-3 mb-2">
                                <svg class="flex-shrink-0 mt-1" width="20" height="20" fill="currentColor"
                                    viewBox="0 0 20 20" style="color: #f97316;">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="text-neutral-400">الاعتراض على معالجة بياناتك الشخصية</span>
                            </li>
                            <li class="d-flex gap-3 mb-2">
                                <svg class="flex-shrink-0 mt-1" width="20" height="20" fill="currentColor"
                                    viewBox="0 0 20 20" style="color: #f97316;">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="text-neutral-400">طلب تقييد معالجة بياناتك الشخصية</span>
                            </li>
                            <li class="d-flex gap-3 mb-2">
                                <svg class="flex-shrink-0 mt-1" width="20" height="20" fill="currentColor"
                                    viewBox="0 0 20 20" style="color: #f97316;">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="text-neutral-400">الحق في سحب الموافقة</span>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class="section-group">
                    <h2 class="section-title mb-3">
                        <span class="section-number">7</span>
                        تواصل معنا
                    </h2>
                    <div class="section-body mailUs">
                        <p class="lh-lg mb-3 me-5">
                            إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا:
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
                    <RouterLink to="/terms" class="color-orange-500 text-decoration-none" @click.native="scrollTop">
                        شروط الخدمة</RouterLink>.
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.privacy-content {
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