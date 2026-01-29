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
  <Navbar />
  <RouterView />
  <Footer />
</template>

<style scoped></style>
