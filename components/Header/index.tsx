import React, {useState} from 'react'
import Link from 'next/link'
import { IPage } from './index.d'
import styles from './index.less'

const Header: React.FC = () => {
  const [page, setPage] = useState<IPage>('Home')

  return <header className={styles.header}>
    <nav>
      <div className={styles.logo}>
        <Link href='/'>
          <img src='/icons/heart.png' alt='logo' onClick={() => setPage('Home')} />
        </Link>
        <div>挥墨书未来</div>
      </div>
      <ul className={styles.menu}>
        <li className={page === 'Home' ? styles.isActive: null}>
          <Link href='/' ><a onClick={() => setPage('Home')}>首页</a></Link>
        </li>
        <li className={page === 'Life' ? styles.isActive: null}>
          <Link href='/Life'><a onClick={() => setPage('Life')}>生活百态</a></Link>
        </li>
        <li className={page === 'Visual' ? styles.isActive: null}>
          <Link href='/Visual'><a onClick={() => setPage('Visual')}>数据可视化</a></Link>
        </li>
        <li className={page === 'Data' ? styles.isActive: null}>
          <Link href='/Data'><a onClick={() => setPage('Data')}>数据结构</a></Link>
        </li>
      </ul>
    </nav>
  </header>
}

export default Header
