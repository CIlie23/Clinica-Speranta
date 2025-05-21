<!-- /pages/dashboard/psiholog/pacienti.vue -->
<template>
  <div class="p-6">
    <div class="flex items-center justify-between mb-4">
      <h1 class="text-2xl font-semibold">Pacienții mei</h1>
      <Button @click="showAddModal = true">Adaugă pacient</Button>
    </div>

      <div class="p-4 space-y-4">
      <h2 class="text-xl font-bold">Lista pacienților</h2>

      <div v-if="loading">Se încarcă...</div>

      <div v-else-if="pacienti.length === 0">
        Nu există pacienți.
      </div>

      <ul v-else class="space-y-2">
        <li v-for="p in pacienti" :key="p.id" class="p-4 bg-gray-50 rounded-md">
          <p class="font-medium text-gray-600">{{ p.prenume }} {{ p.nume }}</p>
          <p class="text-sm text-gray-600">{{ p.email }} | {{ p.telefon }}</p>
        </li>
      </ul>
    </div>
    <!--<TabelPacienti :patients="patients" />-->

    <AddPacientModal v-model:open="showAddModal" @added="fetchPatients" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useSupabaseClient, useSupabaseUser } from '#imports'
import { watchEffect } from 'vue'

import TabelPacienti from '~/components/TabelPacienti.vue'
import AddPacientModal from '~/components/AddPacientModal.vue'
import { useToast } from 'vue-toastification'

const supabase = useSupabaseClient()
const user = useSupabaseUser()
const toast = useToast()

const pacienti = ref([])
const loading = ref(true)

const showAddModal = ref(false)

const fetchPatients = async () => {
  if (!user.value) return

  loading.value = true
  const { data, error } = await supabase
    .from('pacienti')
    .select('*')
    .eq('psiholog_id', user.value.id)

  if (error) {
    toast.error('Eroare la fetch: ' + error.message)
    pacienti.value = []
  } else {
    //toast.success(`S-au încărcat ${data.length} pacienți`)
    console.log('Pacienți:', data)
    pacienti.value = data
  }

  loading.value = false
}


watchEffect(() => {
  if (user.value) {
    console.log('User este acum disponibil:', user.value)
    //toast.success('User este acum disponibil: { id: "...", ... }')
    fetchPatients()
  }
})
</script>
