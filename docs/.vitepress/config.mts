import { defineConfig } from 'vitepress'
import { autoSidebar } from './sidebar'

export default defineConfig({
  title: '📚 知识文档站',
  description: '构建Java后端核心知识体系',
  lang: 'zh-CN',

  /*
   * GitHub Pages 部署基础路径
   * - 用户/组织站点 (username.github.io): 设为 '/'
   * - 项目站点 (username.github.io/repo): 设为 '/repo/'
   * - 本地开发时通常设为 '/'
   */
  base: '/my-knowledge/',

  /* 页面标题模板 */
  titleTemplate: ':title - 知识文档站',

  /* <head> 标签 */
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ],

  /* Markdown 配置 */
  markdown: {
    lineNumbers: true
  },

  themeConfig: {
    /* 搜索 */
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },

    nav: [
      { text: '首页', link: '/' },

      {
        text: '笔记',
        items: [
          { text: 'Github', link: '/notes/github' },
          { text: 'Github使用技巧', link: '/notes/github-tips' },
          { text: '优质开源项目', link: '/notes/open-source-projects' },
          { text: '常用网站', link: '/notes/useful-sites' },
          { text: '随笔', link: '/notes/essays' },
          { text: 'Markdown', link: '/notes/markdown' },
          { text: 'Markdown语法', link: '/notes/markdown-syntax' },
          { text: 'Markdown @ emoji', link: '/notes/markdown-emoji' },
          { text: 'VitePress教程', link: '/notes/vitepress-tutorial' },
          { text: '准备工作', link: '/notes/preparation' },
          { text: '建站教程', link: '/notes/site-building' },
          { text: '文档编写建议', link: '/notes/writing-tips' },
          { text: '腾讯云部署', link: '/notes/tencent-cloud-deploy' },
          { text: 'GitHub部署', link: '/notes/github-deploy' }
        ]
      },

      {
        text: '算法',
        items: [
          { text: '算法集锦', link: '/algorithm/collection' },
          { text: '灵神题单', link: '/algorithm/spirit-list' },
          { text: '蓝桥杯', link: '/algorithm/lanqiao' },
          { text: '洛谷', link: '/algorithm/luogu' },
          { text: '左程云', link: '/algorithm/zuo-chengyun' },
          { text: '算法总结', link: '/algorithm/summary' },
          {
            text: '代码随想录',
            items: [
              { text: '基本介绍', link: '/algorithm/code-thought/intro' },
              { text: '算法训练营', link: '/algorithm/code-thought/training' },
              { text: '题目汇总', link: '/algorithm/code-thought/problems' }
            ]
          },
          {
            text: '数据结构',
            items: [
              { text: 'Java版本', link: '/algorithm/data-structure/java' },
              { text: 'c语言版本', link: '/algorithm/data-structure/c' }
            ]
          }
        ]
      },

      {
        text: '前端',
        items: [
          { text: '环境搭建', link: '/frontend/env-setup' },
          { text: 'vscode', link: '/frontend/vscode' },
          { text: 'Nodejs', link: '/frontend/nodejs' },
          { text: '前端四件套', link: '/frontend/four-basics' },
          { text: 'HTML', link: '/frontend/html' },
          { text: 'CSS', link: '/frontend/css' },
          { text: 'JavaScript', link: '/frontend/javascript' },
          { text: 'TypeScript', link: '/frontend/typescript' },
          { text: '框架', link: '/frontend/framework' },
          { text: 'Vue', link: '/frontend/vue' },
          { text: 'ElementPlus', link: '/frontend/element-plus' },
          { text: '微信小程序', link: '/frontend/wechat-miniprogram' }
        ]
      },

      {
        text: 'Java',
        items: [
          { text: '环境构建', link: '/java/env-build' },
          { text: 'IDEA', link: '/java/idea' },
          { text: 'IDEA快捷键', link: '/java/idea-shortcuts' },
          { text: 'IDEA模板', link: '/java/idea-templates' },
          { text: 'eclipse', link: '/java/eclipse' },
          { text: 'Maven', link: '/java/maven' },
          {
            text: 'JavaSE',
            items: [
              { text: '第一阶段', link: '/java/javase/phase-1' },
              { text: '第二阶段', link: '/java/javase/phase-2' },
              { text: '第三阶段', link: '/java/javase/phase-3' }
            ]
          },
          { text: 'Java8', link: '/java/java8' },
          { text: '单元测试', link: '/java/unit-test' },
          {
            text: '章节练习题',
            items: [
              { text: '第一阶段', link: '/java/exercises/phase-1' },
              { text: '第二阶段', link: '/java/exercises/phase-2' },
              { text: '第三阶段', link: '/java/exercises/phase-3' }
            ]
          }
        ]
      },

      {
        text: '后端',
        items: [
          {
            text: '数据库',
            items: [
              { text: 'MySQL', link: '/backend/database/mysql' },
              { text: 'Redis', link: '/backend/database/redis' }
            ]
          },
          {
            text: '框架',
            items: [
              { text: 'Spring', link: '/backend/framework/spring' },
              { text: 'MyBatis', link: '/backend/framework/mybatis' },
              { text: 'SpringBoot', link: '/backend/framework/springboot' }
            ]
          },
          {
            text: '微服务',
            items: [
              { text: 'MyBatis Plus', link: '/backend/microservice/mybatis-plus' },
              { text: 'SpringCloud', link: '/backend/microservice/springcloud' },
              { text: 'RabbitMQ', link: '/backend/microservice/rabbitmq' },
              { text: 'Elasticsearch', link: '/backend/microservice/elasticsearch' }
            ]
          },
          {
            text: '其他',
            items: [
              { text: '设计模式', link: '/backend/other/design-patterns' }
            ]
          },
          {
            text: 'DevOps',
            items: [
              { text: 'Docker', link: '/backend/devops/docker' },
              { text: 'Ngnix', link: '/backend/devops/nginx' },
              { text: 'Git', link: '/backend/devops/git' }
            ]
          }
        ]
      },

      { text: '项目', link: '/projects' },

      {
        text: 'AI',
        items: [
          { text: '认识AI', link: '/ai/intro' },
          { text: 'Claude Code', link: '/ai/claude-code' },
          { text: 'SpringAi', link: '/ai/spring-ai' },
          { text: 'LangChain4j', link: '/ai/langchain4j' },
          { text: 'Ollama', link: '/ai/ollama' }
        ]
      },

      {
        text: 'Python',
        items: [
          { text: 'Pycharm', link: '/python/pycharm' },
          { text: '基础语法', link: '/python/basics' },
          { text: '数据分析', link: '/python/data-analysis' },
          { text: 'NumPy', link: '/python/numpy' },
          { text: 'Pandas', link: '/python/pandas' },
          { text: 'Matplotlib', link: '/python/matplotlib' },
          { text: '爬虫', link: '/python/crawler' },
          { text: '网页自动化', link: '/python/web-automation' }
        ]
      }
    ],

    sidebar: {
      '/java/': autoSidebar('java'),
      '/backend/': autoSidebar('backend'),
      '/algorithm/': autoSidebar('algorithm'),
      '/notes/': autoSidebar('notes'),
      '/frontend/': autoSidebar('frontend'),
      '/ai/': autoSidebar('ai'),
      '/python/': autoSidebar('python'),
      '/guide/': autoSidebar('guide'),
      '/projects/': autoSidebar('projects')
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/liang-xb/my-knowledge'
      },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482h.924c.327 0 .592.266.592.593v8.878c0 .327-.265.593-.592.593H5.41a.593.593 0 0 1-.592-.593V8.001c0-.327.265-.593.592-.593h.924V5.926a.593.593 0 0 1 .592-.593h2.482c.161 0 .306.065.414.174l1.022 1.022a.25.25 0 0 0 .177.073h3.976a.25.25 0 0 0 .177-.073l1.022-1.022a.585.585 0 0 1 .414-.174zM5.41 8.593v8.285h13.18V8.593zm6.586 1.186c1.358 0 2.461 1.104 2.461 2.462 0 1.358-1.103 2.462-2.461 2.462-1.358 0-2.462-1.104-2.462-2.462 0-1.358 1.104-2.462 2.462-2.462zm0 1.185a1.277 1.277 0 0 0-1.277 1.277 1.277 1.277 0 0 0 2.554 0 1.277 1.277 0 0 0-1.277-1.277z"/></svg>'
        },
        link: 'https://gitee.com'
      },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.693 13.638c-.497.568-1.363.63-1.712.63-.648 0-1.144-.164-1.474-.488-.313-.307-.478-.76-.489-1.346-.025-1.358.744-2.762 2.074-2.762.635 0 1.124.455 1.311.644.097.068.19.102.282.099a.38.38 0 0 0 .241-.159c.068-.087.135-.237.138-.401s-.057-.344-.243-.49a2.642 2.642 0 0 0-1.668-.591c-.819 0-1.627.376-2.218 1.033-.621.691-.953 1.63-.935 2.646.015.815.282 1.5.773 1.982.528.518 1.3.791 2.235.791 1.097 0 1.776-.325 2.154-.597a.584.584 0 0 0 .24-.456.702.702 0 0 0-.208-.497c-.23-.248-.448-.101-.503-.037ZM9.663 11.488a7.471 7.471 0 0 0-.698-.248c-.157-.048-.309-.091-.45-.131-.922-.26-1.027-.5-1.017-.68.022-.363.515-.853 1.352-.792.607.045 1.015.509 1.205.781.149.214.371.135.434.095a.602.602 0 0 0 .309-.514.626.626 0 0 0-.209-.488 2.654 2.654 0 0 0-3.347-.273c-.456.323-.744.772-.77 1.202-.064 1.061 1.015 1.366 1.803 1.588.214.061.429.127.667.202 1.14.357 1.173.717 1.092 1.267-.082.556-.696.834-1.685.761-1.029-.076-1.464-.61-1.612-.901-.05-.098-.205-.248-.413-.156-.514.229-.473.731-.26.993.339.416 1.15 1.035 2.667 1.035 1.734 0 2.255-.875 2.378-1.64.092-.572-.022-1.028-.348-1.396-.236-.267-.592-.495-1.101-.706ZM16.44 9.323c-.598-.431-1.393-.61-2.36-.532-.712.058-1.274.243-1.335.263l-.006.002a.437.437 0 0 0-.297.379l-.47 5.201a.337.337 0 0 0 .247.35l.072.02.066.018.086.021a7.914 7.914 0 0 0 1.64.183c.972 0 1.765-.23 2.36-.684.764-.583 1.141-1.5 1.118-2.725-.021-1.135-.398-1.974-1.121-2.495Zm-.662 4.461c-.836.639-2.09.562-2.677.481a.128.128 0 0 1-.109-.137l.397-4.248a.113.113 0 0 1 .086-.1c.999-.241 1.777-.168 2.312.218.189.137.348.331.471.568.176.339.277.765.286 1.234.017.916-.24 1.583-.765 1.984ZM23.967 10.41a1.92 1.92 0 0 0-.432-.919c-.399-.465-1.029-.689-1.848-.689-.734 0-1.372.228-1.947.799.007-.086.019-.159.018-.223s-.017-.116-.066-.163c-.048-.045-.077-.067-.127-.077-.05-.01-.122-.008-.256-.006a.587.587 0 0 0-.589.54s-.325 3.874-.428 5.165a.308.308 0 0 0 .073.228.36.36 0 0 0 .26.131h.387a.224.224 0 0 0 .226-.205l.273-2.929.014-.147a1.902 1.902 0 0 1 .082-.412c.014-.045.03-.092.047-.14.245-.694.803-1.72 1.971-1.694.84.018 1.449.455 1.385 1.114-.101 1.034-.266 3.1-.358 4.14-.019.209.182.273.252.273h.304a.442.442 0 0 0 .444-.404s.185-2.127.294-3.352l.048-.532a1.959 1.959 0 0 0-.026-.5Z"/></svg>'
        },
        link: 'https://blog.csdn.net/qq_59219765'
      }
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航',
      level: [2, 3]
    },

    lastUpdated: {
      text: '最后更新于'
    },

    darkModeSwitchLabel: '主题切换',

    footer: {
      message: '基于 VitePress 构建',
      copyright: `Copyright © 2024-${new Date().getFullYear()} lxb · 知识文档站`
    }
  }
})
