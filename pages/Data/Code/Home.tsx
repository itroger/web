import React from 'react'
import CodeList from '../components/CodeList'
import styles from './Code.less'
import { CodeListProps } from 'pages/data'
import Router from 'next/router'

const list: CodeListProps[] = [
  {
    id: 'JZ1',
    name: '二维数组中的查找',
    category: ['数组', '查找'],
    level: '较难',
    mdx: 'JZ1'
  },
  {
    id: 'JZ2',
    name: '替换空格',
    category: ['字符串'],
    level: '较难',
    mdx: 'JZ2'
  }
]

const Home: React.FC = () => {
  return <div className={styles.home}>
    <CodeList id='题号' name='题目' category={['知识点']} level='难度' title={true} className={styles.title}/>
    {list.map(item => <CodeList
      className={styles.codeMenuItem}
      id={item.id}
      name={item.name}
      category={item.category}
      level={item.level}
      key={item.id}
      onClick={() => Router.push({pathname: '/Data/Code/Context', query: {mdx: item.mdx}})}
    />)}
  </div>
}

export default Home
