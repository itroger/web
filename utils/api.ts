import { AttributeType } from 'pages/data'
const apiHost = 'http://localhost:8080/'

export const documentQuery = async (attribute: AttributeType) => {
  return (await fetch(`${apiHost}documentQuery?attribute=${attribute}`)).json()
}
