import React, {useEffect, useState} from 'react'
import Router, { useRouter } from 'next/router'
import { documentQuery } from '../../utils/api'
import DocumentList from '../../components/Page/DocumentList'
import styles from './index.less'
import { DocumentListProps } from 'components/page'
import { CategoryType } from 'pages/data'

const Menu: React.FC = () => {
  const [list, setList] = useState<DocumentListProps[]>([])

  const router = useRouter()

  useEffect(() => {
    const category = router.query.category as CategoryType
    if (category) {
      documentQuery(category as CategoryType).then(res => {
        setList(res.result.data)
      })
    }
  }, [])

  return <div className={styles.menu}>
    <DocumentList serial='编号' name='题目' category={'类别'} tag={'知识点'} level='难度' title={true} className={styles.title}/>
    {list.map((item, index) => <DocumentList
      className={styles.menuItem}
      serial={index + 1}
      name={item.name}
      category={item.category}
      tag={item.tag}
      level={item.level}
      key={item.name}
      onClick={() => Router.push({ pathname: '/data/document', query: { url: item.url } }, '/data/document')}
    />)}
  </div>
}

export default Menu
