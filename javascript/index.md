# 基本变量

## 基本类型有七种

- Undefined
- Null
- Boolean
- Number
- String
- Symbol
- BigInt

基本类型存放在栈区，访问是按值访问的，就是说你可以操作保存在变量中的实际的值。

**BigInt（es2020）：**

js 中 Number 类型只能安全的表示`-(2^53-1)`至 `2^53-1` 范的值,超过这个值进行计算就会造成精度的丢失。

```js
const max = Number.MAX_SAFE_INTEGER;
console.log(max); // 9007199254740991
let bigIntNum = BigInt(9007199254740992);
```

**undefined 和 null 的区别：**

- undefined 表示声明一个变量，但是没有赋值`let a`。null 表示声明了这个变量，并且赋值为 null`let a = null`
- null 和 undefined 类型都只有一个值，分别是 null 和 undefined
- null == undefined // true
- null === undefined //false

**undefined 和 undeclared 的区别：**

- 声明但是没有赋值的变量是 undefined，没有声明的变量是 undeclared.
- 对于 undeclared 访问，浏览器会报错`Uncaught ReferenceError: a is not defined`

**为什么我们能对基本类型 Boolean、Number、String 使用用它们的方法？**

因为 js 对这三种类型使用了原始包装操作：

```js
let s1 = "some text";
let s2 = s1.substring(2);
//xiang dang y
let s1 = new String("some text");
let s2 = s1.substring(2);
s1 = null;
```

## 引用类型

- function
- array
- Date
- RegExp
- object 等。

引用类型同时存储在栈堆中。栈当中的键就是当前对象的名字，值就是这个对象具体的堆的地址。

给一个对象重新赋值，会引用新的地址

```js
function test(person) {
  person.age = 26; // 这里由于传入的p1这个对象的引用地址#001，所以会改变p1的age属性
  person = {
    // 这里由于重新赋值了，所以会有新的地址#002来储存这个对象。
    name: "yyy",
    age: 30,
  };

  return person;
}
const p1 = {
  name: "yck",
  age: 25,
};
const p2 = test(p1);
console.log(p1); // {name:'yck',26}
console.log(p2); // {name:'yck',30} ?
```

## 其它类型

- Blob 储存文件的二进制形式
- set 对象：Set 对象是值的集合，你可以按照插入的顺序迭代它的元素。 Set 中的元素只会出现一次，即 Set 中的元素是唯一的。
- map 对象

## 判断数据类型

1. **typeof:**

   - 对于基本元素类型来说，typeof 除了 null 都可以正确显示。

     typeof Symbol(); // symbol 有效
     typeof ''; // string 有效
     typeof 1; // number 有效
     typeof true; //boolean 有效
     typeof undefined; //undefined 有效
     typeof BigInt(1) // bigint 有效
     typeof null; //object 无效

   - 对于引用类型来说，除了函数都会显示 object

     typeof [] // 'object'
     typeof {} // 'object'
     typeof console.log // 'function'
     typeof new Date(); //object 无效
     typeof new RegExp(); //object 无效

2. **Object.prototype.toString.call():**

Object.prototype.toString.call()是最准确也是最常用的方式。

3. **isXXX，比如 isArray:**

## 类型之间的相互转换

**类型默认转换：**

在 js 当中类型转换有三种情况：1. 转换为布尔值、2. 转换为数字、3. 转换为字符串

1. 转为为布尔值

| 原始类型        | 转换类型 | 规则                          |
| --------------- | -------- | ----------------------------- |
| number          | boolean  | 除了 +0、0、-0、NaN 都为 true |
| string          | boolean  | 除了空串都为 true             |
| undefined、null | boolean  | false                         |
| 引用类型        | boolean  | true                          |

2. 转换为数字

| 原始类型 | 转换类型 | 规则                                                 |
| -------- | -------- | ---------------------------------------------------- |
| string   | number   | '1'=>1,'a'=>NaN                                      |
| array    | number   | 空数组为 0，存在一个元素且为数字转数字，其它情况 NaN |
| null     | number   | 0                                                    |
| boolean  | number   | false 为 0，true 为 1                                |
| 引用类型 | number   | NaN                                                  |

3. 转为字符串

| 原始类型 | 转换类型 | 规则              |
| -------- | -------- | ----------------- |
| number   | string   | 1=>'1'            |
| array    | string   | [1,2]=>'1,2'      |
| 对象     | string   | '[object Object]' |

**强制转换：**

1. 字符串转换为数字：

```js
let str = "123";
let int = parseInt(str);
let int = Number(str);
let int = str * 1;
```

2. 数字转换为字符串

   ```js
   String(1)
   "" + 1
   1.toString()
   ```

## 判断双等号和三等号区别

==如果两个类型不相等，会先转换类型之后再比较。
===不转换类型直接比较，如果类型都不相等那么肯定不相等。

在进行==比较时，如果两个类型不相等时的转换规则：

双等号==：

```
（1）如果两个值类型相同，再进行三个等号(===)的比较
（2）如果两个值类型不同，也有可能相等，需根据以下规则进行类型转换在比较：
    1）如果一个是null，一个是undefined，那么相等
    2）如果一个是字符串，一个是数值，把字符串转换成数值之后再进行比较
```

三等号===:

```
    （1）如果类型不同，就一定不相等
　　（2）如果两个都是数值，并且是同一个值，那么相等；如果其中至少一个是NaN，那么不相等。（判断一个值是否是NaN，只能使用isNaN( ) 来判断）
　　（3）如果两个都是字符串，每个位置的字符都一样，那么相等，否则不相等。
　　（4）如果两个值都是true，或是false，那么相等
　　（5）如果两个值都引用同一个对象或是函数，那么相等，否则不相等
　　（6）如果两个值都是null，或是undefined，那么相等
```

## 浅拷贝与深拷贝（深度克隆）的方法

    浅拷贝指的是复制指向某个对象的指针，而不是复制对象本身，新旧对象还是共享同一块内存。

    深拷贝指的是在拷贝数据的时候，将数据所有的引用结构都拷贝一份。在内存中存在两个数据结构完全相同又相互独立的数据。

**对象深度克隆**

1. 使用`JSON.parse`和`JSON.stringify`。但会对于某些类型转换出错。

   this.editContractProduct = JSON.parse(JSON.stringify(row));

2. 自己手写深度克隆方法

   ytk-utils

**数组深度克隆**

使用数组的 slice 方法：

```js
var arr1 = [1, 2, 3];
var arr2 = arr1.slice(0);
console.log(arr2); //[1,2,3]
//这个时候改变arr1[2] = 5,那么输出arr2[2]还是等于3
// 但是这还是只拷贝的第一层
```

使用数组的 map 方法：

```js
var arr1 = [2, 3, 4];
var arr2 = arr1.map(function (value) {
  return value;
});
console.log(arr2); //[2,3,4]
```

使用数组的 concat 方法：

```js
var arr1 = [3, 4, 5];
var arr2 = arr1.concat();
console.log(arr2); //[3,4,5]
```
