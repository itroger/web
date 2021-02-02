import { CategoryType } from 'pages/data'
// const apiHost = 'https://itroger.cn/api/'
const apiHost = 'http://localhost:8000/'

export const documentQuery = async (category: CategoryType) => {
  return (await fetch(`${apiHost}documentQuery?category=${category}`)).json()
}
