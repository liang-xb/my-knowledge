<template>
  <div class="custom-warning">
    <span class="warning-icon">⚠️</span>
    <div class="warning-body">
      <strong v-if="title" class="warning-title">{{ title }}</strong>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title?: string }>()
</script>

<style scoped>
.custom-warning {
  display: flex;
  gap: 12px;
  padding: 16px 20px;
  margin: 1.2em 0;
  border-radius: 8px;
  border-left: 4px solid #f59e0b;
  background: rgba(245, 158, 11, 0.08);
}

.dark .custom-warning {
  background: rgba(245, 158, 11, 0.1);
}

.warning-icon {
  font-size: 20px;
  flex-shrink: 0;
  line-height: 1.6;
}

.warning-body {
  font-size: 15px;
  line-height: 1.7;
  color: var(--vp-c-text-1);
}

.warning-body :deep(p) {
  margin: 0;
}

.warning-title {
  display: block;
  margin-bottom: 4px;
  font-size: 15px;
  color: #b45309;
}

.dark .warning-title {
  color: #fbbf24;
}
</style>
