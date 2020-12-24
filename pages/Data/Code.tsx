import React from 'react'
import { useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'
import components from '../../components/MDX'
import styles from './index.less'
import JZ1 from '@/public/Algorithms/JZ1.mdx'
import JZ2 from '@/public/Algorithms/JZ2.mdx'

const Code: React.FC = () => {
  const router = useRouter()
  const { mdx } = router.query

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
