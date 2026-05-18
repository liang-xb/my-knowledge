<template>
  <div class="confetti-container" aria-hidden="true">
    <span
      v-for="p in particles"
      :key="p.id"
      class="confetti-particle"
      :style="p.style"
    />
  </div>
</template>

<script setup lang="ts">
const COLORS = [
  '#f472b6', // pink
  '#3b82f6', // blue (brand)
  '#fbbf24', // amber (warning)
  '#10b981', // green (success)
  '#8b5cf6', // purple (accent)
  '#60a5fa', // light blue
  '#ef4444', // red (emphasis)
]

function randomParticle() {
  const color = COLORS[Math.floor(Math.random() * COLORS.length)]
  const left = Math.random() * 100
  const size = 4 + Math.random() * 8
  const delay = Math.random() * 8
  const duration = 6 + Math.random() * 10
  const rotation = Math.random() * 360

  return {
    id: Math.random().toString(36).slice(2),
    style: {
      '--left': `${left}%`,
      '--size': `${size}px`,
      '--delay': `${delay}s`,
      '--duration': `${duration}s`,
      '--rotation': `${rotation}deg`,
      '--color': color,
    } as Record<string, string>,
  }
}

const particles = Array.from({ length: 35 }, () => randomParticle())
</script>

<style scoped>
.confetti-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.confetti-particle {
  position: absolute;
  top: -10px;
  left: var(--left);
  width: var(--size);
  height: var(--size);
  background: var(--color);
  border-radius: 2px;
  opacity: 0;
  transform: rotate(var(--rotation));
  animation: confetti-fall var(--duration) var(--delay) infinite linear;
}

@keyframes confetti-fall {
  0% {
    opacity: 0;
    transform: translateY(-10px) rotate(var(--rotation)) scale(1);
  }
  5% {
    opacity: 0.6;
  }
  85% {
    opacity: 0.2;
  }
  100% {
    opacity: 0;
    transform: translateY(480px) rotate(calc(var(--rotation) + 360deg)) scale(0.25);
  }
}
</style>
