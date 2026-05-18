<template>
  <div class="home-page">
    <section class="hero-section">
      <ConfettiBackground />
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="gradient-text">博客のlxb 知识文档站</span>
          </h1>
          <p class="hero-subtitle">构建Java后端核心知识体系</p>
          <div class="hero-actions">
            <a href="/guide/getting-started" class="btn btn-primary">Description(说明)</a>
            <a href="#contact" class="btn btn-secondary">Contact(联系)</a>
            <a href="#warning" class="btn btn-warning">⚠️ Warning ⚠️</a>
          </div>
        </div>
        <div class="hero-illustration">
          <div class="illustration-wrapper">
            <svg class="illustration-svg" viewBox="0 0 280 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="40" y="180" width="200" height="12" rx="4" fill="var(--vp-c-brand-1)" opacity="0.25"/>
              <rect x="80" y="70" width="120" height="90" rx="8" fill="var(--vp-c-bg-mute)"/>
              <rect x="88" y="78" width="104" height="72" rx="4" fill="var(--vp-c-bg-soft)"/>
              <rect x="100" y="88" width="80" height="52" rx="2" fill="var(--vp-c-brand-1)" opacity="0.3"/>
              <rect x="104" y="94" width="50" height="4" rx="2" fill="var(--vp-c-brand-2)" opacity="0.5"/>
              <rect x="104" y="104" width="65" height="4" rx="2" fill="#8b5cf6" opacity="0.45"/>
              <rect x="104" y="114" width="40" height="4" rx="2" fill="#60a5fa" opacity="0.4"/>
              <rect x="104" y="124" width="55" height="4" rx="2" fill="var(--vp-c-brand-2)" opacity="0.35"/>
              <rect x="130" y="160" width="20" height="20" rx="3" fill="var(--vp-c-brand-1)" opacity="0.3"/>
              <rect x="95" y="170" width="90" height="8" rx="3" fill="var(--vp-c-brand-1)" opacity="0.2"/>
              <rect x="210" y="58" width="3" height="32" rx="1.5" fill="#f59e0b" opacity="0.5"/>
              <circle cx="211.5" cy="54" r="10" fill="#f59e0b" opacity="0.25"/>
              <circle cx="211.5" cy="54" r="5" fill="#f59e0b" opacity="0.4"/>
              <rect x="210" y="172" width="14" height="12" rx="3" fill="#8b5cf6" opacity="0.3"/>
              <circle cx="150" cy="46" r="14" fill="var(--vp-c-brand-2)" opacity="0.3"/>
              <rect x="136" y="64" width="28" height="14" rx="6" fill="var(--vp-c-brand-2)" opacity="0.25"/>
              <rect x="118" y="80" width="22" height="6" rx="3" fill="var(--vp-c-brand-2)" opacity="0.2" transform="rotate(-10 140 83)"/>
              <rect x="158" y="80" width="22" height="6" rx="3" fill="var(--vp-c-brand-2)" opacity="0.2" transform="rotate(10 160 83)"/>
              <rect x="48" y="160" width="18" height="18" rx="2" fill="#f472b6" opacity="0.25"/>
              <rect x="52" y="155" width="18" height="18" rx="2" fill="#10b981" opacity="0.25"/>
              <rect x="56" y="148" width="18" height="20" rx="2" fill="#f59e0b" opacity="0.25"/>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <section class="tips-section">
      <div class="tips-grid">
        <div class="tip-card">
          <span class="tip-icon">⏳</span>
          <h3>TIP 1</h3>
          <p>明确目标目的，逐步积累，循序渐进，切忌急于求成</p>
        </div>
        <div class="tip-card">
          <span class="tip-icon">💪</span>
          <h3>TIP 2</h3>
          <p>少想多做，降低预期，重视基础，重复练习，构建体系</p>
        </div>
        <div class="tip-card">
          <span class="tip-icon">🚀</span>
          <h3>TIP 3</h3>
          <p>保持独立思考，总结复盘，学会主动探索，敢于尝试</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ConfettiBackground from './ConfettiBackground.vue'
