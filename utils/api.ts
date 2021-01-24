import { AttributeType } from 'pages/data'
const apiHost = 'http://localhost:8000/api/'

export const documentQuery = async (attribute: AttributeType) => {
  return (await fetch(`${apiHost}documentQuery?attribute=${attribute}`)).json()
}
