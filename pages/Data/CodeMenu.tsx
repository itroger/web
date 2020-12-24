import React from 'react'
import List from './components/List'
import styles from './index.less'
import { ListProps } from 'pages/data'
import Router from 'next/router'

const list: ListProps[] = [
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

const CodeMenu: React.FC = () => {

  return <div className={styles.codeMenu}>
    <List id='题号' name='题目' category={['知识点']} level='难度' title={true} className={styles.title}/>
    {list.map(item => <List
      id={item.id}
      name={item.name}
      category={item.category}
      level={item.level}
      key={item.id}
      onClick={() => Router.push({pathname: '/Data/Code', query: {mdx: item.mdx}})}
    />)}
  </div>
}

export default CodeMenu
