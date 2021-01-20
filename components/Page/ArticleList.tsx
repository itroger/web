import React from 'react'
import styles from '../../pages/Data/index.less'
import { ArticleListProps } from 'components/page'

const ArticleList: React.FC<ArticleListProps> = props => {
  const { name, category = [], time, style, className, title, onClick } = props

  return <div className={`${styles.articleList} ${className}`} style={style} onClick={onClick}>
    <p>{name}</p>
    <p>{title ? category[0] : category.map(item => <span key={item} className={styles.category}>{item}</span>)}</p>
    <p>{time}</p>
  </div>
}

export default ArticleList
