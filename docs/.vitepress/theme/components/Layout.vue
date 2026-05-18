<template>
  <div class="app-wrapper">
    <Layout />
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import BackToTop from './BackToTop.vue'

const Layout = DefaultTheme.Layout
</script>

<style>
/* Page transition — subtle crossfade */
.VPDoc {
  animation: page-enter 0.25s ease-out;
}

@keyframes page-enter {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
