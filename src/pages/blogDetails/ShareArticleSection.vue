<script setup>

</script>

<template>
    <div class="content-box mt-4">
        <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <h5 class="box-title d-flex align-items-center gap-2">
                <i class="bi bi-share icon-box"></i> شارك المقال
            </h5>
            <div class="d-flex gap-2">
                <button class="share-btn twitter"><i class="fa-brands fa-x-twitter"></i></button>
                <button class="share-btn linkedin"><i class="fa-brands fa-linkedin-in"></i></button>
                <button class="share-btn whatsapp"><i class="fa-brands fa-whatsapp"></i></button>
                <button class="share-btn link"><i class="bi bi-link"></i></button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.share-btn {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    border: 1px solid #262626;
    background: #1a1a1a;
    color: #9ca3af;
    transition: .3s;
}

.share-btn:hover {
    color: #fff;
    border-color: transparent;
}

.share-btn.twitter:hover {
    background: #1da1f2;
}

.share-btn.linkedin:hover {
    background: #0077b5;
}

.share-btn.whatsapp:hover {
    background: #25d366;
}

.share-btn.link:hover {
    background: #f97316;
}
</style>