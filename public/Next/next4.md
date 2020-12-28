---
主题: Next
---

## Next 项目之 Ant Design

### 1. 安装 Ant Design

---

```shell
npm install antd @zeit/next-less
npm install -D less@3.13.1        // less@4.x 和 antd 有冲突
```

### 2. 不使用 CSS modules

---

- 在 `next.config.js` 添加如下内容

```javascript
// next.config.js
const withLess = require('@zeit/next-less')

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true
  }
})
```

- 创建 `pages/_app.tsx` 全局引入 `antd.less`

```tsx
// pages/_app.tsx
import { AppProps } from 'next/app'
import 'antd/dist/antd.less'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
```

- 使用 Ant Design

```tsx
// pages/index.tsx
import React from 'react'
import { Button } from 'antd'
import './index.less'

const Home: React.FC = () => {
  return <div className='home'>
    <h1>Hello TypeScript</h1>
    <Button>按钮</Button>
  </div>
}

export default Home
```

- 运行项目

```shell
npm run dev
```

### 3. 使用 CSS modules

- 安装 `@zeit/next-css` 和 `less-loader`

```shell
npm install @zeit/next-css
npm install -D less-loader
```

- 在 `next.config.js` 添加如下内容

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



