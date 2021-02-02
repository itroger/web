### Next 前端架构
#### 1. 初始化项目 `npm init`
#### 2. 安装 Next `npm install next react react-dom`
#### 3. 安装 TypeScript `npm install -D typescript @types/react @types/node`
#### 4. 安装 Less `npm install -D @zeit/next-less @zeit/next-css less less-loader less-vars-to-js`
#### 5. 安装 AntD `npm install antd`
#### 6. 安装 MDX `npm install -D @mdx-js/react @mdx-js/loader babel-loader next-mdx-remote react-syntax-highlighter`
#### 7. 安装 node-vibrant `npm install -D node-vibrant worker-loader`
#### 8. 安装 cos-nodejs-sdk-v5 `npm install cos-nodejs-sdk-v5`
#### 9. 安装 socket.io-client `npm install socket.io-client`

---

### Koa 服务端架构
#### 1. 安装 Koa `npm install koa koa-router`, `npm install -D @types/koa @types/koa-router`
#### 2. 安装运行工具 `npm install cross-env`, `npm install -D nodemon ts-node`, `npm install -g pm2`
#### 3. 安装 socket.io `npm install socket.io`

---

### 项目结构
```shell
.next/                // 打包输出文件
assets/               // ant design 全局样式设置文件
components/           // react UI 组件
node_modules/         // 依赖包
out/                  // 打包输出静态部署文件
pages/                // next 页面路由文件
public/               // 静态资源文件
server/               // 服务端代码
store/                // 全局状态
types/                // 全局类型文件
utils/                // 工具类文件
.babelrc              // babel 配置文件
.gitignore            // git 忽略文件
couldbaserc.json      // 腾讯云开发配置文件
next.config.js        // next 配置文件
next-env.d.ts         // next 类型文件
nodemon.json          // nodemon 配置文件
package.json          // 项目配置文件
package-lock.json     // 项目配置文件
README.md             // 项目说明文档
tsconfig.json         // TypeScript 配置文件
tsconfig.server.json  // server 文件夹 TypeScript 配置文件
```

---

### 使用的技术要点
#### 1. JavaScript
- IntersectionObserver : 可视区域
- localStorage : 本地缓存

---

#### 2. React
- useState : 状态
- useEffect : 生命周期
- useRef : DOM 引用
- useReducer : 状态组合
- useContext : 共享状态

---

#### 3. TypeScript
- interface : 接口
- type : 类型

---

#### 4. Next
- next/app : 定制 app
- next/head : 定制 head 标签 
- next/link : 组件路由跳转
- next/router : 路由跳转
- GetStaticProps : 服务端静态渲染
- GetServerSideProps : 服务端动态渲染

---

#### 5. CSS
- flex : 一维布局
- grid : 二维布局
