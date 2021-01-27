import next from 'next'
import Koa from 'koa'
import Router from 'koa-router'
import { Server } from 'socket.io'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const server = new Koa()
const router = new Router()
const io = new Server()

app.prepare().then(() => {

  router.get('/', async ctx => {
    await handle(ctx.req, ctx.res, {
      auth: undefined,
      hash: undefined,
      host: undefined,
      hostname: undefined,
      href: '',
      path: undefined,
      pathname: '/index',
      port: undefined,
      protocol: undefined,
      query: undefined,
      search: undefined,
      slashes: undefined
    })
    ctx.respond = false
  })

  server.use(router.routes())

  server.use(async ctx => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.listen(3000, () => console.log('Server is listing on http://localhost:3000'))

  io.on('connect', client => {
    console.log('服务器连接客户端', client)

    client.join('KPL')
    client.on('talk', message => {
      client.to('KPL').emit('talk', message)
    })

    client.on('disconnect', () => {
      console.log('断开连接客户端')
    })
  })

})


