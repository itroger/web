import React from 'react'
import Head from 'next/head'
import Header from '../Header'
import { LayoutProps } from './layout.d'
import styles from './layout.less'

const Layout:React.FC<LayoutProps> = props => {
  const { children, page } = props

  const renderPage = () => {
    switch (page) {
      case 'mdx':
        return null
      default:
        return null
    }
  }


  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/icons/heart.png' />
        <title>挥墨书未来</title>
        <meta content='itroger 挥墨书未来' />
        <meta name='viewpoint' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />
      <main className={styles.main}>{renderPage()}{ children }</main>
    </div>
  )
}

export default Layout
