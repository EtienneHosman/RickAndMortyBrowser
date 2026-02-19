<template>
  <div class="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
    <aside class="bg-white rounded-xl border p-4 h-fit">
      <EpisodeFilters />
    </aside>

    <AsyncState :pending="pending" :error="error">
      <template #loading>
        <div class="space-y-2 bg-white p-2 border rounded-lg">
          <EpisodeSkeleton v-for="i in 20" :key="i" />
        </div>

        <AppPagination
          v-if="data"
          class="justify-end my-4"
          :pagination="data.episodes.info"
          v-model:page="filters.page"
        />
      </template>

      <template #default v-if="data">
        <div v-if="data.episodes.results.length" class="bg-white px-2 border rounded-lg">
          <EpisodePreview
            class="-mx-2 px-2 even:bg-slate-100"
            v-for="episode in data.episodes.results"
            :key="episode.id"
            :episode="episode"
          />
        </div>

        <p v-else>No episodes found</p>

        <AppPagination
          v-if="data.episodes.info.pages"
          class="justify-end my-4"
          :pagination="data.episodes.info"
          v-model:page="filters.page"
        />
      </template>
    </AsyncState>
  </div>
</template>

<script setup lang="ts">
import { GET_ALL_EPISODES } from '~/graphql/queries/episodes.query'
import { useEpisodesFiltersStore } from '~/stores/episodesFilters'

useHead({
  title: 'Episodes'
})

const filters = useEpisodesFiltersStore()

const variables = computed(() => ({
  name: filters.search || undefined,
  page: filters.page
}))

const { data, pending, error } = useAsyncQuery<EpisodesQueryResults>(
  GET_ALL_EPISODES,
  variables
)
</script>