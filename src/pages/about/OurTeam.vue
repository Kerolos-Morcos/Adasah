<script setup>
import PingDot from '@/components/PingDot.vue';
import SectionLabel from '@/components/SectionLabel.vue';
import SectionText from '@/components/SectionText.vue';
import { posts } from '@/store/posts';

const authors = posts.map((post) => post.author);
</script>

<template>
    <section class="team-section">
        <div class="container">
            <div class="text-center mb-5">
                <SectionLabel v-slot:sectionLabel>
                    <PingDot />
                    فريقنا
                </SectionLabel>
                <SectionText title-size="2.2rem" desc-size="1.1rem">
                    <template v-slot:sectionTitle>
                        تعرف على كتابنا
                    </template>
                    <template v-slot:sectionDesc>
                        فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
                    </template>
                </SectionText>
            </div>
            <div class="row align-items-center justify-content-start g-4 mx-auto" style="max-width: 1100px;">
                <div class="col-md-6 col-lg-4" v-for="(author, index) in authors" :key="index">
                    <div class="team-card text-center">
                        <div class="avatar-wrapper">
                            <img :src="author.avatar" :alt="author.name">
                            <span class="verified">
                                ✓
                            </span>
                        </div>
                        <h3 class="member-name">{{ author.name }}</h3>
                        <p class="member-role">{{ author.role }}</p>
                        <div class="social-links">
                            <a href="#" class="social-btn x">
                                <i class="fa-brands fa-x-twitter"></i>
                            </a>
                            <a href="#" class="social-btn github">
                                <i class="fa-brands fa-github"></i>
                            </a>
                            <a href="#" class="social-btn linkedin">
                                <i class="fa-brands fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.team-section {
    padding: 5rem 0;
    background: #0a0a0a;
}

.team-card {
    background: #161616;
    border: 1px solid #262626;
    border-radius: 10px;
    padding: 32px 20px;
    transition: all 0.3s ease;
}

.team-card:hover {
    border-color: rgba(249, 115, 22, .4);
}

.avatar-wrapper {
    position: relative;
    display: inline-block;
    margin-bottom: 16px;
}

.avatar-wrapper img {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #262626;
    transition: border-color 0.3s ease;
}

.team-card:hover img {
    border-color: rgba(249, 115, 22, .4);
}

.verified {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 22px;
    height: 22px;
    background: #f97316;
    color: #fff;
    font-size: 12px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #161616;
}

.member-name {
    color: #fff;
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 4px;
}

.member-role {
    color: #f97316;
    font-size: 0.9rem;
    margin-bottom: 16px;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 12px;
}

.social-btn {
    width: 36px;
    height: 36px;
    background: #262626;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #9ca3af;
    font-size: 15px;
    text-decoration: none;
    transition: all 0.3s ease;
}

.social-btn:hover {
    color: #fff;
    transform: translateY(-2px);
}

.social-btn.x:hover {
    background: #f97316;
}

.social-btn.github:hover {
    background: #404040;
}

.social-btn.linkedin:hover {
    background: #0a66c2;
}
</style>