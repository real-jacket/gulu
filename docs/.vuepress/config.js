module.exports = {
    base:'/gulu/',
    title: 'Gulu UI',
    description: '一个简单的框架',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '文档', link: '/安装.md' },
            { text: '交流', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    ['/安装', '安装'],
                    [ '/快速上手','快速入门']
                ]
            },
            {
                title: '组件',
                children: [
                    ['/components/button', 'Button'],
                    ['/components/tabs', 'Tabs'],
                    ['/components/input', 'Input'],
                    ['/components/layout', 'Layout'],
                    ['/components/toast', 'Toast']
                ]
            }
        ]
    }
}