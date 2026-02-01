<script setup>

</script>

<template>
    <header class="page-header-shared">
        <div class="bg-base-shared"></div>
        <div class="bg-grid-shared"></div>
        <div class="bg-blobs-shared">
            <div class="blob-orange-shared"></div>
        </div>
        <div class="header-content-shared">
            <nav class="breadcrumb-shared">
                <slot name="breadcrumb" />
            </nav>
            <div class="icon-box-shared">
                <slot name="icon" />
            </div>
            <h1>
                <slot name="title" />
            </h1>
            <p class="subtitle-shared">
                <slot name="subtitle" />
            </p>
        </div>
    </header>
</template>

<style>
.page-header-shared {
    position: relative;
    padding: 5rem 1rem;
    overflow: hidden;
}

.bg-base-shared {
    position: absolute;
    inset: 0;
    background: #0a0a0a;
}

.bg-grid-shared {
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(rgba(38, 38, 38, .5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(38, 38, 38, .5) 1px, transparent 1px);
    background-size: 60px 60px;
}

.bg-blobs-shared {
    position: absolute;
    inset: 0;
    opacity: .3;
}

.blob-orange-shared {
    position: absolute;
    top: 5rem;
    right: 5rem;
    width: 18rem;
    height: 18rem;
    background: rgba(249, 115, 22, 0.2);
    border-radius: 50%;
    filter: blur(100px);
}

.header-content-shared {
    position: relative;
    max-width: 56rem;
    margin: auto;
    text-align: center;
}

.breadcrumb-shared {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    font-size: .875rem;
    margin-bottom: 2rem;
}

.breadcrumb-shared a {
    color: #9ca3af;
    text-decoration: none;
    transition: .3s;
}

.breadcrumb-shared a:hover {
    color: #fff;
}

.breadcrumb-shared i {
    color: #525252;
    font-size: .75rem;
}

.breadcrumb-shared span {
    color: #f97316;
    font-weight: 500;
}

.icon-box-shared {
    width: 64px;
    height: 64px;
    margin: 0 auto 1.5rem;
    background: rgba(249, 115, 22, .1);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(249, 115, 22, .3);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f97316;
    font-size: 28px;
}

.header-content-shared h1 {
    font-size: clamp(32px, 5vw, 48px);
    font-weight: 800;
    color: #fff;
    margin-bottom: 1rem;
}

.subtitle-shared {
    font-size: 1.1rem;
    color: #9ca3af;
}
</style>