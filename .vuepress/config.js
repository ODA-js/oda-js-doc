module.exports = {
  title: "ODA-js",
  description: "Documentation for Open Developer Accelerators tooling set for GraphQL backends",
  themeConfig: {
    repo: 'ODA-js/oda-js-doc',
    editLinks: true,
    sidebar: [
      '/',
      '/guide/',
    ],
    nav: [{
      text: 'Guide',
      link: '/guide/'
    }]
  },
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
  }
}