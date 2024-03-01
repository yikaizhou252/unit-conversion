<template>
  <div class="flex flex-col justify-center items-center text-center h-screen">
    <div class="flex flex-row align-baseline space-x-9">
      <h1 class="font-heading justify-start font-bold text-8xl mb-2">Convert It!</h1>
      <img class="object-fill h-20 w-20" src="./assets/icons/logo.png" />
    </div>
    <DashboardView />
  </div>
</template>

<script setup lang="ts">
import DashboardView from './components/DashboardView.vue'
</script>

<style scoped></style>
