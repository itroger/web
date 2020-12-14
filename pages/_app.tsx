import { AppProps } from 'next/app'
import Layout from '../components/Layout/layout'
import 'antd/dist/antd.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
