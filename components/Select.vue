<script setup lang="ts">
const items = ref([
  {
    label: 'Fara Scoala',
    value: 'fara_scoala'
  },
  {
    label: 'Primare (4 clase)',
    value: 'primare'
  },
  {
    label: 'Gimnaziale (8 clase)',
    value: 'gimnaziale'
  },
  {
    label: 'Liceale (12 clase)',
    value: 'liceale'
  }
])

</script>

<template>
  <USelect placeholder="Select status" :items="items" class="w-48" />
</template>
