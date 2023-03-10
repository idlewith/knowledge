import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import {
    navbarEn,
    navbarZh,
    sidebarEn,
    sidebarZh,
    localesRouteEn,
    localesRouteZh,
    PluginsConfig,
} from './configs/index.js'

export default defineUserConfig({
    base: '/knowledge/',
    locales: {
        "/": localesRouteEn,
        "/zh/": localesRouteZh,
    },
    theme: defaultTheme({
        repo: 'idlewith/knowledge',
        docsDir: 'docs',
        locales: {
            '/': {
                navbar:  navbarEn,
                sidebar: sidebarEn,
                // page meta
                editLinkText: 'Edit this page on GitHub',
            },
            '/zh/': {
                // navbar
                navbar: navbarZh,
                selectLanguageName: '简体中文',
                selectLanguageText: '选择语言',
                selectLanguageAriaLabel: '选择语言',
                // sidebar
                sidebar: sidebarZh,
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
    plugins: PluginsConfig,
    build: {
        chunkSizeWarningLimit: 16000,
    },
})
