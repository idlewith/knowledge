import type { SidebarConfig } from '@vuepress/theme-default'


export const sidebarEn: SidebarConfig = {
    '/python/': [
        {
            text: 'Python',
            children: ['/python/index.md'],
        },
    ],
    '/linux/': [
        {
            text: 'Linux',
            children: ['/linux/index.md'],
        },
    ],
}