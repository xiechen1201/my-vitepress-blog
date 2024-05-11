import { defineConfig } from 'vitepress';

export default defineConfig({
    base:"/my-vitepress-blog/",
    // 标题
    title: '有理想',
    // 描述
    description: '',
    markdown: {
        // 开启代码块行数
        lineNumbers: true
    },
    themeConfig: {
        // 顶部导航蓝栏
        nav: [
            { text: '首页', link: '/' },
            { text: '计算机基础', link: '/docs/markdown-examples' },
            { text: '前端', link: '/docs/front-end/20240510-01.md' }
            // { text: '后端', link: '/docs/markdown-examples' }
        ],
        // 侧边栏
        sidebar: {
            '/home': [
                {
                    text: '关于我',
                    link: '/docs/home.md'
                },
                {
                    text: '里程碑',
                    items: [
                        {
                            text: '2024年',
                            link: ''
                        }
                    ]
                }
            ],

            '/front-end/': [
                {
                    text: '前端基础',
                    items: [
                        {
                            text: '20240510-01',
                            link: '/docs/front-end/20240510-01.md'
                        },
                        {
                            text: '20240510-02',
                            link: '/docs/front-end/20240510-02.md'
                        }
                    ]
                }
            ]
        },
        socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
    }
});
