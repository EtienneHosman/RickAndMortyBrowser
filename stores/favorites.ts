import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useFavoritesStore = defineStore(
  "favorites",
  () => {
    const favoriteIds = ref<string[]>([]);

    const isFavorite = (id: string) => favoriteIds.value.includes(id);

    const count = computed(() => favoriteIds.value.length);

    function add(id: string) {
      if (!favoriteIds.value.includes(id)) {
        favoriteIds.value.push(id);
      }
    }

    function remove(id: string) {
      favoriteIds.value = favoriteIds.value.filter((favId) => favId !== id);
    }

    function toggle(id: string) {
      isFavorite(id) ? remove(id) : add(id);
    }

    return {
      favoriteIds,
      isFavorite,
      count,
      add,
      remove,
      toggle,
    };
  },
  {
    persist: true,
  },
);
