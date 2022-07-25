# 防抖与节流

- 防抖和节流的作用都是为了防止函数多次调用。
- 防抖是只要间隔小于一定时间，就不会调用这个函数，超过这个时间才会调用函数。
- 节流是每隔一定的时间，调用一次函数。

## 防抖

```js
function debounce(fn, delay) {
  let timer = null;
  return function () {
    //当发现这个定时器存在时，则表示定时器已经在运行中，清空timer的setTimeout，并在下面的代码中重新给timer设置setTimeout。
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}
```

**哪些场景会用到防抖：**

- 登录、发短信等按钮避免用户点击太快，以致于发送了多次请求，需要防抖
- 调整浏览器窗口大小时，resize 次数过于频繁，造成计算过多，此时需要一次到位，就用到了防抖
- 文本编辑器实时保存，当无任何更改操作一秒后进行保存

## 节流

```js
function throttle(fn, delay) {
  let timer = null;
  return function () {
    //当发现这个定时器存在时，则表示定时器已经在运行中，直接返回。
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}
```

**哪些场景会用到节流：**

- scroll 事件，每隔一秒计算一次位置信息等
- 浏览器播放事件，每个一秒计算一次进度信息等
