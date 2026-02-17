<template>
  <div class="rounded-lg border bg-slate-50 px-4 py-2">
    <p class="text-xs uppercase tracking-wide text-slate-500">
      {{ label }}
    </p>
    <p class="font-semibold text-slate-900 truncate">
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
