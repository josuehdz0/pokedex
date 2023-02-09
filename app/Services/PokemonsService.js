import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokeApi } from "./AxiosService.js";

class PokemonsService{
  async getPokemonByIndex(name) {
    const res = await pokeApi.get(name)
    console.log('get by name', res.data);
    appState.pokemon = new Pokemon(res.data)
    console.log('got the pokemon!',appState.pokemon);
  }
  async getPokemons() {
    const res = await pokeApi.get('?limit=100000&offset=0')
    console.log('get pokemon', res.data.results);
    appState.pokemons = res.data.results
  }

}

export const pokemonsService = new PokemonsService()