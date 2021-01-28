import {Button, Input} from 'antd'
import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import styles from './index.less'
import Login from './login'
import {SocketType} from 'components/socket'

const socket = io()

const Socket: React.FC<SocketType> = () => {
  const [nikeName, setNikeName] = useState<string>()
  const [message, setMessage] = useState<string>()
  const [context, setContext] = useState<string[]>([])

  useEffect(() => {
    socket.on('connect', () => {
      console.log('连接成功', socket.id)
    })

    return () => {
      socket.on('disconnect', () => {
        console.log('断开连接', socket.id)
      })
    }
  }, [])

  useEffect(() => {
    socket.on('new message', message => {
      setContext([...context, message])
      console.log([...context, message])
    })

    return () => {
      socket.off('new message')
    }
  })


  const submit = () => {
    socket.emit('new message', message)
  }

  return <div className={styles.socket}>
    <Login />
    {/*<div className={styles.context}>*/}
    {/*  {context.map(item => <p key={+new Date() + Math.random()}>{item}</p>)}*/}
    {/*</div>*/}
    {/*<Input onChange={e => setMessage(e.target.value)} />*/}
    {/*<Button onClick={submit}>发送</Button>*/}
  </div>
}

export default Socket
