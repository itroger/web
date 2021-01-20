import React, {useContext, useEffect, useRef, useState} from 'react'
import Router from 'next/router'
import Vibrant from 'node-vibrant'
import { PageType } from 'components/header'
import styles from './index.less'
import { WebContext } from '../../store'

const Header: React.FC = () => {
  const [navBackground, setNavBackground] = useState<string>()
  const [titleColor, setTitleColor] = useState<string>()
  const [navBackgroundVisible, setNavBackgroundVisible] = useState<boolean>(false)
  const navRef = useRef()
  const { state: { page }, dispatch } = useContext(WebContext)

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

  // 路由跳转
  const router = async (page: PageType) => {
    await dispatch({type: 'page', payload: {page}})
    await Router.push(page === 'Home' ? '/' : `/${page}`)
  }

  return <header className={styles.header} ref={navRef}>
    <nav style={{
      background: navBackgroundVisible ? navBackground : null,
      position: navBackgroundVisible ? 'fixed' : null,
      padding: navBackgroundVisible ? '0 5vw' : null
    }}>
      <div className={styles.content}>
        <div>
          <div className={styles.logo}>
            <img src='/icons/heart.png' alt='logo' onClick={() => router('Home')} />
            <div style={{color: titleColor}}>挥墨书未来</div>
          </div>
          <ul className={styles.menu}>
            <li
              className={page === 'Home' ? styles.isActive: null}
              onClick={() => router('Home')}
            >
              <a>首页</a>
            </li>
            <li
              className={page === 'Life' ? styles.isActive: null}
              onClick={() => router('Life')}
            >
              <a>生活</a>
            </li>
            <li
              className={page === 'Visual' ? styles.isActive: null}
              onClick={() => router('Visual')}
            >
              <a>可视化</a>
            </li>
            <li
              className={page === 'Data' ? styles.isActive: null}
              onClick={() => router('Data')}
            >
              <a>数据</a>
            </li>
            <li
              className={page === 'About' ? styles.isActive: null}
              onClick={() => router('About')}
            >
              <a>关于</a>
            </li>
          </ul>
        </div>
        <a className={styles.github} href='https://github.com/itroger/web' target='_blank'>
          <img src="/icons/github.svg" alt="github"/>
        </a>
      </div>
    </nav>
  </header>
}

export default Header
