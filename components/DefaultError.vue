<!-- components/DefaultError.vue -->
<template>
  <div class="p-6 rounded-lg border border-red-300 bg-red-50 text-red-700">
    <p class="font-semibold">Something went wrong</p>
    <p class="text-sm opacity-80">
      Please try again later.
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ error: unknown }>()
</script>