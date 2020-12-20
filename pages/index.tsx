import React from 'react'
import { GetStaticProps } from 'next'
import styles from './index.less'

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    home: true
  }
})

const Home: React.FC = () => {
  return (
    <div>
      <h1 className={styles.home}>Hello Next.js</h1>
    </div>
  )
}

export default Home
