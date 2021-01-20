import React from 'react'
import Head from 'next/head'
import Header from '../Header'
import Footer from '../Footer'
import { LayoutProps } from 'components/layout'
import styles from './layout.less'
import dynamic from 'next/dynamic';

//不需要seo
// @ts-ignore
const DynasicTopTipsNoSsr = dynamic(import('../../utils/cos'),{
  ssr:false
})

const Layout:React.FC<LayoutProps> = props => {
  const { children, page } = props
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/icons/heart.png' />
        <title>挥墨书未来</title>
        <meta content='itroger 挥墨书未来' />
        <meta name='viewpoint' content='initial-scale=1.0, width=device-width' />
        <script src='https://unpkg.com/cos-js-sdk-v5/dist/cos-js-sdk-v5.min.js' />
      </Head>
      <Header />
      <main className={`${styles.main} ${page === 'home' ? styles.home : null}`}>{ children }</main>
      {page === 'home' ? <Footer /> : null}
    </div>
  )
}

export default Layout
