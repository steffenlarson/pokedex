// @ts-ignore
export const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon"
})

// @ts-ignore
export const sandboxApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/SteffenLarson/pokemon"
})