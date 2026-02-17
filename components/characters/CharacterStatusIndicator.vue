<template>
  <span class="inline-flex items-center gap-2 text-sm">
    <span
      class="h-2.5 w-2.5 rounded-full"
      :class="dotClass"
      aria-hidden="true"
    />
    <span class="first-letter:uppercase">{{ status }}</span>
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  status: CharacterStatus
}>()

const dotClass = computed(() => {
  switch (props.status) {
    case CharacterStatus.Alive:
      return 'bg-green-500'
    case CharacterStatus.Dead:
      return 'bg-red-500'
    default:
      return 'bg-gray-400'
  }
})
</script>