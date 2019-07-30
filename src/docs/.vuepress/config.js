module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'GoEx',
      description: '行情/交易库，简洁，易用，高效'
    },
    '/en/': {
      lang: 'en-US',
      title: 'GoEx',
      description: 'GoEx Easy and Powerful'
    }
  },
  displayAllHeaders: true,
  ga: 'UA-111085798-1',
  markdown: {
    lineNumbers: true
  },
  sidebarDepth: 4,
  head: [['link', { rel: 'icon', href: 'logo.ico' }]],
  serviceWorker: true,
  themeConfig: {
    editLinks: true,
    search: false,
    searchMaxSuggestions: 10,
    repo: 'go-ex/go-ex.github.io',
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新时间',
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用.',
            buttonText: '刷新'
          }
        },
        nav: [{ text: '首页', link: '/' }, { text: '指南', link: '/guide/' }],
        sidebar: {
          '/guide/': genSidebarConfig('指南')
        }
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'last updated',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: [{ text: 'Home', link: '/' }, { text: 'Guide', link: '/guide/' }],
        sidebar: {
          '/en/guide/': genSidebarConfig('Guide')
        }
      }
    }
  }
}

function genSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: ['', 'getting-started', 'interface', 'special-interface']
    }
  ]
}
