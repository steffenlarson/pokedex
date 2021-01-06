import { pokeapiService } from "../Services/PokeapiServices.js"


function _drawPokemon() {
  let template = ''

}

export default class PokeapiController {
  constructor() {
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