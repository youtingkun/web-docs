# useEffect

由于函数式组件中没有生命周期，所以出现了 useEffect。`useEffect` 是`componentDidMount`，`componentDidUpdate`和`componentWillUnmount`三者的结合。vue 中的 watch 功能可以用 useEffect 来实现。

useEffect()函数接收两个参数：

1. 第一个参数为所要执行的函数
2. 第二个参数为所依赖变化的一个数组，如果第二个参数为空，则每次渲染组件函数都会执行。如果传入的是一个内部的状态属性，那么只有当这个内部状态属性变化时才会执行。

```jsx
import { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(100);

  // count和value状态的改变都会触发useEffect函数
  useEffect(() => {
    // 更新文档的标题
    document.title = `You clicked ${count} times`;
  });

  //仅在 count 改变时触发useEffect函数
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setValue(value + 1)}>Click me</button>
    </div>
  );
}
```

这里要注意几点：

第一，react 首次渲染和之后的每次渲染都会调用一遍传给 useEffect 的函数。而之前我们要用两个声明周期函数来分别表示首次渲染（componentDidMount），和之后的更新导致的重新渲染（componentDidUpdate）。

第二，useEffect 中定义的副作用函数的执行不会阻碍浏览器更新视图，也就是说这些函数是异步执行的，而之前的 componentDidMount 或 componentDidUpdate 中的代码则是同步执行的。这种安排对大多数副作用说都是合理的，但有的情况除外，比如我们有时候需要先根据 DOM 计算出某个元素的尺寸再重新渲染，这时候我们希望这次重新渲染是同步发生的，也就是说它会在浏览器真的去绘制这个页面前发生。
