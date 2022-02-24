<template>
  <div class="topnav">
    <TopNavComponent />
  </div>
  <div class="bg-neutral-100 dark:bg-zinc-900">
    <div class="relative py-16 overflow-hidden">
      <div class="relative px-4 sm:px-6 lg:px-8">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TopNavComponent from "@/components/TopNavComponent.vue";
</script>
