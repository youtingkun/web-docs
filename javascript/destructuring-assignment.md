# 解构赋值

解构赋值对于数组和对象都是浅拷贝第一层，不能进行深度拷贝。

## 字符串形式的解构

```js
const str = "cheese";

const [firstChar = ""] = str;

firstChar; // => 'c'
```

## 数组形式的结构赋值

**基本的用法：**

```js
let [a, [b, c]] = [1, [2, 3]];
//a =1 b=2 c=3

let [, , c1] = [1, 2, 3];
//c1 = 3

let [a2, ...c2] = [1, 2, 3];
//a2=1 c2=[1,2]

let [a3, b3, c3] = [1];
//a3=1 b2=undefined c3=undifined
```

**设置默认值：**

```js
let [a = 1, b, c] = [2, 3, 4];
//a=2 b=3 c=4

let [, b = 2] = [1];
// b=2,第一个值会被忽略

let [a1 = 1, b1, c1] = [, 3, 4];
//a1=1 b1=3 c1=4

let [a2 = 1, b2, c2] = [undefined, 3, 4];
//a2=1 b2=3 c2=4

let [a3 = 1, b3, c3] = [null, 3, 4];
//a3=null b3=3 c3=4
```

如果默认值是一个函数，那么这个函数是惰性的，只有当后面没有被赋值时才会执行：

```js
function f() {
  console.log("aaa");
}

let [x = f()] = [1];
//x=1

function f() {
  console.log("aaa");
}

let [x = f()] = [];
//会执行输出'aaa'，但是x的值仍然为undefined
```

数组形式里面放对象：

```js
let [x, y] = [{ a: "123" }, ,];
//x={a:"123"} y=undefined
```

默认值可以使用解构赋值里面的其它变量，但必须写在前面

```js
let [x, y = x] = [1];
//x=1 y=1

let [x, y = x] = [1, 2];
//x=1 y=2
```

## 对象形式的解构赋值

对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

```js
let { a, b } = { a: 1, b: 2 };
//a=1 b=2
```

变量名与属性名不一样时：

```js
let { x: a, y: b } = { x: 1, y: 2 };
//a=1 b=2
//这里的x和y只是赋值时的临时参数，如果访问的话会出现is not defined错误。
```

同时使用默认值和重命名：

```js
let { x: a, y: b = 20, z: c = 30 } = { x: 1, y: 2 };
console.log(a, b, c); //1,2,30
```

对象形式里面放数组：

```js
let { x, y } = { x: [1, 2, 3], y: [4, 5, 6] };
//x=[1,2,3] y=[4,5,6]
```

嵌套赋值：

```js
let { p } = { p: [1, { a: "123" }] };
//p是一个包含两个元素的数组第一个元素是1，第二个元素是一个对象。

let {
  p: [x, y],
} = { p: [1, { a: "123" }] };
//此时x是一个值等于1的数字，y是一个对象

let {
  p: [x, { y }],
} = { p: [1, { a: "123" }] };
//此时对y的赋值不成功，y为undefined

let {
  p: [x, { y }],
} = { p: [1, { y: "123" }] };
//此时y是一个字符串

const node = {
  loc: {
    start: {
      line: 1,
      column: 5,
    },
  },
};
let {
  loc,
  loc: { start },
  loc: {
    start: { line },
  },
} = node;
//loc=start{line:1,column:5}  start=line:1,column  line=1
```

设置默认值：

```js
var { x = 1 } = { x: 2 };
//x=2

let { x: y = 3 } = {};
//y=3

let { x: y = 3 } = { x: 5 };
//y=5
```

## 运用解构赋值来提取属性和删除属性

提取 firstName 和 age 属性：

```js
let { firstName, age, ...remaining } = {
  firstName: "john",
  lastName: "smith",
  age: 20,
  height: "5.10",
};

firstName; //john
age; //20
```

移除 SNN 属性:

```js
let { SSN, ...cleanObj } = {
  firstName: "john",
  lastName: "smith",
  age: 20,
  height: "5.10",
  SSN: "123456",
};

cleanObj; // {firstName:'john',lastName:'smith',age:20,height:'5.10',SSN:"123456"}
```
