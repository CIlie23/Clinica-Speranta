<script setup lang="ts">
import { Icon } from "@iconify/vue";
import '~/assets/main.css'
import Button from '~/components/ui/button/Button.vue';
import { useSupabaseUser } from '#imports'
import { ref } from 'vue'

import { useToast } from 'vue-toastification'
import Sidebar from 'assets/components/Sidebar.vue';
import { onMounted } from 'vue'

const { fetchRole } = useRole()

onMounted(async () => {
  await fetchRole()
})

const toast = useToast()

const user = useSupabaseUser();
const role = user.value?.user_metadata?.role;

const supabase = useSupabaseClient();
const router = useRouter();

async function signOut() {
  const { error } = await supabase.auth.signOut()
  router.push('/login');
}

function showHelloToast() {
  toast.success('Hello from the dashboard!');
}

const { $posthog } = useNuxtApp();

function trackEvent() {
  const posthog = useNuxtApp().$posthog();
  
  posthog.capture('Test_Event', {
    property1: 'value1',
    property2: 'value2',
  });

  console.log("Event trimis către PostHog!");
}

const isSidebarOpen = ref(false)


</script>

<template class="font-sans">
  <div class="flex">
    <!-- Sidebar mobile  -->
    <UDrawer v-model="isSidebarOpen" :handle="false" direction="left" class="md:hidden">
      <div class="md:hidden p-2">
        <UButton color="neutral" variant="subtle" trailing-icon="i-lucide:panel-left-close" />
       </div>
      <template #content>
        <Sidebar />
      </template>
    </UDrawer>

    <!-- Sidebar desktop -->
    <div class="hidden md:flex">
      <Sidebar />
    </div>
    <div class="flex-1 p-6">
      <NuxtPage />
    </div>
  </div>
</template>

<style>
@import url("~/assets/main.css");

h1 {
  font-family: 'Rockwell', sans-serif;
}

</style>

