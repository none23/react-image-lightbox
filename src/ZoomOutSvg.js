import React from 'react'

import styles from './style.sss'
// import styles from './style.sss.json'

const ZoomOutSvg = () => (
  <svg className={`${styles.zoomOutButton}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='30' height='30' >
    <g stroke='white' strokeWidth='2' strokeLinecap='round' >
      <path d='M1 19l6-6' />
      <path d='M9 8h6' />
    </g>
    <circle cx='12' cy='8' r='7' fill='none' stroke='white' strokeWidth='2' />
  </svg>
)

export default ZoomOutSvg
