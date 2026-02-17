<template>
    <h1 class="text-3xl font-bold">{{data?.episode.name}}</h1>
    <h2 class="text-2xl font-bold mb-2">Characters in this episode</h2>
    <Carousel v-bind="carouselConfig" >
        <Slide v-for="character in data?.episode.characters" :key="character.id">
            <CharacterCard :character="character"/>
        </Slide>
        <template #addons>
            <Navigation />
        </template>
  </Carousel>
</template>

<script setup lang="ts">
import CharacterCard from '~/components/CharacterCard.vue'
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