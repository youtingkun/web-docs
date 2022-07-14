# useState

## useState

```js
const [count, setCount] = useState(0);
```

> useState 是 react 自带的一个 hook 函数，它的作用就是用来声明状态变量。useState 这个函数接收的参数是我们的状态初始值（initial state），它返回了一个数组，这个数组的第[0]项是当前当前的状态值，第[1]项是可以改变状态值的方法函数。

react 规定必须把 hooks 写在函数的最外层，不能写在 if、else 等条件语句中，来确保 hooks 的执行顺序一致：

```js
import React, { useState } from "react";

function Example() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);

  //这里调用了setCount函数，就达到了类似setState（）函数的功能
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```
