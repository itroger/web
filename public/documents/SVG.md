## SVG 基本教程

### 0. 简介

---

SVG 是一种 XML 语言，类似 XHTML，可以用来绘制矢量图形。 
HTML 提供了定义标题、段落、表格等等内容的元素。与此类似，SVG 也提供了一些元素，用于定义圆形、矩形、曲线等。
一个简单的 SVG 文档由 `<svg>` 根元素和基本的形状元素构成。
SVG 支持渐变、旋转、动画、滤镜、与 `JavaScript` 交互等4等功能。

### 1. `<svg>` 标签

---

> SVG 代码都放在顶层标签 `<svg>` 中。

```svg
<svg width="100" height="100" viewBox="50 50 50 50"></svg>
```

- `width` 属性和 `height` 属性，指定 SVG 在 HTML 元素中所占据的宽度和高度。
- `viewBox` 属性，表示只显示 SVG 的一部分。属性值分别表示左上角的横坐标和纵坐标、视口的宽度和高度。

### 2. `<circle>` 标签

---

> 绘制圆形

```svg
<svg width="300" height="180">
    <circle cx="30" cy="50" r="25" />
</svg>
```

- `cx`: 横坐标
- `cy`: 纵坐标
- `r`: 半径

### 3. `<line>` 标签

---

> 绘制直线

```svg
<svg width="300" height="180">
    <line x1="0" y1="0" x2="200" y2="0" />
</svg>
```

- `x1`: 线段起点横坐标
- `y1`: 线段起点纵坐标
- `x2`: 线段终点横坐标
- `y2`: 线段终点纵坐标

### 4. `<polyline>` 标签

---

> 绘制折线

```svg
<svg width="300" height="180">
    <polyline points="3, 3 30, 28 3, 53" />
</svg>
```

- `points`: 每个端点的横坐标和纵坐标

### 5. `<rect>` 标签

---

> 绘制矩形

```svg
<svg width="300" height="180">
    <rect x="0" y="0" width="200" height="100" />
</svg>
```

- `x`: 矩形左上角横坐标
- `y`: 矩形左上角纵坐标
- `width`: 矩形宽度
- `height`: 矩形高度

### 6. `<ellipse>` 标签

---

> 绘制椭圆

```svg
<svg width="300" height="180">
    <ellipse cx="60" cy="60" rx="20" ry="40" />
</svg>
```

- `cx`: 椭圆中心的横坐标
- `cy`: 椭圆中心的纵坐标
- `rx`: 椭圆横向轴的半径
- `ry`: 椭圆纵向轴的半径

### 7. `<polygon>` 标签

---

> 绘制多边形

```svg
<svg width="300" height="180">
    <polygon points="0, 0 100, 0 100, 100 0, 100 0, 0" />
</svg>
```

- `points`: 每个端点的横坐标和纵坐标

### 8. `<path>` 标签

---

> 绘制路径

```svg
<svg width="300" height="180">
    <path d="
    M 18, 3
    L 46, 3
    L 46, 40
    Z
" />
</svg>
```

- `d`: 绘制顺序，值为一个长字符串，每个字母表示一个绘制动作，后面跟着横纵坐标
- `M`: 移动到
- `L`: 画直线到
- `Z`: 闭合路径

### 9. `<text>` 标签

---

> 绘制文本

```svg
<svg width="300" height="180">
    <text x="50" y="25">Hello World</text>
</svg>
```

- `x`: 文本区块基线的横坐标
- `y`: 文本区块基线的纵坐标

### 10. `<use>` 标签

---

> 复制一个节点

```svg
<svg width="300" height="180">
    <circle id="myCircle" cx="30" cy="50" r="25" />
    <use href="myCircle" x="10" y="10" width="100" height="100" />
</svg>
```

- `href`: 指定复制的节点
- `x`: `<use>` 左上角的横坐标
- `y`: `<use>` 左上角的纵坐标
- `width`: `<use>` 的宽度
- `height`: `<use>` 的高度

### 11. `<g>` 标签

---

> 将多个节点组成一个组, 方便复制

```svg
<svg width="300" height="180">
    <g>
        <circle cx="30" cy="50" r="25" />
        <text x="50" y="25">Hello World</text>
    </g>
</svg>
```

### 12. `<defs>` 标签

---

> 自定义形状，内部代码不会显示，仅供引用

```svg
<svg width="300" height="180">
    <defs>
        <g id="myCircle">
            <circle cx="30" cy="50" r="25" />
            <text x="50" y="25">Hello World</text>
        </g>
    </defs>
    <use href="myCircle" x="0" y="0" />
</svg>
```

### 13. `<animate>` 标签

---

> 产生动画效果, 需要变形使用 `<animateTransform>` 标签

```svg
<svg width="300" height="180">
    <rect x="0" y="0" width="100" height="100" >
        <animate attributeName="x" from="0" to="500" dur="2s" repeatCount="indefinite" />
    </rect>
</svg>
```

- `attributeName`: 产生动画的属性名
- `from`: 单次动画的初始值
- `to`: 单次动画的结束值
- `dur`: 单词动画的持续时间
- `repeatCount`: 动画的循环模式

### 14. 颜色

---

- `fill`: 填充色
- `stroke`: 描边色
- `stroke-width`: 边框宽度
- `style`: 样式
