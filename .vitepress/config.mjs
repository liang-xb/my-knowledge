/**
 * config.mjs — VitePress 站点配置
 *
 * 改这里：
 *   - 导航菜单   → themeConfig.nav
 *   - 侧边栏     → themeConfig.sidebar
 *   - 社交链接   → themeConfig.socialLinks
 *   - 页脚       → themeConfig.footer
 *   - 搜索翻译   → themeConfig.search.options.translations
 *   - 代码块主题 → markdown.theme（light/dark）
 *   - 自定义容器 → markdown.container
 */
import {defineConfig} from 'vitepress'
import {set_sidebar as setSidebarDefault} from './gen_sidebar.js'
import {createRequire} from 'module'

const require = createRequire(import.meta.url)

export default defineConfig({
    base: '/my-knowledge/',

    // README.md 是给 GitHub 看的，不参与 VitePress 构建
    srcExclude: ['README.md'],
    head: [
        ['link', {rel: 'icon', href: "/my-knowledge/标签logo.png"}],
        ['script', {}, `
          (function(){
            var p=location.pathname;
            if((p==='/my-knowledge/'||p==='/my-knowledge/index.html'||p==='/'||p==='/index.html'||p.endsWith('/index'))&&!sessionStorage.getItem('welcome-overlay-shown')){
              document.documentElement.classList.add('welcome-blocking');
            }
          })();
        `],
        ['style', {}, `
          html.welcome-blocking,
          html.welcome-blocking body {
            background: #0d1321 !important;
          }
        `],
    ],

    title: "📚 知识文档站",
    description: "构建Java后端核心知识体系",
    /* ── 主题配置（完整参考：https://vitepress.dev/reference/default-theme-config） ── */
    themeConfig: {
        //自定义上下页名
        docFooter: {
            prev: '上一页',
            next: '下一页',
        },
        // https://vitepress.dev/reference/default-theme-config

        // 右侧 On this page 属性设置
        outline: [1, 3], // 指定右侧,展示的标题级别
        outlineTitle: '文章目录', // 指定右侧栏的title标签名称
        aside: false, // 禁用 On this page 属性

        siteTitle: '知识文档站', // 左上角导航栏名称
        logo: '/my-knowledge/标签logo.png', // 左上角导航栏图标
        /* ── 导航栏配置 ────────────────────────────────────────────
         *  添加顶级导航：在 nav 数组末尾添加新对象
         *  图标用法：<img src="/xxx.png" class="nav-icon nav-icon--md">
         *  尺寸变体：xs(1.0em) / sm / md / lg / xl / 2xl / 3xl(1.6em)
         * ──────────────────────────────────────────────────────────── */
        nav: [
            {text: '🏠首页', link: '/'},
            {
                text: '📝笔记',
                items:
                    [
                        {
                            text: 'Github',
                            items:
                                [
                                    {
                                        text: '<img src="/my-knowledge/github.png" class="nav-icon nav-icon--3xl"> 使用技巧',
                                        link: '/docs/笔记/Github/Github使用指南.md'
                                    },
                                    {
                                        text: '⭐ 优质开源项目',
                                        link: '/docs/笔记/Github/优质开源项目.md'
                                    },
                                ]
                        },
                        {text: '🔍常用网站', link: '/docs/笔记/常用网站.md'},
                        {text: '🖊️随笔', link: '/docs/笔记/随笔/随笔乱记.md'},
                        {text: '🎯八股文', link: '/docs/笔记/八股文/0. 八股来源.md'},

                        {
                            text: 'Vitepress',
                            items:
                                [
                                    {
                                        text: '📋准备工作',
                                        link: '/docs/测试界面.md'
                                    },
                                    {
                                        text: '<img src="/my-knowledge/腾讯云.png" class="nav-icon nav-icon--xs"> 腾讯云部署',
                                        link: '/docs/笔记/vitepress教程/腾讯云部署/腾讯云部署.md'
                                    },
                                ]
                        },

                    ]
            },
            {
                text: '⭐算法', items:
                    [
                        {text: '📝 算法集锦', link: '/docs/算法/算法集锦/算法集锦'},
                        {
                            text: '<img src="/my-knowledge/leetcode.png" class="nav-icon nav-icon--xs"> 灵神题单',
                            link: '/docs/算法/灵神题单/网格图/一、网格图DFS/1. LeetCode 200.md'
                        },
                        {text: '🎉 蓝桥杯', link: '/docs/算法/蓝桥杯/JavaB组省赛/0. 导论.md'},
                        {text: '🎯 左程云 ', link: '/docs/算法/左程云/0. 导论.md'},
                        {
                            text: '<img src="/my-knowledge/java深色.png" class="nav-icon nav-icon--3xl"> 数据结构',
                            link: '/docs/算法/数据结构/Java/马踏棋盘算法.md'
                        },
                        {
                            text: '代码随想录', items:
                                [
                                    {text: '基本介绍', link: '/docs/算法/代码随想录/代码随想录介绍.md'},
                                    {text: '算法训练营', link: '/docs/算法/代码随想录/训练营/数组/Day 1.md'},
                                    {text: '题目汇总', link: '/docs/算法/代码随想录/题目汇总.md'},
                                ]
                        },
                    ]
            },
            {
                text: '前端',
                items:
                    [
                        {
                            text: '环境搭建', items:
                                [
                                    {
                                        text: '<img src="/my-knowledge/vscode.png" class="nav-icon nav-icon--lg"> vscode',
                                        link: '/docs/前端/vsvode.md'
                                    },
                                    {
                                        text: '<img src="/my-knowledge/nodejs.png" class="nav-icon nav-icon--lg"> Nodejs',
                                        link: '/docs/前端/nodejs.md'
                                    },
                                ]
                        },
                        {
                            text: '前端四件套',
                            items:
                                [
                                    {
                                        text: '<img src="/my-knowledge/html.png" class="nav-icon nav-icon--md"> HTML',
                                        link: '/docs/前端/HTML/HTML.md'
                                    },
                                    {
                                        text: '<img src="/my-knowledge/css.png" class="nav-icon nav-icon--md"> CSS',
                                        link: '/docs/前端/CSS/CSS.md'
                                    },
                                    {
                                        text: '<img src="/my-knowledge/javascript.png" class="nav-icon nav-icon--sm"> JavaScript',
                                        link: '/docs/前端/JavaScript/JavaScript.md'
                                    },
                                    {
                                        text: '<img src="/my-knowledge/typescript.png" class="nav-icon nav-icon--sm"> TypeScript',
                                        link: '/docs/前端/TypeScript/TypeScript.md'
                                    },
                                ]
                        },
                        {
                            text: '框架',
                            items:
                                [
                                    {
                                        text: '<img src="/my-knowledge/vue.png" class="nav-icon nav-icon--2xl"> Vue',
                                        link: '/docs/前端/vue/vue.md'
                                    },
                                    {
                                        text: '<img src="/my-knowledge/element-plus.png" class="nav-icon nav-icon--lg"> ElementPlus',
                                        link: '/docs/前端/ElementPlus/elementplus.md'
                                    },
                                    {
                                        text: '<img src="/my-knowledge/微信开发者工具.jpeg" class="nav-icon nav-icon--lg"> 微信小程序',
                                        link: '/docs/前端/微信小程序/1. HttpClient.md'
                                    },
                                ]
                        },
                    ]
            },
            {
                text: '<img src="/my-knowledge/java.png" class="nav-icon nav-icon--3xl"> Java', // 作为导航栏标识
                items: // 传入 items 作为导航栏内容
                    [
                        // 传入第一个字典
                        {
                            text: '环境构建',
                            items:
                                [
                                    {
                                        text: '<img src="/my-knowledge/IDEA.png" class="nav-icon nav-icon--3xl"> IDEA',
                                        link: '/docs/Java/IDEA/IDEA文章/1.软件安装包.md',
                                    },
                                    {
                                        text: '<img src="/my-knowledge/快捷键.png" class="nav-icon nav-icon--3xl"> IDEA快捷键',
                                        link: '/docs/Java/IDEA/IDEA快捷键/IDEA快捷键.md',
                                    },
                                    {
                                        text: '📝IDEA模板',
                                        link: '/docs/Java/IDEA/IDEA模板/代码模板.md'
                                    },
                                    {
                                        text: '<img src="/my-knowledge/eclipse.png" class="nav-icon nav-icon--3xl"> eclipse',
                                        link: '/docs/Java/eclipse/eclipse使用教程.md'
                                    },
                                    {
                                        text: '<img src="/my-knowledge/maven.png" class="nav-icon nav-icon--3xl"> Maven',
                                        link: '/docs/Java/Maven/maven.md',
                                    },
                                ]
                        },
                        {
                            text: '📝JavaSE',
                            items: [
                                {text: '第一阶段', link: '/docs/Java/第一阶段/基本语法/1.概述.md'},
                                {text: '第二阶段', link: '/docs/Java/第二阶段/面向对象高级/57.类变量.md'},
                                {text: '第三阶段', link: '/docs/Java/第三阶段/网络编程/98.网络的基本概念.md'},
                                {text: 'Java8', link: '/docs/Java/Java8/1. 基本介绍.md'},
                                {text: '单元测试', link: '/docs/Java/单元测试/单元测试.md'},
                            ]
                        },
                        {
                            text: '💯章节练习题',
                            items:
                                [
                                    {
                                        text: '第一阶段',
                                        link: '/docs/Java/章节作业/第一阶段/第三章：变量/第三章作业.md'
                                    },
                                    {
                                        text: '第二阶段',
                                        link: '/docs/Java/章节作业/第二阶段/第十九章：IO流/第十九章作业.md'
                                    },
                                    {
                                        text: '第三阶段',
                                        link: '/docs/Java/章节作业/第三阶段/第二十一章：网络编程/第二十一章作业.md'
                                    },
                                ]
                        },
                    ]
            },
            {
                text: '🎯后端',
                items:
                    [
                        {
                            text: '数据库',
                            items:
                                [
                                    {
                                        text: '<img src="/my-knowledge/mysql.png" class="nav-icon nav-icon--xs"> MySQL',
                                        link: '/docs/后端/MySQL/MySQL/基础篇/1. 基本介绍.md'
                                    },
                                    {
                                        text: '<img src="/my-knowledge/redis.png" class="nav-icon nav-icon--xs"> Redis',
                                        link: '/docs/后端/Redis/1. 基本介绍.md'
                                    },

                                ]
                        },
                        {
                            text: '框架',
                            items:
                                [
                                    {
                                        text: '<img src="/my-knowledge/spring.png" class="nav-icon nav-icon--xs"> Spring',
                                        link: '/docs/后端/Spring/1. AOP.md'
                                    },
                                    {
                                        text: '<img src="/my-knowledge/mybatis.png" class="nav-icon nav-icon--xs"> MyBatis',
                                        link: '/docs/后端/MyBatis/Mybatis.md'
                                    },
                                    {
                                        text: '<img src="/my-knowledge/springboot.png" class="nav-icon nav-icon--xs"> SpringBoot',
                                        link: "/docs/后端/Springboot/1. SpringbootWeb入门.md"
                                    },
                                ]
                        },
                        {
                            text: "微服务",
                            items:
                                [
                                    {
                                        text: '<img src="/my-knowledge/mybatisplus.png" class="nav-icon nav-icon--xs"> MyBatis Plus',
                                        link: '/docs/后端/MyBatis Plus/MyBatis Plus.md'
                                    },
                                    {
                                        text: '<img src="/my-knowledge/springcloud.png" class="nav-icon nav-icon--xs"> SpringCloud',
                                        link: '/docs/测试界面.md'
                                    },
                                    {
                                        text: '<img src="/my-knowledge/rabbitmq.png" class="nav-icon nav-icon--xs"> RabbitMQ',
                                        link: '/docs/测试界面.md'
                                    },
                                    {
                                        text: '<img src="/my-knowledge/elasticsearch.png" class="nav-icon nav-icon--xs"> Elasticsearch',
                                        link: '/docs/测试界面.md'
                                    },
                                ]

                        },
                        {
                            text: '其他',
                            items:
                                [
                                    {
                                        text: '<img src="/my-knowledge/设计模式.png" class="nav-icon nav-icon--md">  设计模式',
                                        link: '/docs/后端/设计模式/工厂模式.md'
                                    },
                                    {
                                        text: '📝 项目笔记',
                                        link: "/docs/后端/项目笔记/解决方案/1. 权限认证.md"
                                    }
                                ]
                        },
                        {
                            text: "DevOps",
                            items:
                                [
                                    {
                                        text: '<img src="/my-knowledge/linux.png" class="nav-icon nav-icon--xs"> Linux',
                                        link: '/docs/后端/DevOps/Linux/1. 基本介绍.md'
                                    },
                                    {
                                        text: '<img src="/my-knowledge/docker.png" class="nav-icon nav-icon--xs"> Docker',
                                        link: '/docs/后端/DevOps/Docker/1. Docker安装.md'
                                    },
                                    {
                                        text: '<img src="/my-knowledge/ngnix.png" class="nav-icon nav-icon--sm"> Ngnix',
                                        link: '/docs/后端/测试界面.md'
                                    },

                                    {
                                        text: '<img src="/my-knowledge/git.png" class="nav-icon nav-icon--xs"> Git',
                                        link: '/docs/后端/Git/Git.md'
                                    },
                                ]
                        },
                    ]
            },
            {
                text: '🚀项目',
                items:
                    [
                        {
                            text: 'Tlias 智能学习辅助系统',
                            items:
                                [
                                    {
                                        text: '后端模块',
                                        link: '/docs/项目/Tlias智能学习辅助系统/后端模块/1. 项目介绍.md'
                                    },
                                    {
                                        text: '前端模块',
                                        link: '/docs/项目/Tlias智能学习辅助系统/前端模块/1. 页面基本结构.md'
                                    },
                                    {
                                        text: '项目部署',
                                        link: '/docs/项目/Tlias智能学习辅助系统/项目部署/Linux 部署/1. 前端部署.md'
                                    }
                                ]
                        },
                        {
                            text: '苍穹外卖',
                            items:
                                [
                                    {
                                        text: '项目介绍',
                                        link: '/docs/项目/苍穹外卖/项目介绍/数据库设计文档.md'
                                    },
                                    {
                                        text: '后端模块',
                                        link: '/docs/项目/苍穹外卖/后端模块/Day 2/1. 新增员工.md'
                                    },
                                ]
                        },
                        {
                            text: '中州养老',
                            items:
                                [
                                    {
                                        text: '项目介绍',
                                        link: '/docs/项目/中州养老/项目介绍/Day1/1. 项目介绍.md'
                                    },
                                    {
                                        text: '后端模块',
                                        link: '/docs/测试界面.md'
                                    },
                                ]
                        },
                    ]
            },
            {
                text: '🤖AI',
                items:
                    [
                        {
                            text: '认识 AI',
                            link: '/docs/AI/认识AI/认识AI.md'
                        },
                        {
                            text: 'Claude Code',
                            link: '/docs/AI/ClaudeCode/ClaudeCode.md'
                        },
                        {
                            text: 'SpringAI',
                            link: '/docs/AI/SpringAI/springai.md'
                        },
                        {
                            text: 'LangChain4j',
                            link: '/docs/测试界面.md'
                        },
                        {
                            text: 'Ollama',
                            link: '/docs/AI/Ollama/ollama.md'
                        },
                        {
                            text: 'ROS2（AIC大赛）',
                            link: '/docs/AI/ROS2/ros2.md'
                        },
                    ]
            },
            {
                text: '<img src="/my-knowledge/python.png" class="nav-icon nav-icon--xl">Python',
                items:
                    [
                        {
                            text: '<img src="/my-knowledge/pycharm.png" class="nav-icon nav-icon--lg"> Pycharm',
                            link: '/docs/Python/PyCharm/文章/1.python解释器安装.md'
                        },
                        {text: '📝基础语法', link: '/docs/测试界面.md'},
                        {
                            text: '📊数据分析', items:
                                [
                                    {
                                        text: '<img src="/my-knowledge/numpy.png" class="nav-icon nav-icon--md"> NumPy',
                                        link: '/docs/测试界面.md'
                                    },
                                    {
                                        text: '<img src="/my-knowledge/pandas.png" class="nav-icon nav-icon--xs"> Pandas',
                                        link: '/docs/测试界面.md'
                                    },
                                    {
                                        text: '<img src="/my-knowledge/matplotlib.png" class="nav-icon nav-icon--md"> Matplotlib',
                                        link: '/docs/测试界面.md'
                                    },
                                ]
                        },
                        {text: '🐍爬虫', link: '/docs/Python/爬虫/基本介绍.md'},
                        {text: '🤖网页自动化', link: '/docs/测试界面.md'},
                    ]
            },

        ],

        /* ── 侧边栏配置 ────────────────────────────────────────────
         *  添加侧边栏：在 sidebar 对象中添加新路由前缀
         *  自动生成：...setSidebarDefault('/docs/xxx') 展开目录下所有 .md 文件
         *  手动配置：{ text: '标题', collapsible: true, collapsed: false, items: [...] }
         * ──────────────────────────────────────────────────────────── */
        sidebar:
        // 会根据导航栏中链接的文章路由来匹配不同的侧边栏，根据侧边栏前的路由来显示该路由下的文章内容
            {
                '/docs/笔记/八股文': [
                    {
                        text: '八股文',
                        items:
                            [
                                ...setSidebarDefault('/docs/笔记/八股文'),
                            ]
                    }
                ],
                '/docs/算法/代码随想录/训练营':
                    [
                        {
                            text: '算法训练营',
                            items:
                                [
                                    {text: '随想录刷题计划', link: '/docs/算法/代码随想录/随想录刷题计划.md'},
                                    {text: '每日任务汇总', link: '/docs/算法/代码随想录/每日任务汇总.md'},
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '数组',
                                        items:
                                            [
                                                ...setSidebarDefault('/docs/算法/代码随想录/训练营/数组'),
                                            ]
                                    },
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '链表',
                                        items:
                                            [
                                                ...setSidebarDefault('/docs/算法/代码随想录/训练营/链表'),
                                            ]
                                    },
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '哈希表',
                                        items:
                                            [
                                                ...setSidebarDefault('/docs/算法/代码随想录/训练营/哈希表'),
                                            ]
                                    },
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '字符串',
                                        items:
                                            [
                                                ...setSidebarDefault('/docs/算法/代码随想录/训练营/字符串'),
                                            ]
                                    },
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '栈与队列',
                                        items:
                                            [
                                                ...setSidebarDefault('/docs/算法/代码随想录/训练营/栈与队列'),
                                            ]
                                    },
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '二叉树',
                                        items:
                                            [
                                                ...setSidebarDefault('/docs/算法/代码随想录/训练营/二叉树'),
                                            ]
                                    },
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '回溯算法',
                                        items:
                                            [
                                                ...setSidebarDefault('/docs/算法/代码随想录/训练营/回溯算法'),
                                            ]
                                    },
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '贪心算法',
                                        items:
                                            [
                                                ...setSidebarDefault('/docs/算法/代码随想录/训练营/贪心算法'),
                                            ]
                                    },
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '动态规划',
                                        items:
                                            [
                                                ...setSidebarDefault('/docs/算法/代码随想录/训练营/动态规划'),
                                            ]
                                    },
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '单调栈',
                                        items:
                                            [
                                                ...setSidebarDefault('/docs/算法/代码随想录/训练营/单调栈'),
                                            ]
                                    },
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '图论',
                                        items:
                                            [
                                                ...setSidebarDefault('/docs/算法/代码随想录/训练营/图论'),
                                            ]
                                    },
                                ]
                        }
                    ],
                '/docs/算法/蓝桥杯':
                    [
                        {
                            collapsible: true,   // 允许折叠
                            collapsed: false,    // 一开始就展开
                            text: '常用归纳',
                            items:
                                [
                                    ...setSidebarDefault('/docs/算法/蓝桥杯/常用归纳')
                                ]
                        },
                        {
                            collapsible: true,   // 允许折叠
                            collapsed: false,    // 一开始就展开
                            text: '真题分析',
                            items:
                                [
                                    ...setSidebarDefault('/docs/算法/蓝桥杯/真题分析')
                                ]
                        },
                        {
                            collapsible: true,   // 允许折叠
                            collapsed: false,    // 一开始就展开
                            text: 'Java B组省赛真题',
                            items:
                                [
                                    ...setSidebarDefault('/docs/算法/蓝桥杯/JavaB组省赛')
                                ]
                        },
                        {
                            collapsible: true,   // 允许折叠
                            collapsed: false,    // 一开始就展开
                            text: 'Java B组国赛真题',
                            items:
                                [
                                    ...setSidebarDefault('/docs/算法/蓝桥杯/JavaB组国赛')
                                ]
                        }
                    ],
                '/docs/算法/左程云':
                    [
                        {
                            collapsible: true,   // 允许折叠
                            collapsed: false,    // 一开始就展开
                            text: '左程云算法',
                            items:
                                [
                                    ...setSidebarDefault('/docs/算法/左程云'),
                                ]
                        }
                    ],
                '/docs/算法/灵神题单':
                    [
                        {
                            text: '灵神题单',
                            items:
                                [
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '编程入门题单',
                                        items:
                                            [
                                                ...setSidebarDefault('/docs/算法/灵神题单/编程入门题单'),
                                            ]
                                    },
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '网格图',
                                        items:
                                            [
                                                ...setSidebarDefault('/docs/算法/灵神题单/网格图'),
                                            ]
                                    },
                                ]
                        }
                    ],

                // IDEA 安装
                '/docs/Java/IDEA/IDEA文章':
                    [
                        {
                            text: 'IDAE环境搭建',
                            items:
                                [
                                    ...setSidebarDefault('/docs/Java/IDEA/IDEA文章')
                                ]
                        }
                    ],
                // JavaSE 三个阶段
                '/docs/Java/第一阶段':
                    [
                        {
                            text: '第一阶段', items:
                                [
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '内容大纲', link: '/docs/Java/韩顺平Java课程大纲.md',
                                    },
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '学习方法', link: '/docs/Java/学习方法.md',
                                    },
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '基本语法', items:
                                            [
                                                ...setSidebarDefault('/docs/Java/第一阶段/基本语法'),
                                            ]
                                    },
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '面向对象基础', items:
                                            [
                                                ...setSidebarDefault('/docs/Java/第一阶段/面向对象基础'),
                                            ]
                                    },
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '面向对象中级', items:
                                            [
                                                ...setSidebarDefault('/docs/Java/第一阶段/面向对象中级'),
                                            ]
                                    },
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '项目', items:
                                            [
                                                ...setSidebarDefault('/docs/Java/第一阶段/项目'),
                                            ]
                                    },
                                ]
                        }
                    ],
                '/docs/Java/第二阶段':
                    [
                        {
                            text: '第二阶段', items:
                                [
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '面向对象高级', items:
                                            [
                                                ...setSidebarDefault("/docs/Java/第二阶段/面向对象高级"),
                                            ]
                                    },
                                    {text: '66.枚举', link: '/docs/Java/第二阶段/66.枚举.md'},
                                    {text: '67.注解', link: '/docs/Java/第二阶段/67.注解.md'},
                                    {text: '68.异常', link: '/docs/Java/第二阶段/68.异常.md'},
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '常用类', items:
                                            [
                                                ...setSidebarDefault("/docs/Java/第二阶段/常用类"),
                                            ]
                                    },
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '集合', items:
                                            [
                                                ...setSidebarDefault("/docs/Java/第二阶段/集合"),
                                            ]
                                    },
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '线程', items:
                                            [
                                                ...setSidebarDefault("/docs/Java/第二阶段/线程"),
                                            ]
                                    },
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: 'IO流文件', items:
                                            [
                                                ...setSidebarDefault("/docs/Java/第二阶段/IO流文件"),
                                            ]
                                    },
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '项目：坦克大战', items:
                                            [
                                                ...setSidebarDefault("/docs/Java/第二阶段/项目：坦克大战"),
                                            ]
                                    },
                                ]
                        }

                    ],
                '/docs/Java/第三阶段':
                    [
                        {
                            text: '第三阶段', items:
                                [
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '网络编程', items:
                                            [
                                                ...setSidebarDefault('/docs/Java/第三阶段/网络编程'),
                                            ]
                                    },
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '反射', items:
                                            [
                                                ...setSidebarDefault('/docs/Java/第三阶段/反射'),
                                            ]
                                    },
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: 'JDBC', items:
                                            [
                                                ...setSidebarDefault('/docs/Java/第三阶段/JDBC'),
                                            ]
                                    },
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '正则表达式', items:
                                            [
                                                ...setSidebarDefault('/docs/Java/第三阶段/正则表达式'),
                                            ]
                                    },
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '项目', items:
                                            [
                                                {
                                                    collapsible: true,   // 允许折叠
                                                    collapsed: false,    // 一开始就展开
                                                    text: '多用户即时通讯系统', items:
                                                        [
                                                            ...setSidebarDefault('/docs/Java/第三阶段/项目/多用户即时通讯系统'),
                                                        ]
                                                },
                                                {
                                                    collapsible: true,   // 允许折叠
                                                    collapsed: false,    // 一开始就展开
                                                    text: '满汉楼', items:
                                                        [
                                                            ...setSidebarDefault('/docs/Java/第三阶段/项目/满汉楼'),
                                                        ]
                                                }
                                            ]
                                    },
                                ]
                        },
                    ],

                // Java8
                '/docs/Java/Java8':
                    [
                        {
                            text: 'Java8',
                            items:
                                [
                                    ...setSidebarDefault('/docs/Java/Java8'),
                                ]
                        }
                    ],

                // Java章节作业三个阶段
                '/docs/Java/章节作业/第一阶段':
                    [
                        {
                            text: '第一阶段',
                            items:
                                [
                                    {
                                        text: '第三章: 变量',
                                        link: '/docs/Java/章节作业/第一阶段/第三章：变量/第三章作业.md'
                                    },
                                    {
                                        text: '第四章: 运算符',
                                        link: '/docs/Java/章节作业/第一阶段/第四章：运算符/第四章作业.md'
                                    },
                                    {
                                        text: '第五章: 程序控制结构',
                                        link: '/docs/Java/章节作业/第一阶段/第五章：程序控制结构/第五章作业.md'
                                    },
                                    {
                                        text: '第六章: 数组',
                                        link: '/docs/Java/章节作业/第一阶段/第六章：数组/第六章作业.md'
                                    },
                                    {
                                        text: '第七章: 面向对象基础',
                                        link: '/docs/Java/章节作业/第一阶段/第七章：面向对象基础/第七章作业.md'
                                    },
                                    {
                                        text: '第八章: 面向对象中级',
                                        link: '/docs/Java/章节作业/第一阶段/第八章：面向对象中级/第八章作业.md'
                                    },
                                ]
                        },
                    ],
                '/docs/Java/章节作业/第二阶段':
                    [
                        {
                            text: '第二阶段',
                            items:
                                [
                                    {
                                        text: '第十章: 面向对象高级',
                                        link: '/docs/Java/章节作业/第二阶段/第十章：面向对象高级/第十章作业.md'
                                    },
                                    {
                                        text: '第十二章: 异常',
                                        link: '/docs/Java/章节作业/第二阶段/第十二章：异常/第十二章作业,.md'
                                    },
                                    {
                                        text: '第十三章: 常用类',
                                        link: '/docs/Java/章节作业/第二阶段/第十三章：常用类/第十三章作业.md'
                                    },
                                    {
                                        text: '第十四章: 集合',
                                        link: '/docs/Java/章节作业/第二阶段/第十四章：集合/第十四章作业.md'
                                    },
                                    {
                                        text: '第十五章: 泛型',
                                        link: '/docs/Java/章节作业/第二阶段/第十五章：泛型/第十五章作业.md'
                                    },
                                    {
                                        text: '第十六章: 多线程',
                                        link: '/docs/Java/章节作业/第二阶段/第十七章：多线程/第十七章作业.md'
                                    },
                                    {
                                        text: '第十九章: IO流',
                                        link: '/docs/Java/章节作业/第二阶段/第十九章：IO流/第十九章作业.md'
                                    }
                                ]
                        },
                    ],
                '/docs/Java/章节作业/第三阶段':
                    [
                        {
                            text: '第三阶段',
                            items:
                                [
                                    {
                                        text: '第二十一章: 网络编程',
                                        link: '/docs/Java/章节作业/第三阶段/第二十一章：网络编程/第二十一章作业.md'
                                    },
                                    {
                                        text: '第二十三章：反射',
                                        link: '/docs/Java/章节作业/第三阶段/第二十三章：反射/第二十三章作业.md'
                                    },
                                    {
                                        text: '第二十七章：正则表达式',
                                        link: '/docs/Java/章节作业/第三阶段/第二十七章：正则表达式/第二十七章作业.md'
                                    },
                                ]
                        }
                    ],
                '/docs/算法/数据结构/Java':
                    [
                        {
                            text: 'Java数据结构',
                            items:
                                [
                                    ...setSidebarDefault("/docs/算法/数据结构/Java"),
                                ]
                        }
                    ],
                '/docs/前端/微信小程序':
                    [
                        {
                            text: '微信小程序',
                            items:
                                [
                                    ...setSidebarDefault('/docs/前端/微信小程序')
                                ]
                        }
                    ],
                '/docs/后端/MySQL':
                    [
                        {
                            text: '软件安装',
                            items:
                                [
                                    {
                                        text: 'MySQL 5.7',
                                        link: '/docs/后端/MySQL/软件安装/MySQL安装..md',
                                    },
                                    {
                                        text: 'Navicat 16',
                                        link: "/docs/后端/MySQL/软件安装/Navicat安装.md",
                                    },
                                    {
                                        text: 'SQLyog',
                                        link: '/docs/后端/MySQL/软件安装/SQLyog安装.md'
                                    },
                                    {
                                        text: 'DataGrip',
                                        link: '/docs/后端/MySQL/软件安装/DataGrip安装.md'
                                    }

                                ]
                        },
                        {
                            text: 'MySQL',
                            items:
                                [
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '基础篇',
                                        items:
                                            [
                                                ...setSidebarDefault("/docs/后端/MySQL/MySQL/基础篇"),
                                            ]
                                    },
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '进阶篇',
                                        items:
                                            [
                                                ...setSidebarDefault("/docs/后端/MySQL/MySQL/进阶篇"),
                                            ]
                                    },
                                    {
                                        collapsible: true,   // 允许折叠
                                        collapsed: false,    // 一开始就展开
                                        text: '运维篇',
                                        items:
                                            [
                                                ...setSidebarDefault("/docs/后端/MySQL/MySQL/运维篇"),
                                            ]
                                    },

                                ]
                        },
                        {
                            collapsible: true,   // 允许折叠
                            collapsed: false,    // 一开始就展开
                            text: 'MySQL作业',
                            items:
                                [
                                    {
                                        text: '1. 多表查询练习（必做）',
                                        link: "/docs/后端/MySQL/MYSQL作业/1. 多表查询练习（必做）.md"
                                    },
                                    {
                                        text: '2. 作业一',
                                        link: "/docs/后端/MySQL/MYSQL作业/2. 作业一.md"
                                    },
                                    {
                                        text: '3. 作业二',
                                        link: "/docs/后端/MySQL/MYSQL作业/3. 作业二.md"
                                    },
                                    {
                                        text: '4. 作业三',
                                        link: "/docs/后端/MySQL/MYSQL作业/4. 作业三.md"
                                    },
                                    {
                                        text: '5. 作业四',
                                        link: "/docs/后端/MySQL/MYSQL作业/5. 作业四.md"
                                    },
                                    {
                                        text: '6. 作业五',
                                        link: "/docs/后端/MySQL/MYSQL作业/6. 作业五.md"
                                    },
                                ]
                        }
                    ],
                '/docs/后端/Redis':
                    [
                        {
                            text: 'Redis',
                            items:
                                [
                                    ...setSidebarDefault('/docs/后端/Redis')
                                ]
                        }
                    ],
                '/docs/后端/Springboot':
                    [
                        {
                            text: "Springboot",
                            items:
                                [
                                    ...setSidebarDefault("/docs/后端/Springboot")
                                ]
                        }
                    ],
                '/docs/后端/设计模式':
                    [
                        {
                            collapsible: true,   // 允许折叠
                            collapsed: false,    // 一开始就展开
                            text: '设计模式',
                            items:
                                [
                                    ...setSidebarDefault('/docs/后端/设计模式'),
                                ]
                        }
                    ],
                '/docs/后端/项目笔记':
                    [
                        {
                            collapsible: true,   // 允许折叠
                            collapsed: false,    // 一开始就展开
                            text: "解决方案",
                            items:
                                [
                                    ...setSidebarDefault("/docs/后端/项目笔记/解决方案")
                                ]
                        },
                        {
                            collapsible: true,   // 允许折叠
                            collapsed: false,    // 一开始就展开
                            text: "工具与配置",
                            items:
                                [
                                    ...setSidebarDefault("/docs/后端/项目笔记/工具与配置")
                                ]
                        },
                    ],
                '/docs/后端/Spring':
                    [
                        {
                            text: 'Spring',
                            items:
                                [
                                    ...setSidebarDefault('/docs/后端/Spring')
                                ]
                        }
                    ],
                '/docs/后端/DevOps/Linux':
                    [
                        {
                            text: 'Linux',
                            items:
                                [
                                    ...setSidebarDefault('/docs/后端/DevOps/Linux')
                                ]
                        }
                    ],
                '/docs/后端/DevOps/Docker':
                    [
                        {
                            text: 'Docker',
                            items:
                                [
                                    ...setSidebarDefault("/docs/后端/DevOps/Docker")
                                ]
                        }
                    ],
                '/docs/项目/Tlias智能学习辅助系统/后端模块':
                    [
                        {
                            text: 'Tlias项目-后端模块',
                            items:
                                [
                                    ...setSidebarDefault('/docs/项目/Tlias智能学习辅助系统/后端模块')
                                ]
                        }
                    ],
                '/docs/项目/Tlias智能学习辅助系统/前端模块':
                    [
                        {
                            text: 'Tlias项目-前端模块',
                            items:
                                [
                                    ...setSidebarDefault('/docs/项目/Tlias智能学习辅助系统/前端模块')
                                ]
                        }
                    ],
                '/docs/项目/Tlias智能学习辅助系统/项目部署':
                    [
                        {
                            text: 'Tlias项目部署',
                            items:
                                [
                                    ...setSidebarDefault('/docs/项目/Tlias智能学习辅助系统/项目部署')
                                ]
                        }
                    ],
                '/docs/项目/苍穹外卖/项目介绍':
                    [
                        {
                            text: '苍穹外卖-项目介绍',
                            items:
                                [
                                    {
                                        text: '初始化SQL脚本',
                                        link: '/docs/项目/苍穹外卖/项目介绍/初始化SQL脚本.md'
                                    },
                                    {
                                        text: '数据库设计文档',
                                        link: '/docs/项目/苍穹外卖/项目介绍/数据库设计文档.md'
                                    },
                                    {
                                        text: 'Day 1',
                                        items:
                                            [
                                                ...setSidebarDefault('/docs/项目/苍穹外卖/项目介绍/Day 1')
                                            ]
                                    }

                                ]
                        }
                    ],
                '/docs/项目/苍穹外卖/后端模块':
                    [
                        {
                            text: '苍穹外卖-后端模块',
                            items:
                                [
                                    ...setSidebarDefault('/docs/项目/苍穹外卖/后端模块')
                                ]
                        }
                    ],
                '/docs/项目/苍穹外卖/前端模块':
                    [
                        {
                            text: '苍穹外卖-前端模块',
                            items:
                                [
                                    ...setSidebarDefault('/docs/项目/苍穹外卖/前端模块')
                                ]
                        }
                    ],
                '/docs/项目/中州养老/项目介绍':
                    [
                        {
                            text: '中州养老-项目介绍',
                            items:
                                [
                                    ...setSidebarDefault('/docs/项目/中州养老/项目介绍')
                                ]
                        }
                    ],
                '/docs/项目/中州养老/后端模块':
                    [
                        {
                            text: '中州养老-后端模块',
                            items:
                                [
                                    ...setSidebarDefault('/docs/项目/中州养老/后端模块')
                                ]
                        }
                    ],
                '/docs/Python/PyCharm/文章':
                    [
                        {
                            text: 'Python环境搭建',
                            items:
                                [
                                    ...setSidebarDefault('/docs/Python/PyCharm/文章'),
                                ]
                        }
                    ],
                '/docs/Python/爬虫':
                    [
                        {
                            text: 'Python爬虫🐍',
                            items:
                                [
                                    {text: '基本介绍', link: '/docs/Python/爬虫/基本介绍.md'},
                                    {
                                        text: 'Urllib',
                                        items:
                                            [
                                                ...setSidebarDefault('/docs/Python/爬虫/Urllib'),
                                            ]
                                    },
                                    {
                                        text: '解析',
                                        items:
                                            [
                                                ...setSidebarDefault('/docs/Python/爬虫/解析'),
                                            ]
                                    },
                                    {
                                        text: 'Selenium',
                                        items:
                                            [
                                                ...setSidebarDefault('/docs/Python/爬虫/Selenium'),
                                            ]
                                    },
                                    {
                                        text: 'requests',
                                        items:
                                            [
                                                ...setSidebarDefault('/docs/Python/爬虫/requests'),
                                            ]
                                    },
                                    {
                                        text: 'Scrapy',
                                        items:
                                            [
                                                ...setSidebarDefault('/docs/Python/爬虫/Scrapy'),
                                            ]
                                    },

                                ]
                        }
                    ]
            },


        /* ── 社交链接 ──────────────────────────────────────────────
         *  显示在导航栏右侧的图标链接
         *  内置图标：'github' / 'twitter' / 'discord' 等
         *  自定义 SVG：使用 icon: { svg: '...' } 格式
         * ──────────────────────────────────────────────────────────── */
        socialLinks:
            [
                {icon: 'github', link: 'https://github.com/liang-xb/my-knowledge'},
                {
                    icon:
                        {
                            svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482h.924c.327 0 .592.266.592.593v8.878c0 .327-.265.593-.592.593H5.41a.593.593 0 0 1-.592-.593V8.001c0-.327.265-.593.592-.593h.924V5.926a.593.593 0 0 1 .592-.593h2.482c.161 0 .306.065.414.174l1.022 1.022a.25.25 0 0 0 .177.073h3.976a.25.25 0 0 0 .177-.073l1.022-1.022a.585.585 0 0 1 .414-.174zM5.41 8.593v8.285h13.18V8.593zm6.586 1.186c1.358 0 2.461 1.104 2.461 2.462 0 1.358-1.103 2.462-2.461 2.462-1.358 0-2.462-1.104-2.462-2.462 0-1.358 1.104-2.462 2.462-2.462zm0 1.185a1.277 1.277 0 0 0-1.277 1.277 1.277 1.277 0 0 0 2.554 0 1.277 1.277 0 0 0-1.277-1.277z"/></svg>'
                        },
                    link: 'https://gitee.com/lxb123321/my-knowledge'
                },
                {
                    icon: {
                        svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.693 13.638c-.497.568-1.363.63-1.712.63-.648 0-1.144-.164-1.474-.488-.313-.307-.478-.76-.489-1.346-.025-1.358.744-2.762 2.074-2.762.635 0 1.124.455 1.311.644.097.068.19.102.282.099a.38.38 0 0 0 .241-.159c.068-.087.135-.237.138-.401s-.057-.344-.243-.49a2.642 2.642 0 0 0-1.668-.591c-.819 0-1.627.376-2.218 1.033-.621.691-.953 1.63-.935 2.646.015.815.282 1.5.773 1.982.528.518 1.3.791 2.235.791 1.097 0 1.776-.325 2.154-.597a.584.584 0 0 0 .24-.456.702.702 0 0 0-.208-.497c-.23-.248-.448-.101-.503-.037ZM9.663 11.488a7.471 7.471 0 0 0-.698-.248c-.157-.048-.309-.091-.45-.131-.922-.26-1.027-.5-1.017-.68.022-.363.515-.853 1.352-.792.607.045 1.015.509 1.205.781.149.214.371.135.434.095a.602.602 0 0 0 .309-.514.626.626 0 0 0-.209-.488 2.654 2.654 0 0 0-3.347-.273c-.456.323-.744.772-.77 1.202-.064 1.061 1.015 1.366 1.803 1.588.214.061.429.127.667.202 1.14.357 1.173.717 1.092 1.267-.082.556-.696.834-1.685.761-1.029-.076-1.464-.61-1.612-.901-.05-.098-.205-.248-.413-.156-.514.229-.473.731-.26.993.339.416 1.15 1.035 2.667 1.035 1.734 0 2.255-.875 2.378-1.64.092-.572-.022-1.028-.348-1.396-.236-.267-.592-.495-1.101-.706ZM16.44 9.323c-.598-.431-1.393-.61-2.36-.532-.712.058-1.274.243-1.335.263l-.006.002a.437.437 0 0 0-.297.379l-.47 5.201a.337.337 0 0 0 .247.35l.072.02.066.018.086.021a7.914 7.914 0 0 0 1.64.183c.972 0 1.765-.23 2.36-.684.764-.583 1.141-1.5 1.118-2.725-.021-1.135-.398-1.974-1.121-2.495Zm-.662 4.461c-.836.639-2.09.562-2.677.481a.128.128 0 0 1-.109-.137l.397-4.248a.113.113 0 0 1 .086-.1c.999-.241 1.777-.168 2.312.218.189.137.348.331.471.568.176.339.277.765.286 1.234.017.916-.24 1.583-.765 1.984ZM23.967 10.41a1.92 1.92 0 0 0-.432-.919c-.399-.465-1.029-.689-1.848-.689-.734 0-1.372.228-1.947.799.007-.086.019-.159.018-.223s-.017-.116-.066-.163c-.048-.045-.077-.067-.127-.077-.05-.01-.122-.008-.256-.006a.587.587 0 0 0-.589.54s-.325 3.874-.428 5.165a.308.308 0 0 0 .073.228.36.36 0 0 0 .26.131h.387a.224.224 0 0 0 .226-.205l.273-2.929.014-.147a1.902 1.902 0 0 1 .082-.412c.014-.045.03-.092.047-.14.245-.694.803-1.72 1.971-1.694.84.018 1.449.455 1.385 1.114-.101 1.034-.266 3.1-.358 4.14-.019.209.182.273.252.273h.304a.442.442 0 0 0 .444-.404s.185-2.127.294-3.352l.048-.532a1.959 1.959 0 0 0-.026-.5Z"/></svg>'
                    },
                    link: 'https://blog.csdn.net/qq_59219765'
                }
            ],
        /* ── 页脚 ────────────────────────────────────────────────── */
        footer: {
            copyright: `Copyright © 2024-${new Date().getFullYear()} lxb · 知识文档站`,
        },

        /* ── 本地搜索 ──────────────────────────────────────────────
         *  使用 VitePress 内置的本地搜索（基于 MiniSearch）
         *  自定义修改：
         *    - buttonText / buttonAriaLabel：搜索按钮文字
         *    - noResultsText：无结果提示
         *    - footer.selectText / navigateText：底部操作提示
         * ──────────────────────────────────────────────────────────── */
        search: {
            provider: "local",
            options: {
                translations: {
                    button: {
                        buttonText: "搜索文档",
                        buttonAriaLabel: "搜索文档",
                    },
                    modal: {
                        noResultsText: "无法找到相关结果",
                        resetButtonTitle: "清除查询条件",
                        footer: {
                            selectText: "选择",
                            navigateText: "切换",
                        },
                    },
                },
            },
        },
    },
    /* ── Markdown 渲染配置 ──────────────────────────────────────
     *  自定义修改：
     *    - theme.light / theme.dark：代码块语法高亮主题
     *      可用主题：https://github.com/shikijs/shiki/blob/main/docs/themes.md
     *    - lineNumbers：是否显示行号
     *    - container.xxxLabel：自定义容器块的标签文字（tip / warning / danger 等）
     *    - config：markdown-it 插件配置（当前注册了 :::timeline 自定义容器）
     * ──────────────────────────────────────────────────────────── */
    markdown:
        {
            // 代码块双主题：亮色 github-light，暗色 one-dark-pro
            theme: {
                light: 'github-light',
                dark: 'one-dark-pro',
            },

            // 代码块显示行数
            lineNumbers: true,

            // 全局定义容器名称
            container: {
                tipLabel: '提示',
                warningLabel: '警告',
                dangerLabel: '危险',
                infoLabel: '信息',
                detailsLabel: '详细信息'
            },

            // 注册 :::timeline 自定义容器
            config: (md) => {
                md.use(require('markdown-it-container'), 'timeline', {
                    render(tokens, idx) {
                        return tokens[idx].nesting === 1
                            ? '<div class="site-timeline">\n'
                            : '</div>\n'
                    }
                })
            },
        },
})
