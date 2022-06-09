<style scoped lang="scss">
.live-flex {
  .hide-btn {
    font-size: 14px;
    color: #999;
    cursor: pointer;
    padding: 10px;
  }
  .flex-container {
    padding: 15px;
    min-height: 500px;
    border: 1px solid #ddd;
    color: #fff;
    display: flex;

    .flex-item {
      cursor: pointer;
      &:nth-of-type(1) {
        width: 70px;
        height: 70px;
        background: #0ea5c6;
      }
      &:nth-of-type(2) {
        width: 100px;
        height: 30px;
        background: #ffc60b;
      }
      &:nth-of-type(3) {
        width: 150px;
        height: 100px;
        background: #ff5733;
      }
      &:nth-of-type(4) {
        width: 300px;
        height: 140px;
        background: #e4406f;
      }
      &:nth-of-type(5) {
        width: 150px;
        height: 100px;
        background: #07456f;
      }
    }
  }
  .title {
    font-size: 24px;
    line-height: 24px;
    margin-top: 10px;
    margin-bottom: 0;
  }
  .bottom-border {
    border-bottom: 1px solid #eee;
  }
}
</style>

<template>
  <div class="live-flex">
    <p class="tip">click item to change itself style</p>
    <div class="flex-container" :style="containerStyle">
      <div
        class="flex-item"
        v-for="(item, index) in itemStyles"
        :key="index"
        :style="item"
        @click="changeItemCss(item, index)"
      >
        item-{{ index + 1 }}
      </div>
    </div>
    <p class="title">
      <span>style of container</span>
      <span class="tip hide-btn" @click="() => (this.hideTop = !this.hideTop)">
        <el-icon v-if="hideTop"><ArrowUp /></el-icon>
        <el-icon v-else><ArrowDown /></el-icon>
        {{ hideTop ? "show" : "hide" }}</span
      >
    </p>
    <div class="bottom-border" v-show="!hideTop">
      <div class="language-css extra-class">
        <pre class="language-css"><code
               ref="flexContainer"></code></pre>
      </div>
      <el-form label-suffix="：" label-width="auto">
        <el-form-item label="flex-direction">
          <el-radio
            v-model="containerStyle['flex-direction']"
            v-for="(value, index) in flexDirection"
            :key="index"
            :label="value"
          ></el-radio>
        </el-form-item>
        <el-form-item label="flex-wrap">
          <el-radio
            v-model="containerStyle['flex-wrap']"
            v-for="(value, index) in flexWrap"
            :key="index"
            :label="value"
          ></el-radio>
        </el-form-item>
        <el-form-item label="justify-content">
          <el-radio
            v-model="containerStyle['justify-content']"
            v-for="(value, index) in justifyContent"
            :key="index"
            :label="value"
          ></el-radio>
        </el-form-item>
        <el-form-item label="align-items">
          <el-radio
            v-model="containerStyle['align-items']"
            v-for="(value, index) in alignItems"
            :key="index"
            :label="value"
          ></el-radio>
        </el-form-item>
        <el-form-item label="align-content">
          <el-radio
            v-model="containerStyle['align-content']"
            v-for="(value, index) in alignContent"
            :key="index"
            :label="value"
          ></el-radio>
        </el-form-item>
      </el-form>
    </div>

    <div class="bottom-border" v-show="choosenItemIndex != -1">
      <p class="title">style of item-{{ choosenItemIndex + 1 }}</p>
      <div class="language-css extra-class">
        <pre class="language-css"><code ref="flexItem"></code></pre>
      </div>
      <el-form label-suffix="：" label-width="auto">
        <el-form-item label="order">
          <el-radio
            v-model="choosenItem['order']"
            v-for="(value, index) in order"
            :key="index"
            :label="value"
          ></el-radio>
        </el-form-item>
        <el-form-item label="flex-grow">
          <el-radio
            v-model="choosenItem['flex-grow']"
            v-for="(value, index) in flexGrow"
            :key="index"
            :label="value"
          ></el-radio>
        </el-form-item>
        <el-form-item label="flex-shrink">
          <el-radio
            v-model="choosenItem['flex-shrink']"
            v-for="(value, index) in flexShrink"
            :key="index"
            :label="value"
          ></el-radio>
        </el-form-item>
        <el-form-item label="flex-basis">
          <el-radio
            v-model="choosenItem['flex-basis']"
            v-for="(value, index) in flexBasis"
            :key="index"
            :label="value"
          ></el-radio>
        </el-form-item>

        <el-form-item label="align-self">
          <el-radio
            v-model="choosenItem['align-self']"
            v-for="(value, index) in alignSelf"
            :key="index"
            :label="value"
          ></el-radio>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Prism from "prismjs";

