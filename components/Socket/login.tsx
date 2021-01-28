import React from 'react'
import { Input, Button } from 'antd'
import styles from './index.less'

const Login: React.FC = () => {

  return <div className={styles.login}>
    <div className={styles.container}>
      <h3>互聊</h3>
      <Input placeholder='请输入昵称' />
      <Button type='primary'>进入</Button>
    </div>
  </div>
}

export default Login
