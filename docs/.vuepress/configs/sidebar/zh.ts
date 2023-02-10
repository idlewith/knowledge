import type { SidebarConfig } from '@vuepress/theme-default'


export const sidebarZh: SidebarConfig = {
    '/zh/python/': [
        {
            text: 'Python',
            children: ['/zh/python/index.md'],
        },
    ],
    '/zh/linux/': [
        {
            text: 'Linux',
            children: ['/zh/linux/index.md'],
        },
    ],
}