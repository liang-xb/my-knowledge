import fs from 'node:fs'
import path from 'node:path'

interface SidebarItem {
  text: string
  link?: string
  items?: SidebarItem[]
  collapsed?: boolean
}

/**
 * Auto-generate sidebar from directory structure.
 * Scans `docs/<basePath>` and builds nested sidebar items.
 */
export function autoSidebar(basePath: string): SidebarItem[] {
  const docsDir = path.resolve(import.meta.dirname, '../..')
  const targetDir = path.join(docsDir, basePath)

  if (!fs.existsSync(targetDir) || !fs.statSync(targetDir).isDirectory()) {
    return []
  }

  return scanDir(targetDir, basePath)
}

function scanDir(dir: string, baseUrl: string): SidebarItem[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const items: { type: 'dir' | 'md'; name: string; text: string }[] = []

  for (const entry of entries) {
    if (entry.name.startsWith('.') || entry.name === 'index.md') continue
    if (entry.isDirectory()) {
      items.push({ type: 'dir', name: entry.name, text: toTitle(entry.name) })
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      items.push({
        type: 'md',
        name: entry.name,
        text: toTitle(entry.name.replace(/\.md$/, ''))
      })
    }
  }

  items.sort((a, b) => {
    if (a.type !== b.type) return a.type === 'dir' ? 1 : -1
    return a.text.localeCompare(b.text, 'zh-CN')
  })

  return items.map((item) => {
    const slug = item.name.replace(/\.md$/, '')
    const link = `/${baseUrl}/${slug}`.replace(/\/+/g, '/')

    if (item.type === 'dir') {
      return {
        text: item.text,
        collapsed: true,
        items: scanDir(path.join(dir, item.name), `${baseUrl}/${item.name}`)
      }
    }

    return { text: item.text, link }
  })
}

function toTitle(name: string): string {
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim()
}
