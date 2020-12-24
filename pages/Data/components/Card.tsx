import React from 'react'
import styles from '../index.less'
import { CardProps } from 'pages/data'

const Card: React.FC<CardProps> = props => {
  const { name, background, onClick } = props

  return <div className={styles.card} onClick={onClick}>
    <div className={styles.background} style={{backgroundImage: `url(${background})`}} />
    <div className={styles.context}>{name}</div>
  </div>
}

export default Card
