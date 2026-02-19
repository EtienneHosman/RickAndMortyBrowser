<template>
    <BaseFilters @reset="reset">
        <!-- Search -->
        <div>
            <label class="block text-sm font-medium mb-1">Name</label>
            <input v-model="filters.search" type="text" placeholder="Pilot, Rick Potion…"
                class="w-full rounded-md border px-3 py-2 text-sm" />
        </div>
    </BaseFilters>
</template>

<script setup lang="ts">
import { useEpisodesFiltersStore } from '~/stores/episodesFilters'

const filters = useEpisodesFiltersStore()

const reset = () => {
    filters.reset()
}
</script>