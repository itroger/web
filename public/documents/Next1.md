## Next 项目之 手动创建

### 1. 项目初始化

---

```shell
npm init
```

### 2. 安装 `next`、`react` 和 `react-dom`

---

```shell
npm install next react react-dom
```

### 3. 在 `package.json` 添加以下内容

---

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

### 4. 创建 `pages` 文件夹，并创建 `index.jsx` 入口文件

---

```jsx
// pages/index.jsx
const Home = () => {
  return <div>Hello Next.JS</div>
}

export default Home
```

### 5. 运行项目

---

```shell
npm run dev
```
