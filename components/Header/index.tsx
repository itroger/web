import React, {useEffect, useRef, useState} from 'react'
import Link from 'next/link'
import Vibrant from 'node-vibrant'
import { PageType } from 'components/header'
import styles from './index.less'

const Header: React.FC = () => {
  const [page, setPage] = useState<PageType>('Home')
  const [navBackground, setNavBackground] = useState<string>()
  const [titleColor, setTitleColor] = useState<string>()
  const [navBackgroundVisible, setNavBackgroundVisible] = useState<boolean>(false)
  const navRef = useRef()

  // 导航栏背景色和标题颜色
  useEffect(() => {
    let v = new Vibrant('/images/background.jpg')
    v.getPalette().then(palette => {
      setNavBackground('#' + palette.LightVibrant.getRgb().map(item => {
        let val = Math.floor(item).toString(16)
        return val.length === 2 ? val: '0' + val
      }).join(''))
      setTitleColor('#' + palette.DarkVibrant.getRgb().map(item => {
        let val = Math.floor(item).toString(16)
        return val.length === 2 ? val: '0' + val
      }).join(''))
    })
  }, [navBackground, titleColor])

  // 导航栏可视区域
  useEffect(() => {
    let io = new IntersectionObserver(entries => {
      if (entries[0].intersectionRatio > 0) {
        // 进入可视区域
        setNavBackgroundVisible(false)
      } else {
        // 离开可视区域
        setNavBackgroundVisible(true)
      }
    })
    io.observe(navRef.current)
  }, [navBackgroundVisible])

  return <header className={styles.header} ref={navRef}>
    <nav style={{
      background: navBackgroundVisible ? navBackground : null,
      position: navBackgroundVisible ? 'fixed' : null,
      padding: navBackgroundVisible ? '0 5vw' : null
    }}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link href='/'>
            <img src='/icons/heart.png' alt='logo' onClick={() => setPage('Home')} />
          </Link>
          <div style={{color: titleColor}}>挥墨书未来</div>
        </div>
        <ul className={styles.menu}>
          <li className={page === 'Home' ? styles.isActive: null}>
            <Link href='/' ><a onClick={() => setPage('Home')}>首页</a></Link>
          </li>
          <li className={page === 'Life' ? styles.isActive: null}>
            <Link href='/Life'><a onClick={() => setPage('Life')}>生活</a></Link>
          </li>
          <li className={page === 'Visual' ? styles.isActive: null}>
            <Link href='/Visual'><a onClick={() => setPage('Visual')}>可视化</a></Link>
          </li>
          <li className={page === 'Data' ? styles.isActive: null}>
            <Link href='/Data'><a onClick={() => setPage('Data')}>数据</a></Link>
          </li>
          <li className={page === 'About' ? styles.isActive: null}>
            <Link href='/About'><a onClick={() => setPage('About')}>关于</a></Link>
          </li>
        </ul>
      </div>
      <a className={styles.github} href='https://github.com/itroger/web' target='_blank'>
        <img src="/icons/github.svg" alt="github"/>
      </a>
    </nav>
  </header>
}

export default Header
