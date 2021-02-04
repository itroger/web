import React, { useEffect } from 'react'
import * as d3 from 'd3'
import styles from './index.less'

const createSVG = () => {
  const svg = d3.select('#map').append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .attr('fill', 'red')
}

const Visual: React.FC = () => {

  useEffect(() => {
    createSVG()
  }, [])

  return <div className={styles.visual}>
    <div id='map' />
  </div>
}

export default Visual
