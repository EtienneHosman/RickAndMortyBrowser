<template>
  <div>
    <NuxtLink to="/characters"
      class="inline-flex items-center gap-2 font-semibold text-slate-600 hover:text-slate-900 mb-6">
      Back to characters
    </NuxtLink>

    <AsyncState :pending="pending" :error="error">
      <template #default v-if="data">
        <!-- Character Card -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
            <div class="bg-slate-100">
              <img :src="data.character.image" :alt="data.character.name" class="w-full h-full object-cover" />
            </div>

            <div class="p-6 flex flex-col gap-4">
              <div>
                <h1 class="text-3xl md:text-4xl font-extrabold">
                  {{ data.character.name }}
                </h1>
                <CharacterStatusIndicator class="mt-2 text-xl" :status="data.character.status" />
              </div>

              <div class="grid grid-cols-2 gap-4">
                <InfoBadge label="Species" :value="data.character.species" />
                <InfoBadge label="Gender" :value="data.character.gender" />
                <InfoBadge label="Origin" :value="data.character.origin.name" />
                <InfoBadge label="Location" :value="data.character.location.name" />
              </div>
              <BaseButton @click="toggleFavorite" class="max-w-fit">
                {{ isFavorite ? 'Remove from favorites' : 'Add to favorites' }}
              </BaseButton>
            </div>
          </div>
        </div>

        <!-- Episodes -->
        <section class="mt-10">
          <h2 class="text-2xl font-bold mb-4">
            Appeared in {{ data.character.episode.length }}
            {{ data.character.episode.length === 1 ? 'episode' : 'episodes' }}
          </h2>

          <ol class="divide-y rounded-xl border overflow-y-auto max-h-[600px] bg-white shadow-sm">
            <li v-for="episode in data.character.episode" :key="episode.id"
              class="flex items-center justify-between px-4 py-3 hover:bg-slate-50 transition">
              <EpisodePreview :episode="episode" />
            </li>
          </ol>
        </section>
      </template>
    </AsyncState>
  </div>
</template>

<script setup lang="ts">
import EpisodePreview from '~/components/episodes/EpisodePreview.vue'
import { GET_CHARACTER_BY_ID } from '~/graphql/queries/characters.query'

const route = useRoute()
const favorites = useFavoritesStore()


const isFavorite = computed(() => {
  return data.value ? favorites.isFavorite(data.value.character.id) : false
})

function toggleFavorite() {
  if (!data.value) return
  favorites.toggle(data.value.character.id)
}

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