import React from 'react'
import Link from 'next/link'
import List from './components/List'
import styles from './index.less'
import { ListProps } from 'pages/data'

const CodeMenu: React.FC = () => {
  const list: ListProps[] = [
    {
      id: 'JZ1',
      name: '二维数组中的查找',
      category: ['数组', '查找'],
      level: '较难',
      link: '/Data/Code'
    },
    {
      id: 'JZ2',
      name: '替换空格',
      category: ['字符串'],
      level: '较难',
      link: '/Data/Code'
    }
  ]

  return <div className={styles.codeMenu}>
    <List id='题号' name='题目' category={['知识点']} level='难度' title={true} className={styles.title}/>
    {list.map(item => <Link href={item.link} key={item.id}>
      <a className={styles.linkA}>
        <List
          id={item.id}
          name={item.name}
          category={item.category}
          level={item.level}
        />
      </a>
    </Link>)}
  </div>
}

export default CodeMenu
