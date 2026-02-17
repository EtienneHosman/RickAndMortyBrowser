<template>
  <div class="flex items-center gap-4">
    <button
      :disabled="page <= 1"
      @click="page--"
      class="bg-white px-3 py-1 border rounded disabled:opacity-50"
    >
      Prev
    </button>

    <span>      
      <span>Page</span>
  
      <!-- Jump-to-page select -->
      <select
        v-model="page"
        class="px-2 py-1 mx-1 border rounded"
      >
        <option
          v-for="p in pagination.pages"
          :key="p"
          :value="p"
        >
          {{ p }}
        </option>
      </select>
  
      <span>/ {{ pagination.pages }}</span>
    </span>

    <button
      :disabled="!pagination.next"
      @click="page++"
      class="bg-white px-3 py-1 border rounded disabled:opacity-50"
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