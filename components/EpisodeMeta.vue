<template>
  <div class="rounded-lg bg-white/10 backdrop-blur px-4 py-2">
    <p class="text-xs uppercase tracking-wide text-slate-300">
      {{ label }}
    </p>
    <p class="font-semibold">
      {{ value }}
    </p>
  </div>
</template>

<script setup lang="ts">
    defineProps<{
    label: string
    value: string
    }>()
</script>
