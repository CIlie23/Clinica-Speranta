<template>
  <h1 class="text-4xl">Hello welcome to the home page!</h1>
  <h1>Rockwell-Bold</h1>
  <p>Your email address is: {{ user?.email || 'Not logged in'}}</p>
  <p>Your role is: {{ role || 'No role set' }}</p>
    <div>
      <UButton to="/login" label="Button">Login</UButton>
      <UButton to="/register" color="neutral">Register</UButton>
      <UButton @click="signOut" color="error">Logout</UButton>
      <Button @click="showHelloToast(); trackEvent()">Hello</Button>
      <div class="square" v-if="true"></div>
      <div class="square" v-if="true"></div>
      <div class="square" v-if="true"></div>
    </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import '~/assets/main.css'
import Button from '~/components/ui/button/Button.vue';
import { useSupabaseUser } from '#imports'
import { ref } from 'vue'

import { useToast } from 'vue-toastification'

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