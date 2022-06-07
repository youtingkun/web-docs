<template>
  <div>
    <h3>ratate旋转</h3>
    <button @click="replay('showRotate')">刷新</button>
    <div v-show="showRotate">
      2D旋转
      <div class="transform rotate">1</div>
      X轴旋转
      <div class="transform rotateX">1</div>
      Y轴旋转
      <div class="transform rotateY">1</div>
      Z轴旋转
      <div class="transform rotateZ">1</div>
      XYZ轴综合
      <div class="transform rotateXYZ">1</div>
    </div>
    <h3>translate移动</h3>
    <div>
      translate
      <div class="transform translate"></div>
      translate3d,这里由于Z轴是面向人眼，所以看不出来。
      <div class="transform translate3d"></div>
    </div>
    <h3>skew倾斜</h3>
    <div>
      skewX
      <div class="transform skewX"></div>
      skewY
      <div class="transform skewY"></div>
      skew
      <div class="transform skewXY"></div>
    </div>
    <h3>perspective</h3>
    <button @click="replay('showPerspective')">刷新</button>
    <div v-show="showPerspective">
      <div class="transform perspective"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      showRotate: true,
      showPerspective: true,
    }
  },
  methods: {
    replay(key) {
      let that = this
      this[key] = false
      setTimeout(() => {
        that[key] = true
      }, 500)
    },
  },
}
</script>

<style scoped lang="scss">
.transform {
  width: 50px;
  height: 50px;
  background: #0ff;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes rotate1 {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(180deg);
  }
}
.rotate {
  animation-name: rotate1;
}
@keyframes rotateX1 {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotateX(180deg);
  }
}
.rotateX {
  animation-name: rotateX1;
}
@keyframes rotateY1 {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotateY(180deg);
  }
}
.rotateY {
  animation-name: rotateY1;
}
@keyframes rotateZ1 {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotateZ(180deg);
  }
}
.rotateZ {
  animation-name: rotateZ1;
}
@keyframes rotateXYZ1 {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate3d(1, 1, 1, 180deg);
  }
}
.rotateXYZ {
  animation-name: rotateXYZ1;
}
@keyframes translate1 {
  0% {
    transform: translate(0px, 0px);
  }
  100% {
    transform: translate(50px, 50px);
  }
}
.translate {
  animation-name: translate1;
}
@keyframes translate3d1 {
  0% {
    transform: translate3d(0px, 0px, 0px);
  }
  100% {
    transform: translate3d(50px, 50px, 50px);
  }
}
.translate3d {
  animation-name: translate3d1;
}
@keyframes skewX1 {
  0% {
    transform: skewX(0);
  }
  100% {
    transform: skewX(20deg);
  }
}
.skewX {
  animation-name: skewX1;
}
@keyframes skewY1 {
  0% {
    transform: skewY(0);
  }
  100% {
    transform: skewY(20deg);
  }
}
.skewY {
  animation-name: skewY1;
}
@keyframes skewXY1 {
  0% {
    transform: skew(0, 0);
  }
  100% {
    transform: skew(20deg, 20deg);
  }
}
.skewXY {
  animation-name: skewXY1;
}
@keyframes perspective1 {
  0% {
    transform: perspective(0);
  }
  100% {
    transform: perspective(100px) rotateY(30deg);
  }
}
.perspective {
  animation-name: perspective1;
}
</style>
