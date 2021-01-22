import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import components from '../../components/MDX'
import { cos } from '../../utils/cos'
import styles from './index.less'
import { GetServerSideProps } from 'next'
import renderToString from 'next-mdx-remote/render-to-string'
import { CodeProps } from 'pages/data'
import hydrate from 'next-mdx-remote/hydrate'

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.query.url) {
    const url = (context.query.url as string).split('/')
    const result =  await cos.getObject({
      Bucket: 'server-1251003503',
      Region: 'ap-guangzhou',
      Key: `${url[url.length - 2]}/${url[url.length - 1]}`
    })
    const mdxSource = await renderToString(result.Body.toString())
    return { props: { source: mdxSource }}
  }
  return { props: { source: await renderToString('') } }
}

const Code: React.FC<CodeProps> = props => {
  const { source } = props

  return <div className={styles.code}>
    <MDXProvider components={components} >
      {hydrate(source)}
    </MDXProvider>
  </div>
}

export default Code
