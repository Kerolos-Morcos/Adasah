<script setup>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

// fetch("./store/posts.json")
//   .then(res => res.json())
//   .then(data => {
//     console.log(data.posts);
//   });

</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <Navbar />
    <main class="flex-grow-1">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
