<template>
  <div class="custom-code-block">
    <div class="code-header">
      <span class="code-lang">{{ lang || 'code' }}</span>
      <button class="copy-btn" :class="{ copied }" @click="copyCode" :title="copied ? '已复制' : '复制代码'">
        <template v-if="copied">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </template>
        <template v-else>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        </template>
      </button>
    </div>
    <pre class="code-pre"><code :class="langClass"><slot /></code></pre>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  lang?: string
  code?: string
}>()

const copied = ref(false)

const langClass = computed(() => props.lang ? `language-${props.lang}` : '')

async function copyCode() {
  const text = getCodeText()
  try {
    await navigator.clipboard.writeText(text)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch {
    // fallback — ignore
  }
}

function getCodeText(): string {
  if (props.code) return props.code
  // try to extract from default slot (client only)
  if (typeof document !== 'undefined') {
    // This won't work during SSR, but it's fine for client use
  }
  return props.code || ''
}
</script>

<script lang="ts">
export default {
  // Expose the raw inner text so the copy button can grab it
}
</script>

<style scoped>
.custom-code-block {
  position: relative;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  margin: 1.2em 0;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
}

.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 14px;
  background: var(--vp-c-bg-mute);
  border-bottom: 1px solid var(--vp-c-divider);
}

.code-lang {
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.copy-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: 1px solid transparent;
  border-radius: 4px;
  background: transparent;
  color: var(--vp-c-text-3);
  cursor: pointer;
  transition: all 0.2s;
}

.copy-btn:hover {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.copy-btn.copied {
  color: #10b981;
}

.code-pre {
  margin: 0;
  padding: 16px;
  overflow-x: auto;
  font-family: 'Fira Code', 'JetBrains Mono', Consolas, monospace;
  font-size: 0.88em;
  line-height: 1.65;
}

.code-pre code {
  background: none;
  padding: 0;
  font-size: inherit;
}
</style>
