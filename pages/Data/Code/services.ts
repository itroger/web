
export const algorithmQuery = async () => {
  return (await fetch('http://localhost:8080/documentQuery?attribute=algorithm')).json()
}

export const getComponent = async (url: string) => {
  console.log(url)
  return (await fetch(url))
}
