
export const algorithmQuery = async () => {
  return (await fetch('http://localhost:8080/documentQuery?attribute=algorithm')).json()
}

export const getComponent = async (url: string) => {
  return (await fetch(url))
}
