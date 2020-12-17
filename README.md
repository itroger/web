### 新建 Next 项目
#### 1. 初始化项目 `npm init`
#### 2. 安装 Next `npm install next react react-dom`
#### 3. 安装 TypeScript `npm install --save-dev typescript @types/react @types/node`
#### 4. 安装 Less `npm install --save @zeit/next-less @zeit/next-css less less-loader less-vars-to-js`
#### 5. 安装 AntD `npm install antd`

### 项目结构
```shell
.next/            // 打包文件
assets/           // 需要打包的静态文件
components/       // 组件
node_modules/     // 依赖包
pages/            // 页面
public/           // 图片资源
.gitignore        // git 忽略文件
next.config.js    // next 配置文件
next-env.d.ts     // next 类型文件
package.json      // 项目配置文件
package-lock.json // 项目配置文件
README.md         // 项目说明文档
tsconfig.json     // TypeScript 配置文件
typing.d.ts       // 全局类型文件
```

