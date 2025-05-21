<script setup lang="ts">
import type { CheckboxGroupItem } from '@nuxt/ui'

const items = ref<CheckboxGroupItem[]>(['System', 'Light', 'Dark'])
const value = ref<string[]>(['System'])
</script>

<template>
  <UCheckboxGroup v-model="value" :items="items" />
</template>
