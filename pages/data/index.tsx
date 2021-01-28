import React from 'react'
import Router from 'next/router'
import Card from '../../components/Page/Card'
import styles from './index.less'
import { CardListType } from 'pages/data'

const cardList: CardListType[] = [
  {
    name: '编程题库',
    background: '/images/background.jpg',
    attribute: 'algorithm'
  },
  {
    name: 'Next项目搭建',
    background: '/images/background.jpg',
    attribute: 'next'
  },
  {
    name: 'Nginx',
    background: '/images/background.jpg',
    attribute: 'nginx'
  }
]

const Data: React.FC = () => {

  return <div className={styles.data}>
    {cardList.map(item => <Card
      name={item.name}
      background={item.background}
      key={item.name}
      onClick={() => Router.push({ pathname: '/data/menu', query: { attribute: item.attribute } }, '/data/menu')}
    />)}
  </div>
}

export default Data
