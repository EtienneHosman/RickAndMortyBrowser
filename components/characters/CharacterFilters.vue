<template>
  <div class="space-y-6">
    <h2 class="text-lg font-bold">Filters</h2>

    <!-- Search -->
    <div>
      <label class="block text-sm font-medium mb-1">Name</label>
      <input
        v-model="filters.search"
        type="text"
        placeholder="Rick, Morty…"
        class="w-full rounded-md border px-3 py-2 text-sm"
      />
    </div>

    <!-- Status -->
    <div>
      <label class="block text-sm font-medium mb-1">Status</label>
      <select
        v-model="filters.status"
        class="w-full rounded-md border px-3 py-2 text-sm"
      >
        <option value="">Any</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>

    <!-- Gender -->
    <div>
      <label class="block text-sm font-medium mb-1">Gender</label>
      <select
        v-model="filters.gender"
        class="w-full rounded-md border px-3 py-2 text-sm"
      >
        <option value="">Any</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>

    <!-- Reset -->
    <button
      @click="reset"
      class="w-full rounded-md border px-3 py-2 text-sm font-semibold hover:bg-slate-50"
    >
      Reset filters
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCharactersFiltersStore } from '~/stores/charactersFilters'

const filters = useCharactersFiltersStore()

const reset = () => {
  filters.reset()
}
</script>
