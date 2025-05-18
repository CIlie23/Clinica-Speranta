<template>
  <header
    class="bg-cover bg-center"
    style="background-image: url('/banner.png');"
  >

    <!-- Top Header -->
    <div class="flex items-center justify-between px-4 py-2">
      <!-- Logo & Clinic Name -->
      <div class="flex items-center">
        <img
          src="~/assets/logo.png"
          alt="Clinica Speranta Logo"
          class="mr-3"
          width="255"
          height="100"
        />
      </div>
  
      <!-- Phonenumber -->
      <div
        class="bg-yellow-400 text-blue-900 font-bold text-lg px-6 py-2 rounded shadow"
      >
        0722 222 222
      </div>
    </div>
    <!-- Navigation -->
    <nav
      class="flex items-center justify-between bg-white border-t border-gray-200 px-6"
    >
      <ul class="flex space-x-6 font-bold text-gray-700">
        <li>
          <NuxtLink to="/" class="py-4 block hover:text-blue-600">Acasa</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="py-4 block hover:text-blue-600"
            >Despre Noi</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/evenimente" class="py-4 block hover:text-blue-600"
            >Evenimente</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/servicii" class="py-4 block hover:text-blue-600"
            >Servicii</NuxtLink
          >
        </li>
      </ul>
      <div class="flex items-center space-x-6 font-bold text-gray-700">
        <NuxtLink to="/register" class="hover:text-blue-600">Sign Up</NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import SelectMenu from './SelectMenu.vue';


</script>