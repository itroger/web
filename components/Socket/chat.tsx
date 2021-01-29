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

  // useEffect(() => {
  //   socket.on('newMessage', message => {
  //     setContext([...context, message])
  //   })
  //
  //   return () => {
  //     socket.off('newMessage')
  //   }
  // })



  const send = async () => {
    await setContext([...context, message])
    await socket.emit('new message', message)
    await setMessage(undefined)
  }

  return <div className={`${styles.chat} ${!visible?styles.hidden:null}`}>
    <div className={styles.recipient}>{nickName}</div>
    <div className={styles.context}>
      {context.map(item => <span className={styles.message} key={+new Date() + Math.random()}>{item}</span>)}
    </div>
    <div className={styles.send}>
      <Input
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <Button type='primary' disabled={!message} onClick={send}>发送</Button>
    </div>
  </div>
}

export default Chat
