// NOTE this imports the proxystate from appstate to be used. A copy of data to be used.
import { ProxyState } from "../AppState.js"
// NOTE This imports the PokeService from the services file.
import { pokeapiService } from "../Services/PokeapiServices.js"

// NOTE this function draws the pokemon onto the html.
function _drawPokemon() {
  // console.log('drawing')
  // NOTE This template creates an empty template
  let template = ''
  // NOTE this for each of the pokemon places them into a template. from the appstate. the proxy.
  ProxyState.pokeapiPokemon.forEach(p => {
    template += `<li class="action" onclick="app.pokeapiPokemon.getPokemon('${p.name}')">${p.name}</li>`
  })
  // NOTE this grabs and injects the above template into the place where in the html "api-pokemon" is (id) identified.
  document.getElementById("api-pokemon").innerHTML = template
}

// NOTE this creates a clas for the controller and exports it for use elsewhere
export default class PokeapiController {
  // NOTE the constructor builds things on page load.
  constructor() {
    // NOTE this line activates a listener and on the change of pokeapiPokemon activates _drawPokemon
    ProxyState.on('pokeapiPokemon', _drawPokemon)

    // NOTE this calls the function getAllPokemon. which tries to grab all the data from the first api
    this.getAllPokemon()
  }
  // NOTE this is the getAllPokemon function. In the controller it only calls over to the service to run it. It is set up with a try catch. and if The call to the service fails, it returns an error.
  getAllPokemon() {
    try {
      pokeapiService.getAllPokemon()
    } catch (error) {
      console.error(error)
    }
  }
}