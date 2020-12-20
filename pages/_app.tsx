import { AppProps } from 'next/app'
import Layout from '../components/Layout/layout'
import './_app.less'
import 'antd/dist/antd.less'

const App = ({ Component, pageProps }: AppProps) => {
  const { home } = pageProps
  return (
    <Layout home={home}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
