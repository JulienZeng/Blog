module.exports = {
  dest: 'blog',
  // theme: 'reco',
  title: "JulienZeng's Blog",
  description: '菜鸟前端的学习记录',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#FF66CC' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/LatteAndCat.png' }],
    // ['link', { rel: 'mask-icon', href: '/icons/LatteAndCat.svg', color: '#FF66CC' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/LatteAndCat.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    type: 'blog',
    noFoundPageByTencent: false,
    huawei: false,
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '笔记', link: '/note/', icon: 'reco-document' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      { text: 'GitHub', link: 'https://github.com/smallsunnyfox', icon: 'reco-github' }
    ],
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        logo: 'https://photo.smallsunnyfox.com/images/blog/friendlink/reco.png',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        logo: 'https://photo.smallsunnyfox.com/images/blog/friendlink/theme_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com'
      }
    ],
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: 'Tag' // 默认 “标签”
      }
    },
    //头像
    logo: './avatar.jpg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    subSidebar: 'auto',
    sidebarDepth: 1,
    displayAllHeaders: false,
    sidebar: {

    },
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'JulienZeng',
    //头像
    authorAvatar: '/avatar.jpg',
    // 备案号
    // record: '豫ICP备19035192号',
    // recordLink: 'https://beian.miit.gov.cn/',
    // cyberSecurityRecord: '豫公网安备41172602000151号',
    // cyberSecurityLink: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41172602000151',
    // 项目开始时间
    startYear: '2022',
    /**
     * valine 设置 (if you need valine comment )
     */
    // valineConfig: {
    //   appId: '', // your appId
    //   appKey: '', // your appKey
    //   placeholder: '是时候展现真正的技术了',
    //   avatar: 'wavatar',
    //   serverUrl: 'https://leanserver.smallsunnyfox.com'
    // }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      //右下角虚拟人物
      require('./plugins/KanBanNiang'),
      {
        theme: ['blackCat'],
        width: 200,
        height: 400,
        modelStyle: {
          position: 'fixed',
          left: '70px',
          bottom: '50px',
          opacity: '0.9'
        },
        messageStyle: {
          position: 'fixed',
          right: '70px',
          bottom: '380px'
        },
        btnStyle: {
          bottom: '60px',
          right: '80px'
        }
      }
    ],
    //背景音乐
    // [
    //   require('./plugins/BgMusic'),
    //   {
    //     audios: [
    //       {
    //         name: '我再没见过 像你一般的星空',
    //         artist: 'Seto',
    //         url: 'https://assets.smallsunnyfox.com/music/2.mp3',
    //         cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
    //       },
    //       {
    //         name: '萤火之森',
    //         artist: 'CMJ',
    //         url: 'https://assets.smallsunnyfox.com/music/3.mp3',
    //         cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
    //       }
    //     ]
    //   }
    // ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '发现新内容可用',
          buttonText: '刷新'
        }
      }
    ],
    [
      'permalink-pinyin',
      {
        lowercase: true,
        separator: '-'
      }
    ]
  ]
}
