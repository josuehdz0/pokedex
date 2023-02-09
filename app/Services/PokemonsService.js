import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokeApi } from "./AxiosService.js";

class PokemonsService{
  async getPokemonByIndex(index) {
    const res = await pokeApi.get(index)
    console.log('get by index', res.data);
    appState.pokemon = new Pokemon(res.data)
    console.log('got the pokemon!',appState.pokemon);
  }
  async getPokemons() {
    const res = await pokeApi.get('pokemon?limit=100000&offset=0')
    console.log('get pokemon', res.data.results);
    appState.pokemons = res.data.results
  }

}

export const pokemonsService = new PokemonsService()