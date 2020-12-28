import Koa from 'koa'
import next from 'next'

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new Koa()
  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.listen(3000, () => console.log('Server is listing on http://localhost:3000'))
})


