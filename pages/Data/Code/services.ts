
export const algorithmQuery = async () => {
  return (await fetch('http://localhost:8080/documentQuery', {
    method: 'GET',
    body: JSON.stringify({attribute: 'algorithm'})
  })).json()
}
