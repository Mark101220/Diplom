<script setup>
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';
</script>

<template>
  <div class="root">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<style lang="scss">
@import '~/node_modules/normalize.css/normalize.css';

:root {
   --font-title: Montserrat, sans-serif;
   --font-text: Open Sans, sans-serif;

   font-family: var(--font-text);
}

.root {
  display: flex;
  flex-direction: column;
}

html, body, #__nuxt, .root {
  height: 100%;
}
</style>
