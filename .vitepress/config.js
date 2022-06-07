// @ts-check

const pkg = require("../package.json");

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: "前端技术文档",
  lang: "zh-CN",
  description: "一些平时记的笔记",
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }]],
  vue: {
    reactivityTransform: true,
  },
  themeConfig: {
    repo: pkg.repository,
    logo: "/logo.svg",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "为此页提供修改建议",

    algolia: {
      appId: "LBJ38HU71U",
      apiKey: "d293244e6c37dfe8b5772dcd3bd10f6b",
      indexName: "web-docs",
    },

    nav: [
      { text: "javascript", link: "/javascript/" },
      { text: "html", link: "/html/" },
      { text: "css", link: "/css/" },
    ],

    sidebar: {
      "/html/": "auto",
      "/css": [
        {
          text: "居中",
          children: [
            {
              text: "水平居中",
              link: "/css/center/horizontal-center",
            },
            {
              text: "垂直居中",
              link: "/css/center/vertical-center",
            },
            {
              text: "水平垂直居中",
              link: "/css/center/horizontal-vertical-center",
            },
          ],
        },
        {
          text: "display",
          children: [
            {
              text: "行内元素与块元素",
              link: "/css/display/block-inline",
            },
          ],
        },
        {
          text: "postion",
          children: [
            {
              text: "定位",
              link: "/css/postion/postion",
            },
            {
              text: "z-index",
              link: "/css/postion/z-index",
            },
          ],
        },
        {
          text: "select",
          children: [
            {
              text: "选择器",
              link: "/css/select/select",
            },
          ],
        },
        {
          text: "动画",
          children: [
            {
              text: "animation",
              link: "/css/animation/animation",
            },
            {
              text: "transition",
              link: "/css/animation/transition",
            },
            {
              text: "transform",
              link: "/css/animation/transform",
            },
            {
              text: "example",
              link: "/css/animation/example",
            },
          ],
        },
        {
          text: "canvas",
          children: [
            {
              text: "canvas",
              link: "/css/canvas/canvas",
            },
          ],
        },
      ],
      "/": [
        {
          text: "指引",
          children: [
            {
              text: "开始",
              link: "/javascript/",
            },
            {
              text: "为什么选 Vite",
              link: "/javascript/why",
            },
            {
              text: "功能",
              link: "/javascript/features",
            },
          ],
        },
        {
          text: "API",
          children: [
            {
              text: "插件 API",
              link: "/javascript/api-plugin",
            },
          ],
        },
      ],
    },
  },

  markdown: {
    anchor: {
      renderPermalink: require("./render-perma-link"),
    },
    config: (md) => {
      md.use(require("./markdown-it-custom-anchor"));
    },
  },
};
