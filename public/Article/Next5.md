## Next 项目之 MDX

### 1. 把 `md/mdx` 作为页面使用

---

- 安装 `@mdx-js/loader` 和 `babel-loader`

```shell
npm install -D @mdx-js/loader babel-loader
```

- 在 `next.config.js` 添加如下内容

```javascript
// next.config.js
module.exports = (nextConfig = {}) => {
    // 把 md/mdx 作为页面
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
    return Object.assign({}, nextConfig, {
        webpack: (config, options) => {
            
            // mdx loader 解析
            config.module.rules.push({
                test: /\.mdx?$/,
                use: ['babel-loader', '@mdx-js/loader']
            })
            
            return config
        }
    })
}
```

-  创建 `.babelrc`，并添加如下内容

```json
{
  "presets": ["next/babel"]
}
```

- 创建 `pages/readme.mdx`

```markdown
// pages/readme.mdx
> ## Hello Markdown
```

- 运行项目

```shell
npm run dev
```

- 打开对应路由地址

```shell
localhost:3000/readme
```

### 2. 把 `md/mdx` 作为组件使用

---

- 安装 `@mdx-js/react`、`@mdx-js/loader`、`babel-loader` 和 `react-syntax-highlignter`

```shell
npm install @mdx-js/react react-syntax-highlighter
npm install -D @mdx-js/loader babel-loader @types/react-syntax-highlighter
```

- 在 `next.config.js` 添加如下内容

```javascript
// next.config.js
module.exports = (nextConfig = {}) => {
	return Object.assign({}, nextConfig, {
        webpack: (config, options) => {
            
            // mdx loader 解析
            config.module.rules.push({
                test: /\.mdx?$/,
                use: ['babel-loader', '@mdx-js/loader']
            })
            
            return config
        }
    })
}
```

- 创建 `.babelrc`，并添加如下内容

```json
{
  "presets": ["next/babel"]
}
```

- 在 `types.d.ts` 添加如下内容

```typescript
declare module '*.md'
declare module '*.mdx'
```

- 创建 `components` 文件，并创建 `mdx.tsx` 作为 `mdx` 组件模版

```tsx
// components/mdx.tsx
import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github as theme } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import styles from './mdx.less'

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

- 创建 `components/mdx.less` 作为 `mdx` 组件样式

```less
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
    font-family: 'Fira Code', 'Roboto Mono', monospace;
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

- 在 `pages/index.tsx` 添加如下内容

```tsx
// pages/index.tsx
import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import components from '../components/MDX'
import Readme from './readme.mdx'

const Home: React.FC = () => {
  return <div>
      <MDXProvider components={components}>
          <Readme />
      </MDXProvider>
  </div>
}

export default Home
```

- 运行项目

```shell
npm run dev
```



