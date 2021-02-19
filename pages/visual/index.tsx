import React, { useEffect } from 'react'
import * as d3 from 'd3'
import * as geo from 'd3-geo'
import * as d3Color from 'd3-scale-chromatic'
import styles from './index.less'

const createSVG = () => {
  const svg = d3.select('#map').append('svg')
    .attr('width', 1024)
    .attr('height', 600)

  getJson().then(({ features }) => {
    svg.selectAll('path')
      .data(features)
      .enter()
      .append('path')
      .attr('d', path)
      .attr('fill', (d, i) => colors(i.toString()))
      .attr('stroke', 'rgba(255, 255, 255, 1)')
      .attr('stroke-width', 1)
  })
}

const projection = geo.geoMercator()
  .scale(3500)
  .center([115, 22])
  .translate([1024 / 2, 600 / 2])

const path = geo.geoPath(projection)
const colors = d3.scaleOrdinal(d3Color.schemeBrBG[11])

const getJson = async () => await d3.json('/geo/china.json')

const Visual: React.FC = () => {

  useEffect(() => {
    createSVG()
  }, [])

  return <div className={styles.visual}>
    <div id='map' />
  </div>
}

export default Visual
