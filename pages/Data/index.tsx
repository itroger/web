import React from 'react'
import Link from 'next/link'
import Card from './components/Card'
import styles from './index.less'
import { CardListType } from 'pages/data'


const Data: React.FC = () => {
  const cardList: CardListType[] = [
    {
      name: '数据结构',
      background: '/images/background.jpg',
      link: '/Algorithms/JZ1'
    },
    {
      name: '编程题库',
      background: '/images/background.jpg',
      link: '/Data/CodeMenu'
    },
    {
      name: '数据科学',
      background: '/images/background.jpg',
      link: '/Data/CodeMenu'
    }
  ]

  return <div className={styles.data}>
    {cardList.map(item => <Link href={item.link} key={item.name}>
      <a><Card name={item.name} background={item.background} /></a>
    </Link>)}
  </div>
}

export default Data
