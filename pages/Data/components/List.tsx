import React from 'react'
import styles from '../index.less'
import { ListProps } from 'pages/data'

const List: React.FC<ListProps> = props => {
  const { id, name, category = [], level, style, className, title } = props

  return <div className={`${styles.list} ${className}`} style={style}>
    <p>{id}</p>
    <p>{name}</p>
    <p>{title ? category[0] : category.map(item => <span key={item} className={styles.category}>{item}</span>)}</p>
    <p>{level}</p>
  </div>
}

export default List
