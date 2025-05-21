<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Admin Dashboard - Manage Users</h1>
    <div class="mb-4">
      <UInput v-model="email" placeholder="Enter user's email" class="mb-2" />
      <USelect v-model="role" :options="roles" placeholder="Select role" />
      <UButton @click="updateUserRole" color="primary" class="mt-2">Update Role</UButton>
    </div>

    <div v-if="message" :class="{'text-green-500': !error, 'text-red-500': error}" class="mt-4">
      {{ message }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useSupabaseClient } from '#imports';

const email = ref('');
const role = ref('');
const roles = ([]);
const message = ref('');
const error = ref(false);

const supabase = useSupabaseClient();

// Ia rolurile din tabelul "roles" la montare
onMounted(async () => {
  const { data, error } = await supabase.from('roles').select('name')
  if (!error && data) {
    roles.value = data.map(r => r.name)
  } else {
    roles.value = [] // fallback dacă nu merge
  }
})

const updateUserRole = async () => {
  if (!email.value || !role.value) {
    message.value = 'Please provide both email and role.';
    error.value = true;
    return;
  }

  const { data, error: updateError } = await supabase
    .from('profiles')
    .update({ role: role.value })
    .eq('email', email.value);

  if (updateError) {
    message.value = 'Failed to update role. Please check the email or try again.';
    error.value = true;
  } else {
    message.value = `User role updated to ${role.value}.`;
    error.value = false;
  }
};
</script>

<style scoped>
  .p-6 {
    max-width: 500px;
    margin: auto;
  }
</style>
