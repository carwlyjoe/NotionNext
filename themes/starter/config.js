/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: '小店装修中，敬请期待', // 英雄区文字
  STARTER_HERO_TITLE_2: '请勿点击付费按钮，暂时为模板内容', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: '我的博客', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    'https://aiexplorer.rest', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '关于我', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: 'https://aiexplorer.rest/about', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: '/images/starter/hero/hero-image.webp', // 产品预览图 ，默认读取public目录下图片
  STARTER_HERO_BANNER_IMAGE: '', // hero区下方的全宽图

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: 'Sign In',
  STARTER_NAV_BUTTON_1_URL: '/sign-in',

  STARTER_NAV_BUTTON_2_TEXT: 'Sign Up',
  STARTER_NAV_BUTTON_2_URL: '/sign-up',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: '敬请期待', // 特性
  STARTER_FEATURE_TEXT_1: '敬请期待', // 特性
  STARTER_FEATURE_TEXT_2: '敬请期待', // 特性

  STARTER_FEATURE_1_TITLE_1: '敬请期待', // 特性1
  STARTER_FEATURE_1_TEXT_1: '敬请期待', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '敬请期待', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: 'https://aiexplorer.rest', // 特性1

  STARTER_FEATURE_2_TITLE_1: '敬请期待', // 特性2
  STARTER_FEATURE_2_TEXT_1: '敬请期待', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '敬请期待', // 特性2
  STARTER_FEATURE_2_BUTTON_URL: 'https://aiexplorer.rests', // 特性2

  STARTER_FEATURE_3_TITLE_1: '敬请期待', // 特性3
  STARTER_FEATURE_3_TEXT_1: '敬请期待', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '敬请期待', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: 'https://aiexplorer.rest', // 特性3

  STARTER_FEATURE_4_TITLE_1: '敬请期待', // 特性4
  STARTER_FEATURE_4_TEXT_1: '敬请期待', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '敬请期待', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: 'https://aiexplorer.rest', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: '敬请期待',
  STARTER_ABOUT_TEXT:
    '敬请期待',
  STARTER_ABOUT_BUTTON_TEXT: '了解更多',
  STARTER_ABOUT_BUTTON_URL: 'https://aiexplorer.rest',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '7000+',
  STARTER_ABOUT_TIPS_2: '博客站点',
  STARTER_ABOUT_TIPS_3: '正在线上运行',

  // 首页价格区块
  STARTER_PRICING_ENABLE: true, // 价格区块开关
  STARTER_PRICING_TITLE: '价格表',
  STARTER_PRICING_TEXT_1: '很棒的定价计划',
  STARTER_PRICING_TEXT_2:
    '我们制定了灵活的付费模式，您可以按需选择。（这里仅演示产品订阅付费功能，请勿下单购买！）',

  STARTER_PRICING_1_TITLE: '入门版',
  STARTER_PRICING_1_PRICE: '19.9',
  STARTER_PRICING_1_PRICE_CURRENCY: '$',
  STARTER_PRICING_1_PRICE_PERIOD: '每月',
  STARTER_PRICING_1_HEADER: '功能点',
  STARTER_PRICING_1_FEATURES: '所有的主题,免费更新,帮助手册', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_1_BUTTON_URL:
    'https://aiexplorer.rest',

  STARTER_PRICING_2_TAG: '推荐',
  STARTER_PRICING_2_TITLE: '基础版',
  STARTER_PRICING_2_PRICE: '39.9',
  STARTER_PRICING_2_PRICE_CURRENCY: '$',
  STARTER_PRICING_2_PRICE_PERIOD: '每月',
  STARTER_PRICING_2_HEADER: '功能点',
  STARTER_PRICING_2_FEATURES: '包含入门版,项目源码,内部社群,技术咨询,SEO优化', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_2_BUTTON_URL:
    'https://aiexplorer.rest',

  STARTER_PRICING_3_TITLE: '高级版',
  STARTER_PRICING_3_PRICE: '59.9',
  STARTER_PRICING_3_PRICE_CURRENCY: '$',
  STARTER_PRICING_3_PRICE_PERIOD: '每月',
  STARTER_PRICING_3_HEADER: '功能点',
  STARTER_PRICING_3_FEATURES: '包含基础版,功能定制开发', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_3_BUTTON_URL:
    'https://aiexplorer.rest',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: '用户反馈',
  STARTER_TESTIMONIALS_TEXT_1: '我们的用户怎么说',
  STARTER_TESTIMONIALS_TEXT_2:
    '敬请期待',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {

      STARTER_TESTIMONIALS_ITEM_TEXT: '敬请期待',
      STARTER_TESTIMONIALS_ITEM_AVATAR: '敬请期待',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '敬请期待',

      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '敬请期待',
      STARTER_TESTIMONIALS_ITEM_URL: '敬请期待'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '敬请期待',

      STARTER_TESTIMONIALS_ITEM_AVATAR: '敬请期待',

      STARTER_TESTIMONIALS_ITEM_NICKNAME: '敬请期待',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '敬请期待',
      STARTER_TESTIMONIALS_ITEM_URL: '敬请期待'
    },
    {

      STARTER_TESTIMONIALS_ITEM_TEXT: '敬请期待',
      STARTER_TESTIMONIALS_ITEM_AVATAR: '敬请期待',

      STARTER_TESTIMONIALS_ITEM_NICKNAME: '敬请期待',

      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '敬请期待',

      STARTER_TESTIMONIALS_ITEM_URL: '敬请期待'

    },

    {

      STARTER_TESTIMONIALS_ITEM_TEXT: '敬请期待',

      STARTER_TESTIMONIALS_ITEM_AVATAR: '敬请期待',

      STARTER_TESTIMONIALS_ITEM_NICKNAME: '敬请期待',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '敬请期待',
      STARTER_TESTIMONIALS_ITEM_URL: '敬请期待'
    },
    {

      STARTER_TESTIMONIALS_ITEM_TEXT: '敬请期待',

      STARTER_TESTIMONIALS_ITEM_AVATAR: '敬请期待',

      STARTER_TESTIMONIALS_ITEM_NICKNAME: '敬请期待',

      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '敬请期待',
      STARTER_TESTIMONIALS_ITEM_URL: '敬请期待'

    },

    {

      STARTER_TESTIMONIALS_ITEM_TEXT: '敬请期待',
      STARTER_TESTIMONIALS_ITEM_AVATAR: '敬请期待',

      STARTER_TESTIMONIALS_ITEM_NICKNAME: '敬请期待',

      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '敬请期待',

      STARTER_TESTIMONIALS_ITEM_URL: '敬请期待'

    }
  ],

