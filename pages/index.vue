<template>
    <div class="container mx-auto py-10 text-center">
        <h1 class="text-3xl font-bold mb-6">Welcome to Rick and Morty Explorer</h1>

        <p>Explore characters, episodes, and your favorite characters!</p>
        <p class="mb-8">Wubba-dub-a-dub-dub</p>

        <div class="flex flex-col gap-4 md:flex-row md:justify-center">
            <NuxtLink to="/characters" class="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Characters
            </NuxtLink>

            <NuxtLink to="/episodes" class="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition">
                Episodes
            </NuxtLink>

            <NuxtLink to="/favorites" class="px-6 py-3 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
                Favorites
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Home'
})
</script>