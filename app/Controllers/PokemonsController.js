import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokemonsService } from "../Services/PokemonsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawPokemons(){
  let template = ''
  appState.pokemons.forEach(p => template += Pokemon.PokemonListTemplate(p))
  setHTML('pokemons',template)
}

export class PokemonsController{
  constructor (){
    this.getPokemons()
    appState.on('pokemons', _drawPokemons)

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