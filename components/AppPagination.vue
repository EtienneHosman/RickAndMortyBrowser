<template>
  <div class="flex items-center gap-4">
    <button
      :disabled="page <= 1"
      @click="page--"
      class="px-3 py-1 border rounded disabled:opacity-50"
    >
      Prev
    </button>

    <span>Page {{ page }}/{{ pagination.pages }}</span>

    <button
      :disabled="!pagination.next"
      @click="page++"
      class="px-3 py-1 border rounded disabled:opacity-50"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  pagination: PaginationInfo
}>()

const page = defineModel<number>('page', {required: true})
</script>