import React from 'react'
import io from 'socket.io-client'

const socket = io('https://itroger.cn')

const Socket: React.FC = () => {
  socket.on('connect', () => {
    console.log('客户端连接服务器')
  })
  socket.on('talk', message => {
    console.log('客户端接收信息', message)
  })
  socket.emit('talk', '客户端发送信息')
  socket.on('disconnect', () => {
    console.log('客户端断开连接')
  })

  return <div>Socket</div>
}

export default Socket
