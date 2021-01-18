import React from 'react'
import { useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'
import components from '../../../components/MDX'
import { getComponent } from './services'
import styles from './Code.less'

const Context: React.FC = () => {
  const router = useRouter()
  const { component, url } = router.query

  const renderMDX = async () => {
    switch (component) {
      case 'JZ1': await getComponent(url)
        return
      case 'JZ2':
        return await getComponent(url)
    }
  }

  return <div className={styles.context}>
    <MDXProvider components={components} >
      {/*{renderMDX()}*/}
    </MDXProvider>
  </div>
}

export default Context
