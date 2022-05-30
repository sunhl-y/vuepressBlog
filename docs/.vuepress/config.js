module.exports = {
    // 网站标题
    title: "XRs_",
    description: '看脚下一片黑暗 望头顶星光璀璨',
    base: '/vuepressBlog/',
    head: [
        ['link', { rel: 'icon', href: '/logo.jpg' }]
    ],
    markdown: {
        // 代码块是否显示行号
        lineNumbers: false
    },
    // 主题配置
    themeConfig: {
        // 导航栏logo
        logo: '/logo.jpg',
        // 导航配置
        nav: [
            { text: '首页', link: '/' },
            // {
            //     text: '计算机基础',
            //     link: '/foundation/',
            //     items: [
            //         { text: '计算机网络', link: '/foundation/network/' },
            //         { text: '操作系统', link: '/foundation/os/' },
            //         { text: '数据结构与算法', link: '/foundation/algorithm/' },
            //     ],
            // },
            {
                text: 'Java',
                link: '/java/',
                items: [
                    // { text: 'Java基础', link: '/java/basis/' },
                    { text: '数据库', link: '/java/databases/' },
                    { text: '日志框架', link: '/java/logs/' },
                ],
            },
            // {
            //     text: 'Go',
            //     link: '/go/',
            //     items: [
            //         { text: 'Go基础', link: '/go/basis/' },
            //         { text: 'Gin', link: '/go/gin/' },
            //     ],
            // },
            {
                text: '更多',
                link: '/more/',
                items: [
                    { text: '迭代记录', link: '/more/changeLogs.md' }
                ],
            },
            { text: '关于', link: '/about/' },
            {
                text: '爱好',
                link: '/about/hobbies/',
                items: [
                    { text: '读书', link: '/about/hobbies/booklist/' },
                    { text: '电影', link: '/about/hobbies/films/' },
                ],
            },
        ],
        // 侧边栏
        sidebar: {
            '/about/hobbies/booklist/': [{
                title: '读书清单',
                collapsable: false, // 是否可以收起来
                children: [
                    {
                        title: '2022年', path: '/about/hobbies/booklist/'
                    }
                ]
            }],
            '/java/databases/': [{
                title: '数据库',
                collapsable: false, // 是否可以收起来
                children: [
                    {
                        title: 'ClickHouse', path: '/java/databases/ClickHouse.md'
                    },
                    {
                        title: 'InfluxDB', path: '/java/databases/InfluxDB.md'
                    }
                ]
            }],
            '/java/logs/': [{
                title: '日志框架',
                collapsable: false, // 是否可以收起来
                children: [
                    {
                        title: 'Loki', path: '/java/logs/Loki.md'
                    }
                ]
            }]
        },
        // sidebar: [
        //     {
        //         title: '数据库',   // 必要的
        //         path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //         collapsable: false, // 可选的, 默认值是 true,
        //         sidebarDepth: 2,    // 可选的, 默认值是 1
        //         children: [
        //             '/java/databases/ClickHouse.md',
        //             '/java/databases/InfluxDB.md'
        //         ]
        //     },
        //     {
        //         title: '日志框架',   // 必要的
        //         path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //         collapsable: false, // 可选的, 默认值是 true,
        //         sidebarDepth: 2,    // 可选的, 默认值是 1
        //         children: [
        //             '/java/logs/Loki.md'
        //         ]
        //     }
        // ],
        // 侧边栏显示深度，默认1，最大2（显示到h3标题）
        sidebarDepth: 2,
        // 导航栏右侧生成Github链接
        repo: 'sunhl-y/vuepressBlog',
        // 搜索结果显示最大数
        searchMaxSuggestions: 10,
        // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
        lastUpdated: '上次更新',
        // 作者信息
        author: {
            name: '夏锐', // 必需
            link: 'https://github.com/sunhl-y', // 可选的
        },
    },
    // 插件配置
    plugins: [
        // 鼠标点击爱心特效
        [require('./plugins/love-me'), {
            color: '#F22222', // 爱心颜色，默认随机色
            excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
        }],
        // 代码块复制按钮
        [
            'one-click-copy',
            {
                copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
                copyMessage: '复制成功',
                duration: 1000,
                showInMobile: false,
            },
        ],
        // 放大图片
        [
            'vuepress-plugin-zooming',
            {
                options: {
                    bgColor: 'rgba(0,0,0,0.6)',
                },
            },
        ],
    ],
}
