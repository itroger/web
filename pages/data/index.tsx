import React from 'react'
import Router from 'next/router'
import Card from '../../components/Page/Card'
import styles from './index.less'
import { CardListType } from 'pages/data'

const cardList: CardListType[] = [
  {
    name: '编程题库',
    background: '/images/background.jpg',
    category: 'algorithm'
  },
  {
    name: 'Next项目搭建',
    background: '/images/background.jpg',
    category: 'next'
  },
  {
    name: '技术杂谈',
    background: '/images/background.jpg',
    category: 'tech'
  }
]

const Data: React.FC = () => {

  return <div className={styles.data}>
    {cardList.map(item => <Card
      name={item.name}
      background={item.background}
      key={item.name}
      onClick={() => Router.push({ pathname: '/data/menu', query: { category: item.category } }, '/data/menu')}
    />)}
  </div>
}

export default Data