//   FAQ 常见问题模块
STARTER_FAQ_ENABLE: true, // 常见问题模块开关
STARTER_FAQ_TITLE: '敬请期待',
STARTER_FAQ_TEXT_1: '敬请期待',
STARTER_FAQ_TEXT_2: '敬请期待',

STARTER_FAQ_1_QUESTION: '敬请期待',
STARTER_FAQ_1_ANSWER: '敬请期待',

STARTER_FAQ_2_QUESTION: '敬请期待',
STARTER_FAQ_2_ANSWER: '敬请期待',

STARTER_FAQ_3_QUESTION: '敬请期待',
STARTER_FAQ_3_ANSWER: '敬请期待',

STARTER_FAQ_4_QUESTION: '敬请期待',
STARTER_FAQ_4_ANSWER: '敬请期待',

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: '团队成员',
  STARTER_TEAM_TEXT_1: '我们的开发者团队',
  STARTER_TEAM_TEXT_2:
    '敬请期待',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR:
        'https://img.aiexplorer.rest/pic/%E6%96%87%E9%9B%85%E7%9A%84%E7%96%AF%E7%8B%82.jpg',
      STARTER_TEAM_ITEM_NICKNAME: '文雅的疯狂',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Developer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-01.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Melissa Tatcher',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Marketing Expert'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-02.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Stuard Ferrel',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Digital Marketer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-03.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Eva Hudson',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Creative Designer'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: '我们的博客',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '最近的新闻',
  STARTER_BLOG_TEXT_2:
    '这里会发布一些我平时收集到的资源',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: '联系我们',
  STARTER_CONTACT_TEXT: '告诉我们您遇到的问题',
  STARTER_CONTACT_LOCATION_TITLE: '我们的位置',
  STARTER_CONTACT_LOCATION_TEXT: '中国，深圳',
  STARTER_CONTACT_EMAIL_TITLE: '我们如何帮助您？',
  STARTER_CONTACT_EMAIL_TEXT: '3489764419@qq.com',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/yfctc7', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: true, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: '我们通过技术为品牌和公司创造数字体验。',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: '关于我们',
      LINK_GROUP: [
        { TITLE: '官方主页', URL: '/#home' },
        { TITLE: '操作文档', URL: 'https://aiexplorer.rest' },
        {
          TITLE: '帮助支持',
          URL: 'https://aiexplorer.rest'
        },
        {
          TITLE: '合作申请',
          URL: 'https://aiexplorer.rest'
        }
      ]
    },
    {
      TITLE: '功能特性',
      LINK_GROUP: [
        {
          TITLE: '部署指南',
          URL: 'https://aiexplorer.rest'
        },
        {
          TITLE: '升级指南',
          URL: 'https://aiexplorer.rest'
        },
        { TITLE: '最新版本', URL: 'https://aiexplorer.rest' }
      ]
    },
    {
      TITLE: 'Notion写作',
      LINK_GROUP: [
        {
          TITLE: 'QQ机器人搭建',
          URL: 'https://www.aiexplorer.rest/qq-bot'
        },
        {
          TITLE: '快捷键提升效率',
          URL: 'https://www.aiexplorer.rest/article/notion-shortcut'
        },
        {
          TITLE: 'QQ机器人搭建',
          URL: 'https://www.aiexplorer.rest/qq-bot'
        }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  STARTER_FOOTER_PRIVACY_POLICY_URL: 'https://aiexplorer.rest',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: 'https://aiexplorer.rest',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: 'https://aiexplorer.rest',

  // 404页面的提示语
  STARTER_404_TITLE: '我们似乎找不到您要找的页面。',
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_BACK: '回到主页',

  // 页面底部的行动呼吁模块
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: '你还在等待什么呢？',
  STARTER_CTA_TITLE_2: '现在开始吧',
  STARTER_CTA_DESCRIOTN:
    '访问我的博客',
  STARTER_CTA_BUTTON: true, // 是否显示按钮
  STARTER_CTA_BUTTON_URL:
    'https://aiexplorer.rest',
  STARTER_CTA_BUTTON_TEXT: '开始体验',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://aiexplorer.rest', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
