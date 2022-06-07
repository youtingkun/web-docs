<template>
  <div class="">
    <h3>animation-name和animation-duration</h3>
    <button @click="replay('showName')">
      重新执行
    </button>
    <div v-show="showName" class="animation name"></div>
    <h3>animation-timing-function</h3>
    <button @click="replay('showTimingFunction')">
      重新执行
    </button>
    <div v-if="showTimingFunction">
      ease-in
      <div class="animation timing-function"></div>
      linear
      <div class="animation timing-function1"></div>
    </div>
    <h3>animation-fill-mode</h3>
    <button @click="replay('showFillMode')">
      重新执行
    </button>
    <div v-show="showFillMode">
      none
      <div class="animation fill-mode"></div>
      forwards
      <div class="animation fill-mode forwards"></div>
      backwards
      <div class="animation fill-mode backwrads"></div>
      both
      <div class="animation fill-mode both"></div>
    </div>

    <h3>animation-delay</h3>
    <button @click="replay('showDelay')">
      重新执行
    </button>
    <div v-show="showDelay">
      延迟一秒执行，正数
      <div class="animation delay"></div>
      延迟一秒执行，负数
      <div class="animation delay2"></div>
    </div>

    <h3>animation-play-state</h3>
    <button @click="replay('showPlayState')">
      重新执行
    </button>
    <div v-show="showPlayState">
      鼠标移上去暂停
      <div class="animation play-state"></div>
    </div>

    <h3>
      animation-iteration-count
    </h3>
    <button @click="replay('showIterationCount')">
      重新执行
    </button>
    <div v-show="showIterationCount">
      重复执行2次
      <div class="animation iteration-count1"></div>
      重复执行1.5次
      <div class="animation iteration-count2"></div>
      无限次数执行
      <div class="animation iteration-count3"></div>
    </div>
    <h3>animation-direction</h3>
    <button @click="replay('showDirection')">
      重新执行
    </button>
    <div v-show="showDirection">
      normal
      <div class="animation direction normal"></div>
      reverse
      <div class="animation direction reverse"></div>
      alternate
      <div class="animation direction alternate"></div>
      alternate-reverse
      <div class="animation direction alternate-reverse"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showIterationCount: true,
      showPlayState: true,
      showDirection: true,
      showName: true,
      showTimingFunction: true,
      showFillMode: true,
      showDelay: true,
    };
  },
  methods: {
    replay(key) {
      let that = this;
      this[key] = false;
      setTimeout(() => {
        that[key] = true;
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
.animation {
  width: 50px;
  height: 50px;
  background: #0ff;
}

@keyframes move {
  0% {
    transform: translate(0px, 0);
  }
  100% {
    transform: translate(200px, 0);
  }
}
.name {
  animation-name: move;
  animation-duration: 3s;
}
.timing-function {
  animation-name: move;
  animation-duration: 3s;
  animation-timing-function: ease-in;
}
.timing-function1 {
  animation-name: move;
  animation-duration: 3s;
  animation-timing-function: elinear;
}
.fill-mode {
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-name: move;
}
.forwards {
  animation-fill-mode: forwards;
}
.backwrads {
  animation-fill-mode: backwards;
}
.both {
  animation-fill-mode: both;
}
.delay {
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-name: move;
  animation-delay: 1s;
}
.delay2 {
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-name: move;
  animation-delay: -1s;
}
.play-state {
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-name: move;
}
.play-state:hover {
  animation-play-state: paused;
}
.iteration-count1 {
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-name: move;
  animation-iteration-count: 2;
}
.iteration-count2 {
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-name: move;
  animation-iteration-count: 1.5;
}
.iteration-count3 {
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-name: move;
  animation-iteration-count: infinite;
}
.direction {
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-name: move;
  animation-iteration-count: 2;
}
.normal {
  animation-direction: normal;
}
.reverse {
  animation-direction: reverse;
}
.alternate {
  animation-direction: alternate;
}
.alternate-reverse {
  animation-direction: alternate-reverse;
}
</style>
