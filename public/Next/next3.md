---
主题: Next
---

## Next 项目之 Less

### 1. 安装 `@zeit/next-less`

---

```shell
npm install @zeit/next-less
npm install -D less
```

### 2. 不使用 CSS modules

---

- 创建 `next.config.js`，并添加如下内容

```javascript
// next.config.js
const withLess = require('@zeit/next-less')

module.exports = withLess({})
```

- 创建 `pages/index.less`

```less
// pages/index.less
.home {
  color: tomato;
}
```

- 创建 `types.d.ts`，并声明 `less` 类型

```typescript
declare module '*.less'
```

- 引入 `pages/index.less`

```tsx
// pages/index.tsx
import React from 'react'
import './index.less'

const Home: React.FC = () => {
  return <div className='home'>Hello TypeScript</div>
}

export default Home
```

- 运行项目

```shell
npm run dev
```

### 3. 使用 CSS modules

---

- 创建 `next.config.js`，并添加如下内容

```javascript
// next.config.js
const withLess = require('@zeit/next-less')

module.exports = withLess({
  cssModules: true
})
```

- 创建 `pages/index.less`

```less
// pages/index.less
.home {
  color: tomato;
}
```

- 创建 `types.d.ts`，并声明 `less` 类型

```typescript
declare module '*.less'
```

- 引入 `pages/index.less`

```tsx
// pages/index.tsx
import React from 'react'
import styles from './index.less'

const Home: React.FC = () => {
  return <div className={styles.home}>Hello TypeScript</div>
}

export default Home
```

- 运行项目

```shell
npm run dev
```

