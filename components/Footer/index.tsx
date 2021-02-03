import React from 'react'
import styles from './index.less'

const Footer: React.FC = () => {
  return <div className={styles.footer}>
    <div>Designed by <a href='https://github.com/itroger/' target='_blank'>itroger</a></div>
    <div>Copyright &#169; 2021</div>
    <div><a target="_blank" href="https://beian.miit.gov.cn/">粤ICP备19154690号-1</a></div>
  </div>
}

export default Footer
