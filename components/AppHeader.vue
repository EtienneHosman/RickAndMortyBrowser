<template>
    <div class="border-b border-slate-300 py-4 bg-white">
        <header class="px-4 mx-auto container">
            <nav>
                <ul class="flex gap-8">
                    <li><NuxtLink to="/" :activeClass="activeClasses">Home</NuxtLink></li>
                    <li><NuxtLink to="/characters" :activeClass="activeClasses">Characters</NuxtLink></li>
                    <li><NuxtLink to="/episodes" :activeClass="activeClasses">Episodes</NuxtLink></li>
                    <li><NuxtLink to="/favorites" :activeClass="activeClasses">Favorites</NuxtLink></li>
                </ul>
            </nav>        
        </header>
    </div>
</template>

<script setup lang="ts">
const activeClasses = 'font-semibold';
</script>