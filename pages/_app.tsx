import { AppProps } from 'next/app'
import {useEffect, useReducer} from 'react'
import { reducer, initialState, WebContext } from '../store'
import {ReducerType} from 'store'
import Layout from '../components/Layout/layout'
import 'antd/dist/antd.less'
import './_app.less'

const App = ({ Component, pageProps }: AppProps) => {
  const [state, dispatch] = useReducer<ReducerType>(reducer, initialState)
  const { page } = pageProps

  // 读取 localStorage
  useEffect(() => {
    const serializedState = localStorage.getItem('state')
    if (serializedState != null) {
      dispatch({type: 'page', payload: {page: JSON.parse(localStorage.getItem('state')).page}})
    }
  }, [])

  // 存入 localStorage
  useEffect(() => {
    window.onbeforeunload = () => {
      localStorage.setItem('state', JSON.stringify(state))
    }
  }, [state])

  return <WebContext.Provider value={{state, dispatch}}>
    <Layout page={page}>
      <Component {...pageProps} />
    </Layout>
  </WebContext.Provider>
}

export default App
