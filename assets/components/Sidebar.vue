<template>
  <UDrawer :handle="false" direction="left">
    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />
    <template #content>
  <aside class="bg-gray-800 text-white w-64 min-h-screen flex flex-col">
    <div class="px-6 py-4 text-2xl font-bold border-b border-gray-700">
      Clinica Speranta
    </div>
    <nav class="mt-6 flex-1">
      <SidebarLink to="" icon="LayoutDashboard" title="Dashboard" />
      <SidebarLink to="" icon="FileText" title="Testele Mele" />
      <SidebarLink v-if="role === 'psychologist'" to="" icon="Calendar" title="Programări" />
      <SidebarLink v-if="role === 'psychologist'" to="" icon="Users" title="Pacienți" />
      <SidebarLink to="" icon="Settings" title="Setări" />
      <SidebarLink v-if="role === 'psychologist'" to="" icon="ClipboardPen" title="Blog" />
    </nav>
    <button @click="logout" class="w-full py-3 bg-red-600 hover:bg-red-500 mt-auto">
      Logout
    </button>
  </aside>
  </template>
  </UDrawer>
</template>

<script setup>
import SidebarLink from './SidebarLink.vue';
import { useSupabaseClient } from '#imports';

const supabase = useSupabaseClient();
const logout = async () => {
  await supabase.auth.signOut();
  window.location.reload();
};
</script>
