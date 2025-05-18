<script setup lang="ts">
//const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())
/*
useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})

  <ContentRenderer v-if="home" :value="home" />
  <div v-else>Home not found</div>
*/
// static import
import '~/assets/main.css'
import Button from '~/components/ui/button/Button.vue';
const user = useSupabaseUser();
const supabase = useSupabaseClient();
const router = useRouter();

async function signOut() {
  const { error } = await supabase.auth.signOut()
  router.push('/login');
}
//  
</script>

<template class="font-sans">
  <h1 class="text-4xl">Hello welcome to the home page!</h1>
  <h1>Rockwell-Bold</h1>
  <p>Your email address is: {{ user.email }}</p>
  <div>
    <UButton to="/login" label="Button">Login</UButton>
    <UButton to="/register" color="neutral">Register</UButton>
    <UButton @click="signOut" color="error">Logout</UButton>
    <Button>Hello</Button>
  </div>
</template>

<style>
@import url("~/assets/main.css");



h1 {
  font-family: 'Rockwell', sans-serif;
}

</style>

