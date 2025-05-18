<template>
  <div class="site">
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
import * as icons from 'lucide-vue-next'
</script>

<style>
.site{
  min-height: 100dvh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: minmax(0, 1fr);
}

</style>