import React from 'react'
import { io } from 'socket.io-client'

const socket = io('https://itroger.cn')

const Socket: React.FC = () => {
  socket.on('login', data => {
    console.log(data)
  })

  socket.on('add user', data => {
    console.log(data)
  })

  socket.on('new message', data => {
    console.log(data)
  })

  socket.emit('new message', 'Hello Socket')

  return <div>Socket</div>
}

export default Socket
