import { sidebar } from 'vuepress-theme-hope';

export default sidebar({
  '/': [
    '',
    {
      text: '如何使用',
      icon: 'laptop-code',
      prefix: 'demo/',
      link: 'demo/',
      children: 'structure',
    },
    {
      text: '文章',
      icon: 'book',
      prefix: 'posts/',
      children: 'structure',
    },
    'intro',
    {
      text: '幻灯片',
      icon: 'person-chalkboard',
      link: 'https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html',
    },
  ],
  '/base/': [
    {
      text: '基础配置',
      children: [
        '/base/README.md',
        '/base/1_base.md',
        '/base/2_config.md',
        '/base/development.md',
        '/base/css.md',
        '/base/image.md',
        '/base/output.md',
        '/base/clean.md',
        '/base/font.md',
        '/base/other.md',
        '/base/javascript.md',
        '/base/html.md',
        '/base/server.md',
        '/base/production.md',
        '/base/optimizeCss.md',
        '/base/minifyHtml.md',
        '/base/summary.md',
      ],
    },
  ],
});
