import React, {useContext} from 'react'
import { MDXProvider } from '@mdx-js/react'
import {WebContext} from '../../store'
import components from '../../components/MDX'
import styles from './index.less'
import JZ1 from '@/public/Algorithms/JZ1.mdx'
import JZ2 from '@/public/Algorithms/JZ2.mdx'

const Code: React.FC = () => {
  const {state: {mdx}} = useContext(WebContext)

  const renderMDX = () => {
    switch (mdx) {
      case 'JZ1':
        return <JZ1 />
      case 'JZ2':
        return <JZ2 />
    }
  }

  return <div className={styles.code}>
    <MDXProvider components={components} >
      {renderMDX()}
    </MDXProvider>
  </div>
}

export default Code
