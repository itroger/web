import { AppProps } from 'next/app'
import Layout from '../components/Layout/layout'
import './_app.less'
import 'antd/dist/antd.less'

const App = ({ Component, pageProps }: AppProps) => {
  const { page } = pageProps
  return (
    <Layout page={page}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
