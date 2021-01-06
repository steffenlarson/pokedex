import { ProxyState } from "../AppState.js"
import { pokeapiService } from "../Services/PokeapiServices.js"


function _drawPokemon() {
  // console.log('drawing')
  let template = ''
  ProxyState.pokeapiPokemon.forEach(p => {
    template += `<li class="action" onclick="app.pokeapiPokemon.getPokemon('${p.name}')">${p.name}</li>`
  })
  document.getElementById("api-pokemon").innerHTML = template
}

export default class PokeapiController {
  constructor() {

    ProxyState.on('pokeapiPokemon', _drawPokemon)


    this.getAllPokemon()
  }
  getAllPokemon() {
    try {
      pokeapiService.getAllPokemon()
    } catch (error) {
      console.error(error)
    }
  }
}