<template>
    <div class="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
        <aside class="bg-white rounded-xl border p-4 h-fit">
            <CharacterFilters />
        </aside>

        <AsyncState :pending="pending" :error="error">
            <template #loading>
                <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <CharacterSkeleton v-for="i in 20" :key="i" />
                </div>

                <AppPagination v-if="data" class="justify-end my-4" :pagination="data?.characters.info"
                    v-model:page="filters.page" />
            </template>

            <template #default v-if="data">
                <div v-if="data.characters.results.length" class="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <CharacterCard v-for="character in data.characters.results" :key="character.id"
                        :character="character" />
                </div>
                <p v-else>No characters found</p>
                <AppPagination v-if="data.characters.info.pages" class="justify-end my-4" :pagination="data.characters.info" v-model:page="filters.page" />
            </template>
        </AsyncState>
    </div>
</template>


<script setup lang="ts">
import { GET_ALL_CHARACTERS } from '~/graphql/queries/characters.query'
import { useCharactersFiltersStore } from '~/stores/charactersFilters'

useHead({
    title: 'Characters'
})

const filters = useCharactersFiltersStore()
const variables = computed(() => ({
    name: filters.search,
    status: filters.status || undefined,
    gender: filters.gender || undefined,
    page: filters.page
}))

const { data, pending, error } = useAsyncQuery<CharactersQueryResult>(
    GET_ALL_CHARACTERS,
    variables
)
</script>