<template>
  <!-- Top Header with Background Image     
  <div
    class="flex items-center justify-between px-4 py-2 bg-cover bg-center text-white"
    style="background-image: url('~/assets/header-background.jpg'); height: 150px;"
  >

    <div class="flex items-center space-x-3">
      <img
        src="~/assets/logo.png"
        alt="Clinica Speranta Logo"
        class="mr-3"
        width="255"
        height="100"
      />
    </div>
  </div>
-->
  <nav class="bg-white border-b border-gray-200 font-bold text-gray-700">
    <div class="container mx-auto flex items-center justify-between p-4">
      <div class="text-xl font-bold">Clinica Speranta</div>
      
      <div class="hidden md:flex space-x-4">
        <NuxtLink to="/" class="hover:text-blue-600">Acasa</NuxtLink>
        <NuxtLink to="/about" class="hover:text-blue-600">Despre Noi</NuxtLink>
        <NuxtLink to="/servicii" class="hover:text-blue-600">Servicii</NuxtLink>
        <NuxtLink to="/evenimente" class="hover:text-blue-600">Evenimente</NuxtLink>
      </div>

    <div class="hidden md:flex space-x-4">
      <template v-if="isLoggedIn">
        <UChip>
          <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
        </UChip>
      </template>

        <NuxtLink
          :to="isLoggedIn ? '/dashboard' : '/login'"
          class="hover:text-blue-600"
        >
          Contul Meu
        </NuxtLink>
    </div>
      <button @click="toggleMenu" class="md:hidden">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>

    <div v-if="isMenuOpen" class="md:hidden">
      <div class="flex flex-col space-y-2 p-4">
        <NuxtLink to="/" @click="toggleMenu" class="hover:text-blue-600">Acasa</NuxtLink>
        <NuxtLink to="/about" @click="toggleMenu" class="hover:text-blue-600">Despre Noi</NuxtLink>
        <NuxtLink to="/servicii" @click="toggleMenu" class="hover:text-blue-600">Servicii</NuxtLink>
        <NuxtLink to="/evenimente" @click="toggleMenu" class="hover:text-blue-600">Evenimente</NuxtLink>
        <NuxtLink
          :to="isLoggedIn ? '/dashboard' : '/login'"
          @click="toggleMenu"
          class="hover:text-blue-600"
        >
          Contul Meu
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useSupabaseUser } from '#imports'

const isMenuOpen = ref(false);
const role = ref('user'); // Change this to 'psychologist' or 'admin' to test

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const user = useSupabaseUser()
const isLoggedIn = ref(false);

watch(user, () => {
  isLoggedIn.value = !!user.value;
});

</script>

<style scoped>
nav {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
""
