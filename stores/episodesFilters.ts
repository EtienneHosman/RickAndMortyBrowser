import { defineStore } from 'pinia'
import { ref, watch, computed } from 'vue'

export const useEpisodesFiltersStore = defineStore('episodeFilters', () => {
  const search = ref('')
  const page = ref(1)

  watch([search], () => {
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
    page.value = 1
  }

  const activeFilters = computed(() => [
    search.value,
  ])

  return {
    search,
    page,
    setSearch,
    nextPage,
    prevPage,
    reset,
    activeFilters
  }
})