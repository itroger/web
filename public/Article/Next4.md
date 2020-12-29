## Next 项目之 Ant Design

### 1. 安装 Ant Design

---

```shell
npm install antd
npm install -D @zeit/next-less less@3.13.1        // less@4.x 和 antd 有冲突
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
    <h1>Hello Ant Design</h1>
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

---

- 安装 `@zeit/next-css` 和 `less-loader`

```shell
npm install -D @zeit/next-css less-loader
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
import styles from './index.less'

const Home: React.FC = () => {
  return <div className={styles.home}>
    <h1>Hello Ant Design</h1>
    <Button>按钮</Button>
  </div>
}

export default Home
```

- 运行项目

```shell
npm run dev
```

### 4. Ant Design 主题定制

---

- 安装 `less-vars-to-js`

```shell
npm install -D less-vars-to-js
```

- 在 `next.config.js` 添加如下内容

```javascript
// next.config.js
const cssLoaderConfig = require('@zeit/next-css/css-loader-config')
const lessToJS = require('less-vars-to-js')

const fs = require('fs')
const path = require('path')
const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8'))

module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
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
                javascriptEnabled: true,
                modifyVars: themeVariables
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
                javascriptEnabled: true,
                modifyVars: themeVariables
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

- 创建 `assets` 文件夹，并创建 `antd-custom.less` 添加如下内容

```less
// assets/ant-custom.less
@import "~antd/dist/antd";
@primary-color: #42b983;  // 全局主色
```

- 运行项目

```shell
npm run dev
```
