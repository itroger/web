import React from 'react'
import ArticleList from '../components/ArticleList'
import styles from './Article.less'
import { ArticleListProps } from 'pages/data'
import Router from 'next/router'

const list: ArticleListProps[] = [
  {
    name: 'Next 项目之 手动创建',
    category: ['Next'],
    time: '2020-12-29',
    mdx: 'Next1'
  },
  {
    name: 'Next 项目之 TypeScript',
    category: ['Next'],
    time: '2020-12-29',
    mdx: 'Next2'
  },
  {
    name: 'Next 项目之 Less',
    category: ['Next'],
    time: '2020-12-29',
    mdx: 'Next3'
  },
  {
    name: 'Next 项目之 Ant Design',
    category: ['Next'],
    time: '2020-12-29',
    mdx: 'Next4'
  },
  {
    name: 'Next 项目之 MDX',
    category: ['Next'],
    time: '2020-12-29',
    mdx: 'Next5'
  }
]

const Home: React.FC = () => {

  return <div className={styles.home}>
    {list.map(item => <ArticleList
      className={styles.articleMenuItem}
      name={item.name}
      category={item.category}
      time={item.time}
      key={item.name}
      onClick={() => Router.push({pathname: '/Data/Article/Context', query: {mdx: item.mdx}})}
    />)}
  </div>
}

export default Home
