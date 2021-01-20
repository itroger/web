import React, {useEffect, useState} from 'react'
import Router, { useRouter } from 'next/router'
import { documentQuery } from '../../utils/api'
import CodeList from '../../components/Page/CodeList'
import styles from './index.less'
import { CodeListProps } from 'components/page'
import {AttributeType} from 'pages/data'

const Menu: React.FC = () => {
  const [list, setList] = useState<CodeListProps[]>([])

  const router = useRouter()

  useEffect(() => {
    const attribute = router.query.attribute as AttributeType
    if (attribute) {
      documentQuery(attribute as AttributeType).then(res => {
        setList(res.result.data)
      })
    }
  }, [])

  return <div className={styles.menu}>
    <CodeList component='题号' name='题目' category={'知识点'} level='难度' title={true} className={styles.title}/>
    {list.map(item => <CodeList
      className={styles.codeMenuItem}
      name={item.name}
      category={item.category}
      level={item.level}
      key={item.component}
      onClick={() => Router.push({ pathname: '/Data/Code', query: { url: item.url } }, '/Data/Code')}
    />)}
  </div>
}

export default Menu
