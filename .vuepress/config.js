module.exports = {
  base: '/',
  title: "ODA-js",
  description: "Documentation for Open Developer Accelerators tooling set for GraphQL backends",
  locales: {
    '/': {
      lang: 'en-US',
      title: 'ODA-js',
      description: ' Extensible & Generated GraphQL Backend tooling'
    },
    '/ru/': {
      lang: 'ru-RU',
      title: 'ODA-js',
      description: 'Расширяемый и генерируемый GraphQL интсрументарий'
    }
  },
  themeConfig: {
    repo: 'ODA-js/oda-js-doc',
    editLinks: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          }
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'Guide',
              collapsable: false,
              children: [
                '',
                'getting-started',
                'project-structure',
              ]
            }
          ]
        }
      },
      '/ru/': {
        label: 'Русский',
        selectText: 'Язык',
        editLinkText: 'редактировать на GitHub'
      }
    }
  },
  markdown: {
    // options for markdown-it-anchor
    // anchor: { permalink: false },
    // options for markdown-it-toc
    // toc: { includeLevel: [1, 2] },
    config: md => {
      // use more markdown-it plugins!
      md
        .use(require('markdown-it-mermaid').default)
        .use(require('markdown-it-classy'))
        .use(require('markdown-it-checkbox'))
    }
  },
}
