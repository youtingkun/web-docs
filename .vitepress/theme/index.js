import Theme from "vitepress/theme";
import VueCodeView from "./VueCodeView.vue";
import "./custom.css";

export default {
  ...Theme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component("VueCodeView", VueCodeView);
  },
};
