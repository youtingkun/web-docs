# useCallback

当子组件中的 useEffect 依赖于父组件传递过来的函数的时候，由于 useEffect 是浅比较，所以每次父组件变化时，函数都是不同的，子组件都会重新渲染。

useCallback 就是为了解决这个问题，只有当子组件依赖真正改变的时候，才执行。

useMemo 适用于依赖父组件传递过来是对象或数组的时候。

基本使用方法：

```js
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

父子组件案列：

```js
// 子组件
function Foo({ bar, baz }) {
  React.useEffect(() => {
    const options = { bar, baz };
    doSomething(options);
  }, [bar, baz]);
  return <div>foobar</div>;
}

// 父组件
function Blub() {
  const bar = React.useCallback(() => {
    return window.localStorage.getItem("token");
  }, []);
  const baz = React.useMemo(() => [1, 2, 3], []);
  return <Foo bar={bar} baz={baz} />;
}
```
