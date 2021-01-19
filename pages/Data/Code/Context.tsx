import React, {useEffect, useState} from 'react'
import { MDXProvider } from '@mdx-js/react'
import components from '../../../components/MDX'
import JZ1 from '@/public/Algorithms/JZ1.md'
import { cos } from '../../../utils/cos'
import styles from './Code.less'

const Context: React.FC = () => {
  const [content, setContent] = useState<string>()
  const renderMDX = () => {
    cos.getObject({
      Bucket: 'server-1251003503',
      Region: 'ap-guangzhou',
      Key: 'document/JZ1.md'
    }).then(res => setContent(res.Body))
  }

  useEffect(() => {
    renderMDX()
  }, [])

  return <div className={styles.context}>
    <JZ1 />
    <MDXProvider components={components} >
      {content}
    </MDXProvider>
  </div>
}

export default Context
