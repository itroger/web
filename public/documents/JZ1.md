## 二维数组中的查找

### 题目描述

在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

#### 示例1

输入

> 7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]

返回值

> true

---

### TypeScript 实现

```typescript
const find = (target: number, array: [number[]]) => {
  let result: boolean = false
  array.forEach(item => {
    if (item.includes(target)) {
      result = true
    }
  })

  return result
}
```
