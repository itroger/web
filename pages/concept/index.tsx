import React from 'react'
import { GetStaticProps } from 'next'
import styles from './index.less'
import Router from 'next/router'

export const getStaticProps: GetStaticProps = async () => ({ props: { page: 'concept', shortHeader: true, fullContainer: true } })

const NewConcept: React.FC = () => {
  return <div className={styles.newConcept}>
    <h3>新概念英语</h3>
    <div className={styles.content}>
      <div onClick={() => Router.push({ pathname: '/concept/context', query: { context: 'newConcept1' } }, '/concept/newConcept1')}>
        <p>第一册 英语初阶</p>
        <p>First Things First</p>
        <p>适合初级水平的英语学习者</p>
      </div>
      <div onClick={() => Router.push({ pathname: '/concept/context', query: { context: 'newConcept2' } }, '/concept/newConcept2')}>
        <p>第二册 实践与进步</p>
        <p>Practice & Progress</p>
        <p>适合中级及以下水平的英语学习者</p>
      </div>
      <div onClick={() => Router.push({ pathname: '/concept/context', query: { context: 'newConcept3' } }, '/concept/newConcept3')}>
        <p>第三册 培养技能</p>
        <p>Developing Skills</p>
        <p>适合中级水平的英语学习者</p>
      </div>
      <div onClick={() => Router.push({ pathname: '/concept/context', query: { context: 'newConcept4' } }, '/concept/newConcept4')}>
        <p>第四册 流利英语</p>
        <p>Fluency in English</p>
        <p>适合接近或达到流利程度的英语学习者</p>
      </div>
    </div>
  </div>
}

export default NewConcept
