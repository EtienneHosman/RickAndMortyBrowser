<template>
    <h1 class="mb-6 font-extrabold text-3xl md:text-6xl">My favourite characters</h1>
    <AsyncState :pending="pending" :error="error">
        <template #loading>
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                <CharacterSkeleton v-for="i in 10" :key="i" />
            </div>
        </template>

        <template #default>
            <div v-if="characters && favoritesStore.favoriteIds.length" class="grid grid-cols-2 md:grid-cols-5 gap-4">
                <CharacterCard v-for="character in characters" :key="character.id" :character="character" />
            </div>

            <p v-else class="text-gray-500">
                No favorite characters yet
            </p>
        </template>
    </AsyncState>
</template>

<script setup lang="ts">
import { GET_CHARACTERS_BY_ID } from '~/graphql/queries/characters.query'

const favoritesStore = useFavoritesStore()

const variables = computed(() => ({
    ids: favoritesStore.favoriteIds
}))

const { data, pending, error, execute } = useAsyncQuery<CharacterByIdsQueryResult>(
    GET_CHARACTERS_BY_ID,
    variables
)

const characters = computed(() => {
  if (!favoritesStore.favoriteIds?.length) return []
  return data.value?.charactersByIds || []
})

</script>