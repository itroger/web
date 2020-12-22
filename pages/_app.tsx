import { AppProps } from 'next/app'
import Layout from '../components/Layout/layout'
import 'antd/dist/antd.less'
import './_app.less'

const App = ({ Component, pageProps }: AppProps) => {
  const { page } = pageProps
  return (
    <Layout page={page}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
