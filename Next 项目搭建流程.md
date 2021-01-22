## Next 项目搭建流程

### 一、初始化项目

>`npm init`

### 二、安装 React 和 Next

>`npm install react react-dom next`

1. 设置项目运行脚本

```json
{
    "scripts": {
        "dev": "next",
        "build": "next build",
        "start": "next start"
    }
}
```

2. 项目页面

```jsx
// pages/index.jsx
const Home = () => {
    return <div>Hello Next.JS</div>
}
```

3. 运行项目

```shell
npm run dev
```

### 三、安装 TypeScript

>`npm install -D typescript @types/react @types/node`

1. jsx -> tsx

```tsx
// pages/index.tsx
import React from 'react'

const Home: React.FC = () => {
    return <div>Hello Next.JS</div>
}
```

2. 运行项目

```shell
npm run dev			// next 自动创建 tsconfig.json
```

### 四、安装 Less

>`npm install @zeit-less`
>
>`npm install -D less`

1. 设置 next 配置

- Without CSS modules

```javascript
// next.config.js
const withLess = require('@zeit/next-less')
module.exports = withLess({})
```

- With CSS modules

```js
// next.config.js
const withLess = require('@zeit/next-less')
module.exports = withLess({
    cssModules: true
})
```

2. 声明类型

```typescript
// types.d.ts
declare module '*.less'
```

3. 创建 less 文件

```less
// pages/index.less
.home {
    color: red
}
```

4. 引入 less 文件

- Without CSS modules

```tsx
import React from 'react'
import './index.less'

const Home: React.FC = () => {
    return <div className='home'>Hello Next.JS</div>
}
```

- With CSS modules

```tsx
// pages/index.tsx
import React from 'react'
import styles from './index.less'

const Home: React.FC = () => {
    return <div className={styles.home}>Hello Next.JS</div>
}
```

### 五、安装 Ant Design

>`npm install antd @zeit/next-less @zeit/next-css` // @zeit/next-less 是必须的
>
>`npm install -D less@3.13.1 less-loader`  // less@4.x 和 antd 有冲突

1. 设置 next 配置

- Without CSS modules

```javascript
// next.config.js
const withLess = require('@zeit/next-less')
module.exports = withLess({
    lessLoaderOptions: {
        lessOptions: {
            javascriptEnabled: true
        }
    }
})
```

- With CSS modules

```javascript
// next.config.js
const cssLoaderConfig = require('@zeit/next-css/css-loader-config')

module.exports = (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
        webpack: (config, options) => {
            const {dev, isServer} = options
            const { lessLoaderOptions = {} } = nextConfig

            // 本地 less 设置
            config.module.rules.push({
                test: /\.less$/,
                exclude: /node_modules/,
                use: cssLoaderConfig(config, {
                    extensions: ['less'],
                    cssModules: true,
                    cssLoaderOptions: {
                        importLoader: 1,
                        localIdentName: '[local]__[hash:base64:5]'
                    },
                    dev,
                    isServer,
                    loaders: [{
                        loader: 'less-loader',
                        options: {
                            ...lessLoaderOptions,
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }]
                })
            })

            // antd less 设置
            config.module.rules.push({
                test: /\.less$/,
                include: /node_modules/,
                use: cssLoaderConfig(config, {
                    extensions: ['less'],
                    cssModules: false,
                    cssLoaderOptions: {},
                    dev,
                    isServer,
                    loaders: [{
                        loader: 'less-loader',
                        options: {
                            ...lessLoaderOptions,
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }]
                })
            })

            return config
        }
    })
}

```

2. 引入 antd.less

```tsx
// pages/_app.tsx
import { AppProps } from 'next/app'
import 'antd/dist/antd.less'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
```

### 六、安装 MDX

>`npm install @mdx-js/react react-syntax-highlighter next-mdx-remote`
>
>`npm install -D babel-loader @mdx-js/loader @types/react-syntax-highlighter`

1. 设置 next 配置

```javascript
// next.config.js
module.export = (nextConfig = {}) => {
    return Object.assign({}, nextCOnfig, {
        // 直接页面输出
        pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
        webpack: (config, options) => {
            config.module.rules.push({
                test: /\.mdx?$/,
                use: ['babel-loader', '@mdx-js/loader']
            })
        }
    })
}
```

2. 自定义 `mdx` 样式

- 创建 `components/MDX/index.tsx`
```tsx
// components/MDX/index.tsx
import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github as theme} from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import styles from './index.less'

const P = props => <p className={styles.p} {...props} />
const Em = props => <em className={styles.em} {...props} />
const Strong = props => <strong className={styles.strong} {...props} />
const Del = props => <del className={styles.del} {...props} />
const U = props => <u className={styles.u} {...props} />
const H1 = props => <h1 className={styles.h1} {...props} />
const H2 = props => <h2 className={styles.h2} {...props} />
const H3 = props => <h3 className={styles.h3} {...props} />
const H4 = props => <h4 className={styles.h4} {...props} />
const H5 = props => <h5 className={styles.h5} {...props} />
const H6 = props => <h6 className={styles.h6} {...props} />
const Hr = props => <hr className={styles.hr} {...props} />
const Blockquote = props => <blockquote className={styles.blockquote} {...props} />
const Ul = props => <ul className={styles.ul} {...props} />
const Ol = props => <ol className={styles.ol} {...props} />
const Table = props => <table className={styles.table} {...props} />
const Pre = props => <SyntaxHighlighter
  language={props.children.props.className.split('-')[1]}
  style={theme}
>
  {props.children.props.children}
</SyntaxHighlighter>

const components = {
  p: P,
  em: Em,
  strong: Strong,
  del: Del,
  u: U,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  hr: Hr,
  blockquote: Blockquote,
  ul: Ul,
  ol: Ol,
  table: Table,
  pre: Pre
}

export default components

```

