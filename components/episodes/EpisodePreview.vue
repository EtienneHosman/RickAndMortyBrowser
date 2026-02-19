<template>
    <div class="py-2">
        <NuxtLink :to="{ name: 'episodes-id', params: { id: episode.id } }"
            class="font-mono font-semibold text-indigo-600 hover:underline">
            {{ episode.episode }}
        </NuxtLink>
        <span class="ml-2 text-slate-700">
            {{ episode.name }}
        </span>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    episode: EpisodePreview
}>()
</script>