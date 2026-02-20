<template>
  <div class="space-y-6">
    <!-- Episode Header Skeleton -->
    <section class="rounded-2xl bg-slate-800 p-8 animate-pulse">
      <div class="max-w-3xl space-y-4">
        <div class="h-4 w-32 bg-slate-700 rounded"></div>
        <div class="h-12 md:h-16 w-3/4 bg-slate-700 rounded"></div>
        <div class="flex gap-4 mt-6">
          <div class="h-6 w-24 bg-slate-700 rounded"></div>
          <div class="h-6 w-24 bg-slate-700 rounded"></div>
        </div>
      </div>
    </section>

    <!-- Characters Skeleton Carousel -->
    <section>
      <h2 class="text-2xl md:text-3xl font-bold mb-4">Characters in this episode</h2>
      <div class="flex gap-4 overflow-x-auto pb-4">
        <div
          v-for="n in 6"
          :key="n"
          class="min-w-[150px] h-48 bg-slate-700 rounded-lg animate-pulse"
        ></div>
      </div>
    </section>
  </div>
</template>