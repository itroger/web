import React from 'react'
import styles from './index.less'
import {GetStaticProps} from 'next'
import Socket from '../../components/Socket'
import Time from '../../components/Socket/time'

export const getStaticProps: GetStaticProps = async () => ({ props: { page: 'im', shortHeader: true } })

const Life: React.FC = () => {

  return <div className={styles.im}>
    <div className={styles.iPhone}>
      <div className={styles.content}>
        <Time className={styles.time} />
        <div className={styles.statusBars} />
        <Socket className={styles.socket} />
      </div>
    </div>
  </div>
}

export default Life
