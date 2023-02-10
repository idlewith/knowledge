import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { searchPlugin } from '@vuepress/plugin-search'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export const PluginsConfig = [
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
]