<template>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error loading character</div>

    <div v-else-if="data">
    <div class="flex gap-12">
        <img class="border-2 border-slate-500 rounded-lg shadow-lg" :src="data.character.image" :alt="data.character.name" />
        <div>
            <h1 class="text-4xl font-bold text-slate-700">{{ data.character.name }}</h1>
            <CharacterStatusIndicator class="text-xl" :status="data.character.status"/>
            <p>Species: {{ data.character.species }}</p>
            <p>Gender: {{ data.character.gender }}</p>
            <p>Origin: {{ data.character.origin.name }}</p>
            <p>Location: {{ data.character.location.name }}</p>
        </div>
    </div>


    </div>
</template>

<script setup lang="ts">
import { GET_CHARACTER_BY_ID } from '~/graphql/characters.query'

const route = useRoute()

const variables = computed(() => ({
  id: route.params.id,
}))

const { data, pending, error } = useAsyncQuery<CharacterDetailQueryResult>(
  GET_CHARACTER_BY_ID,
  variables
)
</script>