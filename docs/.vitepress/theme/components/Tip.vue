<template>
  <div class="custom-tip">
    <span class="tip-icon">💡</span>
    <div class="tip-body">
      <strong v-if="title" class="tip-title">{{ title }}</strong>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title?: string }>()
</script>

<style scoped>
.custom-tip {
  display: flex;
  gap: 12px;
  padding: 16px 20px;
  margin: 1.2em 0;
  border-radius: 8px;
  border-left: 4px solid var(--vp-c-brand-1);
  background: rgba(59, 130, 246, 0.06);
}

.dark .custom-tip {
  background: rgba(59, 130, 246, 0.1);
}

.tip-icon {
  font-size: 20px;
  flex-shrink: 0;
  line-height: 1.6;
}

.tip-body {
  font-size: 15px;
  line-height: 1.7;
  color: var(--vp-c-text-1);
}

.tip-body :deep(p) {
  margin: 0;
}

.tip-title {
  display: block;
  margin-bottom: 4px;
  font-size: 15px;
  color: var(--vp-c-brand-1);
}
</style>
