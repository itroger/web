### 新建 Next 项目
#### 1. 初始化项目 `npm init`
#### 2. 安装 Next `npm install next react react-dom`
#### 3. 安装 TypeScript `npm install --save-dev typescript @types/react @types/node`
#### 4. 安装 Less `npm install --save @zeit/next-less @zeit/next-css less less-loader less-vars-to-js`
#### 5. 安装 AntD `npm install antd`
#### 6. 安装 MDX `npm install @next/mdx @mdx-js/loader babel-loader`

---

### 项目结构
```shell
.next/            // 打包输出文件
assets/           // 脚本样式静态文件
build/            // 打包输出文件
components/       // 组件
node_modules/     // 依赖包
out/              // 打包输出静态部署文件
pages/            // 页面
public/           // 图片资源静态文件
types/            // 全局类型文件
.babelrc          // babel 配置文件
.gitignore        // git 忽略文件
couldbaserc.json  // 腾讯云开发配置文件
next.config.js    // next 配置文件
next-env.d.ts     // next 类型文件
package.json      // 项目配置文件
package-lock.json // 项目配置文件
README.md         // 项目说明文档
tsconfig.json     // TypeScript 配置文件
```

---

### 使用的依赖包
- @zeit/next-less: CSS 处理器
- antd : React UI 框架
- node-vibrant : 取图片底色
- @next/mdx: 组件化 Markdown

---

### 使用的技术要点
### 1. React
- useState : 状态
- useEffect : 生命周期
- useRef : DOM 引用
- useReducer: 状态组合
- useContext: 共享状态

---

### 2. TypeScript
- interface : 接口
- type : 类型

---

### 3. JavaScript
- IntersectionObserver : 可视区域

---

### 4. CSS
- flex: 一维布局
- grid: 二维布局

---

### 5. 配置
- next.config.js: next && webpack 配置
- .babelrc: babel 配置
- tsconfig.json: typescript 配置
- cloudbaserc.json: 腾讯云开发配置
- .gitignore: Git 忽略文件