export default {
  name: "flex",
  data() {
    return {
      // 父容器显示在prism中的代码,以下为默认值
      containerStyle: {
        "flex-direction": "row",
        "flex-wrap": "nowrap",
        "justify-content": "flex-start",
        "align-items": "stretch",
        "align-content": "stretch",
      },
      // 子item显示在prism中的代码
      itemStyles: [
        {
          order: 0,
          "flex-grow": 0,
          "flex-shrink": 1,
          "flex-basis": "auto",
          "align-self": "auto",
        },
        {
          order: 0,
          "flex-grow": 0,
          "flex-shrink": 1,
          "flex-basis": "auto",
          "align-self": "auto",
        },
        {
          order: 0,
          "flex-grow": 0,
          "flex-shrink": 1,
          "flex-basis": "auto",
          "align-self": "auto",
        },
        // {
        //   order: 0,
        //   "flex-grow": 0,
        //   "flex-shrink": 1,
        //   "flex-basis": "auto",
        //   "align-self": "auto",
        // },
        // {
        //   order: 0,
        //   "flex-grow": 0,
        //   "flex-shrink": 1,
        //   "flex-basis": "auto",
        //   "align-self": "auto",
        // },
      ],
      // 是否显示父元素样式的代码
      hideTop: false,
      // 当前选中子item的index
      choosenItemIndex: -1,
      // 当前选中子item的样式
      choosenItem: {},
      // 以下五个为父元素属性
      flexDirection: ["row", "row-reverse", "column", "column-reverse"],
      flexWrap: ["nowrap", "wrap", "wrap-reverse"],
      justifyContent: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
      ],
      alignItems: ["stretch", "flex-start", "flex-end", "center", "baseline"],
      alignContent: [
        "stretch",
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
      ],
      // 以下五个为子元素属性
      order: [0, 1, 2, 3],
      flexGrow: [0, 1, 2, 3],
      flexShrink: [0, 1, 2, 3],
      flexBasis: ["auto", "0px", "50%", "100%"],
      alignSelf: ["auto", "flex-start", "flex-end", "center", "baseline"],
    };
  },
  watch: {
    containerStyle: {
      handler() {
        this.setContainerStyleStr();
      },
      deep: true,
    },
    choosenItem: {
      handler() {
        this.setItemStyleStr();
      },
      deep: true,
    },
  },
  computed: {},
  methods: {
    styleToString(style) {
      let styleStr = "";
      for (let key in style) {
        styleStr += `${key}: ${style[key]};\n`;
      }
      return styleStr;
    },
    setContainerStyleStr() {
      this.$refs["flexContainer"].innerHTML = Prism.highlight(
        this.styleToString(this.containerStyle),
        Prism.languages.css
      );
    },
    setItemStyleStr() {
      this.$refs["flexItem"].innerHTML = Prism.highlight(
        this.styleToString(this.choosenItem),
        Prism.languages.css
      );
    },
    changeItemCss(style, index) {
      this.choosenItem = style;
      this.choosenItemIndex = index;
    },
  },
  mounted() {
    this.setContainerStyleStr();
  },
};
</script>
