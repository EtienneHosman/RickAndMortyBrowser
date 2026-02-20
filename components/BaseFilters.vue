<template>
  <div class="space-y-6">
    <h2 class="text-lg font-bold">
      <slot name="title">Filters</slot>
    </h2>

    <slot />

    <BaseButton @click="$emit('reset')">Reset filters</BaseButton>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'reset'): void
}>()
</script>