<template>
    <div>
        <NuxtLink to="/characters" class="block font-semibold my-4">Back to characters</NuxtLink>
        <AsyncState :pending="pending" :error="error">
            <template #default v-if="data">
                <div class="flex flex-col gap-8">
                    <div class="flex flex-col md:flex-row gap-4 md:gap-12">
                        <img class="border-2 border-slate-500 rounded-lg shadow-lg" :src="data.character.image" :alt="data.character.name" />
                        <div>
                            <h1 class="text-2xl md:text-4xl font-bold">{{ data.character.name }}</h1>
                            <CharacterStatusIndicator class="text-xl" :status="data.character.status"/>
                            <p>Species: {{ data.character.species }}</p>
                            <p>Gender: {{ data.character.gender }}</p>
                            <p>Origin: {{ data.character.origin.name }}</p>
                            <p>Location: {{ data.character.location.name }}</p>
                        </div>
                    </div>
                    <div class="">
                        <h2 class="text-3xl font-bold mb-4">Appeared in {{ data.character.episode.length }} {{ data.character.episode.length === 1 ? 'episode' : 'episodes'}}</h2>
                        <ol class="border rounded">
                            <li class="px-1 py-2 bg-white odd:bg-slate-100 flex items-center gap-4" v-for="episode in data.character.episode" :key="episode.id">
                                <NuxtLink :to="{name: 'episodes-id', params: {id: episode.id}}" class="font-bold">{{episode.episode}}</NuxtLink> {{ episode.name }}
                            </li>
                        </ol>
                    </div>
                </div>
            </template>
        </AsyncState>
    </div>
</template>


<script setup lang="ts">
import { GET_CHARACTER_BY_ID } from '~/graphql/queries/characters.query'

const route = useRoute()

const variables = computed(() => ({
  id: route.params.id,
}))

const { data, pending, error } = useAsyncQuery<CharacterDetailQueryResult>(
  GET_CHARACTER_BY_ID,
  variables
)

useHead({
    title: () => data.value?.character.name
})
</script>