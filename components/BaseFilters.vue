<template>
  <div class="space-y-6">
    <h2 class="text-lg font-bold">
      <slot name="title">Filters</slot>
    </h2>

    <slot />

    <button
      @click="$emit('reset')"
      class="w-full rounded-md border px-3 py-2 text-sm font-semibold hover:bg-slate-50"
    >
      Reset filters
    </button>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'reset'): void
}>()
</script>