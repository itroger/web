import React from 'react'
import styles from './index.less'
import Logo from '../../components/Page/Logo'
import { LogoProps } from 'components/page'

const tech: LogoProps[] = [
  {
    image: '/logos/react.svg',
    text: 'React'
  },
  {
    image: '/logos/next.svg',
    text: 'Next'
  },
  {
    image: '/logos/typescript.svg',
    text: 'TypeScript'
  },
  {
    image: '/logos/git.svg',
    text: 'Git'
  },
  {
    image: '/logos/go.svg',
    text: 'Go'
  },
  {
    image: '/logos/webpack.svg',
    text: 'Webpack'
  },
  {
    image: '/logos/d3.svg',
    text: 'D3'
  },
  {
    image: '/logos/node.svg',
    text: 'Node'
  },
  {
    image: '/logos/nginx.svg',
    text: 'Nginx'
  },
  {
    image: '/logos/github.svg',
    text: 'GitHub'
  }
]

const develop: LogoProps[] = [
  {
    image: '/logos/webstorm.svg',
    text: 'WebStorm'
  },
  {
    image: '/logos/goland.svg',
    text: 'GoLand'
  },
  {
    image: '/logos/datagrip.svg',
    text: 'DataGrip'
  },
  {
    image: '/logos/designer.svg',
    text: 'Designer'
  },
  {
    image: '/logos/photo.svg',
    text: 'Photo'
  },
  {
    image: '/logos/publisher.svg',
    text: 'Publisher'
  },
  {
    image: '/logos/termius.svg',
    text: 'Termius'
  },
  {
    image: '/logos/xcode.svg',
    text: 'Xcode'
  },
  {
    image: '/logos/edge.svg',
    text: 'Edge'
  }
]

const application: LogoProps[] = [
  {
    image: '/logos/word.svg',
    text: 'Word'
  },
  {
    image: '/logos/excel.svg',
    text: 'Excel'
  },
  {
    image: '/logos/powerpoint.svg',
    text: 'PowerPoint'
  },
  {
    image: '/logos/onenote.svg',
    text: 'OneNote'
  },
  {
    image: '/logos/access.svg',
    text: 'Access'
  },
  {
    image: '/logos/project.svg',
    text: 'Project'
  },
  {
    image: '/logos/visio.svg',
    text: 'Visio'
  },
  {
    image: '/logos/outlook.svg',
    text: 'Outlook'
  },
  {
    image: '/logos/onedrive.svg',
    text: 'OneDrive'
  },
  {
    image: '/logos/windows.svg',
    text: 'Windows'
  },
  {
    image: '/logos/wechat.svg',
    text: 'WeChat'
  }
]

const device: LogoProps[] = [
  {
    image: '/logos/iphone12.svg',
    text: 'iPhone 12'
  },
  {
    image: '/logos/ipadpro.svg',
    text: 'iPad Pro'
  },
  {
    image: '/logos/macbookpro.svg',
    text: 'MacBook'
  },
  {
    image: '/logos/applewatchse.svg',
    text: 'Watch SE'
  },
  {
    image: '/logos/homepodmini.svg',
    text: 'HomePod'
  },
  {
    image: '/logos/airpods.svg',
    text: 'AirPods'
  },
  {
    image: '/logos/p30.svg',
    text: 'P30'
  },
  {
    image: '/logos/mr7350.svg',
    text: 'MR7350'
  },
  {
    image: '/logos/1005w.svg',
    text: '1005w'
  },
  {
    image: '/logos/u2520d.svg',
    text: 'U2520D'
  },
  {
    image: '/logos/minila.svg',
    text: 'minila'
  },
  {
    image: '/logos/genioplus.svg',
    text: 'Genio Plus'
  }
]

const About: React.FC = () => {
  return <div className={styles.about}>
    <div className={styles.contact}>
      <div className={styles.background} />
      <div className={styles.message}>
        <div>挥墨书未来</div>
        <div>itroger</div>
        <div>Creative Web Designer & Developer</div>
        <div>itroger@outlook.com</div>
        <div>广州市天河区</div>
      </div>
    </div>
    <h3>技术栈</h3>
    <div className={styles.logos}>
      { tech.map(item => <Logo key={ item.text } image={ item.image } text={ item.text } />) }
    </div>
    <h3>开发工具</h3>
    <div className={styles.logos}>
      { develop.map(item => <Logo key={ item.text } image={ item.image } text={ item.text } />) }
    </div>
    <h3>应用软件</h3>
    <div className={styles.logos}>
      { application.map(item => <Logo key={ item.text } image={ item.image } text={ item.text } />) }
    </div>
    <h3>设备</h3>
    <div className={styles.logos}>
      { device.map(item => <Logo key={ item.text } image={ item.image } text={ item.text } />) }
    </div>
  </div>
}

export default About
