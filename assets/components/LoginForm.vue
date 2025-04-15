<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" placeholder="Email" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" placeholder="Password"/>
    </UFormField>

    <UButton type="submit">Login</UButton>
  </UForm>
</template>

<script setup lang="ts">
import * as v from 'valibot'
import type {FormSubmitEvent} from '#ui/types';
import {useSupabaseClient} from '#imports';

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

async function submit(event: FormSubmitEvent<any>) {
  const { email, password } = event.data;

  await supabase.auth.signInWithPassword({
    email,
    password,
  });
  router.push('/');
}



const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    await submit(event);
    toast.add({ title: 'Success', description: 'You have been logged in.', color: 'success' });
  } catch (error) {
    toast.add({ title: 'Error', description: 'Login failed. Please check your credentials.', color: 'error' });
    console.error(error);
  }
}
</script>
