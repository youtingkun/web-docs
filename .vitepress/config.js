// @ts-check

const pkg = require("../package.json");
import htmlConfig from "./sidebar-config/html.js";
import linuxConfig from "./sidebar-config/linux.js";
import javaScriptConfig from "./sidebar-config/javascript.js";
import cssConfig from "./sidebar-config/css.js";
import reactConfig from "./sidebar-config/react.js";

/**
 * @type {import('vitepress').UserConfig}
 */
export default {
  title: "前端技术文档",
  lang: "zh-CN",
  description: "一些平时记的笔记",
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }]],
  vue: {
    // reactivityTransform: true,
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
      apiKey: "9f2d4a712485fa7ea26044037ba3d823",
      indexName: "youtingkun",
    },

    nav: [
      { text: "javascript", link: "/javascript/" },
      { text: "html", link: "/html/element" },
      { text: "css", link: "/css/display/flex" },
      { text: "linux", link: "/linux/" },
      { text: "react", link: "/react/hooks/" },
    ],
    socialLinks: [{ icon: "github", link: pkg.repository }],

    sidebar: {
      "/linux": linuxConfig,
      "/html": htmlConfig,
      "/css": cssConfig,
      "/javascript": javaScriptConfig,
      "/react": reactConfig,
    },
  },

  markdown: {},
};
