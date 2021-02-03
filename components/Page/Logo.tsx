import React from 'react'
import Image from 'next/image'
import { LogoProps } from 'components/page'
import styles from './index.less'

const Logo: React.FC<LogoProps> = props => {
  const { image, text } = props

  return <div className={styles.logo}>
    <Image src={image} width={100} height={100} objectFit='contain' />
    <span>{text}</span>
  </div>
}

export default Logo
