// NOTE this imports the PokeapiController so that it can be instantiated and used.
import PokeapiController from "./Controllers/PokeapiController.js";

// NOTE This is the main. Everything goes through it. 
class App {
  // NOTE This activates or instantiates the pokeapi Controller.
  PokeapiController = new PokeapiController()
}
// NOTE This connects the app to the html.
window["app"] = new App();
