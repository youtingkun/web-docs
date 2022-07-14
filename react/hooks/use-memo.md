# useMemo

和 useState 的参数类似，只不过它通常用于组件内部状态的改变导致另一个参数的改变，vue 中的 computed 功能可以用 useMemo 实现。例如，下面 value 大于 2 的时候，才会触发 increase 改变，increase 的初始值为 0，并且永远比 value 大 1.

```js
import React, { memo, useState, useMemo } from "react";
function App() {
  const [value, setValue] = useState(0);
  const increase = useMemo(() => {
    if (value > 2) return value + 1;
  }, [value]);
  return (
    <div>
      <Child value={value} />
      <button
        type="button"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        value:{value},increase:{increase || 0}
      </button>
    </div>
  );
}

//memo是函数组件，是为了优化父组件状态改变，不涉及到子组件状态改变，但是父组件仍然会在每次render时都渲染子组件。而使用了memo函数的组件，只有当子组件状态改变时才会重新渲染。
const Child = memo(function Child(props) {
  console.log("Child render");
  return <h1>value:{props.value}</h1>;
});
export default App;
```
