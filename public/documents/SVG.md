## SVG 基本教程

### 0. 简介

---

SVG 是一种 XML 语言，类似 XHTML，可以用来绘制矢量图形。 
HTML 提供了定义标题、段落、表格等等内容的元素。与此类似，SVG 也提供了一些元素，用于定义圆形、矩形、曲线等。
一个简单的 SVG 文档由 `<svg>` 根元素和基本的形状元素构成。
SVG 支持渐变、旋转、动画、滤镜、与 `JavaScript` 交互等等功能。

### 1. 一个简单的实例
```svg
<svg version="1.1"
     baseProfile="full"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg"
>
    <rect width="100%" height="100%" fill="red" />
    <circle cx="150" cy="100" r="80" fill="green" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>
```

