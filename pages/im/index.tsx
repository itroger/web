import React from 'react'
import styles from './index.less'
import {GetStaticProps} from 'next'

export const getStaticProps: GetStaticProps = async () => ({ props: { page: 'im' }})

const Life: React.FC = () => {

  return <div className={styles.im}>
    <div className={styles.iPhone}>
      <div className={styles.content}>

      </div>
    </div>
  </div>
}

export default Life
