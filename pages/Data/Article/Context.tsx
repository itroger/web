import React from 'react'
import { useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'
import components from '../../../components/MDX'
import styles from './Article.less'
import Next1 from '@/public/Article/Next1.md'
import Next2 from '@/public/Article/Next2.md'
import Next3 from '@/public/Article/Next3.md'
import Next4 from '@/public/Article/Next4.md'
import Next5 from '@/public/Article/Next5.md'

const Context: React.FC = () => {
  const router = useRouter()
  const { mdx } = router.query

  const renderMDX = () => {
    switch (mdx) {
      case 'Next1':
        return <Next1 />
      case 'Next2':
        return <Next2 />
      case 'Next3':
        return <Next3 />
      case 'Next4':
        return <Next4 />
      case 'Next5':
        return <Next5 />
    }
  }

  return <div className={styles.context}>
    <MDXProvider components={components} >
      {renderMDX()}
    </MDXProvider>
  </div>
}

export default Context
