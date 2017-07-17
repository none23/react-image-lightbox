import React from 'react'

import styles from './style.sss'
// import styles from './style.sss.json'

const CloseSvg = () => (
  <svg className={`${styles.closeButton}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='30' height='30' >
    <g stroke='white' strokeWidth='2' strokeLinecap='round' >
      <path d='M2,2 18,18' />
      <path d='M2,18 18,2' />
    </g>
  </svg>
)

export default CloseSvg
