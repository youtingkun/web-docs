// @ts-check

const pkg = require("../package.json");

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: "前端技术文档",
  lang: "zh-CN",
  description: "一些平时记的笔记",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
    ["script", { src: "https://cdn.wwads.cn/js/makemoney.js", async: "" }],
  ],
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
      apiKey: "b573aa848fd57fb47d693b531297403c",
      indexName: "vitejs",
      searchParameters: {
        facetFilters: ["tags:cn"],
      },
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
          ],
        },
      ],
      // catch-all fallback
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
