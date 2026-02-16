<template>
    <NuxtLink class="group" :to="{name: 'characters-id', params: { id: character.id}}">
        <div class="relative rounded-lg overflow-hidden border-2 border-slate-200 group-hover:border-sky-500">
            <img :src="character.image" width="300" height="300" class="transition-transform group-hover:scale-105 w-full"/>
            <div class="absolute bottom-0 w-full py-4 px-2 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent text-white">
                <p class="text-xl font-semibold">{{ character.name }}</p>
                <CharacterStatusIndicator :status="character.status"/>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
    character: CharacterPreview
}>()
</script>