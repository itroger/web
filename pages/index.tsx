import React from 'react'
import { GetStaticProps } from 'next'
import {Button} from 'antd'
import styles from './index.less'

export const getStaticProps: GetStaticProps = async () => ({ props: { page: 'home' }})

const Home: React.FC = () => {
  return <div className={styles.home}>
    <h1>Hello Next.js</h1>
    <Button type='primary'>新的开始</Button>
  </div>
}

export default Home
