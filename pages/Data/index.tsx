import React from 'react'
import Router from 'next/router'
import Card from './components/Card'
import styles from './index.less'
import { CardListType } from 'pages/data'

const cardList: CardListType[] = [
  {
    name: '编程题库',
    background: '/images/background.jpg',
    url: '/Data/Code/Home'
  },
  {
    name: 'Next项目搭建',
    background: '/images/background.jpg',
    url: '/Data/Article/Home'
  }
]

const Data: React.FC = () => {

  return <div className={styles.data}>
    {cardList.map(item => <Card
      name={item.name}
      background={item.background}
      key={item.name}
      onClick={() => Router.push(item.url)}
    />)}
  </div>
}

export default Data
