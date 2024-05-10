// 配置文档：
// 1、https://vitepress.dev/zh/guide/routing
// 2、https://vitepress.dev/reference/site-config

import { defineConfig } from 'vitepress';

export default defineConfig({
    // 标题
    title: '有理想',
    // 描述
    description: '',
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
            '/docs/front-end/': [
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
