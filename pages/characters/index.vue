<template>
    <div v-if="data">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div v-for="character in data?.characters.results" :key="character.id">
                <CharacterCard :character="character"/>
            </div>
        </div>
        <AppPagination
            class="justify-end my-4"
            :pagination="data?.characters.info"
            v-model:page="filters.page" 
        />
    </div>
</template>

<script setup lang="ts">
import { GET_ALL_CHARACTERS } from '~/graphql/characters.query'
import { useCharactersFiltersStore } from '~/stores/charactersFilters'

const filters = useCharactersFiltersStore()
const variables = computed(() => ({
  name: filters.search,
  page: filters.page,
}))

const { data, pending, error } = useAsyncQuery<CharactersQueryResult>(
  GET_ALL_CHARACTERS,
  variables
)
</script>