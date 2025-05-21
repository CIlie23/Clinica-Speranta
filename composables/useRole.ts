// composables/useRole.ts
export const useRole = () => {
  const role = useState<string>('role', () => '')

  const fetchRole = async () => {
    const supabase = useSupabaseClient()
    const user = useSupabaseUser()

    if (!user.value) return

    const { data, error } = await supabase
      .from('utilizator')
      .select('role')
      .eq('id', user.value.id)
      .single()

    if (error) {
      console.error('Eroare la fetch role:', error)
    }

    if (data?.role) {
      role.value = data.role
    }
  }

  return { role, fetchRole }
}

