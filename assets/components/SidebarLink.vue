<template>
  <NuxtLink
    :to="to"
    class="flex items-center gap-3 px-4 py-2 hover:bg-gray-700 rounded-lg"
  >
    <component :is="iconComponent" class="w-5 h-5" />
    <span>{{ title }}</span>
  </NuxtLink>
</template>

<script setup>
import { ref, computed } from 'vue';
import * as icons from 'lucide-vue-next'

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const iconComponent = computed(() => icons[props.icon]);
</script>
