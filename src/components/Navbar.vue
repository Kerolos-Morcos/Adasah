<script setup>
import PrimaryButton from './PrimaryButton.vue';
import MobileMenu from './MobileMenu.vue';
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const isOpen = ref(false);
const route = useRoute();
</script>

<template>
    <nav class="navbar custom-navbar navbar-expand-md fixed-top">
        <MobileMenu :open="isOpen" class="mobileMenu" />
        <div class="container-xl">
            <RouterLink class="navbar-brand d-flex align-items-center gap-3 parent-logo" to="/">
                <div class="rounded overflow-hidden" style="width:48px;height:48px;">
                    <img src="/favicon.png" alt="Photography Logo" class="img-fluid h-100 w-100 object-fit-cover">
                </div>
                <div class="d-flex flex-column">
                    <span class="fw-bold fs-5 text-white">عدسة</span>
                    <span class="text-orange-400-80 text-xs d-none d-sm-block">عالم التصوير الفوتوغرافي</span>
                </div>
            </RouterLink>
            <button class="navbar-toggler" @click="isOpen = !isOpen">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mainNavbar">
                <ul class="navbar-nav mx-auto mb-2 mb-md-0 p-1">
                    <li class="nav-item">
                        <RouterLink :class="{ active: route.path === '/' }" class="nav-link rounded-pill" to="/home"
                            exact-active-class="active">الرئيسية
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link rounded-pill" to="/blog" exact-active-class="active">المدونة
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link rounded-pill" to="/about" exact-active-class="active">من نحن
                        </RouterLink>
                    </li>
                </ul>

                <div class="d-flex align-items-center gap-2">
                    <button class="btn-search d-sm-none d-md-block">
                        <i class="bi bi-search"></i>
                    </button>
                    <router-link to="/blog">
                        <PrimaryButton v-slot:primaryBtn>
                            ابدأ القراءة
                        </PrimaryButton>
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.custom-navbar {
    height: 80px;
    background: #161616;
    backdrop-filter: blur(14px);
    border-bottom: 1px solid transparent;
    transition: all 0.5s;
}

.custom-navbar .navbar-nav {
    border: 1px solid rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(6px);
    border-radius: 200px;
}

.custom-navbar .nav-link {
    font-weight: var(--font-weight-medium);
    transition: all 0.25s ease;
    padding: 0.5rem 1.2rem !important;
    color: rgba(255, 255, 255, 0.7);
}

.custom-navbar .nav-link:hover {
    color: white;
}

.custom-navbar .nav-link.active {
    background: linear-gradient(135deg, var(--color-orange-500), var(--color-orange-600));
    color: var(--color-white);
}

.btn-search {
    padding: 0.65rem 0.8rem;
    color: var(--color-neutral-500);
    border-radius: 0.75rem;
    background: transparent;
    border: 1px solid transparent;
    transition: all 0.3s ease;
}

.btn-search:hover {
    border: 1px solid;
    color: var(--color-primary);
    border-color: #262626;
}

.text-orange-400-80 {
    color: rgba(251, 146, 60, 0.8);
}

.parent-logo img {
    transition: transform 0.3s ease;
}

.parent-logo:hover img {
    transform: scale(1.04);
}

.navbar-toggler {
    border: none;
}

.navbar-toggler:focus {
    box-shadow: none;
}

.navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(163,163,163,1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
</style>
