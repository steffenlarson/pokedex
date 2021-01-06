// import { ProxyState } from "../AppState";
import { pokeApi } from "../Services/AxiosServices.js"

class PokeapiService {

  async getAllPokemon() {
    let res = await pokeApi.get('')
    console.log(res.data)
  }
}

export const pokeapiService = new PokeapiService();