<template>
  <div class="space-y-6">
    <h2 class="text-lg font-bold">Filters</h2>

    <!-- Search -->
    <div>
      <label class="block text-sm font-medium mb-1">Name</label>
      <input
        v-model="filters.search"
        type="text"
        placeholder="Pilot, Rick Potion…"
        class="w-full rounded-md border px-3 py-2 text-sm"
      />
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
import { useEpisodesFiltersStore } from '~/stores/episodesFilters'

const filters = useEpisodesFiltersStore()

const reset = () => {
  filters.reset()
}
</script>