import React from 'react'
import styles from '../../pages/data/index.less'
import { DocumentListProps } from 'components/page'

const DocumentList: React.FC<DocumentListProps> = props => {
  const { serial, name, tag, level, style, className, title, onClick } = props

  return <div className={`${styles.documentList} ${className}`} style={style} onClick={onClick}>
    <p>{serial}</p>
    <p>{name}</p>
    <p>{title ? tag : tag.split(',').map(item => <span key={item} className={styles.tag}>{item}</span>)}</p>
    <p>{level}</p>
  </div>
}

export default DocumentList
