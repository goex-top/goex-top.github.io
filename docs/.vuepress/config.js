module.exports = {
  base: "/",
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
  markdown:{
	lineNumbers: true
  },
  extendMarkdown(md) { /* ... */ },
  sidebarDepth: 4,
  head: [['link', { rel: 'icon', href: '/img/logo.ico' }]],
  plugins: ['@vuepress/pwa','@vuepress/last-updated'],
  themeConfig: {
	logo: '/img/goex.png',
    search: false,
    searchMaxSuggestions: 10,
	repo: 'goex-top/goex-top.github.io',
	repoLabel: '查看源码',
	// 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'goex-top/goex-top.github.io',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'docs',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
	editLinkText: '帮助我们改善此页面！',

    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
		lastUpdated: '上次更新时间',
		plugins: {
			'@vuepress/pwa': {
				serviceWorker: {
					updatePopup: {
						message: '发现新内容可用.',
						buttonText: '刷新'
					}
				}
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
		plugins: {
			'@vuepress/pwa': {
				serviceWorker: {
					updatePopup: {
						message: 'New content is available.',
						buttonText: 'Refresh'
					}
				}
			}
        },
        nav: [{ text: 'Home', link: '/en/' }, { text: 'Guide', link: '/en/guide/' }],
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
