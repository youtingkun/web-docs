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
      { text: "javascript", link: "/guide/" },
      { text: "html", link: "/config/" },
      { text: "css", link: "/plugins/" },
    ],

    sidebar: {
      "/config/": "auto",
      "/plugins": "auto",
      // catch-all fallback
      "/": [
        {
          text: "指引",
          children: [
            {
              text: "为什么选 Vite",
              link: "/guide/why",
            },
            {
              text: "开始",
              link: "/guide/",
            },
            {
              text: "功能",
              link: "/guide/features",
            },
            {
              text: "使用插件",
              link: "/guide/using-plugins",
            },
            {
              text: "依赖预构建",
              link: "/guide/dep-pre-bundling",
            },
            {
              text: "静态资源处理",
              link: "/guide/assets",
            },
            {
              text: "构建生产版本",
              link: "/guide/build",
            },
            {
              text: "部署静态站点",
              link: "/guide/static-deploy",
            },
            {
              text: "环境变量与模式",
              link: "/guide/env-and-mode",
            },
            {
              text: "服务端渲染（SSR）",
              link: "/guide/ssr",
            },
            {
              text: "后端集成",
              link: "/guide/backend-integration",
            },
            {
              text: "比较",
              link: "/guide/comparisons",
            },
            {
              text: "从 v1 迁移",
              link: "/guide/migration",
            },
          ],
        },
        {
          text: "API",
          children: [
            {
              text: "插件 API",
              link: "/guide/api-plugin",
            },
            {
              text: "HMR API",
              link: "/guide/api-hmr",
            },
            {
              text: "JavaScript API",
              link: "/guide/api-javascript",
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
