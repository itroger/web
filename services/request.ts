import { useRequest } from 'ahooks'

type MethodType = 'GET' | 'get' | 'POST' | 'post'

const host = 'http://localhost:8080';

const request = (url: string, method: MethodType) => {
  return useRequest({
    url: host + url,
    method
  })
}

export default request
