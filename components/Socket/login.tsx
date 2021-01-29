import React, { useState } from 'react'
import { Input, Button } from 'antd'
import styles from './index.less'
import { LoginProps } from 'components/socket'

const Login: React.FC<LoginProps> = props => {
  const [name, setName] = useState<string>()
  const { visible, setVisible, setNickName } = props

  const enter = () => {
    setVisible(true)
    setNickName(name)
  }

  return <div className={`${styles.login} ${!visible?styles.hidden:null}`}>
    <div className={styles.container}>
      <h3>互聊</h3>
      <Input
        placeholder='请输入昵称'
        onChange={e => setName(e.target.value)}
        onPressEnter={enter}
      />
      <Button
        type='primary'
        disabled={!name}
        onClick={enter}
      >进入</Button>
    </div>
  </div>
}

export default Login
