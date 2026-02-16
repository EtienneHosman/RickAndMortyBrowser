<script setup lang="ts">
import { GET_ALL_CHARACTERS } from '~/graphql/characters.query'
import { useCharactersFiltersStore } from '~/stores/charactersFilters'
import type { CharacterQueryResult } from './types/characters';

const filters = useCharactersFiltersStore()
const variables = computed(() => ({
  name: filters.search,
  page: filters.page,
}))

const { data, pending, error, refresh } = await useAsyncQuery<CharacterQueryResult>(
  GET_ALL_CHARACTERS,
  variables
)
</script>

<template>
  <div class="p-6 space-y-4">
    <input
      v-model="filters.search"
      @input="refresh"
      placeholder="Search episodes..."
      class="border p-2 rounded w-full"
    />

    <div v-if="pending">Loading...</div>
    <div v-else-if="error" class="text-red-500">
      Error: {{ error.message }}
    </div>

    <ul v-else-if="data" class="space-y-2">
      <li
        v-for="character in data.characters.results"
        :key="character.id"
        class="p-4 border rounded"
      >
        <img :src="character.image" width="100" height="100" class="rounded-full border"/>
        <div class="font-semibold">{{ character.name }}</div>
        <div class="text-sm text-gray-500">{{ character.status }}</div>
      </li>
    </ul>

    <button
      v-if="data?.characters.info.prev"
      @click="filters.prevPage(); refresh()"
      class="px-4 py-2 bg-green-500 text-white rounded"
    >
      Previous page
    </button>
    <button
      v-if="data?.characters.info.next"
      @click="filters.nextPage(); refresh()"
      class="px-4 py-2 bg-green-500 text-white rounded"
    >
      Next page
    </button>
  </div>
</template>