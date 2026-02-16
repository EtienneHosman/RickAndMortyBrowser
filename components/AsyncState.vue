<template>
  <div>
    <!-- Error -->
    <slot
      name="error"
      v-if="error"
      :error="error"
    >
      <DefaultError :error="error" />
    </slot>

    <!-- Loading -->
    <slot
      name="loading"
      v-else-if="pending"
    />

    <!-- Success -->
    <slot
      v-else
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  pending: boolean
  error: unknown
}>()
</script>