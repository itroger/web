import React, { useEffect, useState } from 'react'
import {Button, Input} from 'antd'
import io from 'socket.io-client'
import styles from './index.less'
import { ChatProps, MessageType } from 'components/socket'

const socket = io('ws://localhost:3000/', {
  'transports': ['websocket', 'polling']
})

const Chat: React.FC<ChatProps> = props => {
  const [message, setMessage] = useState<MessageType>({})
  const [context, setContext] = useState<MessageType[]>([])
  const { visible, nickName } = props

  // socket 连接和断开
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

  // socket 登录
  useEffect(() => {
    if (nickName) {
      socket.emit('login', nickName)
    }
  }, [nickName])

  // socket 接收信息
  useEffect(() => {
    socket.on('message', ({ message }) => {
      console.log('接收信息', message)
      setContext([...context, message])
    })

    return () => {
      socket.off('message')
    }
  })

  // socket 发送信息
  const send = async () => {
    await setContext([...context, message])
    await socket.emit('message', {
      sender: nickName,
      recipient: undefined,
      message: message
    })
    await setMessage(undefined)
  }

  return <div className={`${styles.chat} ${!visible?styles.hidden:null}`}>
    <div className={styles.recipient}>{nickName}</div>
    <div className={styles.context}>
      {context.map(item =>
        <div className={`${styles.message} ${item?.sender === nickName ? styles.sender : null}`} key={+new Date() + Math.random()}>
          <span className={styles.before} style={{display: item?.sender === nickName ? 'none': 'inline-block'}} />
          <span className={styles.msg}>{item.message}</span>
          <span className={styles.after} style={{display: item?.sender === nickName ? 'inline-block' : 'none'}} />
        </div>)}
    </div>
    <div className={styles.send}>
      <Input
        value={message?.message}
        onChange={e => setMessage({ sender: nickName, recipient: undefined, message: e.target.value })}
        onPressEnter={send}
      />
      <Button type='primary' disabled={!message?.message} onClick={send}>发送</Button>
    </div>
  </div>
}

export default Chat
