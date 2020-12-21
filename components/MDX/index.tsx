import React from 'react'
import styles from './index.less'

const P = props => <p className={styles.p} {...props} />
const H1 = props => <h1 className={styles.h1} {...props} />
const H2 = props => <h2 className={styles.h2} {...props} />
const H3 = props => <h3 className={styles.h3} {...props} />
const H4 = props => <h4 className={styles.h4} {...props} />
const H5 = props => <h5 className={styles.h5} {...props} />
const H6 = props => <h6 className={styles.h6} {...props} />
const Blockquote = props => <blockquote className={styles.blockquote} {...props} />

const components = {
  p: P,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  blockquote: Blockquote,
}

export default components
