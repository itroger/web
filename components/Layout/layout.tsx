import React from 'react'
import Head from 'next/head';
import { LayoutProps } from './layout.d'
import styles from './layout.less'

const Layout:React.FC<LayoutProps> = props => {
  const { children } = props
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/static/icons/heart.png' />
        <title>挥墨书未来</title>
        <meta content='itroger 挥墨书未来' />
        <meta name='viewpoint' content='initial-scale=1.0, width=device-width' />
      </Head>
      <main>{ children }</main>
    </div>
  )
}

export default Layout
