const nav = require('./nav.js');
const htmlModules = require('./htmlModules.js');
// const sidebar = require('./sidebar.js');

// 主题配置
module.exports = {
  nav,
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: 'http://q.qlogo.cn/headimg_dl?dst_uin=1258225956&spec=640&img_type=jpg', // 导航栏logo
  repo: 'yong-forever/yong-forever-blog', // 导航栏右侧生成Github链接
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
  docsDir: 'docs', // 编辑的文件夹
  editLinks: true, // 启用编辑
  editLinkText: '编辑',

  //*** 以下配置是Vdoing主题改动和新增的配置 ***//

  // category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
  // tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
  // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
  // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

  bodyBgImg: [
    'https://gitee.com/yong-forever/image_store/raw/master/utools/9-1638957053934.jpg',
    'https://gitee.com/yong-forever/image_store/raw/master/utools/27-1638957053033.jpg',
    'https://gitee.com/yong-forever/image_store/raw/master/utools/18-1638957044158.jpg',
    'https://gitee.com/yong-forever/image_store/raw/master/utools/25-1638957039688.jpg',
    'https://gitee.com/yong-forever/image_store/raw/master/utools/15-1638957031681.jpg',
    'https://gitee.com/yong-forever/image_store/raw/master/utools/33-1638957027229.jpg',
    'https://gitee.com/yong-forever/image_store/raw/master/utools/Vocaloid_Hatsune_Miku_Necktie_Anime_Girls_1920x1308-1638957013901.jpg',
    'https://gitee.com/yong-forever/image_store/raw/master/utools/Konachan_com___247048_asukaziye_blonde_hair_fate_apocrypha_fate_grand_order_fate__series__gray_hair_headdress_jeanne_d__039_arc_alter_long_hair_sword_waifu2x_weapon_yellow_eyes_3000x1326-1638957012690.jpg',
    'https://gitee.com/yong-forever/image_store/raw/master/utools/Konachan_com___248896_fate_grand_order_fate__series__gray_hair_japanese_clothes_kiyohime__fate_grand_order__long_hair_misaki_yuu__dstyle__petals_thighhighs_1441x977-1638957005255.jpg',
    "https://gitee.com/yong-forever/image_store/raw/master/utools/original_barefoot_bed_black_hair_book_dress_gun_katana_kei__k_tmr__long_hair_original_sword_weapon_yellow_eyes_2100x1200-1638956998731.jpg",
    'https://gitee.com/yong-forever/image_store/raw/master/utools/c980a61f35a3fad1ce3f435f8565e06c5d94d1c9-1638956996527.jpg',
    'https://gitee.com/yong-forever/image_store/raw/master/utools/80518034_p0_master1200-1638956988253.jpg',
    'https://gitee.com/yong-forever/image_store/raw/master/utools/wallhaven-450891-1638956985829.jpg',
    'https://gitee.com/yong-forever/image_store/raw/master/utools/wallls.com_198062-1638956984545.jpg',
    'https://gitee.com/yong-forever/image_store/raw/master/utools/Konachan_com___260740_aqua_eyes_breasts_cleavage_fate_grand_order_fate__series__japanese_clothes_katana_pink_hair_ponytail_swd3e2_sword_thighhighs_weapon_zettai_ryouiki_4000x2000-1638956975177.jpg',
   
  ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
   bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0 ~ 1.0, 默认0.5
   bodyBgImgTime: 60000, // 一组图片的更换时间 

  // titleBadge: false, // 文章标题前的图标是否显示，默认true
  // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
  //   '图标地址1',
  //   '图标地址2'
  // ],
  // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 => 方格 | 2 => 横线 | 3 => 竖线 | 4 => 左斜线 | 5 => 右斜线 | 6 => 点状

  // updateBar: { // 最近更新栏
  //   showToArticle: true, // 显示到文章页底部，默认true
  //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
  // },
  // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
  // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
  // pageButton: false, // 是否显示快捷翻页按钮，默认true

  sidebar: 'structuring', // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

  author: {
    // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
    name: 'yong', // 必需
    link: 'https://gitee.com/yong-forever', // 可选的
  },
  blogger: {
    // 博主信息，显示在首页侧边栏
    avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=1258225956&spec=640&img_type=jpg',
    name: 'Yiyong Zhan',
    slogan: '如何对世界抱有持续的爱',
  },
  social: {
    // 社交图标，显示于博主信息栏和页脚栏
    // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
    icons: [
      {
        iconClass: 'icon-youjian',
        title: '发邮件',
        link: 'mailto:yong_forever@aliyun.com',
      },
      {
        iconClass: 'icon-github',
        title: 'GitHub',
        link: 'https://gitee.com/yong-forever',
      },
      {
        iconClass: 'icon-erji',
        title: '听音乐',
        link: 'https://music.163.com/#',
      },
    ],
  },
  footer: {
    // 页脚信息
    createYear: 2021, // 博客创建年份
    copyrightInfo:
      'Yiyong Zhan | <a href="https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/LICENSE" target="_blank">MIT License</a>', // 博客版权信息，支持a标签
  },
  htmlModules // 插入hmtl(广告)模块
}
