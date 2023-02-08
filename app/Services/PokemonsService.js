import { appState } from "../AppState.js";
import { pokeApi } from "./AxiosService.js";

class PokemonsService{
  async getPokemons() {
    const res = await pokeApi.get('pokemon?limit=100000&offset=0')
    console.log('get pokemon', res.data.results);
    appState.pokemons = res.data.results
  }

}

export const pokemonsService = new PokemonsService()