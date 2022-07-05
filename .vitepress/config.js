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
    editLink: {
      pattern: `${pkg.repository}/edit/main/:path`,
      text: "为此页提供修改建议",
    },

    algolia: {
      appId: "L21JB7PV84",
      apiKey: "74fe6f48889f04d089bface916a4d50f",
      indexName: "youtingkun",
    },

    nav: [
      { text: "javascript", link: "/javascript/" },
      { text: "html", link: "/html/element" },
      { text: "css", link: "/css/display/flex" },
    ],
    socialLinks: [{ icon: "github", link: pkg.repository }],

    sidebar: {
      "/html": [
        {
          text: "基础",
          items: [
            {
              text: "基本元素",
              link: "/html/element",
            },
          ],
        },
      ],
      "/css": [
        // {
        //   text: "居中",
        //   items: [
        //     {
        //       text: "水平居中",
        //       link: "/css/center/horizontal-center",
        //     },
        //     {
        //       text: "垂直居中",
        //       link: "/css/center/vertical-center",
        //     },
        //     {
        //       text: "水平垂直居中",
        //       link: "/css/center/horizontal-vertical-center",
        //     },
        //   ],
        // },
        {
          text: "display",
          items: [
            {
              text: "flex",
              link: "/css/display/flex",
            },
            {
              text: "grid",
              link: "/css/display/grid",
            },
          ],
        },
        // {
        //   text: "postion",
        //   items: [
        //     {
        //       text: "定位",
        //       link: "/css/postion/postion",
        //     },
        //     {
        //       text: "z-index",
        //       link: "/css/postion/z-index",
        //     },
        //   ],
        // },
        // {
        //   text: "select",
        //   items: [
        //     {
        //       text: "选择器",
        //       link: "/css/select/select",
        //     },
        //   ],
        // },
        {
          text: "动画",
          items: [
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
          ],
        },
        // {
        //   text: "canvas",
        //   items: [
        //     {
        //       text: "canvas",
        //       link: "/css/canvas/canvas",
        //     },
        //   ],
        // },
      ],
      "/": [
        {
          text: "指引",
          items: [
            {
              text: "开始",
              link: "/javascript/",
            },
          ],
        },
      ],
    },
  },

  markdown: {},
};
