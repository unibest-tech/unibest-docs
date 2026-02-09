export const nav = [
  {
    text: '快速开始',
    link: '/base/2-start',
    activeMatch: '/base',
  },
  {
    text: '🥤 打赏',
    link: '/advanced/rewards/rewards',
  },
  {
    text: '更新日志',
    link: '/changelog/CHANGELOG',
  },
  {
    text: '相关链接',
    link: '/other/links/links',
  },
];

export const sidebar = [
  {
    text: '基础·必看',
    base: '/base/',
    items: [
      { text: '介绍', link: '1-introduction' },
      {
        text: '快速开始',
        link: '2-start',
      },
      { text: 'tabbar专题', link: '2-tabbar' },
      { text: 'uni 插件', link: '3-plugin' },
      { text: '样式篇', link: '4-style' },
      { text: '图标篇', link: '5-icons' },
      { text: 'SVG篇', link: '6-svg' },
      { text: 'UI库选型篇', link: 'ui/ui' },
      { text: 'UI库替换篇', link: '7-ui' },
      { text: '请求篇', link: '8-request' },
      { text: '状态篇', link: '9-state' },
      { text: '多语言篇', link: '10-i18n' },
      { text: '运行发布', link: '11-build' },
      { text: 'App 专题', link: '18-app' },
      // { text: '环境变量', link: '12-env' },
      { text: 'hbx 模板', link: '13-hbx' },
      { text: '常见问题', link: '14-faq' },
      { text: '常见问题2', link: '15-faq' },
      // { text: '小程序标识', link: '16-terminology' },
      { text: '自动生成接口', link: '17-generate' },
      { text: 'CLI 开发指南', link: '18-cli' },
      // { text: '最佳实践', link: '20-best' },
    ],
  },

  {
    text: '需求池',
    link: '/advanced/roadmap/roadmap',
  },
  {
    text: '优秀案例',
    link: '/advanced/showcase/showcase',
  },
  {
    text: '更新日志',
    link: '/changelog/CHANGELOG',
  },
  {
    text: '升级指南',
    link: '/changelog/upgrade',
  },

  {
    text: '社交',
    base: '/advanced/',
    items: [
      { text: '🥤 打赏', link: 'rewards/rewards' },
      // { text: '交流群', link: 'wechat/wechat' },
      // {
      //   text: '联系我',
      //   link: 'contact/contact',
      // },
      { text: '赞助榜', link: 'sponsor/sponsor' },
    ],
  },
  {
    text: '博客',
    base: '/blog/',
    items: [
      { text: 'unibest 3.11 发布了', link: '2' },
      { text: 'unibest 3.0 发布了', link: '1' },
      { text: '小程序有静默登录，为啥还需要设计 `token`', link: '3' },
    ],
  },
  {
    text: '延伸',
    base: '/other/',
    items: [
      { text: '相关链接', link: 'links/links' },
      { text: '图片占位图', link: 'image/image' },
      { text: 'iconfont详细版', link: 'iconfont/iconfont' },
      // { text: 'Git 提交优化', link: 'czg/czg' },
      // { text: '文件资源展示优化', link: 'files/files' },
      { text: 'unibest博客', link: 'blog' },
    ],
  },
];
