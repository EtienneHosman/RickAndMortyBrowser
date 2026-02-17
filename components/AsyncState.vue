<template>
  <div>
    <slot name="error" v-if="error" :error="error">
      <DefaultError :error="error" />
    </slot>

    <slot name="loading" v-else-if="pending" />

    <slot v-else />
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    pending: boolean
    error: unknown
  }>()
</script>