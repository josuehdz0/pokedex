import { sandboxPokemonsService } from "../Services/SandBoxPokemonsService.js";
import { Pop } from "../Utils/Pop.js";

export class SandboxPokemonsController{
  constructor(){

  }

  async catchPokemon(){
    try {
      await sandboxPokemonsService.catchPokemon()
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }
}