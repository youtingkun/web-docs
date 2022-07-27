# 图片懒加载

## 方案一:clientHeight、scrollTop 和 offsetTop

- 先设置 src 为一张默认的图片，data-scr 设置为真正的图片链接
- 当图片距离顶部的距离 offsetTop 小于视口高度（clientHeight）和滚动条高度（scrollTop）之和时，替换 src 为真正的图片链接。

```html
<img src="default.jpg" data-src="http://www.xxx.com/target.jpg" />
```

```js
function lazyload() {
  let img = document.getElementsByTagName("img");
  let length = img.length;
  let viewHeight = document.documentElement.clientHeight; //视口高度
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条高度
  for (let i = 0; i < length; i++) {
    // 元素距离顶部的距离于视口高度和滚动条高度之和时
    if (img[i].offsetTop < scrollHeight + viewHeight) {
      img[i].src = img[i].getAttribute("data-src");
    }
  }
}

window.addEventListener("scroll", lazyload);
```

## 方案二：getBoundingClientRect

```js
function lazyload() {
  let img = document.getElementsByTagName("img");
  let length = img.length;
  for (let i = 0; i < length; i++) {
    // getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置
    if (
      img[i].getBoundingClientRect().top < document.documentElement.clientHeight
    ) {
      img[i].src = img[i].getAttribute("data-src");
    }
  }
}
```

## 方案三: IntersectionObserver

```js
let img = document.getElementsByTagName("img");

// IntersectionObserver能够监听元素是否到了当前视口
const observer = new IntersectionObserver((changes) => {
  //changes 是被观察的元素集合
  for (let i = 0, len = changes.length; i < len; i++) {
    let change = changes[i];
    // 通过这个属性判断是否在视口中
    if (change.isIntersecting) {
      const imgElement = change.target;
      imgElement.src = imgElement.getAttribute("data-src");
      observer.unobserve(imgElement);
    }
  }
});
Array.from(img).forEach((item) => observer.observe(item));
```
