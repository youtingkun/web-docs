# let 和 const

声明的 let 变量只作于于代码块内部，外部访问会报变量没有被定义的错误。

而 var 变量在没有声明时访问，只会返回 undefined，并不会报错。

什么叫代码块内部昵？简单来说就是被{}所包裹的内容。

当在（）中声明的 let 变量，也只能在它后面的{}中访问。即{}可以看做 let 作用域的子作用域。

```js
var a = 1;
{
  var b = 2;
  let c = 3;
}
//或
for (var b1 = 1; b1 <= 3; b1++) {
  console.log(b1);
}
for (let c1 = 1; c1 <= 3; c1++) {
  console.log(c1);
}
//这里的a、b、b1都能在外部访问。而c、c1只能在内部访问。
```

变量提升：当声明的 var 变量，变量会自动提升为全局变量。不管是在函数外部还是在函数内部，只要在定义之后都可以访问。

```js
for (var b1 = 1; b1 <= 3; b1++) {
  console.log(b1);
  console.log(b2);
  for (var b2 = 1; b2 <= 3; b2++) {
    console.log(b1);
    console.log(b2);
  }
  console.log("------------------------------------");
}
console.log(b1);
console.log(b2);
//这里都能访问b1,b2。只是在内部第一层第一次访问b2时会返回undifined。
```

对应的用 let 声明：

```js
for (let c1 = 1; c1 <= 3; c1++) {
  console.log(c1);
  for (let c2 = 1; c2 <= 3; c2++) {
    console.log(c1);
    console.log(c2);
  }
  console.log("------------------------------------");
}
//这里内部第二层可以访问到c1,也就是说这里的作用域包括了它的子作用域。
```

**var 变量名相同时：**

同层：

```js
var a = 1;
var a = 2;
//a=2，即他们共享内存地址。
```

不同层：

```js
for (var b1 = 1; b1 <= 3; b1++) {
  console.log(b1);
  console.log(b1);
  for (var b1 = 1; b1 <= 3; b1++) {
    console.log(b1);
    console.log(b1);
  }
  console.log("------------------------------------");
}
console.log(b1);
console.log(b1);
//第一层b1和第二层b2共享内存地址。
//这里外部循环只会执行一次，即内部循环跳出时，外部的第二次循环b2的值已经是4。
//由于for循环特性，依然会执行b++，所以最后输出的b1的值为5
```

**let 变量名相同时：**

同层：

```js
let a = 1;
let a = 2;
console.log(a);
//会报错，提示'a'has already been declared
```

不同层：

```js
for (let c1 = 1; c1 <= 3; c1++) {
  console.log(c1);
  for (let c1 = 1; c1 <= 3; c1++) {
    console.log(c1);
    console.log(c1);
  }
  console.log("------------------------------------");
}
//
//第一层c1和第二层c1有单独的内存地址。
//这里第一层和第二层的c1名字虽然是一样的，但是在自己的块内只访问自己的变量。
//即第一层只访问第一层的变量，第二层访问第二层的变量。相互之间不影响。
```

**var 变量于 let 变量同名时:**

同层：

```js
var b = 1;
let b = 7;
console.log(b);
//会报错，'b' has already been declared

let b = 1;
var b = 7;
//会报错，'b' has already been declared

for (let b1 = 1; b1 <= 3; b1++) {
  var b1 = 7;
  console.log(b1);
}
//这样写也会报错

for (var b1 = 1; b1 <= 3; b1++) {
  let b1 = 7;
  console.log(b1);
}
//按理来说，这样也应该叫同层，会报错。但是不会，会正常的输出三个7。
```

不同层：

```js
var b = 1;
for (let b = 1; b <= 3; b++) {
  console.log(b);
}
console.log(b);
//正常输出

let b = 1;
for (var b = 1; b <= 3; b++) {
  console.log(b);
}
console.log(b);
//会报错，'b' has already been declared

for (var b1 = 1; b1 <= 3; b1++) {
  let b1 = 7;
  console.log(b1);
}
console.log(b1);
//正常输出

for (let b1 = 1; b1 <= 3; b1++) {
  var b1 = 7;
  console.log(b1);
}
//会报错，'b' has already been declared
```

**综上述，可得出结论：**

1. for（）里面的域可以看作是它外部域的子域，是它后面{}的父域。
2. var 可以设置同名变量，因为会自动提升为全局变量，共享内存地址。
3. let 同层不可以设置同名变量。
4. var 和 let 变量名相同时，不可以在同一层。
5. var 和 let 变量名相同时，var 变量可以在 let 变量的外层，而 let 变量不能在 var 变量的外层。

## const

**const:**

- 实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。
- 对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。
- 但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const 只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了

简单来说就是对于简单数据类型，如果用 const 声明之后是不可以更改的，但是如果用 const 声明的是对象或者数组是可以更改的。

const 为常量时不可修改，声明时必须要初始化。

```js
const a = 1;
a = 2; //报错
```

const 为对象或数组时：

```js
const a = ["1", "2"];
a.push("3");
console.log(a);
//可以对数组进行修改

function f() {
  console.log("1");
}
const a = f();
function f() {
  console.log("2");
}
//这里输出"2"，可以对函数对象修改
```

## 函数作用域

**ES6 规定，块级作用域之中，函数声明语句的行为类似于 let，在块级作用域之外不可引用：**

```js
function f() {
  console.log("f0");
  function f() {
    console.log("f01");
  }
  f();
}
f();
//输出"f0" "f01"

function f() {
  console.log("f0");
  function f1() {
    console.log("f1");
  }
  f1();
}
f();
f1(); //到这里的时候报错，外部不能访问内部函数。
```
