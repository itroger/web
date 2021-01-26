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

  router.get('/data/menu:attribute', async ctx => {
    const { attribute } = ctx.params
    console.log('attribute', ctx.params)
    ctx.body = attribute
    // await handle(ctx.req, ctx.res, {
    //   auth: undefined,
    //   hash: undefined,
    //   host: undefined,
    //   hostname: undefined,
    //   href: '',
    //   path: undefined,
    //   pathname: '/data/menu',
    //   port: undefined,
    //   protocol: undefined,
    //   query: { attribute },
    //   search: undefined,
    //   slashes: undefined
    // })
    // ctx.respond = false
  })

  server.use(router.routes())

  server.use(async ctx => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.listen(3000, () => console.log('Server is listing on http://localhost:3000'))


// io.on('connection', socket => {
//   socket.on('new message', data => {
//     console.log('server: ' + data)
//     io.emit('new message', data)
//   })
//
//   socket.on('disconnect', () => {
//     console.log('user disconnected')
//   })
// })
})


