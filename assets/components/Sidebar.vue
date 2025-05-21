<template>
  <aside class="bg-gray-800 text-white w-64 min-h-screen flex flex-col">
    <div class="px-6 py-4 text-2xl font-bold border-b border-gray-700">
      Clinica Speranta
    </div>
    <nav class="mt-6 flex-1">
      <SidebarLink to="/dashboard" icon="LayoutDashboard" title="Dashboard" />
      <SidebarLink to="/dashboard/teste" icon="FileText" title="Testele Mele" />
      <SidebarLink v-if="role === 'psiholog'" to="" icon="Calendar" title="Programări" />
      <SidebarLink v-if="role === 'psiholog'" to="/dashboard/clienti" icon="Users" title="Clienți" />
      <SidebarLink to="/dashboard/evaluare" icon="FileText" title="Evaluare" />
      <SidebarLink to="/dashboard/settings" icon="Settings" title="Setări" />
      <SidebarLink v-if="role === 'psiholog'" to="" icon="ClipboardPen" title="Blog" />
      <SidebarLink v-if="role === 'admin'" to="/dashboard/administrator" icon="KeyRound" title="Admin" />
    </nav>
    <button @click="logout" class="w-full py-3 bg-red-600 hover:bg-red-500 mt-auto">
      Logout
    </button>
  </aside>
</template>

<script setup>
import SidebarLink from './SidebarLink.vue';
import { useSupabaseClient } from '#imports';

const supabase = useSupabaseClient();
const logout = async () => {
  await supabase.auth.signOut();
  window.location.reload();
};

const { role } = useRole()
</script>
