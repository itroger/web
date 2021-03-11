import React from 'react'
import Head from 'next/head'
import Header from '../Header'
import Footer from '../Footer'
import { LayoutProps } from 'components/layout'
import styles from './layout.less'

const Layout:React.FC<LayoutProps> = props => {
  const { children, page, shortHeader, fullContainer } = props

  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/icons/heart.png' />
        <title>挥墨书未来</title>
        <meta content='itroger 挥墨书未来' />
        <meta name='viewpoint' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header shortHeader={ shortHeader } />
      <main className={`${styles.main} ${page === 'home' ? styles.home : null} ${fullContainer ? styles.fullContainer : null}`}>{ children }</main>
      { page === 'home' ? <Footer /> : null }
    </div>
  )
}

export default Layout
