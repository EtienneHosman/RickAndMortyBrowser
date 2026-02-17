<template>
    <NuxtLink
    class="group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg"
    :to="{ name: 'characters-id', params: { id: character.id } }"
    >
    <div class="relative overflow-hidden rounded-lg border-2 border-slate-200
                transition-all duration-200
                group-hover:border-sky-500 group-hover:shadow-lg">

        <img
        :src="character.image"
        loading="lazy"
        decoding="async"
        class="w-full aspect-square object-cover transition-transform group-hover:scale-105"
        />

        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />

        <div class="absolute bottom-0 w-full px-3 py-4
                    bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white">
        <p class="text-xl font-semibold line-clamp-1">
            {{ character.name }}
        </p>
        <CharacterStatusIndicator :status="character.status" />
        </div>
    </div>
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
    character: CharacterPreview
}>()
</script>