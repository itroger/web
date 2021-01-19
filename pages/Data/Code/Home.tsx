import React, {useEffect, useState} from 'react'
import Router from 'next/router'
import { algorithmQuery } from './services'
import CodeList from '../components/CodeList'
import styles from './Code.less'
import {CodeListProps} from 'pages/data'

const Home: React.FC = () => {
  const [list, setList] = useState<CodeListProps[]>([])

  useEffect(() => {
    algorithmQuery().then(res => {
      setList(res.result.data)
    })
  }, [])


  return <div className={styles.home}>
    <CodeList component='题号' name='题目' category={'知识点'} level='难度' title={true} className={styles.title}/>
    {list.map(item => <CodeList
      className={styles.codeMenuItem}
      name={item.name}
      category={item.category}
      level={item.level}
      key={item.component}
      onClick={() => Router.push({ pathname: '/Data/Code/Context' })}
    />)}
  </div>
}

export default Home
