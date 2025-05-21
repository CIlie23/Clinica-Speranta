<template>
  <UModal
    title="Adauga un client"
    :close="{
      color: 'primary',
      variant: 'outline',
      class: 'rounded-full'
    }"
  >
    <template #body>
      <Placeholder class="h-48" />
      
        <UFormField label="Nume Client">
          <UInput v-model="form.nume" placeholder="Introdu nume client" />
        </UFormField>

        <UFormField label="Prenume Client">
          <UInput v-model="form.prenume" placeholder="Introdu prenume client" />
        </UFormField>

        <UFormField label="Email Client">
          <UInput v-model="form.email" placeholder="Introdu email client" />
        </UFormField>

        <UFormField label="Sex">
          <URadioGroup v-model="form.sex" orientation="horizontal" :items="sexOptions" />
        </UFormField>

        <!-- Presupunem că Select emite `update:modelValue` -->
        <UFormField label="Studii client">
          <Select v-model="form.studii" />
        </UFormField>

        <UFormField label="Telefon">
          <UInput v-model="form.telefon" placeholder="Telefonul clientului" />
        </UFormField>

        <UFormField label="Ocupatie">
          <UInput v-model="form.ocupatie" placeholder="Ocupatia clientului" />
        </UFormField>

        <UButton label="Adaugă client" @click="adaugaPacient" />
        
    </template>
  </UModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSupabaseClient, useSupabaseUser } from '#imports'
import Select from '~/components/Select.vue'
import { useToast } from 'vue-toastification'

import type { RadioGroupItem, RadioGroupValue } from '@nuxt/ui'

const items = ref<RadioGroupItem[]>(['Masculin', 'Feminin'])
const value = ref<RadioGroupValue>('System')

const toast = useToast()
const supabase = useSupabaseClient()
const user = useSupabaseUser()

const sex = ref('')
const sexOptions = [
  { label: 'Masculin', value: 'masculin' },
  { label: 'Feminin', value: 'feminin' }
]

// Form state
const form = ref({
  nume: '',
  prenume: '',
  email: '',
  sex: '',
  telefon: '',
  ocupatie: '',
  studii: ''
})

async function adaugaPacient() {
  const { error } = await supabase
    .from('pacienti')
    .insert({
      nume: form.value.nume,
      prenume: form.value.prenume,
      email: form.value.email,
      sex: form.value.sex,
      telefon: form.value.telefon,
      ocupatie: form.value.ocupatie,
      psiholog_id: user.value.id // asociere cu utilizatorul curent
    })

  if (error) {
    console.error('Eroare la adăugare client:', error)
    toast.error('A apărut o eroare la adăugare.')
  } else {
    toast.success('Client adăugat cu succes!')
    // Poți închide modalul aici dacă vrei
  }
}

</script>
