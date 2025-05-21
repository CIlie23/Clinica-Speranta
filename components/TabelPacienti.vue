<template>
  <table class="w-full table-auto border mt-4">
    <thead>
      <tr >
        <th class="text-left p-2">Nume</th>
        <th class="text-left p-2">Email</th>
        <th class="text-left p-2">Telefon</th>
        <th class="text-left p-2">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="p in patients" :key="p.id" class="border-t hover:bg-gray-50">
        <td class="p-2">{{ p.name }}</td>
        <td class="p-2">{{ p.email }}</td>
        <td class="p-2">{{ p.telefon || '-' }}</td>
        <td class="p-2">
          <span
            class="px-2 py-1 rounded-full text-xs font-medium"
            :class="p.has_account ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'"
          >
            {{ p.has_account ? 'cu cont' : 'extern' }}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  patients: Array
})
</script>
