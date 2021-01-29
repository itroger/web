import next from 'next'
import Koa from 'koa'
import Router from 'koa-router'
import http from 'http'
import { Server } from 'socket.io'

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()
const app = new Koa()
const httpServer = http.createServer(app.callback())
const io = new Server(httpServer)
const router = new Router()

nextApp.prepare().then(() => {

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

  app.use(router.routes())

  app.use(async ctx => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  httpServer.listen(3000, () => console.log('Server is listing on http://localhost:3000'))

  io.on('connection', socket => {
    console.log('服务器连接成功', socket.id)

    socket.join('KPL')

    socket.on('newMessage', message => {
      socket.emit('newMessage', message)
    })

    socket.on('addUser', username => {
      console.log('用户登录', username)
      socket.username = username
      socket.emit('login', `${username} 登录`)
    })

    socket.on('disconnect', () => {})
  })

})


