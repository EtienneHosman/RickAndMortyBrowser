import { defineStore } from 'pinia'
import { ref, watch, computed } from 'vue'

export const useCharactersFiltersStore = defineStore('characterFilters', () => {
  const search = ref('')
  const status = ref('')
  const gender = ref('')
  const page = ref(1)

  // reset page automatically when filters change
  watch([search, status, gender], () => {
    page.value = 1
  })

  const setSearch = (value: string) => {
    search.value = value
  }

  const nextPage = () => {
    page.value++
  }

  const prevPage = () => {
    if (page.value > 1) {
      page.value--
    }
  }

  const reset = () => {
    search.value = ''
    status.value = ''
    gender.value = ''
    page.value = 1
  }

  const activeFilters = computed(() => [
    search.value,
    status.value,
    gender.value
  ])

  return {
    search,
    status,
    gender,
    page,
    setSearch,
    nextPage,
    prevPage,
    reset,
    activeFilters
  }
})
