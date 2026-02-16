import { defineStore } from 'pinia'

export const useCharactersFiltersStore = defineStore('characterFilters', {
  state: () => ({
    search: '',
    page: 1,
  }),
  actions: {
    setSearch(value: string) {
      this.search = value
      this.page = 1
    },
    prevPage() {
      this.page--
    },
    nextPage() {
      this.page++
    },
  },
})