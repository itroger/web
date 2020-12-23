import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github as theme} from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import styles from './index.less'

const P = props => <p className={styles.p} {...props} />
const Em = props => <em className={styles.em} {...props} />
const Strong = props => <strong className={styles.strong} {...props} />
const Del = props => <del className={styles.del} {...props} />
const U = props => <u className={styles.u} {...props} />
const H1 = props => <h1 className={styles.h1} {...props} />
const H2 = props => <h2 className={styles.h2} {...props} />
const H3 = props => <h3 className={styles.h3} {...props} />
const H4 = props => <h4 className={styles.h4} {...props} />
const H5 = props => <h5 className={styles.h5} {...props} />
const H6 = props => <h6 className={styles.h6} {...props} />
const Hr = props => <hr className={styles.hr} {...props} />
const Blockquote = props => <blockquote className={styles.blockquote} {...props} />
const Ul = props => <ul className={styles.ul} {...props} />
const Ol = props => <ol className={styles.ol} {...props} />
const Table = props => <table className={styles.table} {...props} />
const Pre = props => <SyntaxHighlighter
  language={props.children.props.className.split('-')[1]}
  style={theme}
>
  {props.children.props.children}
</SyntaxHighlighter>

const components = {
  p: P,
  em: Em,
  strong: Strong,
  del: Del,
  u: U,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  hr: Hr,
  blockquote: Blockquote,
  ul: Ul,
  ol: Ol,
  table: Table,
  pre: Pre
}

export default components
