import React from 'react'
import styles from '../../pages/data/index.less'
import { CodeListProps } from 'components/page'

const CodeList: React.FC<CodeListProps> = props => {
  const { component, name, category, level, style, className, title, onClick } = props

  return <div className={`${styles.codeList} ${className}`} style={style} onClick={onClick}>
    <p>{component}</p>
    <p>{name}</p>
    <p>{title ? category : category.split(',').map(item => <span key={item} className={styles.category}>{item}</span>)}</p>
    <p>{level}</p>
  </div>
}

export default CodeList
