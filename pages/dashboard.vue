<script setup lang="ts">
import { Icon } from "@iconify/vue";
import '~/assets/main.css'
import Button from '~/components/ui/button/Button.vue';
import { useSupabaseUser } from '#imports'

import { useToast } from 'vue-toastification'
import Sidebar from 'assets/components/Sidebar.vue';

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


</script>

<template class="font-sans">
  <div class="flex">
    <Sidebar />
    <div class="flex-1 p-6">
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
    </div>
  </div>
</template>

<style>
@import url("~/assets/main.css");

h1 {
  font-family: 'Rockwell', sans-serif;
}

</style>

