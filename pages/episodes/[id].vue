<template>
  <div>
    <NuxtLink to="/episodes"
      class="inline-flex items-center gap-2 font-semibold text-slate-600 hover:text-slate-900 mb-6">
      Back to episodes
    </NuxtLink>
    <AsyncState :pending="pending" :error="error">
      <template #loading>
        <EpisodeDetailSkeleton />
      </template>
      <template #default>
        <section v-if="data"
          class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 text-white p-8 mb-10 shadow-lg">
          <div class="max-w-3xl">
            <p class="text-sm uppercase tracking-widest text-slate-300">
              Episode {{ data.episode.episode }}
            </p>

            <h1 class="text-4xl md:text-5xl font-extrabold mt-2">
              {{ data.episode.name }}
            </h1>

            <div class="flex flex-wrap gap-4 mt-6">
              <EpisodeMeta label="Air Date" :value="data.episode.air_date" />
              <EpisodeMeta label="Characters" :value="data.episode.characters.length.toString()" />
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl md:text-3xl font-bold mb-4">
            Characters in this episode
          </h2>

          <Carousel v-bind="carouselConfig" class="relative">
            <Slide v-for="character in data?.episode.characters" :key="character.id" class="pb-4">
              <CharacterCard :character="character" class="mx-2 hover:scale-[1.02] transition-transform" />
            </Slide>
            
            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </section>
      </template>
    </AsyncState>
  </div>
</template>


<script setup lang="ts">
import { GET_EPISODE_BY_ID } from '~/graphql/queries/episodes.query'
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

const carouselConfig = {
  itemsToShow: 2,
  wrapAround: true,
  gap: 8,
  breakpoints: {
    700: {
      itemsToShow: 6,
    }
  }
}

const route = useRoute()

const variables = computed(() => ({
  id: route.params.id,
}))

const { data, pending, error } = useAsyncQuery<EpisodeDetailQueryResult>(
  GET_EPISODE_BY_ID,
  variables
)

useHead({
  title: () => data.value?.episode.name
})
</script>

<style>
.carousel {
  --vc-nav-background: rgba(0, 0, 0, 0.3);
  --vc-nav-color: white;
  --vc-nav-color-hover: #e5e5e5;
  --vc-nav-border-radius: 50%;
  --vc-nav-width: 40px;
  --vc-nav-height: 40px;
}
</style>