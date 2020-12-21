import React from 'react'
import styles from './index.less'
import { MDXProvider } from '@mdx-js/react'
import JZ1 from '@/pages/Algorithms/JZ1.mdx'
import components from '../../components/MDX'

const Life: React.FC = () => {

  return <div className={styles.life}>
    <MDXProvider components={components} >
      <JZ1 />
    </MDXProvider>
  </div>
}

export default Life
