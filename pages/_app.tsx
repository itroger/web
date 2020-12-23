import { AppProps } from 'next/app'
import {useReducer} from 'react'
import { reducer, initialState, WebContext } from '../store'
import {ReducerType} from 'store'
import Layout from '../components/Layout/layout'
import 'antd/dist/antd.less'
import './_app.less'

const App = ({ Component, pageProps }: AppProps) => {
  const [state, dispatch] = useReducer<ReducerType>(reducer, initialState)

  const { page } = pageProps
  return <WebContext.Provider value={{state, dispatch}}>
    <Layout page={page}>
      <Component {...pageProps} />
    </Layout>
  </WebContext.Provider>
}

export default App
