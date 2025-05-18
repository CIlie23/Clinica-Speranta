<script setup lang="ts">
const items = ref(['ENG', 'RO'])
const value = ref('RO')
</script>

<template>
  <USelectMenu v-model="value" color="neutral" variant="subtle" :items="items" class="w-20" />
</template>
