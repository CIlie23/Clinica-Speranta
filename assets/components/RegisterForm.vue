<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormField label="Prenume" name="prenume">
      <UInput v-model="state.prenume" placeholder="Prenume" />
    </UFormField>

    <UFormField label="Nume" name="nume">
      <UInput v-model="state.nume" placeholder="Nume" />
    </UFormField>

    <UFormField label="Email" name="email">
      <UInput v-model="state.email" placeholder="Email" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" placeholder="Password"/>
    </UFormField>

    <UButton type="submit">Register</UButton>
  </UForm>
</template>

<script setup lang="ts">
import * as v from 'valibot'
import type {FormSubmitEvent} from '#ui/types';
import {useSupabaseClient} from '#imports';
import { useToast } from 'vue-toastification'

const schema = v.object({
  prenume: v.pipe(v.string(), v.minLength(2, 'Prenume must be at least 2 characters')),
  nume: v.pipe(v.string(), v.minLength(2, 'Nume must be at least 2 characters')),
  email: v.pipe(v.string(), v.email('Invalid email')),
  password: v.pipe(v.string(), v.minLength(8, 'Must be at least 8 characters'))
});

type Schema = v.InferOutput<typeof schema>

const state = reactive({
  prenume: '',
  nume: '',
  email: '',
  password: ''
});

const supabase = useSupabaseClient();
const router = useRouter();

async function submit(event: FormSubmitEvent<any>) {
  const { prenume, nume, email, password } = event.data;

  // Use signUp with metadata for additional fields
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        prenume,
        nume,
        role : 'clienti'
      }
    }
  });

  if (error) {
    throw error; // Throw error to be caught in onSubmit
  }

  // Redirect to login page after successful registration
  router.push('/login');
}

const toast = useToast()

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    await submit(event);
    toast.success('Registration successful. Please log in.');
  } catch (error) {
    toast.error('Registration failed. Please check your credentials.');
    console.error(error);
  }
}
</script>
