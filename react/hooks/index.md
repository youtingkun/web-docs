# react hook

## 概念

react hook 是 React 16.8 的新增特性，让我们可以在不编写 class 组件的时候使用 props、state、context、refs 等概念。

加入 hook 的动机：

1. 在 class 组件当中复用状态比较麻烦，而 hook 可以很方便的在组件之间复用状态逻辑。
2. class 组件在生命周期函数当中加入来一些逻辑之后往往很复杂，而 hook 能将这一部分的逻辑进一步分离出来，拆分成更小的函数，方便复用。

## hooks 函数

**基础的有三个：**

- useState
- useEffect
- useContext

**额外的有 10 个：**

useReducer
useCallback
useMemo
useRef
useImperativeHandle
useLayoutEffect
useDebugValue
useDeferredValue
useTransition
useId

**Library Hooks 有两个：**

useSyncExternalStore
useInsertionEffect

## hook 的使用规则

- 只能在函数内最外层使用 hook，不能在循环，条件或嵌套函数中调用 hook
- 只能在 react 函数当中调用，而在普通函数当中调用 hook 是无效的。
