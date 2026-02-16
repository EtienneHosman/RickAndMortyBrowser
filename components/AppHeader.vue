<template>
    <div class="border-b border-slate-300 py-4">
        <header class="mx-auto container">
            <nav>
                <ul class="flex gap-8">
                    <li><NuxtLink to="/" :active-class="activeClasses" :exact-active-class="activeClasses">Home</NuxtLink></li>
                    <li><NuxtLink to="/characters" :active-class="activeClasses" :exact-active-class="activeClasses">Characters</NuxtLink></li>
                    <li><NuxtLink to="/episodes" :active-class="activeClasses" :exact-active-class="activeClasses">Episodes</NuxtLink></li>
                </ul>
            </nav>        
        </header>
    </div>
</template>

<script setup lang="ts">
const activeClasses = 'font-semibold';
</script>