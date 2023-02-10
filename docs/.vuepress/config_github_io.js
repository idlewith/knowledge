import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { searchPlugin } from '@vuepress/plugin-search'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
    base: '/knowledge/',
    locales: {
        "/": {
            lang: 'en-US',
            title: 'idlewith',
            description: `Hi, I'm a Linux operation engineer, Python developer and data analysis engineer.
            here is the place to collect and learn something about SRE, then write articles`,
        },
        "/zh/": {
            lang: 'zh-CN',
            title: 'idlewith',
            description: '这是一个 Linux 运维，Python 开发的站点',
        },
    },
    theme: defaultTheme({
        repo: 'idlewith/knowledge',
        docsDir: 'docs',
        locales: {
            '/': {
                navbar: [
                    {
                        text: 'Python',
                        link: "/python/"
                    },
                    {
                        text: 'Linux',
                        link: "/linux/",
                    },
                ],
                sidebar: {
                    '/python/': [
                        {
                            text: 'Python',
                            collapse: true,
                            children: ['/python/index.md'],
                        },
                    ],
                    '/linux/': [
                        {
                            text: 'Linux',
                            collapse: true,
                            children: ['/linux/index.md'],
                        },
                    ],
                },
                // page meta
                editLinkText: 'Edit this page on GitHub',
            },
            '/zh/': {
                // navbar
                navbar: [
                    {
                        text: 'Python',
                        link: "/zh/python/"
                    },
                    {
                        text: 'Linux',
                        link: "/zh/linux/",
                    },
                ],
                selectLanguageName: '简体中文',
                selectLanguageText: '选择语言',
                selectLanguageAriaLabel: '选择语言',
                // sidebar
                sidebar: {
                    '/zh/python/': [
                        {
                            text: 'Python',
                            collapse: true,
                            children: ['/zh/python/index.md'],
                        },
                    ],
                    '/zh/linux/': [
                        {
                            text: 'Linux',
                            collapse: true,
                            children: ['/zh/linux/index.md'],
                        },
                    ],
                },
                // page meta
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdatedText: '上次更新',
                contributorsText: '贡献者',
                // custom containers
                tip: '提示',
                warning: '注意',
                danger: '警告',
                // 404 page
                notFound: [
                    '这里什么都没有',
                    '我们怎么到这来了？',
                    '这是一个 404 页面',
                    '看起来我们进入了错误的链接',
                ],
                backToHome: '返回首页',
                // a11y
                openInNewWindow: '在新窗口打开',
                toggleColorMode: '切换颜色模式',
                toggleSidebar: '切换侧边栏',
            },
        }
    }),
    plugins: [
        mdEnhancePlugin({
            // your options
            mermaid: true,
            presentation: true,
            tasklist: true,
        }),
        searchPlugin({
            locales: {
                '/': {
                    placeholder: 'Search',
                },
                '/zh/': {
                    placeholder: '搜索',
                },
            },
            hotKeys: ['a', 'k']
        }),
        googleAnalyticsPlugin({
            id: 'G-BSM6TC72LX',
        }),
    ],
    build: {
        chunkSizeWarningLimit: 16000,
    },
})
