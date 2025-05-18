<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" placeholder="Email" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" placeholder="Password"/>
    </UFormField>

    <UButton type="submit">Login</UButton>
    <UButton to="/register">Register</UButton>
  </UForm>
</template>

<script setup lang="ts">
import * as v from 'valibot'
import type {FormSubmitEvent} from '#ui/types';
import {useSupabaseClient} from '#imports';
import { useToast } from 'vue-toastification';

const schema = v.object({
  email: v.pipe(v.string(), v.email('Invalid email')),
  password: v.pipe(v.string(), v.minLength(8, 'Must be at least 8 characters'))
});

type Schema = v.InferOutput<typeof schema>

const state = reactive({
  email: '',
  password: ''
});

const supabase = useSupabaseClient();
const router = useRouter();
const toast = useToast()

async function submit(event: FormSubmitEvent<any>) {
  const { email, password } = event.data;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  // Redirect doar dacă login-ul a reușit
  router.push('/dashboard');
}

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    await submit(event);
    toast.success('You have been logged in.');
  } catch (error) {
    toast.error('Login failed. Please check your credentials.');
    console.error(error);
  }
}
</script>
