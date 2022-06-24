# element

## 行内元素与块元素

| 分类       | 元素                                                                                                                                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 行内元素   | b、big i、 small、 tt、 abbr、 acronym、 cite、 code、 dfn、 em、 kbd、 strong、 samp、 var、 a、 bdo、 br、 img、 map、 object、 q、 script、 span、 sub、 sup、 button、 input、 label、 select、 textarea |
| 块元素     | div、h1~h6、p、hr、form、ul、ol、li、address、article、aside、audio、blockquote、canvas、dd、dl、fieldset、figcaption、figure、footer、header、hgroup、noscript、output、pre、section、table、tfoot、video   |
| 行内快元素 |                                                                                                                                                                                                              |

## 行内元素

<https://developer.mozilla.org/zh-CN/docs/Web/HTML/Inline_elements>

1. 行内元素不会独占一行，相邻的行内元素会排在一行。
2. 设置 width 和 height 无效。
3. margin/padding 在竖直方向上无效，水平方向上有效
4. 元素内只能容纳文本或其他行内元素
5. 浮动或绝对定位时会转换为 block
6. vertical-align 属性有效

## 块元素

<https://developer.mozilla.org/zh-CN/docs/Web/HTML/Block-level_elements>

1. 块元素会独占一行。
2. 可以设置 width 和 height。(默认 width 为 100%)
3. margin 和 padding 的设置都有效。
4. 元素内可以放其他行内元素或块元素。
5. 忽略 vertical-align 属性。

## 行内块元素

1. 元素不会独占一行。
2. 可以设置 widht 和 geight。
3. margin 和 padding 的设置有效。
4. 元素内可以放其他行内元素或块元素。
