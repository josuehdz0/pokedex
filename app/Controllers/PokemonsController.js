import { pokemonsService } from "../Services/PokemonsService.js";
import { Pop } from "../Utils/Pop.js";

export class PokemonsController{
  constructor (){

  }

  async getPokemons(){
    try {
      await pokemonsService.getPokemons()
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }
}