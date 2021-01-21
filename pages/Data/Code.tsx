import React, { useState } from 'react'
import { MDXProvider } from '@mdx-js/react'
import components from '../../components/MDX'
import { cos } from '../../utils/cos'
import styles from './index.less'
import {useRouter} from 'next/router'
import { GetStaticProps } from 'next'
import renderToString from 'next-mdx-remote/render-to-string'
import { CodeProps } from 'pages/data'
import hydrate from 'next-mdx-remote/hydrate'

export const getStaticProps: GetStaticProps = async (context) => {
  const result =  await cos.getObject({
    Bucket: 'server-1251003503',
    Region: 'ap-guangzhou',
    Key: 'document/Next4.md'
  })
  console.log(context, result.Body)
  const mdxSource = await renderToString(result.Body.toString())
  return { props: { source: mdxSource }}
}

const Code: React.FC<CodeProps> = props => {
  const { source } = props

  // useEffect(() => {
  //   const url = (router.query.url as string).split('/')
  //   if (url) renderMDX(`${url[url.length - 2]}/${url[url.length - 1]}`)
  // }, [])

  return <div className={styles.code}>
    <MDXProvider components={components} >
      {hydrate(source)}
    </MDXProvider>
  </div>
}

export default Code
