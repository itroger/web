import React from 'react'
import Link from 'next/link'
import Card from './Card'
import styles from './index.less'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    page: 'mdx'
  }
})

interface CardListType {
  name: string,
  background: string,
  link: string
}

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
      link: '/Algorithms/JZ1'
    }
  ]

  return <div className={styles.data}>
    {cardList.map(item => <Link href={item.link}>
      <a><Card name={item.name} background={item.background}/></a>
    </Link>)}
  </div>
}

export default Data
