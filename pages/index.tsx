import React from 'react'
import { Button } from 'antd'
import Image from 'next/image'
import styles from './index.less'

const Home: React.FC = () => {
  return (
    <div>
      <h1 className={styles.home}>Hello Next.js</h1>
      <Button type='primary'>按钮</Button>
      <Image src='/icons/heart.png' width='50' height='50'/>
    </div>
  )
}

export default Home
