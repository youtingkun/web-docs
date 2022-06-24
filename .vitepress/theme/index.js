import Theme from "vitepress/theme";
import VueCodeView from "./components/vue-code-view/index.vue";
import "./custom.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

export default {
  ...Theme,
  enhanceApp({ app }) {
    // 注册全局第三方组件
    app.use(ElementPlus);
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
    // 注册全局自定义组件
    app.component("VueCodeView", VueCodeView);
  },
};
