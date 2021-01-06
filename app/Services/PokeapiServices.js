import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokeApi } from "../Services/AxiosServices.js";

class PokeapiService {

  async getAllPokemon() {
    let res = await pokeApi.get('')
    ProxyState.pokeapiPokemon = res.data.results
  }
}

export const pokeapiService = new PokeapiService();