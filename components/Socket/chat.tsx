import React, { useEffect, useState } from 'react'
import {Button, Input} from 'antd'
import io from 'socket.io-client'
import styles from './index.less'
import { ChatProps } from 'components/socket'

const socket = io()

const Chat: React.FC<ChatProps> = props => {
  const [message, setMessage] = useState<string>()
  const [context, setContext] = useState<string[]>([])
  const { visible, nickName } = props

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
    console.log(nickName)
    socket.emit('addUser', nickName)
  }, [nickName])

  useEffect(() => {
    socket.on('new message', message => {
      setContext([...context, message])
      console.log([...context, message])
    })

    return () => {
      socket.off('new message')
    }
  })


  const send = () => {
    socket.emit('new message', message)
  }

  return <div className={`${styles.chat} ${!visible?styles.hidden:null}`}>
    <div>{nickName}</div>
    <div className={styles.context}>
      {context.map(item => <p key={+new Date() + Math.random()}>{item}</p>)}
    </div>
    <div className={styles.send}>
      <Input
        onChange={e => setMessage(e.target.value)}
      />
      <Button type='primary' onClick={send}>发送</Button>
    </div>
  </div>
}

export default Chat
