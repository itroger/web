import React from 'react'
import styles from '../index.less'
import { CodeListProps } from 'pages/data'

const CodeList: React.FC<CodeListProps> = props => {
  const { id, name, category = [], level, style, className, title, onClick } = props

  return <div className={`${styles.codeList} ${className}`} style={style} onClick={onClick}>
    <p>{id}</p>
    <p>{name}</p>
    <p>{title ? category[0] : category.map(item => <span key={item} className={styles.category}>{item}</span>)}</p>
    <p>{level}</p>
  </div>
}

export default CodeList
