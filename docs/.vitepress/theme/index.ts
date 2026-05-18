import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Layout from './components/Layout.vue'
import HomePage from './components/HomePage.vue'
import Warning from './components/Warning.vue'
import Tip from './components/Tip.vue'
import CodeBlock from './components/CodeBlock.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('HomePage', HomePage)
    app.component('Warning', Warning)
    app.component('Tip', Tip)
    app.component('CodeBlock', CodeBlock)
  }
} satisfies Theme
