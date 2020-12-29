## Next 项目之 TypeScript

### 1. 安装 TypeScript

---

```shell
npm install -D typescript @types/react @types/node
```

### 2. 修改 `pages/index.jsx` 为 `pages/index.tsx`

---

```tsx
// pages/index.tsx
import React from 'react'

const Home: React.FC = () => {
  return <div>Hello TypeScript</div>
}

export default Home
```

### 3. 运行项目

---

>运行项目将自动创建 `tsconfig.json`

```sh
npm run dev
```
