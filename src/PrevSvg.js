import React from 'react'

import styles from './style.scss'

const PrevSvg = () => (
  <svg className={`${styles.navButtonPrev}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 34' width='40' height='68' >
    <g stroke='white' strokeWidth='3' strokeLinecap='round' >
      <path d='M18,2 2,17' />
      <path d='M2,17 18,32' />
    </g>
  </svg>
)

export default PrevSvg
