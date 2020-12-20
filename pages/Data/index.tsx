import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import JZ1 from '@/public/algorithms/JZ1.mdx'
import styles from './index.less'

const Data: React.FC = () => {
  const H1 = props => <h1 {...props} />

  return <div className={styles.data}>
    <MDXProvider components={{h1: H1}}>
      <JZ1 />
    </MDXProvider>
  </div>
}

export default Data
