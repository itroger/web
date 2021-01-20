import React, {useEffect, useState} from 'react'
import { MDXProvider } from '@mdx-js/react'
import ReactMarkdown from 'react-markdown'
import components from '../../components/MDX'
import { cos } from '../../utils/cos'
import styles from './index.less'
import {useRouter} from 'next/router'

const Context: React.FC = () => {
  const [content, setContent] = useState<string>()
  const router = useRouter()

  const renderMDX = url => {
    cos.getObject({
      Bucket: 'server-1251003503',
      Region: 'ap-guangzhou',
      Key: url
    }).then(res => setContent(res.Body))
  }

  useEffect(() => {
    const url = (router.query.url as string).split('/')
    if (url) renderMDX(`${url[url.length - 2]}/${url[url.length - 1]}`)
  }, [])

  return <div className={styles.code}>
    <MDXProvider components={components} >
      <ReactMarkdown>{content}</ReactMarkdown>
    </MDXProvider>
  </div>
}

export default Context