</script>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px 24px 80px;
}

/* ===== Hero ===== */
.hero-section {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  padding: 72px 56px 56px;
  margin-bottom: 56px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 50%, rgba(59, 130, 246, 0.03) 100%);
  border: 1px solid var(--vp-c-divider);
}

.hero-content {
  display: flex;
  align-items: center;
  gap: 56px;
  position: relative;
  z-index: 1;
}

.hero-text {
  flex: 1;
  min-width: 0;
}

.hero-title {
  font-size: 42px;
  font-weight: 800;
  line-height: 1.2;
  margin: 0 0 16px;
  letter-spacing: -0.02em;
}

.gradient-text {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 60%, #6366f1 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 20px;
  color: var(--vp-c-text-2);
  margin: 0 0 32px;
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* ===== Buttons ===== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 24px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;
  cursor: pointer;
}

.btn-primary {
  background: #3b82f6;
  color: #fff;
}
.btn-primary:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.35);
}

.btn-secondary {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}
.btn-secondary:hover {
  background: var(--vp-c-bg-mute);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.btn-warning {
  background: #fef2f2;
  color: #991b1b;
  border: 1px solid #fecaca;
}
.btn-warning:hover {
  background: #fee2e2;
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(239, 68, 68, 0.15);
}

/* ===== Illustration ===== */
.hero-illustration {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.illustration-wrapper {
  position: relative;
  width: 260px;
  height: 220px;
}

.illustration-wrapper::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, rgba(139, 92, 246, 0.08) 40%, transparent 70%);
  pointer-events: none;
}

.illustration-svg {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
}

/* ===== TIP Cards ===== */
.tips-section {
  position: relative;
  z-index: 1;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.tip-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 28px 24px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: default;
}

.tip-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  border-color: rgba(59, 130, 246, 0.3);
}

.dark .tip-card:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}

.tip-icon {
  font-size: 36px;
  display: block;
  margin-bottom: 12px;
}

.tip-card h3 {
  font-size: 17px;
  font-weight: 700;
  margin: 0 0 8px;
  color: var(--vp-c-text-1);
}

.tip-card p {
  font-size: 14px;
  line-height: 1.65;
  margin: 0;
  color: var(--vp-c-text-2);
}

/* ================================================================ */
/*  响应式                                                           */
/* ================================================================ */

/* 平板及以下 (< 1024px) */
@media (max-width: 1023px) {
  .home-page {
    padding: 40px 20px 56px;
  }

  .hero-section {
    padding: 48px 32px 40px;
  }

  .hero-content {
    flex-direction: column;
    text-align: center;
    gap: 36px;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-title {
    font-size: 34px;
  }

  .hero-subtitle {
    font-size: 17px;
  }

  .illustration-wrapper {
    width: 200px;
    height: 170px;
  }

  .tips-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .tip-card {
    padding: 22px 16px;
  }
}

/* 手机端 (< 768px) */
@media (max-width: 767px) {
  .home-page {
    padding: 28px 16px 40px;
  }

  .hero-section {
    padding: 36px 20px 28px;
    border-radius: 12px;
    margin-bottom: 36px;
  }

  .hero-content {
    gap: 28px;
  }

  .hero-title {
    font-size: 26px;
  }

  .hero-subtitle {
    font-size: 15px;
    margin-bottom: 24px;
  }

  .btn {
    padding: 8px 18px;
    font-size: 14px;
  }

  .illustration-wrapper {
    width: 160px;
    height: 130px;
  }

  /* 卡片堆叠 */
  .tips-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .tip-card {
    padding: 24px 20px;
  }

  .tip-card:hover {
    transform: translateY(-3px);
  }
}

/* 小屏手机 (< 480px) */
@media (max-width: 479px) {
  .hero-title {
    font-size: 22px;
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
  }

  .btn {
    width: 100%;
    text-align: center;
  }

  .illustration-wrapper {
    width: 140px;
    height: 110px;
  }
}
</style>
