<template>
  <div class="animate-pulse space-y-6">
    <!-- Header back link -->
    <div class="h-6 w-40 bg-slate-200 rounded"></div>

    <!-- Character card -->
    <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div class="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
        <!-- Image skeleton -->
        <div class="bg-slate-200 h-80 md:h-auto w-full rounded"></div>

        <!-- Info skeleton -->
        <div class="p-6 flex flex-col gap-4">
          <!-- Name -->
          <div class="h-8 w-1/2 bg-slate-200 rounded"></div>
          <!-- Status -->
          <div class="h-6 w-24 bg-slate-200 rounded"></div>

          <!-- Badges grid -->
          <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="h-6 bg-slate-200 rounded"></div>
            <div class="h-6 bg-slate-200 rounded"></div>
            <div class="h-6 bg-slate-200 rounded"></div>
            <div class="h-6 bg-slate-200 rounded"></div>
          </div>

          <!-- Button -->
          <div class="h-10 w-48 bg-slate-200 rounded mt-4"></div>
        </div>
      </div>
    </div>

    <!-- Episodes -->
    <section class="mt-10">
      <div class="h-6 w-60 bg-slate-200 rounded mb-4"></div>
      <ul class="space-y-2 max-h-[600px] overflow-y-auto">
        <li v-for="i in 6" :key="i" class="h-12 bg-slate-200 rounded"></li>
      </ul>
    </section>
  </div>
</template>