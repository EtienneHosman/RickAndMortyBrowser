<template>
    <AsyncState :pending="pending" :error="error">
        <template #loading>
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                <CharacterSkeleton v-for="i in 20" :key="i" />
            </div>
            <AppPagination v-if="data" class="justify-end my-4" :pagination="data.characters.info" v-model:page="filters.page" />
        </template>

        <template #default v-if="data">
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                <CharacterCard v-for="character in data.characters.results" 
                    :key="character.id"
                    :character="character" 
                />
            </div>

            <AppPagination class="justify-end my-4" :pagination="data.characters.info" v-model:page="filters.page" />
        </template>
    </AsyncState>
</template>

<script setup lang="ts">
import { GET_ALL_CHARACTERS } from '~/graphql/characters.query'
import { useCharactersFiltersStore } from '~/stores/charactersFilters'

useHead({
    title: 'Characters'
})

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