module.exports = {
    title: 'blog',
    description: '个人网站',
    base: '/vuepressBlog/', 
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
      nav:[ 
      { text: '首页', link:'/' },
      {
        text:'blog',
        items: [
          {text: 'Java基础', link: '/accumulate/' },
          {text: '图解算法', link: '/algorithm/'},
          {text: '手摸手造一个RPC', link: 'http://dubbo.io/'}    
                      ]
                  }
              ]
      }
  }
  