import { PokemonsController } from "./Controllers/PokemonsController.js";
import { SandboxPokemonsController } from "./Controllers/SandBoxPokemonsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  pokemonsController = new PokemonsController();

  sandboxPokemonsController = new SandboxPokemonsController();
}

window["app"] = new App();
