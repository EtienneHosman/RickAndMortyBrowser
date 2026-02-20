<template>
  <BaseFilters @reset="reset">
    <!-- Search -->
    <div>
      <label class="block text-sm font-medium mb-1">Name</label>
      <input :value="filters.search" @input="handleSearchInput" type="text" placeholder="Rick, Morty…"
        class="w-full rounded-md border px-3 py-2 text-sm" />
    </div>

    <!-- Status -->
    <div>
      <label class="block text-sm font-medium mb-1">Status</label>
      <select v-model="filters.status" class="w-full rounded-md border px-3 py-2 text-sm">
        <option value="">Any</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>

    <!-- Gender -->
    <div>
      <label class="block text-sm font-medium mb-1">Gender</label>
      <select v-model="filters.gender" class="w-full rounded-md border px-3 py-2 text-sm">
        <option value="">Any</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  </BaseFilters>
</template>

<script setup lang="ts">
import { useCharactersFiltersStore } from '~/stores/charactersFilters'

const filters = useCharactersFiltersStore()

const updateSearch = (value: string) => {
  filters.search = value
}

const handleSearchInput = debounce((e: Event) => {
  updateSearch((e.target as HTMLInputElement).value)
}, 500)

const reset = () => {
  filters.reset()
}
</script>
