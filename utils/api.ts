import { AttributeType } from 'pages/data'
const apiHost = 'https://itroger.cn/api/'

export const documentQuery = async (attribute: AttributeType) => {
  return (await fetch(`${apiHost}documentQuery?attribute=${attribute}`)).json()
}
