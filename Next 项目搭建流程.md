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

>`npm install @mdx-js/react react-syntax-highlighter`
>
>`npm install -D babel-loader @mdx-js/loader @types/react-syntax-highlighter`

1. 设置 next 配置

```javascript
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

