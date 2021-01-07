// NOTE these all import different things. the Proxystate in the appstate, the Pokemon Model from the models, and the pokeApi from the axios service.
import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokeApi } from "../Services/AxiosServices.js";

// NOTE The service is where all of the business logic runs. All of the actual functions (besides draw) are stored here. 
// NOTE The class is built so that it can be sent off repeatedly whenever a function is needed. 
class PokeapiService {

  // NOTE this is an asynchronous function. These run until they get stuck and then the function waits for a response from a server. Then it completes. 
  async getAllPokemon() {
    // NOTE Res means results then you await for the request sent to the api returns a result.
    let res = await pokeApi.get('')
    // NOTE 
    ProxyState.pokeapiPokemon = res.data.results
  }
}

export const pokeapiService = new PokeapiService();