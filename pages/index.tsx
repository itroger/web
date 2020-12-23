import React from 'react'
import {Button} from 'antd'
import styles from './index.less'

const Home: React.FC = () => {
  return <div>
    <h1 className={styles.home}>Hello Next.js</h1>
    <Button type='primary'>按钮</Button>
  </div>
}

export default Home
