import React from 'react'
import { Button } from 'antd'
import styles from './index.less'

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <h1>Hello Next.js</h1>
      <Button>按钮</Button>
    </div>
  )
}

export default Home
