import React from 'react'
import styles from './index.less'

interface Props {
  name: string,
  background: string
}

const Card: React.FC<Props> = props => {
  const { name, background } = props

  return <div className={styles.card}>
    <div className={styles.background} style={{backgroundImage: `url(${background})`}} />
    <div className={styles.context}>{name}</div>
  </div>
}

export default Card
