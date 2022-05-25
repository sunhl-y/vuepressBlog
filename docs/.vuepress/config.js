module.exports = {
  title: '今天你学习了吗',
  description: 'personal website',
  base: '/vuepressBlog/',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }]
  ],
  markdown: {
    // 代码块是否显示行号
    lineNumbers: false 
  },
  themeConfig: {
    logo: '/logo.jpg',
    nav: [
      { text: '首页', link: '/index.md' },
      { text: '计算机基础', link: '/foundation/' },
      { text: 'Java', link: '/java/' },
      { text: 'Go', link: '/go/' },
      // 下拉格式
      {
        text: '个人',
        items: [
          { text: '书籍', link: '/xr/booklist/' },
          { text: '电影', link: '/xr/filmlist/' }
        ]
      },
      { text: '关于我', link: '/xr/introduction.md' },
      {
        text: '其他',
        items: [
          { text: '迭代记录', link: '/others/update.md' }
        ]
      },
    ],
    // 为以下路由添加左侧边栏
    sidebar: {
      '/java/': [{
        title: 'Java学习笔记',
        collapsable: false, // 是否可以收起来
        children: [
          {
            title: 'Java基础', path: '/java/并发编程.md'
          },
          {
            title: '并发编程', path: '/java/并发编程.md'
          },
          {
            title: 'MySQL', path: '/java/并发编程.md'
          },
          {
            title: 'JVM', path: '/java/并发编程.md'
          },
          {
            title: '多线程', path: '/java/多线程.md'
          }
        ]
      }],
      '/foundation/': [{
        title: '计算机基础',
        collapsable: false, // 是否可以收起来
        children: [
          {
            title: '计算机网络', path: '/java/并发编程.md'
          },
          {
            title: '操作系统', path: '/java/并发编程.md'
          },
          {
            title: '数据结构与算法', path: '/java/并发编程.md'
          }
        ]
      }],
      '/xr/booklist/': [{
        title: '读书清单',
        collapsable: false, // 是否可以收起来
        children: [
          {
            title: '2022', path: '/java/并发编程.md'
          },
          {
            title: '2021', path: '/java/并发编程.md'
          },
          {
            title: '2020', path: '/java/并发编程.md'
          }
        ]
      }]
    },
    //左侧导航显示的层级
    sidebarDepth: 2,
    // 回到顶层
    plugins: ['@vuepress/back-to-top'],
    // 显示最近更新时间
    lastUpdated: 'Last Updated',
    // 页面滚动
    smoothScroll: true
  },
}
