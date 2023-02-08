import { appState } from "../AppState.js";
import { pokeApi } from "./AxiosService.js";

class PokemonsService{
  async getPokemons() {
    const res = await pokeApi.get()
    console.log('get pokemon', res.data);
    appState.
  }

}

export const pokemonsService = new PokemonsService()