import React from 'react'
import { GetStaticProps } from 'next'
import styles from './index.less'

export const getStaticProps: GetStaticProps = async () => ({ props: { page: 'concept', shortHeader: true } })

const Context: React.FC = () => {
  return <div className={styles.context}>
    neir
  </div>
}

export default Context
