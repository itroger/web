import React, { useState } from 'react'
import styles from './index.less'
import Login from './login'
import {SocketType} from 'components/socket'
import Chat from './chat'


const Socket: React.FC<SocketType> = () => {
  const [nikeName, setNikeName] = useState<string>()
  const [visible, setVisible] = useState<boolean>(false)

  return <div className={styles.socket}>
    <Login
      visible={!visible}
      setVisible={value => setVisible(value)}
      setNickName={value => setNikeName(value)}
    />
    <Chat visible={visible} nickName={nikeName} />
  </div>
}

export default Socket
