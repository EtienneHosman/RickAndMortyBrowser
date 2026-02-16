<template>
    <div class="bg-slate-100 min-h-dvh">
        <AppHeader/>
        <div class="container mx-auto my-8 px-2 text-slate-700">
            <slot/>
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} | Rick and Morty Browser` : 'Rick and Morty Browser'
    }
})
</script>