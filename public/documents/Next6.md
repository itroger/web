## Next 项目之 Koa

### 1. 安装 `Koa` 和 `koa-router`

---

```shell
npm install koa koa-router
npm install -D @types/koa @types/koa-router
```

### 2. 创建 `server/app.ts` 文件

---

```typescript
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

### 3. 创建 `tsconfig.server.json` 配置文件

---

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "module": "commonjs",
    "outDir": "server",
    "target": "esnext",
    "isolatedModules": false,
    "noEmit": false
  },
  "include": ["server/**/*.ts"]
}
```

### 4. 项目开发/打包/运行/静态发布

---

- 安装 `nodemon`、`ts-node`、`cross-env` 和 `pm2`

```shell
npm install cross-env
npm install -D nodemon ts-node
npm install -g pm2
```

- 创建 `nodemon.json` 配置文件

```json
{
  "watch": ["server"],
  "exec": "tsc --project tsconfig.server.json && node server/app.js",
  "ext": "ts"
}
```

- 修改 `package.json` 配置文件

```json
{
  "scripts": {
    "dev": "nodemon",
    "build": "next build  && tsc --project tsconfig.server.json",
    "start": "cross-env NODE_ENV=production node server/app.js",
    "export": "next build && next export",
    "pm2:start": "cross-env NODE_ENV=production pm2 start server/app.js",
    "pm2:delete": "pm2 delete all"
  }
}
```
