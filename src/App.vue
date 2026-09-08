<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from './components/layout/AppNavbar.vue'
import AppFooter from './components/layout/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-brand-dark transition-colors duration-300">
    <AppNavbar />
    <main class="flex-1">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>
