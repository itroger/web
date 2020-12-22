import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import JZ1 from '@/pages/Algorithms/JZ1.mdx'
import components from '../../components/MDX'
import styles from './index.less'

const Code: React.FC = () => {
  return <div className={styles.code}>
    <MDXProvider components={components} >
      <JZ1 />
    </MDXProvider>
  </div>
}

export default Code
