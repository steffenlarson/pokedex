import PokeapiController from "./Controllers/PokeapiController.js";


class App {
  PokeapiController = new PokeapiController()
}

window["app"] = new App();