- 创建 `coponents/MDX/index.less`
```less
// coponents/MDX/index.less
@import "/assets/antd-custom";

.p, .u, .blockquote, .ul, .ol, .dl, .table, .h1, .h2, .h3, .h4, .h5, .h6 {
  margin: .8em 0;
  color: #34495e;
  font-size: 1rem;
  font-family: 'Ubuntu', 'Source Sans Pro', sans-serif !important;
}

.p {
  line-height: 1.6rem;
  word-spacing: .05rem;

  code {
    padding: 2px 4px;
    border-radius: 2px;
    font-family: 'Fira CodeList', 'Roboto Mono', monospace;
    font-size: 0.92rem;
    color: #e96900;
    background-color: #f8f8f8;
  }

  a {
    color: @primary-color;
    font-weight: 600;
    padding: 0 2px;
    text-decoration: none;
  }
}

.em {
  padding: 0 5px 0 2px;
}

.strong {
  padding: 0 1px;
}

.del {
  padding: 1px 2px;
}

.h1, .h2, .h3, .h4, .h5, .h6 {
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
  line-height: 1.4;
  cursor: text;
}

.h1 {
  padding-bottom: .4rem;
  font-size: 2.2rem;
  line-height: 1.3;
}

.h2 {
  font-size: 1.75rem;
  line-height: 1.225;
  margin: 35px 0 15px;
  padding-bottom: 0.5em;
  border-bottom: 1px solid #ddd;
}

.h3 {
  font-size: 1.4rem;
  line-height: 1.43;
  margin: 20px 0 7px;
}

.h4 {
  font-size: 1.2rem;
}

.h5 {
  font-size: 1rem;
}

.h6 {
  font-size: 1rem;
  color: #777;
}

.blockquote {
  border-left: 4px solid @primary-color;
  padding: 10px 15px;
  color: #777;
  background-color: rgba(66, 185, 131, .1);

  p {
    margin: 0;
    color: inherit;
  }
}

.ul, .ol {
  padding-left: 30px;
}

.ol {
  li {
    padding-left: 0.5rem;
  }
}

.table {
  margin: 1.2em 0;
  padding: 0;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  overflow: auto;
  break-inside: auto;

  thead {
    background-color: #fafafa;
  }

  tr {
    border-top: 1px solid #dfe2e5;
    margin: 0;
    padding: 0;

    &:nth-child(2n) {
      background-color: #fafafa;
    }

    th {
      font-weight: bold;
      border: 1px solid #dfe2e5;
      border-bottom: 0;
      margin: 0;
      padding: 6px 13px;
      background-color: #f2f2f2;
      text-align: center;
    }

    td {
      border: 1px solid #dfe2e5;
      margin: 0;
      padding: 6px 13px;
    }
  }
}

.hr {
  height: 2px;
  padding: 0;
  margin: 16px 0;
  background-color: #e7e7e7;
  border: 0 none;
  overflow: hidden;
  box-sizing: content-box;
}


```

3. 引入方式

- 作为页面渲染，在`pages`目录下创建`index.mdx`文件
```markdown
// pages/index.mdx
# mdx/md 文件
```

- 作为组件渲染，`mdx` 文件来源于本地

```tsx
// pages/index.tsx
import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import components from '../../components/MDX'
import MDX from './index.mdx'

const Home: React.FC = () => {
  return <div>
    <MDXProvider components={components} >
      <MDX />
    </MDXProvider>
  </div>
}
```

- 作为组件渲染，`mdx` 文件来源于数据库

```tsx
// pages/index.tsx
import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import components from '../../components/MDX'
import { GetServerSideProps } from 'next'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: { source: await renderToString('') } }
}

const Home: React.FC = props => {
  const { source } = props 
  return <div>
    <MDXProvider components={components} >
      {hydrate(source)}
    </MDXProvider>
  </div>
}
```

### 七、安装 Koa

> `npm install koa`
>
> `npm install -D @types/koa`

1. 创建 `server/app.ts` 文件
```ts
// server/app.ts
import Koa from 'koa'
import next from 'next'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new Koa()
  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.listen(3000, () => console.log('Server is listing on http://localhost:3000'))
})

```

2. 创建 `server/package.json`，因为 `server/app.ts` 文件使用 `import` 方式引入依赖包
```json
{
  "type": "module"
}

```

3. 项目开发/打包/运行/静态发布

- 安装 `nodemon`

> `npm install -D nodemon ts-node cross-env`

- 创建 `nodemon.json` 配置文件

```json
{
  "watch": ["server"],
  "exec": "node --loader ts-node/esm server/app.ts",
  "ext": "ts"
}
```

- 修改 `package.json` 配置文件

```json
{
  "scripts": {
    "dev": "nodemon",
    "build": "next build && tsc --project tsconfig.json",
    "start": "cross-env NODE_ENV=production node --loader ts-node/esm server/app.ts",
    "export": "next build && next export"
  }
}
```
